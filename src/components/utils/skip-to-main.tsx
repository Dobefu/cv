import getTranslation from '@/utils/get-translation'

export type Props = Readonly<{
  locale: string
}>

export default function SkipToMain({ locale }: Props) {
  return (
    <a className="skip-to-main" href="#main" tabIndex={0}>
      {getTranslation(locale, 'skip_to_main.title')}
    </a>
  )
}
