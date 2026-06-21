import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET — gammes sauvegardées de l'user
export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Non connecté' }, { status: 401 });

  const scales = await prisma.savedScale.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(scales);
}

// POST — sauvegarder une gamme
export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Non connecté' }, { status: 401 });

  const { root, scaleName } = await req.json();
  if (!root || !scaleName) return NextResponse.json({ error: 'Données manquantes' }, { status: 400 });

  const scale = await prisma.savedScale.upsert({
    where: { userId_root_scaleName: { userId, root, scaleName } },
    create: { userId, root, scaleName },
    update: {},
  });
  return NextResponse.json(scale, { status: 201 });
}

// DELETE — supprimer une gamme sauvegardée
export async function DELETE(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Non connecté' }, { status: 401 });

  const { root, scaleName } = await req.json();
  await prisma.savedScale.deleteMany({ where: { userId, root, scaleName } });
  return NextResponse.json({ ok: true });
}
