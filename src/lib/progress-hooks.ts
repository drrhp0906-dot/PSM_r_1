'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from '@/hooks/use-toast'

export interface AttemptRecord {
  id: string
  mcqId: string
  selected: number
  correct: boolean
  createdAt: string
}

export interface SaqRecord {
  saqId: string
  revised: boolean
  updatedAt: string
}

export interface ProgressData {
  attempts: AttemptRecord[]
  saqs: SaqRecord[]
}

export interface ProgressStats {
  /** latest result per mcq: correct or wrong */
  lastByMcq: Record<string, boolean>
  /** has the student attempted this mcq before (ever) */
  attemptedByMcq: Record<string, true>
  /** saqId -> revised state */
  saqRevised: Record<string, boolean>
  totalAttempts: number
  uniqueAttempted: number
  correctUnique: number
  accuracy: number | null
  recentAttempts: AttemptRecord[]
}

export function deriveStats(data: ProgressData | undefined): ProgressStats {
  const lastByMcq: Record<string, boolean> = {}
  const attemptedByMcq: Record<string, true> = {}
  const saqRevised: Record<string, boolean> = {}
  const attempts = data?.attempts ?? []
  for (const a of attempts) {
    lastByMcq[a.mcqId] = a.correct
    attemptedByMcq[a.mcqId] = true
  }
  let correctUnique = 0
  for (const v of Object.values(lastByMcq)) if (v) correctUnique++
  for (const s of data?.saqs ?? []) saqRevised[s.saqId] = s.revised
  const uniqueAttempted = Object.keys(lastByMcq).length
  return {
    lastByMcq,
    attemptedByMcq,
    saqRevised,
    totalAttempts: attempts.length,
    uniqueAttempted,
    correctUnique,
    accuracy: uniqueAttempted > 0 ? Math.round((correctUnique / uniqueAttempted) * 100) : null,
    recentAttempts: [...attempts].reverse().slice(0, 12),
  }
}

async function fetchProgress(): Promise<ProgressData> {
  const res = await fetch('/api/progress')
  if (!res.ok) throw new Error('Failed to load progress')
  return res.json()
}

export function useProgress() {
  return useQuery<ProgressData>({
    queryKey: ['progress'],
    queryFn: fetchProgress,
  })
}

export function useRecordMcq() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: async (p: { mcqId: string; selected: number }) => {
      const res = await fetch('/api/progress/mcq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(p),
      })
      if (!res.ok) throw new Error('Failed to record attempt')
      return res.json()
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['progress'] })
    },
    onError: () => {
      toast({
        title: 'Could not save your answer',
        description: 'Progress may not be recorded. Check your connection.',
        variant: 'destructive',
      })
    },
  })
}

export function useToggleSaq() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: async (p: { saqId: string; revised: boolean }) => {
      const res = await fetch('/api/progress/saq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(p),
      })
      if (!res.ok) throw new Error('Failed to update revision')
      return res.json()
    },
    onSuccess: (_d, vars) => {
      qc.invalidateQueries({ queryKey: ['progress'] })
      toast({
        title: vars.revised ? 'Marked as revised' : 'Removed from revised',
        description: vars.revised
          ? 'Great! Keep the streak going.'
          : 'Moved back to pending revision.',
      })
    },
    onError: () => {
      toast({
        title: 'Could not update',
        description: 'Please try again.',
        variant: 'destructive',
      })
    },
  })
}

export function useResetProgress() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/progress', { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to reset')
      return res.json()
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['progress'] })
      toast({ title: 'Progress reset', description: 'A clean slate — happy studying!' })
    },
    onError: () => {
      toast({
        title: 'Could not reset progress',
        description: 'Please try again.',
        variant: 'destructive',
      })
    },
  })
}
