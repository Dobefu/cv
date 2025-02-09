'use client'

import useLocale from '@/hooks/use-locale'

export default function SkipToMainClient() {
  const { t } = useLocale()

  return <>{t('skip_to_main.title')}</>
}
