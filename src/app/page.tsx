'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { PsmFooter, PsmHeader } from '@/components/psm/shell'
import { HomeView } from '@/components/psm/home-view'
import { NotesView } from '@/components/psm/notes-view'
import { McqView } from '@/components/psm/mcq-view'
import { SaqView } from '@/components/psm/saq-view'
import { ProgressView } from '@/components/psm/progress-view'
import { useAppStore } from '@/lib/app-store'

export default function Page() {
  const view = useAppStore((s) => s.view)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PsmHeader />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {view === 'home' && <HomeView />}
            {view === 'notes' && <NotesView />}
            {view === 'mcq' && <McqView />}
            {view === 'saq' && <SaqView />}
            {view === 'progress' && <ProgressView />}
          </motion.div>
        </AnimatePresence>
      </main>
      <PsmFooter />
    </div>
  )
}
