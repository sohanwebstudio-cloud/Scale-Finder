import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function getSession() {
  return auth.api.getSession({ headers: await headers() });
}

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Non connecté' }, { status: 401 });

  const scales = await prisma.savedScale.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(scales);
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Non connecté' }, { status: 401 });

  const { root, scaleName } = await req.json();
  if (!root || !scaleName)
    return NextResponse.json({ error: 'Données manquantes' }, { status: 400 });

  const scale = await prisma.savedScale.upsert({
    where: { userId_root_scaleName: { userId: session.user.id, root, scaleName } },
    create: { userId: session.user.id, root, scaleName },
    update: {},
  });
  return NextResponse.json(scale, { status: 201 });
}

export async function DELETE(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Non connecté' }, { status: 401 });

  const { root, scaleName } = await req.json();
  await prisma.savedScale.deleteMany({ where: { userId: session.user.id, root, scaleName } });
  return NextResponse.json({ ok: true });
}
