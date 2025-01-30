'use client'

import useLocale from '@/hooks/use-locale'

export default function Client() {
  const { t } = useLocale()
  return <h2>{t('projects.title')}</h2>
}
