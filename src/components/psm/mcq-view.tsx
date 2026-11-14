'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Eraser,
  FileQuestion,
  Lightbulb,
  RotateCcw,
  Trophy,
  XCircle,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { allMcqs, chapters, mcqsForChapter, mcqsForTopic, shuffle, topicsByChapter } from '@/data'
import type { Mcq } from '@/data'
import { deriveStats, useProgress, useRecordMcq } from '@/lib/progress-hooks'
import { useAppStore } from '@/lib/app-store'
import { cn } from '@/lib/utils'

const LETTERS = ['A', 'B', 'C', 'D']

interface PreparedQuestion {
  mcq: Mcq
  perm: number[]
  correctDisplay: number
}

function prepare(pool: Mcq[], n: number, shuffleOptions: boolean): PreparedQuestion[] {
  return shuffle(pool)
    .slice(0, Math.min(n, pool.length))
    .map((mcq) => {
      const perm = shuffleOptions ? shuffle([0, 1, 2, 3]) : [0, 1, 2, 3]
      return { mcq, perm, correctDisplay: perm.indexOf(mcq.answer) }
    })
}

export function McqView() {
  const [phase, setPhase] = useState<'setup' | 'quiz' | 'result'>('setup')
  const [scope, setScope] = useState<string>('all')
  const [count, setCount] = useState<string>('10')
  const [shuffleOptions, setShuffleOptions] = useState(true)
  const [onlyUnattempted, setOnlyUnattempted] = useState(false)
  const [questions, setQuestions] = useState<PreparedQuestion[]>([])
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const { data } = useProgress()
  const stats = deriveStats(data)
  const recordMcq = useRecordMcq()
  const setMcqScope = useAppStore((s) => s.setMcqScope)

  const pool = useMemo(() => {
    if (scope === 'all') return allMcqs
    if (scope.startsWith('ch:')) return mcqsForChapter(scope.slice(3))
    if (scope.startsWith('tp:')) return mcqsForTopic(scope.slice(3))
    return allMcqs
  }, [scope])

  const available = useMemo(
    () => (onlyUnattempted ? pool.filter((m) => !stats.attemptedByMcq[m.id]) : pool),
    [pool, onlyUnattempted, stats.attemptedByMcq]
  )

  const startQuiz = () => {
    const source = available.length >= 1 ? available : pool
    setAnswers({})
    setQuestions(prepare(source, count === 'all' ? source.length : parseInt(count, 10), shuffleOptions))
    setPhase('quiz')
  }

  if (phase === 'setup') {
    return (
      <div className="mx-auto w-full max-w-2xl px-3 py-6 sm:px-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileQuestion className="h-5 w-5 text-primary" aria-hidden /> MCQ Practice
            </CardTitle>
            <CardDescription>
              {allMcqs.length} questions across 15 topics · instant explanations, progress auto-saved
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="mcq-scope">Question set</Label>
                <Select
                  value={scope}
                  onValueChange={(v) => {
                    setScope(v)
                    setMcqScope(v)
                  }}
                >
                  <SelectTrigger id="mcq-scope" className="w-full">
                    <SelectValue placeholder="Choose scope" />
                  </SelectTrigger>
                  <SelectContent className="max-h-72">
                    <SelectItem value="all">All topics ({allMcqs.length})</SelectItem>
                    {chapters.map((ch) => (
                      <SelectItem key={ch.id} value={`ch:${ch.id}`} disabled={mcqsForChapter(ch.id).length === 0}>
                        {ch.shortTitle} — all topics ({mcqsForChapter(ch.id).length})
                      </SelectItem>
                    ))}
                    {chapters.map((ch) =>
                      topicsByChapter(ch.id).map((t) => (
                        <SelectItem key={t.id} value={`tp:${t.id}`} disabled={mcqsForTopic(t.id).length === 0}>
                          • {t.title} ({mcqsForTopic(t.id).length})
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mcq-count">Number of questions</Label>
                <Select value={count} onValueChange={setCount}>
                  <SelectTrigger id="mcq-count" className="w-full">
                    <SelectValue placeholder="Pick count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 — quick drill</SelectItem>
                    <SelectItem value="10">10 — standard</SelectItem>
                    <SelectItem value="20">20 — long set</SelectItem>
                    <SelectItem value="all">Full pool</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <Label htmlFor="shuffle-opts" className="text-sm font-medium">
                  Shuffle options
                </Label>
                <p className="text-xs text-muted-foreground">Randomize A–D order</p>
              </div>
              <Switch id="shuffle-opts" checked={shuffleOptions} onCheckedChange={setShuffleOptions} />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <Label htmlFor="only-new" className="text-sm font-medium">
                  Only unanswered
                </Label>
                <p className="text-xs text-muted-foreground">
                  {available.length} of {pool.length} available in this set
                </p>
              </div>
              <Switch id="only-new" checked={onlyUnattempted} onCheckedChange={setOnlyUnattempted} />
            </div>

            <Button size="lg" className="w-full min-h-11" onClick={startQuiz} disabled={available.length === 0}>
              Start practice <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Button>
            {available.length === 0 && (
              <p className="text-center text-sm text-muted-foreground">
                Every question in this set is already attempted — turn off &ldquo;Only unanswered&rdquo; or pick
                another set.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (phase === 'quiz') {
    return (
      <QuizRunner
        questions={questions}
        answers={answers}
        onChoose={(i, displayIdx) => {
          setAnswers((a) => ({ ...a, [i]: displayIdx }))
          recordMcq.mutate({ mcqId: questions[i].mcq.id, selected: questions[i].perm[displayIdx] })
        }}
        onFinish={() => setPhase('result')}
        onQuit={() => setPhase('setup')}
      />
    )
  }

  const correct = questions.filter((q, i) => answers[i] === q.correctDisplay).length
  return (
    <div className="mx-auto w-full max-w-2xl px-3 py-6 sm:px-4">
      <Card className="text-center">
        <CardHeader>
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Trophy className="h-7 w-7" aria-hidden />
          </span>
          <CardTitle className="mt-2 text-2xl">
            {correct}/{questions.length} correct
          </CardTitle>
          <CardDescription>
            {Math.round((correct / Math.max(questions.length, 1)) * 100)}% accuracy · progress saved
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-center gap-2">
          <Button onClick={() => setPhase('setup')}>
            <RotateCcw className="mr-2 h-4 w-4" aria-hidden /> New quiz
          </Button>
        </CardContent>
      </Card>

      {correct < questions.length && (
        <h2 className="mb-3 mt-8 flex items-center gap-2 text-lg font-semibold">
          <XCircle className="h-5 w-5 text-destructive" aria-hidden /> Review your misses
        </h2>
      )}
      <div className="space-y-3">
        {questions.map((q, i) =>
          answers[i] === q.correctDisplay ? null : (
            <Card key={q.mcq.id}>
              <CardContent className="p-4">
                <p className="text-sm font-medium">
                  {i + 1}. {q.mcq.question}
                </p>
                <p className="mt-2 text-sm font-semibold text-primary">
                  Answer: {LETTERS[q.correctDisplay]}. {q.mcq.options[q.mcq.answer]}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{q.mcq.explanation}</p>
                {q.mcq.ref && <p className="mt-2 text-[11px] text-muted-foreground">Ref: {q.mcq.ref}</p>}
              </CardContent>
            </Card>
          )
        )}
      </div>
    </div>
  )
}


function QuizRunner({
  questions,
  answers,
  onChoose,
  onFinish,
  onQuit,
}: {
  questions: PreparedQuestion[]
  answers: Record<number, number>
  onChoose: (index: number, displayIdx: number) => void
  onFinish: () => void
  onQuit: () => void
}) {
  const [index, setIndex] = useState(0)
  const q = questions[index]
  const chosen = answers[index]
  const answered = chosen !== undefined
  const score = Object.entries(answers).filter(([i, d]) => questions[Number(i)].correctDisplay === d).length
  const { data: progressData } = useProgress()
  const attemptedBefore = deriveStats(progressData).lastByMcq

  const choose = (displayIdx: number) => {
    if (answered) return
    onChoose(index, displayIdx)
  }

  const next = () => {
    if (index >= questions.length - 1) {
      onFinish()
    } else {
      setIndex((i) => Math.min(i + 1, questions.length - 1))
    }
  }

  if (!q) return null

  return (
    <div className="mx-auto w-full max-w-2xl px-3 py-6 sm:px-4">

      <div className="mb-4 flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={onQuit} className="min-h-10 shrink-0">
          Quit
        </Button>
        <div className="flex-1">
          <Progress
            value={((Math.min(index, questions.length - 1) + (answered ? 1 : 0)) / questions.length) * 100}
            className="h-2"
            aria-label={`Question ${index + 1} of ${questions.length}`}
          />
        </div>
        <Badge variant="secondary" className="shrink-0">
          {Math.min(index + 1, questions.length)} / {questions.length}
        </Badge>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.mcq.id + String(index)}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.2 }}
        >
          <Card>
            <CardHeader className="pb-3">
              <div className="mb-1 flex flex-wrap items-center gap-1.5">
                <Badge variant="outline">{q.mcq.topicId.replace(/-/g, ' ')}</Badge>
                {attemptedBefore[q.mcq.id] !== undefined && (
                  <Badge variant="secondary" className="text-[10px]">
                    attempted before
                  </Badge>
                )}
              </div>
              <CardTitle className="text-base leading-relaxed sm:text-lg">{q.mcq.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {q.perm.map((optIdx, displayIdx) => {
                const isCorrect = displayIdx === q.correctDisplay
                const isChosen = displayIdx === chosen
                return (
                  <button
                    key={displayIdx}
                    onClick={() => choose(displayIdx)}
                    disabled={answered}
                    aria-label={`Option ${LETTERS[displayIdx]}`}
                    className={cn(
                      'flex w-full items-start gap-3 rounded-xl border p-3 text-left text-sm transition-all min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      !answered && 'hover:border-primary/60 hover:bg-primary/5 active:scale-[0.995]',
                      answered && isCorrect && 'border-emerald-500/70 bg-emerald-500/10',
                      answered && isChosen && !isCorrect && 'border-destructive/70 bg-destructive/10',
                      answered && !isChosen && !isCorrect && 'opacity-55'
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold',
                        answered && isCorrect
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : answered && isChosen && !isCorrect
                            ? 'border-destructive bg-destructive text-white'
                            : 'border-muted-foreground/40'
                      )}
                    >
                      {LETTERS[displayIdx]}
                    </span>
                    <span className="pt-0.5">{q.mcq.options[optIdx]}</span>
                    {answered && isCorrect && <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-emerald-600" aria-hidden />}
                    {answered && isChosen && !isCorrect && <XCircle className="ml-auto h-5 w-5 shrink-0 text-destructive" aria-hidden />}
                  </button>
                )
              })}

              <AnimatePresence>
                {answered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 space-y-2 rounded-xl border bg-secondary/40 p-3">
                      <p className="flex items-center gap-1.5 text-sm font-semibold">
                        {chosen === q.correctDisplay ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden /> Correct!
                          </>
                        ) : (
                          <>
                            <XCircle className="h-4 w-4 text-destructive" aria-hidden /> Not quite — correct answer
                            is {LETTERS[q.correctDisplay]}
                          </>
                        )}
                      </p>
                      <p className="text-[13px] leading-relaxed text-muted-foreground">{q.mcq.explanation}</p>
                      {q.mcq.ref && (
                        <p className="text-[11px] text-muted-foreground/80">Ref: {q.mcq.ref}</p>
                      )}
                    </div>
                    <Button size="lg" className="mt-3 w-full min-h-11" onClick={next}>
                      {index === questions.length - 1 ? 'See results' : 'Next question'}{' '}
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>


      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
        <Lightbulb className="h-3.5 w-3.5" aria-hidden /> Running score: {score}/{Object.keys(answers).length}
      </p>
    </div>
  )
}
