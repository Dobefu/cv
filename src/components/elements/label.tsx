import React from 'react'

type Props = Readonly<{
  children: React.ReactNode
}>

export default function Label({ children }: Props) {
  return (
    <label className="block font-medium text-sky-800 dark:text-sky-400 contrast-more:dark:text-sky-300">
      {children}
    </label>
  )
}
