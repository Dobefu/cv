import ContentContainer from '@/components/layout/content-container'
import ProjectFooter from '@/components/layout/project-footer'
import getProjectFromUrl from '@/utils/get-project-from-url'
import { headers } from 'next/headers'
import { notFound } from 'next/navigation'

export type Props = Readonly<{
  children: React.ReactNode
}>

export default async function Layout({ children }: Props) {
  const headersList = await headers()
  const url = headersList.get('x-url') ?? ''
  const project = getProjectFromUrl(url, 'nl')
  if (!project) notFound()

  return (
    <ContentContainer>
      {children}

      <ProjectFooter project={project} />
    </ContentContainer>
  )
}
