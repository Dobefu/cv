import { Metadata } from 'next'
import getConfig from 'next/config'
import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types'

const { publicRuntimeConfig } = getConfig()
const appName = publicRuntimeConfig.appName || ''

type Props = Readonly<{
  children: React.ReactNode
}>

export const metadata: Metadata = {
  title: {
    default: appName,
    template: `%s | ${appName}`,
  } satisfies TemplateString,
}

export default async function RootLayout({ children }: Props) {
  return <>{children}</>
}
