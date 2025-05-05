import { Metadata } from 'next'
import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types'

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? ''

type Props = Readonly<{
  children: React.ReactNode
}>

export const metadata: Metadata = {
  title: {
    default: appName,
    template: `%s | ${appName}`,
  } satisfies TemplateString,
}

export default function RootLayout({ children }: Props) {
  return <>{children}</>
}
