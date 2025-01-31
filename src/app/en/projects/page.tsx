import ProjectPreview from '@/components/elements/project-preview'
import ContentContainer from '@/components/layout/content-container'
import getProjects from '@/utils/get-projects'

export const metadata = {
  title: 'Projects',
  description:
    'As a passionate full-stack web engineer, I have honed my skills. Explore my projects to see how I transform ideas into impactful web experiences.',
}

export default function Projects() {
  const projects = getProjects('en')

  return (
    <ContentContainer>
      <h2>Projects</h2>

      <div className="flex flex-col gap-2 pb-8 text-gray-700 dark:text-gray-200">
        <p>
          As a passionate full-stack web engineer, I have honed my skills across
          a wide range of programming languages and frameworks. Over the years,
          I have worked on diverse professional and personal projects that
          reflect my ability to solve complex problems and deliver high-quality
          solutions.
        </p>

        <p>
          Explore the projects below to get a better sense of how I apply my
          expertise to real-world challenges.
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
