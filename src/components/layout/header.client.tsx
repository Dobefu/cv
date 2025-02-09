'use client'

import React, { useEffect, useState } from 'react'

type Props = Readonly<{
  children: React.ReactNode
}>

export default function HeaderClient({ children }: Props) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className="w-full rounded-2xl bg-[#0d6488cc] shadow-md backdrop-blur-lg transition-all duration-300 data-[full]:-m-4 data-[full]:w-[calc(100%+2rem)] data-[full]:rounded-none data-[full]:py-4 data-[full]:shadow-2xl motion-reduce:transition-none contrast-more:bg-sky-600 contrast-more:dark:bg-sky-800"
      data-full={scrollY >= 112 ? '' : undefined}
      style={{ viewTransitionName: 'header' }}
    >
      {children}
    </header>
  )
}
