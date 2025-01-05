'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useRef } from 'react'

type Props = Readonly<{
  label: string
  percentage: number
}>

export default function ProgressBar({ label, percentage }: Props) {
  const target = useRef<HTMLDivElement>(null)

  return (
    <div className="inline-block w-full px-4 max-md:min-w-full" ref={target}>
      <label>{label}</label>

      <div className="mb-4 mt-2 h-6">
        <div className="h-full print:!block">
          <AnimatePresence initial>
            <motion.div
              className="h-full rounded-full bg-orange-500 shadow-md dark:bg-orange-500/75"
              initial={{ width: 0 }}
              style={{ width: `${percentage}%` }}
              whileInView={{
                width: `${percentage}%`,
                transitionTimingFunction: 'cubic-bezier(.5,0,.5,1.75)',
                transitionProperty: 'width',
                transitionDuration: '400ms',
              }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
