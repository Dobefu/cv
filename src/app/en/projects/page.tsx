import ContentContainer from '@/components/layout/content-container'
import Client from './page.client'

export default async function Projects() {
  return (
    <div className="relative px-4">
      <ContentContainer>
        <Client />
      </ContentContainer>
    </div>
  )
}
