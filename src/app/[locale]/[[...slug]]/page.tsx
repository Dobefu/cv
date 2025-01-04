import { logError } from '@/utils/logger'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string; slug?: string[] }>
}

export default async function Page({ params }: Readonly<Props>) {
  const slugParts = (await params).slug ?? ['']
  const url = `/${slugParts.join('/')}`
  const locale = (await params).locale

  try {
    const { default: Content } = await import(`@/content${url}${locale}.mdx`)

    return <Content />
  } catch (err) {
    logError(err as string)
    notFound()
  }
}
