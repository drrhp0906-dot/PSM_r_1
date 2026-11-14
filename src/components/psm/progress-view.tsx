'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Activity, CalendarCheck, CheckCircle2, Flame, Target, Trash2, XCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { chapters, allMcqs, allSaqs, mcqById, saqById, topicById, topics } from '@/data'
import { deriveStats, useProgress, useResetProgress } from '@/lib/progress-hooks'

export function ProgressView() {
  const { data, isLoading } = useProgress()
  const reset = useResetProgress()
  const stats = deriveStats(data)

  const perTopic = useMemo(() => {
    return topics.map((t) => {
      const tMcqs = allMcqs.filter((m) => m.topicId === t.id)
      const attempted = tMcqs.filter((m) => stats.lastByMcq[m.id] !== undefined)
      const correct = attempted.filter((m) => stats.lastByMcq[m.id]).length
      const tSaqs = allSaqs.filter((s) => s.topicId === t.id)
      const revised = tSaqs.filter((s) => stats.saqRevised[s.id]).length
      return {
        topic: t,
        totalMcq: tMcqs.length,
        attempted: attempted.length,
        correct,
        accuracy: attempted.length ? Math.round((correct / attempted.length) * 100) : null,
        totalSaq: tSaqs.length,
        revised,
      }
    })
  }, [stats.lastByMcq, stats.saqRevised])

  const perChapter = useMemo(
    () =>
      chapters.map((ch) => {
        const rows = perTopic.filter((r) => r.topic.chapterId === ch.id)
        const attempted = rows.reduce((a, r) => a + r.attempted, 0)
        const correct = rows.reduce((a, r) => a + r.correct, 0)
        return {
          ch,
          attempted,
          correct,
          accuracy: attempted ? Math.round((correct / attempted) * 100) : null,
        }
      }),
    [perTopic]
  )

  const streak = useMemo(() => {
    const days = new Set<string>()
    for (const a of data?.attempts ?? []) days.add(a.createdAt.slice(0, 10))
    for (const s of data?.saqs ?? []) days.add(s.updatedAt.slice(0, 10))
    let streak = 0
    const d = new Date()
    const today = d.toISOString().slice(0, 10)
    if (!days.has(today)) d.setDate(d.getDate() - 1)
    for (;;) {
      const key = d.toISOString().slice(0, 10)
      if (days.has(key)) {
        streak++
        d.setDate(d.getDate() - 1)
      } else break
    }
    return streak
  }, [data])

  return (
    <div className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">My Progress</h1>
          <p className="text-xs text-muted-foreground sm:text-sm">Everything auto-saves to your account-free local record</p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size="sm" className="min-h-10 text-destructive hover:text-destructive">
              <Trash2 className="mr-1.5 h-4 w-4" aria-hidden /> Reset progress
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Reset all progress?</AlertDialogTitle>
              <AlertDialogDescription>
                This permanently deletes every MCQ attempt and 2-marker revision mark. This cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => reset.mutate()}
                className="bg-destructive text-white hover:bg-destructive/90"
              >
                Yes, reset everything
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {isLoading ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <Skeleton className="h-24" />
          <Skeleton className="h-24" />
          <Skeleton className="h-24" />
          <Skeleton className="h-24" />
        </div>
      ) : (
        <>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <StatTile
              icon={<Target className="h-4 w-4" aria-hidden />}
              label="MCQs attempted"
              value={`${stats.uniqueAttempted}/${allMcqs.length}`}
            />
            <StatTile
              icon={<Activity className="h-4 w-4" aria-hidden />}
              label="Accuracy (unique)"
              value={stats.accuracy === null ? '—' : `${stats.accuracy}%`}
            />
            <StatTile
              icon={<CheckCircle2 className="h-4 w-4" aria-hidden />}
              label="2-markers revised"
              value={`${Object.values(stats.saqRevised).filter(Boolean).length}/${allSaqs.length}`}
            />
            <StatTile
              icon={<Flame className="h-4 w-4" aria-hidden />}
              label="Study streak"
              value={streak > 0 ? `${streak} day${streak > 1 ? 's' : ''}` : 'Start today'}
            />
          </div>


          <h2 className="mb-3 mt-8 text-lg font-semibold">Accuracy by chapter</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {perChapter.map(({ ch, accuracy, attempted, correct }) => (
              <motion.div key={ch.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">{ch.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {accuracy === null ? (
                      <p className="text-sm text-muted-foreground">No attempts yet</p>
                    ) : (
                      <>
                        <div className="mb-1.5 flex items-baseline justify-between">
                          <span className="text-2xl font-bold">{accuracy}%</span>
                          <span className="text-xs text-muted-foreground">
                            {correct}/{attempted} correct
                          </span>
                        </div>
                        <Progress value={accuracy} className="h-2" aria-label={`${ch.shortTitle} accuracy`} />
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>


          <h2 className="mb-3 mt-8 text-lg font-semibold">Topic-wise breakdown</h2>
          <Card>
            <CardContent className="p-0">
              <div className="nice-scroll max-h-96 overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-secondary/80 backdrop-blur">
                    <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                      <th className="px-4 py-2.5 font-semibold">Topic</th>
                      <th className="px-3 py-2.5 text-center font-semibold">MCQ</th>
                      <th className="px-3 py-2.5 text-center font-semibold">Accuracy</th>
                      <th className="px-3 py-2.5 text-center font-semibold">2-mk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {perTopic.map((r) => (
                      <tr key={r.topic.id} className="border-t">
                        <td className="max-w-[220px] truncate px-4 py-2.5 font-medium">{r.topic.title}</td>
                        <td className="px-3 py-2.5 text-center text-muted-foreground">
                          {r.attempted}/{r.totalMcq}
                        </td>
                        <td className="px-3 py-2.5 text-center">
                          {r.accuracy === null ? (
                            <span className="text-muted-foreground">—</span>
                          ) : (
                            <Badge
                              variant="outline"
                              className={
                                r.accuracy >= 80
                                  ? 'border-emerald-500/50 text-emerald-700 dark:text-emerald-400'
                                  : r.accuracy >= 50
                                    ? 'border-amber-500/50 text-amber-700 dark:text-amber-400'
                                    : 'border-destructive/50 text-destructive'
                              }
                            >
                              {r.accuracy}%
                            </Badge>
                          )}
                        </td>
                        <td className="px-3 py-2.5 text-center text-muted-foreground">
                          {r.revised}/{r.totalSaq}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>


          <h2 className="mb-3 mt-8 text-lg font-semibold">Recent activity</h2>
          <Card>
            <CardContent className="p-0">
              {stats.recentAttempts.length === 0 ? (
                <p className="flex items-center justify-center gap-2 p-6 text-sm text-muted-foreground">
                  <CalendarCheck className="h-4 w-4" aria-hidden /> No attempts yet — start with a 10-question
                  drill!
                </p>
              ) : (
                <ul className="nice-scroll max-h-80 divide-y overflow-y-auto">
                  {stats.recentAttempts.map((a) => {
                    const m = mcqById(a.mcqId)
                    return (
                      <li key={a.id} className="flex items-start gap-3 px-4 py-3">
                        {a.correct ? (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                        ) : (
                          <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden />
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm">{m?.question ?? a.mcqId}</p>
                          <p className="text-[11px] text-muted-foreground">
                            {m ? topicById(m.topicId)?.title : ''} ·{' '}
                            {new Date(a.createdAt).toLocaleString(undefined, {
                              day: 'numeric',
                              month: 'short',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              )}
            </CardContent>
          </Card>


          {Object.values(stats.saqRevised).some(Boolean) && (
            <>
              <h2 className="mb-3 mt-8 text-lg font-semibold">Revised 2-markers</h2>
              <Card>
                <CardContent className="p-0">
                  <ul className="nice-scroll max-h-72 divide-y overflow-y-auto">
                    {Object.entries(stats.saqRevised)
                      .filter(([, v]) => v)
                      .map(([id]) => {
                        const s = saqById(id)
                        return (
                          <li key={id} className="flex items-center gap-3 px-4 py-2.5">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                            <span className="truncate text-sm">{s?.question ?? id}</span>
                          </li>
                        )
                      })}
                  </ul>
                </CardContent>
              </Card>
            </>
          )}
        </>
      )}
    </div>
  )
}

function StatTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          {icon}
          <p className="truncate text-xs">{label}</p>
        </div>
        <p className="mt-1.5 text-lg font-bold sm:text-xl">{value}</p>
      </CardContent>
    </Card>
  )
}
