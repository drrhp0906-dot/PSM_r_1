'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BookOpenCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  Lightbulb,
  ListChecks,
  Search,
  Sparkles,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Toggle } from '@/components/ui/toggle'
import { chapters, topics, topicsByChapter } from '@/data'
import { useAppStore } from '@/lib/app-store'
import { cn } from '@/lib/utils'

export function NotesView() {
  const notesTopicId = useAppStore((s) => s.notesTopicId)
  const readTopics = useAppStore((s) => s.readTopics)
  const toggleRead = useAppStore((s) => s.toggleRead)
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return topics
    return topics.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.intro.toLowerCase().includes(q) ||
        t.highYield.some((h) => h.toLowerCase().includes(q))
    )
  }, [query])

  const active = useMemo(
    () => topics.find((t) => t.id === notesTopicId) ?? topicsByChapter('health-disease')[0],
    [notesTopicId]
  )
  const idx = topics.findIndex((t) => t.id === active.id)
  const prev = topics[idx - 1]
  const next = topics[idx + 1]

  return (
    <div className="mx-auto w-full max-w-6xl px-3 py-6 sm:px-4">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Study Notes</h1>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Concise, exam-oriented — K Park 27e &amp; IAPSM 3e
          </p>
        </div>
        <div className="relative sm:ml-auto sm:w-72">
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics & pearls..."
            aria-label="Search topics"
            className="pl-8"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
        {/* Topic list */}
        <aside
          aria-label="Topic list"
          className="nice-scroll max-h-64 overflow-y-auto rounded-xl border bg-card p-2 lg:max-h-[calc(100vh-13rem)] lg:sticky lg:top-20"
        >
          {chapters.map((ch) => {
            const list = filtered.filter((t) => t.chapterId === ch.id)
            if (list.length === 0) return null
            return (
              <div key={ch.id} className="mb-2 last:mb-0">
                <p className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {ch.shortTitle}
                </p>
                <ul>
                  {list.map((t) => {
                    const isActive = t.id === active.id
                    return (
                      <li key={t.id}>
                        <button
                          onClick={() => useAppStore.getState().openTopic(t.id)}
                          aria-current={isActive ? 'true' : undefined}
                          className={cn(
                            'flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                            isActive ? 'bg-primary/10 font-medium text-primary' : 'hover:bg-accent'
                          )}
                        >
                          {readTopics[t.id] ? (
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                          ) : (
                            <Circle className="h-4 w-4 shrink-0 text-muted-foreground/50" aria-hidden />
                          )}
                          <span className="truncate">{t.title}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
          {filtered.length === 0 && (
            <p className="px-2 py-4 text-center text-sm text-muted-foreground">No topics match &ldquo;{query}&rdquo;</p>
          )}
        </aside>

        {/* Topic content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {chapters.find((c) => c.id === active.chapterId)?.shortTitle}
                    </Badge>
                    <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{active.title}</h2>
                  </div>
                  <Toggle
                    pressed={!!readTopics[active.id]}
                    onPressedChange={() => toggleRead(active.id)}
                    aria-label={readTopics[active.id] ? 'Mark as not read' : 'Mark as read'}
                    className="min-h-11 gap-1.5 rounded-full px-4 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                    <span className="text-sm">{readTopics[active.id] ? 'Read' : 'Mark read'}</span>
                  </Toggle>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.intro}</p>

                {/* High yield chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {active.highYield.map((h) => (
                    <Badge
                      key={h}
                      variant="outline"
                      className="gap-1 border-amber-300/70 bg-amber-50/70 text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300"
                    >
                      <Sparkles className="h-3 w-3" aria-hidden />
                      {h}
                    </Badge>
                  ))}
                </div>

                {/* Sections */}
                <div className="mt-6 space-y-6">
                  {active.sections.map((sec) => (
                    <section key={sec.heading} aria-label={sec.heading}>
                      <h3 className="mb-2 flex items-center gap-2 text-base font-semibold">
                        <ListChecks className="h-4 w-4 text-primary" aria-hidden /> {sec.heading}
                      </h3>
                      {sec.bullets && (
                        <ul className="ml-1 space-y-1.5">
                          {sec.bullets.map((b, i) => (
                            <li key={i} className="flex gap-2 text-sm leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {sec.table && (
                        <div className="nice-scroll mt-2 max-h-96 overflow-auto rounded-lg border">
                          <Table>
                            {sec.table.caption && (
                              <caption className="sr-only">{sec.table.caption}</caption>
                            )}
                            <TableHeader>
                              <TableRow>
                                {sec.table.headers.map((h) => (
                                  <TableHead key={h} className="bg-secondary/60 font-semibold">
                                    {h}
                                  </TableHead>
                                ))}
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {sec.table.rows.map((row, ri) => (
                                <TableRow key={ri}>
                                  {row.map((cell, ci) => (
                                    <TableCell
                                      key={ci}
                                      className={cn('text-[13px] leading-snug', ci === 0 && 'font-medium')}
                                    >
                                      {cell}
                                    </TableCell>
                                  ))}
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      )}
                      {sec.key && (
                        <div className="mt-3 flex gap-2 rounded-lg border border-amber-300/60 bg-amber-50/70 p-3 dark:border-amber-500/30 dark:bg-amber-500/5">
                          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden />
                          <p className="text-[13px] font-medium leading-relaxed text-amber-900 dark:text-amber-200">
                            {sec.key}
                          </p>
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                <p className="mt-6 border-t pt-3 text-[11px] text-muted-foreground">
                  Reference: {active.ref}
                </p>

                {/* Prev / Next */}
                <div className="mt-4 flex items-center justify-between gap-2">
                  {prev ? (
                    <Button variant="outline" size="sm" onClick={() => useAppStore.getState().openTopic(prev.id)} className="min-h-10">
                      <ChevronLeft className="mr-1 h-4 w-4" aria-hidden /> {prev.title.length > 22 ? 'Previous' : prev.title}
                    </Button>
                  ) : (
                    <span />
                  )}
                  {next ? (
                    <Button variant="outline" size="sm" onClick={() => useAppStore.getState().openTopic(next.id)} className="min-h-10">
                      {next.title.length > 22 ? 'Next' : next.title} <ChevronRight className="ml-1 h-4 w-4" aria-hidden />
                    </Button>
                  ) : (
                    <Button variant="secondary" size="sm" onClick={() => useAppStore.setState({ view: 'mcq' })} className="min-h-10">
                      <BookOpenCheck className="mr-1.5 h-4 w-4" aria-hidden /> Test yourself: MCQs
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
