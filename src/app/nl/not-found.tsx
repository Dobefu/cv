import ContentContainer from '@/components/layout/content-container'

export default function NotFound() {
  return (
    <div className="relative px-4">
      <ContentContainer>
        <h2>Pagina niet gevonden</h2>

        <p>De opgevraagde pagina kon niet worden gevonden.</p>
      </ContentContainer>
    </div>
  )
}
