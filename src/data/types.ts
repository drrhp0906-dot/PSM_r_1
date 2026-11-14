
export interface Chapter {
  id: string
  title: string
  shortTitle: string
  description: string
}

export interface NoteSection {
  heading: string
  bullets?: string[]
  table?: { caption?: string; headers: string[]; rows: string[][] }
  key?: string
}

export interface Topic {
  id: string
  chapterId: string
  title: string
  intro: string
  sections: NoteSection[]
  highYield: string[]
  ref: string
}

export interface Mcq {
  id: string
  topicId: string
  question: string
  options: string[]
  answer: number
  explanation: string
  ref?: string
}

export interface Saq {
  id: string
  topicId: string
  question: string
  answerPoints: string[]
  detailed?: string
  ref?: string
}
