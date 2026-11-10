'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  BookOpenCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileQuestion,
  GraduationCap,
  Sparkles,
  Target,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { chapters, topicsByChapter, topics, allMcqs, allSaqs } from '@/data'
import { deriveStats, useProgress } from '@/lib/progress-hooks'
import { useAppStore } from '@/lib/app-store'
import { cn } from '@/lib/utils'

export function HomeView() {
  const setView = useAppStore((s) => s.setView)
  const openTopic = useAppStore((s) => s.openTopic)
  const readTopics = useAppStore((s) => s.readTopics)
  const { data, isLoading } = useProgress()
  const stats = deriveStats(data)

  const readCount = topics.filter((t) => readTopics[t.id]).length

  /** deterministic "pearl of the day" — no hydration mismatch */
  const pearl = useMemo(() => {
    const all = topics.flatMap((t) => t.highYield.map((h) => ({ topic: t.title, text: h })))
    const day = Math.floor(Date.now() / 86400000)
    return all[day % all.length]
  }, [])

  return (
    <div className="mx-auto w-full max-w-6xl px-3 py-6 sm:px-4 sm:py-8">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-2xl border bg-gradient-to-br from-primary/10 via-secondary/30 to-background p-5 sm:p-8"
      >
        <Badge variant="secondary" className="mb-3 gap-1">
          <GraduationCap className="h-3.5 w-3.5" aria-hidden /> MBBS 3rd Year · Part I
        </Badge>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Preventive &amp; Social Medicine, made revisable.
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Crisp K Park–aligned notes, {allMcqs.length}+ exam-style MCQs and {allSaqs.length} two-mark questions
          for <span className="font-medium text-foreground">Concept of Health &amp; Disease</span> and{' '}
          <span className="font-medium text-foreground">Environment</span> — with progress tracking.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button size="lg" onClick={() => setView('mcq')} className="min-h-11">
            <FileQuestion className="mr-2 h-4 w-4" aria-hidden /> Practice MCQs
          </Button>
          <Button size="lg" variant="outline" onClick={() => setView('saq')} className="min-h-11">
            <ClipboardCheck className="mr-2 h-4 w-4" aria-hidden /> Revise 2-Markers
          </Button>
          <Button size="lg" variant="ghost" onClick={() => setView('notes')} className="min-h-11">
            <BookOpenCheck className="mr-2 h-4 w-4" aria-hidden /> Read Notes
          </Button>
        </div>
      </motion.section>

      {/* Stats */}
      <section aria-label="Your study stats" className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {isLoading ? (
          <>
            <Skeleton className="h-28" />
            <Skeleton className="h-28" />
            <Skeleton className="h-28" />
          </>
        ) : (
          <>
            <StatCard
              icon={<Target className="h-4 w-4" aria-hidden />}
              label="MCQ accuracy (unique)"
              value={stats.accuracy === null ? '—' : `${stats.accuracy}%`}
              sub={`${stats.correctUnique} correct of ${stats.uniqueAttempted} attempted`}
            />
            <StatCard
              icon={<ClipboardCheck className="h-4 w-4" aria-hidden />}
              label="2-markers revised"
              value={`${Object.values(stats.saqRevised).filter(Boolean).length}/${allSaqs.length}`}
              sub="Mark questions as you self-test"
            />
            <StatCard
              icon={<CheckCircle2 className="h-4 w-4" aria-hidden />}
              label="Topics read"
              value={`${readCount}/${topics.length}`}
              sub="Mark each topic after reading"
            />
          </>
        )}
      </section>

      {/* Chapters */}
      <section aria-label="Syllabus" className="mt-8">
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Syllabus</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {chapters.map((ch) => {
            const chTopics = topicsByChapter(ch.id)
            const chRead = chTopics.filter((t) => readTopics[t.id]).length
            const pct = Math.round((chRead / chTopics.length) * 100)
            return (
              <motion.div key={ch.id} whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-base sm:text-lg">{ch.title}</CardTitle>
                        <CardDescription className="mt-1 line-clamp-2 text-xs sm:text-sm">
                          {ch.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="shrink-0">
                        {chTopics.length} topics
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3 flex items-center gap-2">
                      <Progress value={pct} className="h-2" aria-label={`${pct}% of topics read`} />
                      <span className="shrink-0 text-xs text-muted-foreground">{pct}% read</span>
                    </div>
                    <ul className="mb-4 space-y-1">
                      {chTopics.slice(0, 4).map((t) => (
                        <li key={t.id}>
                          <button
                            onClick={() => openTopic(t.id)}
                            className="group flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <span className="flex min-w-0 items-center gap-2">
                              <CheckCircle2
                                className={cn(
                                  'h-4 w-4 shrink-0',
                                  readTopics[t.id] ? 'text-primary' : 'text-muted-foreground/40'
                                )}
                                aria-hidden
                              />
                              <span className="truncate">{t.title}</span>
                            </span>
                            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden />
                          </button>
                        </li>
                      ))}
                    </ul>
                    {chTopics.length > 4 && (
                      <button
                        onClick={() => openTopic(chTopics[4].id)}
                        className="mb-4 text-xs font-medium text-primary hover:underline"
                      >
                        + {chTopics.length - 4} more topics
                      </button>
                    )}
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="secondary" onClick={() => openTopic(chTopics[0].id)}>
                        <BookOpenCheck className="mr-1.5 h-4 w-4" aria-hidden /> Notes
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setView('mcq')}>
                        <FileQuestion className="mr-1.5 h-4 w-4" aria-hidden /> MCQs
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setView('saq')}>
                        <ClipboardCheck className="mr-1.5 h-4 w-4" aria-hidden /> 2-Markers
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Pearl of the day */}
      <Card className="mt-8 border-amber-300/60 bg-amber-50/60 dark:border-amber-500/30 dark:bg-amber-500/5">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
            <Sparkles className="h-4 w-4" aria-hidden /> High-yield pearl of the day
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm font-medium">{pearl.text}</p>
          <p className="mt-1 text-xs text-muted-foreground">{pearl.topic}</p>
        </CardContent>
      </Card>
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode
  label: string
  value: string
  sub: string
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs text-muted-foreground">{label}</p>
          <p className="text-xl font-bold leading-tight">{value}</p>
          <p className="truncate text-[11px] text-muted-foreground">{sub}</p>
        </div>
      </CardContent>
    </Card>
  )
}
