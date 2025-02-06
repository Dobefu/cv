import { RootLayout as BaseRootLayout } from '@/components/layout/root-layout'

type Props = Readonly<{
  children: React.ReactNode
}>

export default async function RootLayout({ children }: Props) {
  return <BaseRootLayout locale="en">{children}</BaseRootLayout>
}
