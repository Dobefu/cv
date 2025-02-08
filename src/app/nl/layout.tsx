import { RootLayout as BaseRootLayout } from '@/components/layout/root-layout'

type Props = Readonly<{
  breadcrumb: React.ReactNode
  children: React.ReactNode
}>

export default function RootLayout({ breadcrumb, children }: Props) {
  return (
    <BaseRootLayout locale="nl">
      {breadcrumb}

      {children}
    </BaseRootLayout>
  )
}
