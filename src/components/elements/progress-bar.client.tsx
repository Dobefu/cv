'use client'

import { useEffect, useRef } from 'react'

type Props = Readonly<{
  percentage: number
}>

export default function ProgressBarClient({ percentage }: Props) {
  const target = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /* v8 ignore start */
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      const entryTarget = entry.target as HTMLDivElement

      entryTarget.style.width = `${entry.isIntersecting ? percentage : 0}%`
    })

    if (!target.current) return
    /* v8 ignore stop */

    observer.observe(target.current)

    return () => {
      observer.disconnect()
    }
  }, [target, percentage])

  return (
    <div
      className="h-full rounded-full bg-orange-500 shadow-md transition-[cubic-bezier(.5,0,.5,1.75)] duration-300 dark:bg-orange-500/75"
      ref={target}
      style={{ width: `${percentage}%` }}
    />
  )
}
