import {
  PanelLeft,
  ChevronLeft,
  ChevronRight,
  Monitor,
  RotateCw,
  Share,
  Plus,
  Copy,
  Grid,
  Compass,
  Layers,
  ListTodo,
  Sparkles,
} from 'lucide-react'
import Logo from './Logo'

const recentArticles = [
  'Choosing a care home',
  'Fall prevention basics',
  'Medication reminders',
]

const stats = [
  { label: 'RELEASED', value: '62', sub: 'Posts indexed' },
  { label: 'BREADTH', value: '12', sub: 'Subject groups' },
  { label: 'REMAINING', value: '412', sub: 'Ready to draft' },
  { label: 'MAX REACH', value: '3,156,200', sub: 'Searches a month' },
]

const subjects = [
  { name: 'Elder Care', count: '48 articles' },
  { name: 'Mobility', count: '31 articles' },
  { name: 'Home Safety', count: '27 articles' },
]

const inboxRows = [
  {
    question: 'How much does in-home elderly care cost?',
    volume: '40,500',
    difficulty: 'Low',
    status: 'Drafting',
  },
  {
    question: 'What is the safest mobility aid for seniors?',
    volume: '18,100',
    difficulty: 'Medium',
    status: 'Drafting',
  },
  {
    question: 'Best fall detection devices for elderly',
    volume: '12,400',
    difficulty: 'Low',
    status: 'Queued',
  },
  {
    question: 'How to make a bathroom safe for seniors',
    volume: '9,900',
    difficulty: 'Medium',
    status: 'Queued',
  },
  {
    question: 'Signs a parent needs assisted living',
    volume: '8,100',
    difficulty: 'High',
    status: 'Queued',
  },
]

export default function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-t-2xl bg-[#1a1a1c] text-left shadow-[0_-20px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-white/5 bg-[#242427] px-4 py-2.5">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        {/* Left icons */}
        <div className="ml-2 flex items-center gap-2">
          <PanelLeft className="h-3.5 w-3.5 text-white/40" />
          <ChevronLeft className="h-3.5 w-3.5 text-white/40" />
          <ChevronRight className="h-3.5 w-3.5 text-white/25" />
        </div>

        {/* Center URL bar */}
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-[#1a1a1c] px-6 py-1 text-[10px] text-white/60">
          <Monitor className="h-3 w-3" />
          questly.ai
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-2">
          <RotateCw className="h-3.5 w-3.5 text-white/40" />
          <Share className="h-3.5 w-3.5 text-white/40" />
          <Plus className="h-3.5 w-3.5 text-white/40" />
          <Copy className="h-3.5 w-3.5 text-white/40" />
        </div>
      </div>

      {/* Body */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[22%] border-r border-white/5 bg-[#1e1e21] px-3 py-3.5">
          <div className="flex items-center justify-between">
            <Logo className="h-4 w-4 text-white/70" />
            <Grid className="h-3.5 w-3.5 text-white/30" />
          </div>

          {/* Workspace badge */}
          <div className="mt-4 flex items-center gap-2">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-[#e8553f] text-[9px] font-semibold text-white">
              C
            </span>
            <span className="text-[10px] text-white/80">CareNest</span>
          </div>

          {/* Nav items */}
          <nav className="mt-5 flex flex-col gap-3">
            <span className="flex items-center gap-2 text-[10px] text-white/60">
              <Compass className="h-3.5 w-3.5" />
              Uncover
            </span>
            <span className="flex items-center gap-2 text-[10px] text-white/60">
              <Layers className="h-3.5 w-3.5" />
              Subjects
            </span>
            <span className="flex items-center gap-2 text-[10px] text-white/60">
              <ListTodo className="h-3.5 w-3.5" />
              Inbox
            </span>
          </nav>

          {/* Recent articles */}
          <div className="mt-6">
            <p className="text-[8px] uppercase tracking-wider text-white/35">
              Recent
            </p>
            <ul className="mt-2 flex flex-col gap-2.5">
              {recentArticles.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-2 text-[10px] text-white/55"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#28c840]/70" />
                  <span className="truncate">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-[#1a1a1c] p-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8553f] text-sm font-semibold text-white">
                C
              </span>
              <div>
                <p className="text-sm font-medium text-white">CareNest</p>
                <p className="text-[10px] text-white/45">
                  Home care content engine
                </p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-medium text-white ring-1 ring-white/10 transition-colors hover:bg-white/15">
              <Sparkles className="h-3 w-3" />
              Generate
            </button>
          </div>

          {/* Stats grid */}
          <div className="mt-4 grid grid-cols-4 divide-x divide-white/5 rounded-xl bg-white/[0.03] ring-1 ring-white/5">
            {stats.map((s) => (
              <div key={s.label} className="px-3 py-3">
                <p className="text-[8px] tracking-wider text-white/35">
                  {s.label}
                </p>
                <p className="mt-1 text-xl font-medium text-white">{s.value}</p>
                <p className="mt-0.5 text-[9px] text-white/40">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Subject cards */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {subjects.map((s) => (
              <div
                key={s.name}
                className="rounded-lg bg-white/[0.03] p-3 ring-1 ring-white/5"
              >
                <p className="text-[11px] font-medium text-white">{s.name}</p>
                <p className="mt-1 text-[9px] text-white/40">{s.count}</p>
              </div>
            ))}
          </div>

          {/* Drafting inbox */}
          <div className="mt-4 overflow-hidden rounded-lg ring-1 ring-white/5">
            <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 border-b border-white/5 bg-white/[0.03] px-3 py-2 text-[8px] uppercase tracking-wider text-white/35">
              <span>Question</span>
              <span className="w-12 text-right">Volume</span>
              <span className="w-14 text-right">Difficulty</span>
              <span className="w-14 text-right">Status</span>
            </div>
            {inboxRows.map((row) => (
              <div
                key={row.question}
                className="grid grid-cols-[1fr_auto_auto_auto] gap-4 border-b border-white/5 px-3 py-2 text-[10px] last:border-b-0"
              >
                <span className="truncate text-white/70">{row.question}</span>
                <span className="w-12 text-right text-white/50">
                  {row.volume}
                </span>
                <span className="w-14 text-right text-white/50">
                  {row.difficulty}
                </span>
                <span
                  className={`w-14 text-right ${
                    row.status === 'Drafting'
                      ? 'text-[#febc2e]/80'
                      : 'text-white/40'
                  }`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
