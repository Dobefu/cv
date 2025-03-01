import ProjectPreview from '@/components/elements/project-preview'
import ContentContainer from '@/components/layout/content-container.client'
import getProjects from '@/utils/get-projects'

export const metadata = {
  title: 'Projecten',
  description:
    'Als gepassioneerd full-stack web engineer heb ik mijn vaardigheden verbeterd. Ontdek mijn projecten om te zien hoe ik ideeën omzet in krachtige webervaringen.',
}

export default function Projects() {
  const projects = getProjects('nl')

  return (
    <ContentContainer>
      <h1>Projecten waaraan ik gewerkt heb</h1>

      <p className="pb-4">
        Als een gepassioneerde full-stack web engineer heb ik mijn vaardigheden
        verbeterd over een breed spectrum aan programmeertalen en frameworks.
        Over de jaren heen heb ik gewerkt aan diverse professionele en
        persoonlijke projecten die mijn vermogen weerspiegelen om complexe
        problemen op te lossen en oplossingen van hoge kwaliteit te leveren.
      </p>

      <p className="pb-4">
        Op deze pagina heb ik een kleine verzameling van mijn favoriete
        persoonlijke projecten verzameld die ik in de afgelopen jaren heb
        gemaakt. Deze projecten vertegenwoordigen naar mijn mening zowel mijn
        vaardigheden als mijn passie voor het bouwen van software het beste. De
        projecten zijn voornamelijk webapplicaties, maar ook enkele compleet
        andere soorten projecten die me uit mijn comfort zone haalden.
      </p>

      {projects?.map((project) => (
        <ProjectPreview
          img={{
            alt: project.image.alt,
            src: `/img/projects/${project.image.src}`,
          }}
          key={project.title}
          label={project.title}
          link={`/projects/${project.path}`}
          path={project.path}
          subtext={project.subtext}
          tags={project.tags}
        />
      ))}
    </ContentContainer>
  )
}
