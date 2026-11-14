import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { saqById } from '@/data'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body || typeof body.saqId !== 'string' || typeof body.revised !== 'boolean') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }
    if (!saqById(body.saqId)) {
      return NextResponse.json({ error: 'Unknown saqId' }, { status: 404 })
    }
    const row = await db.saqRevision.upsert({
      where: { saqId: body.saqId },
      create: { saqId: body.saqId, revised: body.revised },
      update: { revised: body.revised },
    })
    return NextResponse.json({ ok: true, revision: { saqId: row.saqId, revised: row.revised } })
  } catch (err) {
    console.error('POST /api/progress/saq failed', err)
    return NextResponse.json({ error: 'Failed to update revision' }, { status: 500 })
  }
}
