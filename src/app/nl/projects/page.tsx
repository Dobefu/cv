import ProjectPreview from '@/components/elements/project-preview'
import ContentContainer from '@/components/layout/content-container'
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
      <h2>Projecten</h2>

      <div className="flex flex-col gap-2 pb-8 text-gray-700 dark:text-gray-200">
        <p>
          Als een gepassioneerde full-stack web engineer heb ik mijn
          vaardigheden verbeterd over een breed spectrum aan programmeertalen en
          frameworks. Over de jaren heen heb ik gewerkt aan diverse
          professionele en persoonlijke projecten die mijn vermogen
          weerspiegelen om complexe problemen op te lossen en oplossingen van
          hoge kwaliteit te leveren.
        </p>

        <p>
          Ontdek de onderstaande projecten om een beter idee te krijgen van hoe
          ik mijn expertise inzet voor praktische uitdagingen.
        </p>
      </div>

      {projects?.map((project) => (
        <ProjectPreview
          img={`/img/projects/${project.image}`}
          key={project.title}
          label={project.title}
          link={`/projects/${project.path}`}
          subtext={project.subtext}
        />
      ))}
    </ContentContainer>
  )
}
