import {
  RootLayout as BaseRootLayout,
  generateMetadata as baseGenerateMetadata,
} from '@/components/layout/root-layout'
import { Metadata } from 'next'

type Props = Readonly<{
  children: React.ReactNode
}>

export async function generateMetadata(): Promise<Metadata> {
  return baseGenerateMetadata('nl')
}

export default async function RootLayout({ children }: Props) {
  return <BaseRootLayout locale="nl">{children}</BaseRootLayout>
}
