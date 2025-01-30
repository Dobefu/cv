import ContentContainer from '@/components/layout/content-container'
import getProjects from '@/utils/get-projects'
import Client from './page.client'

export default async function Projects() {
  const projects = await getProjects('nl')

  return (
    <div className="relative px-4">
      <ContentContainer>
        <Client projects={projects} />
      </ContentContainer>
    </div>
  )
}
