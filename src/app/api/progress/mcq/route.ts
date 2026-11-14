import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { mcqById } from '@/data'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body || typeof body.mcqId !== 'string' || typeof body.selected !== 'number') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }
    const mcq = mcqById(body.mcqId)
    if (!mcq) {
      return NextResponse.json({ error: 'Unknown mcqId' }, { status: 404 })
    }
    const correct =
      typeof body.correct === 'boolean' ? body.correct : body.selected === mcq.answer

    const attempt = await db.mcqAttempt.create({
      data: {
        mcqId: mcq.id,
        selected: body.selected,
        correct,
      },
    })
    return NextResponse.json({ ok: true, attempt })
  } catch (err) {
    console.error('POST /api/progress/mcq failed', err)
    return NextResponse.json({ error: 'Failed to record attempt' }, { status: 500 })
  }
}
