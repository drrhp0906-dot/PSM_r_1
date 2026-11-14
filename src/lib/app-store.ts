'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ViewKey = 'home' | 'notes' | 'mcq' | 'saq' | 'progress'

interface AppState {
  view: ViewKey
  setView: (v: ViewKey) => void
  notesTopicId: string | null
  openTopic: (topicId: string) => void
  readTopics: Record<string, true>
  toggleRead: (topicId: string) => void
  mcqScope: string
  setMcqScope: (s: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      view: 'home',
      setView: (v) => set({ view: v }),
      notesTopicId: null,
      openTopic: (topicId) => set({ view: 'notes', notesTopicId: topicId }),
      readTopics: {},
      toggleRead: (topicId) =>
        set((s) => {
          const next = { ...s.readTopics }
          if (next[topicId]) delete next[topicId]
          else next[topicId] = true
          return { readTopics: next }
        }),
      mcqScope: 'all',
      setMcqScope: (s) => set({ mcqScope: s }),
    }),
    {
      name: 'psm-app-state',
      partialize: (s) => ({ readTopics: s.readTopics, mcqScope: s.mcqScope }),
    }
  )
)
