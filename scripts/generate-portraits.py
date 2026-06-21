#!/usr/bin/env python3
"""
Génère des portraits SVG riso pour chaque guitariste.
Pipeline : Wikipedia API → photo → quantification riso (4 couleurs) → vtracer → SVG
"""

import json
import os
import re
import subprocess
import sys
import tempfile
import time
from pathlib import Path

import requests
from PIL import Image, ImageFilter

# ── Palette riso ──────────────────────────────────────────────────────────────
RISO_PALETTE = {
    "paper": (251, 250, 247),   # #fbfaf7
    "ink":   (20,  20,  20),    # #141414
    "pink":  (246, 168, 210),   # #f6a8d2
    "cyan":  (91,  200, 236),   # #5bc8ec
}
PALETTE_RGB = list(RISO_PALETTE.values())  # ordre : paper, ink, pink, cyan

# ── Chemins ───────────────────────────────────────────────────────────────────
REPO = Path(__file__).parent.parent
DATA_DIR  = REPO / "src" / "data" / "guitarists"
OUT_DIR   = REPO / "public" / "guitarists"
LOG_FILE  = REPO / "scripts" / "portraits-log.json"

OUT_DIR.mkdir(parents=True, exist_ok=True)

# ── Correspondances slug → titre Wikipedia ────────────────────────────────────
WIKI_OVERRIDES = {
    "bb-king":             "B.B. King",
    "al-di-meola":         "Al Di Meola",
    "t-bone-walker":       "T-Bone Walker",
    "joao-gilberto":       "João Gilberto",
    "paco-de-lucia":       "Paco de Lucía",
    "charlie-christian":   "Charlie Christian",
    "lage-lund":           "Lage Lund",
    "ed-bickert":          "Ed Bickert",
    "joe-diorio":          "Joe Diorio",
    "oscar-aleman":        "Oscar Aleman",
    "gilad-hekselman":     "Gilad Hekselman",
    "romero-lubambo":      "Romero Lubambo",
    "sylvain-luc":         "Sylvain Luc",
    "toninho-horta":       "Toninho Horta",
    "yamandu-costa":       "Yamandú Costa",
    "bireli-lagrene":      "Biréli Lagrène",
    "stochelo-rosenberg":  "Stochelo Rosenberg",
    "joscho-stephan":      "Joscho Stephan",
    "jonathan-kreisberg":  "Jonathan Kreisberg",
    "baden-powell":        "Baden Powell de Aquino",
    "eric-johnson":        "Eric Johnson (guitarist)",
    "jim-hall":            "Jim Hall (musician)",
    "john-abercrombie":    "John Abercrombie (guitarist)",
    "john-mclaughlin":     "John McLaughlin (musician)",
    "martin-taylor":       "Martin Taylor (guitarist)",
    "peter-bernstein":     "Peter Bernstein (guitarist)",
    "peter-green":         "Peter Green (musician)",
    "slash":               "Slash (musician)",
}


def slug_to_wiki_title(slug: str) -> str:
    if slug in WIKI_OVERRIDES:
        return WIKI_OVERRIDES[slug]
    return " ".join(w.capitalize() for w in slug.split("-"))


HEADERS = {
    "User-Agent": "ScaleFinder/1.0 (https://github.com/sohanwebstudio-cloud/Scale-Finder; sohanwebstudio@gmail.com) python-requests/2"
}


def fetch_wiki_image(title: str, size: int = 400) -> bytes | None:
    url = "https://en.wikipedia.org/w/api.php"
    params = {
        "action": "query",
        "titles": title,
        "prop": "pageimages",
        "pithumbsize": size,
        "format": "json",
        "redirects": 1,
    }
    try:
        r = requests.get(url, params=params, headers=HEADERS, timeout=10)
        r.raise_for_status()
        pages = r.json()["query"]["pages"]
        page = next(iter(pages.values()))
        thumb_url = page.get("thumbnail", {}).get("source")
        if not thumb_url:
            return None
        img_r = requests.get(thumb_url, headers=HEADERS, timeout=15)
        img_r.raise_for_status()
        return img_r.content
    except Exception as e:
        print(f"  ⚠ fetch échoué pour «{title}»: {e}")
        return None


def nearest_riso(pixel: tuple) -> tuple:
    """Retourne la couleur riso la plus proche en distance euclidienne."""
    r, g, b = pixel[:3]
    best = min(PALETTE_RGB, key=lambda c: (c[0]-r)**2 + (c[1]-g)**2 + (c[2]-b)**2)
    return best


def quantize_to_riso(img: Image.Image, target_size: int = 300) -> Image.Image:
    """Redimensionne et quantifie l'image sur la palette riso 4 couleurs."""
    # Ratio portrait
    w, h = img.size
    if h > w:
        new_h = target_size
        new_w = int(w * target_size / h)
    else:
        new_w = target_size
        new_h = int(h * target_size / w)

    img = img.convert("RGB").resize((new_w, new_h), Image.LANCZOS)

    # Léger flou avant quantification → réduit le bruit
    img = img.filter(ImageFilter.GaussianBlur(radius=1))

    # Quantification pixel par pixel vers palette riso
    pixels = list(img.getdata())
    mapped = [nearest_riso(p) for p in pixels]
    out = Image.new("RGB", img.size)
    out.putdata(mapped)
    return out


def image_to_svg(img: Image.Image, out_path: Path) -> bool:
    """Vectorise l'image quantifiée avec vtracer."""
    vtracer = Path.home() / ".cargo" / "bin" / "vtracer"
    if not vtracer.exists():
        # Cherche dans le PATH
        result = subprocess.run(["which", "vtracer"], capture_output=True, text=True)
        if result.returncode != 0:
            print("  ✗ vtracer introuvable")
            return False
        vtracer = result.stdout.strip()

    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tmp:
        tmp_path = tmp.name
        img.save(tmp_path)

    try:
        result = subprocess.run(
            [
                str(vtracer),
                "--input", tmp_path,
                "--output", str(out_path),
                "--colormode", "color",
                "--color_precision", "6",
                "--filter_speckle", "8",
                "--corner_threshold", "60",
            ],
            capture_output=True,
            text=True,
            timeout=60,
        )
        return result.returncode == 0
    except Exception as e:
        print(f"  ✗ vtracer error: {e}")
        return False
    finally:
        os.unlink(tmp_path)


def riso_colors_to_hex() -> dict:
    return {
        RISO_PALETTE["paper"]: "#fbfaf7",
        RISO_PALETTE["ink"]:   "#141414",
        RISO_PALETTE["pink"]:  "#f6a8d2",
        RISO_PALETTE["cyan"]:  "#5bc8ec",
    }


def fix_svg_colors(svg_path: Path):
    """Remplace les couleurs RGB vtracer par les hex riso exactes."""
    text = svg_path.read_text()
    color_map = riso_colors_to_hex()

    for rgb_tuple, hex_val in color_map.items():
        r, g, b = rgb_tuple
        rgb_str = f"rgb({r}, {g}, {b})"
        text = text.replace(rgb_str, hex_val)
        # Variante sans espaces
        text = text.replace(f"rgb({r},{g},{b})", hex_val)

    # Conversion hex vtracer (peut varier légèrement)
    def replace_hex(match):
        h = match.group(0).lstrip("#").upper()
        try:
            rr = int(h[0:2], 16)
            gg = int(h[2:4], 16)
            bb = int(h[4:6], 16)
            nearest = nearest_riso((rr, gg, bb))
            return color_map.get(nearest, match.group(0))
        except Exception:
            return match.group(0)

    text = re.sub(r"#[0-9a-fA-F]{6}", replace_hex, text)
    svg_path.write_text(text)


def process_guitarist(slug: str, name: str) -> str:
    out_path = OUT_DIR / f"{slug}.svg"

    if out_path.exists():
        return "skipped"

    wiki_title = slug_to_wiki_title(slug)
    print(f"  🔍 Wikipedia: «{wiki_title}»")

    img_bytes = fetch_wiki_image(wiki_title)
    if not img_bytes:
        return "no_image"

    try:
        from io import BytesIO
        img = Image.open(BytesIO(img_bytes))
    except Exception as e:
        print(f"  ✗ Impossible d'ouvrir l'image: {e}")
        return "error"

    quantized = quantize_to_riso(img)
    ok = image_to_svg(quantized, out_path)
    if not ok:
        return "vtracer_error"

    fix_svg_colors(out_path)
    return "ok"


def main():
    json_files = sorted(DATA_DIR.glob("*.json"))
    json_files = [f for f in json_files if f.name != "index.ts"]

    results = {}
    total = len(json_files)

    # Filtre : si des slugs passés en argument → traiter uniquement ceux-là
    filter_slugs = set(sys.argv[1:])

    print(f"🎸 Génération de {total} portraits SVG riso\n")

    for i, json_path in enumerate(json_files, 1):
        data = json.loads(json_path.read_text())
        slug = data["slug"]
        name = data["name"]

        if filter_slugs and slug not in filter_slugs:
            continue

        print(f"[{i:3}/{total}] {name}")
        status = process_guitarist(slug, name)
        results[slug] = status
        print(f"  → {status}")

        # Pause pour ne pas spammer Wikipedia
        if status not in ("skipped", "no_image"):
            time.sleep(0.3)

    # Rapport final
    LOG_FILE.write_text(json.dumps(results, indent=2, ensure_ascii=False))

    ok_count    = sum(1 for v in results.values() if v == "ok")
    skip_count  = sum(1 for v in results.values() if v == "skipped")
    err_count   = sum(1 for v in results.values() if v not in ("ok", "skipped"))

    print(f"\n✅ OK: {ok_count}  ⏭ Skipped: {skip_count}  ❌ Erreurs: {err_count}")
    print(f"Log → {LOG_FILE}")


if __name__ == "__main__":
    main()
