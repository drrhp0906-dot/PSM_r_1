'use client'

import { useTheme } from 'next-themes'
import { BookOpenCheck, FileQuestion, GraduationCap, Home, Moon, Sun, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAppStore, type ViewKey } from '@/lib/app-store'
import { Button } from '@/components/ui/button'

const NAV: { key: ViewKey; label: string; icon: typeof Home }[] = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'notes', label: 'Notes', icon: BookOpenCheck },
  { key: 'mcq', label: 'MCQ Bank', icon: FileQuestion },
  { key: 'saq', label: '2-Markers', icon: GraduationCap },
  { key: 'progress', label: 'Progress', icon: TrendingUp },
]

export function PsmHeader() {
  const view = useAppStore((s) => s.view)
  const setView = useAppStore((s) => s.setView)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-3 sm:px-4">
        <button
          onClick={() => setView('home')}
          className="flex shrink-0 items-center gap-2 rounded-md px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Go to home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" aria-hidden />
          </span>
          <span className="hidden flex-col items-start leading-none sm:flex">
            <span className="text-sm font-bold tracking-tight">PSM Study Hub</span>
            <span className="text-[10px] text-muted-foreground">Community Medicine · MBBS 3<sup>rd</sup> Year</span>
          </span>
        </button>

        <nav aria-label="Primary" className="nice-scroll ml-auto flex items-center gap-1 overflow-x-auto">
          {NAV.map((item) => {
            const Icon = item.icon
            const active = view === item.key
            return (
              <button
                key={item.key}
                onClick={() => setView(item.key)}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex h-9 shrink-0 items-center gap-1.5 rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  active
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <Icon className="h-4 w-4" aria-hidden />
                <span className={cn('hidden md:inline', item.key === 'mcq' || item.key === 'saq' ? 'inline' : '')}>
                  {item.label}
                </span>
              </button>
            )
          })}
          <Button
            variant="ghost"
            size="icon"
            className="ml-1 h-9 w-9 shrink-0"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Sun className="h-4 w-4 dark:hidden" aria-hidden />
            <Moon className="hidden h-4 w-4 dark:inline" aria-hidden />
          </Button>
        </nav>
      </div>
    </header>
  )
}

export function PsmFooter() {
  const setView = useAppStore((s) => s.setView)
  return (
    <footer className="mt-auto border-t bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1.5 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground">PSM Study Hub</span> · Concept of Health &amp; Disease ·
          Environment
        </p>
        <p className="text-[11px] text-muted-foreground">
          Aligned with{' '}
          <span className="font-medium">K Park 27e</span>, <span className="font-medium">IAPSM 3e</span> &amp;
          WHO / national guidelines · For exam revision only
        </p>
        <button
          onClick={() => setView('progress')}
          className="text-[11px] font-medium text-primary underline-offset-4 hover:underline"
        >
          View my progress
        </button>
      </div>
    </footer>
  )
}
