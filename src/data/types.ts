// Shared content types for PSM Study Hub
// Content is authored from: K Park Textbook of PSM (27th ed.), IAPSM Textbook of
// Community Medicine (3rd ed.), WHO / national guidelines.

export interface Chapter {
  id: string
  title: string
  shortTitle: string
  description: string
}

/** A content block inside a topic note */
export interface NoteSection {
  heading: string
  bullets?: string[]
  table?: { caption?: string; headers: string[]; rows: string[][] }
  /** Exam pearl — highlighted callout */
  key?: string
}

export interface Topic {
  id: string
  chapterId: string
  title: string
  intro: string
  sections: NoteSection[]
  /** High-yield one-liners shown as chips */
  highYield: string[]
  ref: string
}

export interface Mcq {
  id: string
  topicId: string
  question: string
  /** exactly 4 options */
  options: string[]
  /** index (0-3) of the correct option */
  answer: number
  explanation: string
  ref?: string
}

export interface Saq {
  id: string
  topicId: string
  question: string
  /** model answer key points (scored for 2 marks) */
  answerPoints: string[]
  /** optional extra note / mnemonic / example */
  detailed?: string
  ref?: string
}
