import IconTag from '@/components/elements/tag'
import ContentContainer from '@/components/layout/content-container'
import getProjects from '@/utils/get-projects'
import { headers } from 'next/headers'
import { notFound } from 'next/navigation'

export type Props = Readonly<{
  children: React.ReactNode
}>

export default async function Layout({ children }: Props) {
  const headersList = await headers()
  const url = headersList.get('x-url')
  const page = url?.split('/').reverse()[0] ?? ''
  const projects = getProjects('nl')

  const project = projects.find((p) => p.path === page)

  if (!project) {
    notFound()
  }

  const tags = project.tags

  return (
    <ContentContainer>
      {children}

      <div className="flex gap-2 pt-8">
        {tags.map((tagId) => (
          <IconTag key={tagId} tagId={tagId} />
        ))}
      </div>
    </ContentContainer>
  )
}
