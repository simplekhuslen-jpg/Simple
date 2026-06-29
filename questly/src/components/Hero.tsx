import { useEffect, useRef, useState } from 'react'
import { ArrowUp, Sparkles } from 'lucide-react'
import Navbar from './Navbar'
import DashboardMockup from './DashboardMockup'

const HERO_BG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260611_133301_d5f2a94a-b22e-4e4a-a6b6-eacdddf1f5b0.png&w=1280&q=85'

const GRASS =
  'https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png'

const DESIGN_WIDTH = 896

/**
 * Renders its children at a fixed design width and scales the result down to
 * fit the available container width, keeping the outer height correct so the
 * scaled content does not overflow the layout.
 */
function ScaledDashboard({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState<number>()

  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const update = () => {
      const width = container.offsetWidth
      const nextScale = Math.min(width / DESIGN_WIDTH, 1)
      setScale(nextScale)
      setHeight(inner.offsetHeight * nextScale)
    }

    update()

    const ro = new ResizeObserver(update)
    ro.observe(container)
    ro.observe(inner)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={containerRef} style={{ height }}>
      <div
        ref={innerRef}
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <Navbar />

      {/* Spacer between navbar and content */}
      <div className="min-h-8 shrink-0 flex-1 sm:min-h-12 lg:min-h-16" />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center px-5 text-center">
        <h1 className="font-normal leading-[1.05] tracking-tight text-gray-900">
          <span className="animate-fade-up block text-[40px] min-[400px]:text-[44px] sm:text-6xl lg:text-7xl xl:text-[80px]">
            Get cited.
          </span>
          <span className="animate-fade-up block text-[40px] [animation-delay:100ms] min-[400px]:text-[44px] sm:text-6xl lg:text-7xl xl:text-[80px]">
            Effortlessly.
          </span>
        </h1>

        {/* Search bar */}
        <form className="animate-fade-up mt-5 w-full max-w-xl [animation-delay:220ms] sm:mt-6">
          <div className="flex items-center gap-3 rounded-full bg-white/60 py-1.5 pl-5 pr-1.5 ring-1 ring-gray-200 backdrop-blur-md">
            <input
              type="text"
              placeholder="What makes content rank in AI search?"
              className="flex-1 bg-transparent py-2 text-sm text-gray-900 placeholder-gray-500 outline-none sm:text-base"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white transition-transform hover:scale-105 active:scale-95 sm:h-10 sm:w-10"
            >
              <ArrowUp className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
            </button>
          </div>
        </form>

        {/* Description */}
        <p className="animate-fade-up mt-4 max-w-md text-sm leading-relaxed text-gray-600 [animation-delay:340ms] sm:mt-5 sm:text-base lg:text-lg">
          Ship articles that answer actual customer questions
          <br />
          -- and be seen on <Sparkles className="-mt-1 inline h-4 w-4" /> ChatGPT
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up mt-4 flex flex-wrap items-center justify-center gap-3 [animation-delay:460ms] sm:mt-5">
          <button className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg">
            Try It Free
          </button>
          <button className="rounded-full px-6 py-2.5 text-sm font-medium text-gray-700 ring-1 ring-gray-300 transition-colors hover:bg-gray-100">
            Talk to sales
          </button>
        </div>
      </div>

      {/* Spacer between content and dashboard */}
      <div className="min-h-10 shrink-0 flex-1 sm:min-h-12 lg:min-h-16" />

      {/* Dashboard mockup */}
      <div className="animate-hero-rise relative z-0 mx-auto -mb-10 w-[92%] max-w-4xl shrink-0 [animation-delay:620ms] sm:-mb-20 sm:w-[84%] lg:-mb-32 lg:w-[72%]">
        <ScaledDashboard>
          <DashboardMockup />
        </ScaledDashboard>
      </div>

      {/* Grass overlay */}
      <img
        src={GRASS}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full select-none"
      />
    </section>
  )
}
