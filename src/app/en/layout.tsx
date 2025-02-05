import {
  RootLayout as BaseRootLayout,
  generateMetadata as baseGenerateMetadata,
} from '@/components/layout/root-layout'
import { Metadata } from 'next'

type Props = Readonly<{
  children: React.ReactNode
}>

export async function generateMetadata(): Promise<Metadata> {
  return baseGenerateMetadata('en')
}

export default async function RootLayout({ children }: Props) {
  return <BaseRootLayout locale="en">{children}</BaseRootLayout>
}
