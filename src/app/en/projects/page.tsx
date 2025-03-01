import ProjectPreview from '@/components/elements/project-preview'
import ContentContainer from '@/components/layout/content-container.client'
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
      <h1>Projects I&apos;ve worked on</h1>

      <p className="pb-4">
        As a passionate full-stack web engineer, I have honed my skills across a
        wide range of programming languages and frameworks. Over the years, I
        have worked on diverse professional and personal projects that reflect
        my ability to solve complex problems and deliver high-quality solutions.
      </p>

      <p className="pb-4">
        On this page, I have gathered a small collection of my favourite
        personal projects that I have made over the years. I think that these
        project best represent both my skills and my passion for building
        software. They include mostly web applications, but also some completely
        different types of development projects that pushed me outside of my
        comfort zone.
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
