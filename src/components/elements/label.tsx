import React from 'react'

type Props = Readonly<{
  children: React.ReactNode
}>

export default function Label({ children }: Props) {
  return (
    <label className="font-medium text-sky-800 dark:text-sky-400">
      {children}
    </label>
  )
}
