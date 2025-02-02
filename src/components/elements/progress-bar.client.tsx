'use client'

import { useEffect, useRef } from 'react'

type Props = Readonly<{
  label: string
  percentage: number
}>

export default function ProgressBar({ label, percentage }: Props) {
  const target = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      const entryTarget = entry.target as HTMLDivElement

      entryTarget.style.scale = `${entry.isIntersecting ? 1 : 0} 1`
    })

    if (!target.current) return

    observer.observe(target.current)

    return () => {
      observer.disconnect()
    }
  }, [target, percentage])

  return (
    <div className="inline-block w-full max-md:min-w-full">
      <label>{label}</label>

      <div className="mt-2 mb-4 h-6">
        <div
          className="h-full origin-left transition-[cubic-bezier(.5,0,.5,1.75)] duration-[400ms] print:!scale-x-100"
          ref={target}
        >
          <div
            className="h-full rounded-full bg-orange-500 shadow-md dark:bg-orange-500/75"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  )
}
