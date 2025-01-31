import ContentContainer from '@/components/layout/content-container'

export default function NotFound() {
  return (
    <div className="relative px-4">
      <ContentContainer>
        <h2>Page not found</h2>

        <p>The requested page could not be found.</p>
      </ContentContainer>
    </div>
  )
}
