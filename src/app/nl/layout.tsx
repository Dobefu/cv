import {
  RootLayout as BaseRootLayout,
  generateMetadata as rootLayoutGenerateMetadata,
} from '@/components/layout/root-layout'

type Props = Readonly<{
  breadcrumb: React.ReactNode
  children: React.ReactNode
}>

export async function generateMetadata() {
  return await rootLayoutGenerateMetadata('nl')
}

export default function RootLayout({ breadcrumb, children }: Props) {
  return (
    <BaseRootLayout breadcrumb={breadcrumb} locale="nl">
      {children}
    </BaseRootLayout>
  )
}
