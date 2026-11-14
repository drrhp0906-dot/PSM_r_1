import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const [attempts, saqs] = await Promise.all([
      db.mcqAttempt.findMany({
        orderBy: { createdAt: 'asc' },
        select: { id: true, mcqId: true, selected: true, correct: true, createdAt: true },
      }),
      db.saqRevision.findMany({
        select: { saqId: true, revised: true, updatedAt: true },
      }),
    ])
    return NextResponse.json({ attempts, saqs })
  } catch (err) {
    console.error('GET /api/progress failed', err)
    return NextResponse.json({ error: 'Failed to load progress' }, { status: 500 })
  }
}

export async function DELETE() {
  try {
    await Promise.all([db.mcqAttempt.deleteMany(), db.saqRevision.deleteMany()])
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('DELETE /api/progress failed', err)
    return NextResponse.json({ error: 'Failed to reset progress' }, { status: 500 })
  }
}
