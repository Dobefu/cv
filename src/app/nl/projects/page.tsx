import ContentContainer from '@/components/layout/content-container'
import getProjects from '@/utils/get-projects'
import Client from './page.client'

export default function Projects() {
  const projects = getProjects()

  return (
    <div className="relative px-4">
      <ContentContainer>
        <Client projects={projects} />
      </ContentContainer>
    </div>
  )
}
