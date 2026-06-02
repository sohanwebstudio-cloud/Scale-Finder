/**
 * Mapping mode → palette de couleurs.
 * Les couleurs sont choisies pour évoquer le caractère du mode.
 */

import type { ColorPair, ModeKey } from '@/types';

export const MODE_COLORS: Record<ModeKey, ColorPair> = {
  ionian: { bg: '#E6F1FB', text: '#0C447C', darkBg: '#0C447C', darkText: '#B5D4F4' },
  dorian: { bg: '#E1F5EE', text: '#085041', darkBg: '#0F6E56', darkText: '#9FE1CB' },
  phrygian: { bg: '#FBEAF0', text: '#72243E', darkBg: '#72243E', darkText: '#F4C0D1' },
  lydian: { bg: '#EEEDFE', text: '#3C3489', darkBg: '#3C3489', darkText: '#CECBF6' },
  mixolydian: { bg: '#FAEEDA', text: '#633806', darkBg: '#633806', darkText: '#FAC775' },
  aeolian: { bg: '#F1EFE8', text: '#444441', darkBg: '#444441', darkText: '#D3D1C7' },
  locrian: { bg: '#FCEBEB', text: '#791F1F', darkBg: '#791F1F', darkText: '#F7C1C1' },
  altered: { bg: '#FAECE7', text: '#712B13', darkBg: '#712B13', darkText: '#F5C4B3' },
  lydian_dom: { bg: '#EEEDFE', text: '#26215C', darkBg: '#26215C', darkText: '#AFA9EC' },
  half_whole: { bg: '#FAEEDA', text: '#412402', darkBg: '#412402', darkText: '#FAC775' },
  pentatonic_minor: { bg: '#E1F5EE', text: '#04342C', darkBg: '#04342C', darkText: '#9FE1CB' },
  pentatonic_major: { bg: '#FAEEDA', text: '#854F0B', darkBg: '#854F0B', darkText: '#FAC775' },
  blues_minor: { bg: '#FCEBEB', text: '#501313', darkBg: '#501313', darkText: '#F7C1C1' },
  blues_major: { bg: '#FAECE7', text: '#4A1B0C', darkBg: '#4A1B0C', darkText: '#F5C4B3' },
  // Mineur mélodique et modes
  melodic_minor: { bg: '#E4F3EC', text: '#0E5233', darkBg: '#0E5233', darkText: '#8FD9B5' },
  lydian_aug:    { bg: '#F0EFFE', text: '#2D1B8B', darkBg: '#2D1B8B', darkText: '#C3BDFA' },
  mixolydian_b6: { bg: '#FEF3E2', text: '#7A4500', darkBg: '#7A4500', darkText: '#FAD591' },
  locrian_2:     { bg: '#FDF0F0', text: '#6B1A1A', darkBg: '#6B1A1A', darkText: '#F5AAAA' },
  // Mineur harmonique
  harmonic_minor: { bg: '#EEF1FB', text: '#1A2F7A', darkBg: '#1A2F7A', darkText: '#A8BAEA' },
  phrygian_dom:   { bg: '#FDE8F5', text: '#6B0F54', darkBg: '#6B0F54', darkText: '#F0A8D8' },
  // Symétriques
  whole_tone:  { bg: '#F5FBE4', text: '#2E5C05', darkBg: '#2E5C05', darkText: '#C3E880' },
  whole_half:  { bg: '#F7EDFC', text: '#531A72', darkBg: '#531A72', darkText: '#DCB0F5' },
  // Bebop
  bebop_dom: { bg: '#FFF8E1', text: '#5C3D00', darkBg: '#5C3D00', darkText: '#FFD880' },
  // Arpeggios
  arp_maj:   { bg: '#E8F4FD', text: '#0B3D6B', darkBg: '#0B3D6B', darkText: '#A8D8F5' },
  arp_min:   { bg: '#EDEDED', text: '#2A2A2A', darkBg: '#2A2A2A', darkText: '#C8C8C8' },
  arp_dom7:  { bg: '#FDF0DC', text: '#5C3500', darkBg: '#5C3500', darkText: '#F9C870' },
  arp_maj7:  { bg: '#EAF0FF', text: '#1A2E7A', darkBg: '#1A2E7A', darkText: '#AABCF5' },
  arp_m7:    { bg: '#E2F4ED', text: '#0A4A2C', darkBg: '#0A4A2C', darkText: '#97D8B5' },
  arp_m7b5:  { bg: '#FCEAEA', text: '#6B1A1A', darkBg: '#6B1A1A', darkText: '#F5A8A8' },
  arp_dim7:  { bg: '#F3EDFB', text: '#4A1270', darkBg: '#4A1270', darkText: '#CFA8ED' },
  arp_mmaj7: { bg: '#E4F5F0', text: '#0D4A38', darkBg: '#0D4A38', darkText: '#90D5BC' },
};

export function getModeColors(modeKey: ModeKey, isDark = false): { bg: string; text: string } {
  const c = MODE_COLORS[modeKey];
  return isDark ? { bg: c.darkBg, text: c.darkText } : { bg: c.bg, text: c.text };
}
