'use client'

import { useEffect, useRef } from 'react'

type Props = Readonly<{
  label: string
  percentage: number
}>

export default function ProgressBarClient({ label, percentage }: Props) {
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
    <>
      <label>{label}</label>

      <div
        className="mt-2 mb-4 h-6 rounded-full bg-[#ec6609] duration-300"
        ref={target}
        style={{ width: `${percentage}%` }}
      />
    </>
  )
}
