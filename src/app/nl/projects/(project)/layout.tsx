import IconTag from '@/components/elements/tag'
import ContentContainer from '@/components/layout/content-container'
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

      <div className="flex gap-2 pt-8">
        {project.tags.map((tagId) => (
          <IconTag key={tagId} tagId={tagId} />
        ))}
      </div>
    </ContentContainer>
  )
}
