import getTranslation from '@/utils/get-translation'

export type Props = Readonly<{
  locale: string
}>

export default function SkipToMain({ locale }: Props) {
  return (
    <a
      className="fixed z-50 bg-white px-4 py-2 not-focus:-translate-y-full not-focus:opacity-0 dark:bg-zinc-800"
      href="#main"
      tabIndex={0}
    >
      {getTranslation(locale, 'skip_to_main.title')}
    </a>
  )
}
