// Aggregates all PSM content for the app
import { notesHealth } from './notes-health'
import { notesEnvironment } from './notes-environment'
import { mcqsHealth, saqsHealth } from './bank-health'
import { mcqsEnvironment, saqsEnvironment } from './bank-environment'
import type { Chapter, Mcq, Saq, Topic } from './types'

export * from './types'

export const chapters: Chapter[] = [
  {
    id: 'health-disease',
    title: 'Concept of Health and Disease',
    shortTitle: 'Health & Disease',
    description:
      'Health & well-being, dimensions, spectrum, determinants, indicators, disease causation, natural history, control, prevention and modes of intervention.',
  },
  {
    id: 'environment',
    title: 'Environment',
    shortTitle: 'Environment',
    description:
      'Water, air, noise, radiation and waste disposal — standards, health effects and control measures.',
  },
]

export const topics: Topic[] = [...notesHealth, ...notesEnvironment]
export const allMcqs: Mcq[] = [...mcqsHealth, ...mcqsEnvironment]
export const allSaqs: Saq[] = [...saqsHealth, ...saqsEnvironment]

// ---------- helpers ----------
export const topicsByChapter = (chapterId: string): Topic[] =>
  topics.filter((t) => t.chapterId === chapterId)

export const topicById = (id: string): Topic | undefined => topics.find((t) => t.id === id)

export const chapterOfTopic = (topicId: string): Chapter | undefined => {
  const t = topicById(topicId)
  return t ? chapters.find((c) => c.id === t.chapterId) : undefined
}

export const chapterOfMcq = (m: Mcq) => chapterOfTopic(m.topicId)

export const mcqsForTopic = (topicId: string): Mcq[] => allMcqs.filter((m) => m.topicId === topicId)
export const saqsForTopic = (topicId: string): Saq[] => allSaqs.filter((s) => s.topicId === topicId)

export const mcqsForChapter = (chapterId: string): Mcq[] => {
  const ids = topicsByChapter(chapterId).map((t) => t.id)
  return allMcqs.filter((m) => ids.includes(m.topicId))
}
export const saqsForChapter = (chapterId: string): Saq[] => {
  const ids = topicsByChapter(chapterId).map((t) => t.id)
  return allSaqs.filter((s) => ids.includes(s.topicId))
}

export const mcqById = (id: string): Mcq | undefined => allMcqs.find((m) => m.id === id)
export const saqById = (id: string): Saq | undefined => allSaqs.find((s) => s.id === id)

/** Shuffle a copy of an array (Fisher-Yates) */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
