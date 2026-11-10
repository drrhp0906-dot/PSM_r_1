'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCheck, ClipboardCheck, Eye, EyeOff, RotateCcw } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { allSaqs, chapters, saqsForChapter, saqsForTopic, topicsByChapter } from '@/data'
import { deriveStats, useProgress, useToggleSaq } from '@/lib/progress-hooks'
import { cn } from '@/lib/utils'

type Filter = 'all' | 'pending' | 'revised'

export function SaqView() {
  const [scope, setScope] = useState('all')
  const [filter, setFilter] = useState<Filter>('all')
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})
  const { data } = useProgress()
  const stats = deriveStats(data)
  const toggleSaq = useToggleSaq()

  const pool = useMemo(() => {
    if (scope === 'all') return allSaqs
    if (scope.startsWith('ch:')) return saqsForChapter(scope.slice(3))
    if (scope.startsWith('tp:')) return saqsForTopic(scope.slice(3))
    return allSaqs
  }, [scope])

  const list = useMemo(() => {
    if (filter === 'pending') return pool.filter((s) => !stats.saqRevised[s.id])
    if (filter === 'revised') return pool.filter((s) => stats.saqRevised[s.id])
    return pool
  }, [pool, filter, stats.saqRevised])

  const revisedCount = pool.filter((s) => stats.saqRevised[s.id]).length
  const pct = pool.length ? Math.round((revisedCount / pool.length) * 100) : 0

  return (
    <div className="mx-auto w-full max-w-3xl px-3 py-6 sm:px-4">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">2-Mark Questions</h1>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Self-test: read the question, recall aloud, then reveal the model answer
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <CheckCheck className="h-4 w-4 text-primary" aria-hidden />
          {revisedCount}/{pool.length} revised ({pct}%)
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-3 rounded-xl border bg-card p-3 sm:flex-row sm:items-center">
        <div className="flex-1 space-y-1">
          <Label htmlFor="saq-scope" className="text-xs">
            Question set
          </Label>
          <Select value={scope} onValueChange={setScope}>
            <SelectTrigger id="saq-scope" className="w-full">
              <SelectValue placeholder="Choose scope" />
            </SelectTrigger>
            <SelectContent className="max-h-72">
              <SelectItem value="all">All topics ({allSaqs.length})</SelectItem>
              {chapters.map((ch) => (
                <SelectItem key={ch.id} value={`ch:${ch.id}`}>
                  {ch.shortTitle} — all topics ({saqsForChapter(ch.id).length})
                </SelectItem>
              ))}
              {chapters.map((ch) =>
                topicsByChapter(ch.id).map((t) => (
                  <SelectItem key={t.id} value={`tp:${t.id}`} disabled={saqsForTopic(t.id).length === 0}>
                    • {t.title} ({saqsForTopic(t.id).length})
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          {(
            [
              { key: 'all', label: 'All' },
              { key: 'pending', label: 'Pending' },
              { key: 'revised', label: 'Revised' },
            ] as { key: Filter; label: string }[]
          ).map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={cn(
                'min-h-11 rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                filter === f.key ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {list.map((s, i) => {
          const open = !!revealed[s.id]
          const revised = !!stats.saqRevised[s.id]
          return (
            <Card key={s.id} className={cn(revised && 'border-primary/40')}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium leading-relaxed sm:text-[15px]">
                    <span className="mr-1.5 text-muted-foreground">{i + 1}.</span>
                    {s.question}
                  </p>
                  {revised && (
                    <Badge variant="secondary" className="shrink-0 gap-1">
                      <CheckCheck className="h-3 w-3" aria-hidden /> Revised
                    </Badge>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setRevealed((r) => ({ ...r, [s.id]: !open }))}
                    className="min-h-10"
                    aria-expanded={open}
                  >
                    {open ? <EyeOff className="mr-1.5 h-4 w-4" aria-hidden /> : <Eye className="mr-1.5 h-4 w-4" aria-hidden />}
                    {open ? 'Hide answer' : 'Reveal answer'}
                  </Button>
                  <div className="ml-auto flex items-center gap-2">
                    <Switch
                      id={`rev-${s.id}`}
                      checked={revised}
                      onCheckedChange={(v) => toggleSaq.mutate({ saqId: s.id, revised: v })}
                      aria-label="Mark as revised"
                    />
                    <Label htmlFor={`rev-${s.id}`} className="text-xs text-muted-foreground">
                      Revised
                    </Label>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 rounded-xl border bg-secondary/40 p-3">
                        <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                          <ClipboardCheck className="h-3.5 w-3.5" aria-hidden /> Model answer
                        </p>
                        <ul className="space-y-1.5">
                          {s.answerPoints.map((p, j) => (
                            <li key={j} className="flex gap-2 text-sm leading-relaxed">
                              <span className="font-semibold text-primary">{j + 1}.</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                        {s.detailed && (
                          <p className="mt-2 border-t pt-2 text-[12px] leading-relaxed text-muted-foreground">
                            {s.detailed}
                          </p>
                        )}
                        {s.ref && <p className="mt-2 text-[11px] text-muted-foreground/80">Ref: {s.ref}</p>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {list.length === 0 && (
        <div className="rounded-xl border border-dashed p-8 text-center">
          <RotateCcw className="mx-auto h-6 w-6 text-muted-foreground" aria-hidden />
          <p className="mt-2 text-sm text-muted-foreground">
            {filter === 'pending'
              ? 'Nothing pending — every question here is revised!'
              : 'No questions in this set yet.'}
          </p>
        </div>
      )}
    </div>
  )
}
