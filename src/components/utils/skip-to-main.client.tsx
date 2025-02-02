'use client'

import useLocale from '@/hooks/use-locale'
import Link from 'next/link'

export default function SkipToMain() {
  const { t } = useLocale()

  return (
    <Link
      className="fixed z-50 rounded-ee-2xl bg-white/80 px-4 py-2 backdrop-blur-lg transition-all not-focus:-translate-y-full not-focus:opacity-0 contrast-more:bg-white dark:bg-neutral-800/90 contrast-more:dark:bg-neutral-900"
      href="#main-content"
      tabIndex={0}
    >
      {t('skip_to_main.title')}
    </Link>
  )
}
