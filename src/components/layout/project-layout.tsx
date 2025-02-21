import IconTag from '@/components/elements/tag'
import ContentContainer from '@/components/layout/content-container'
import { Project } from '@/types/project'
import iconGithub from '@iconify/icons-mdi/github'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

export type Props = Readonly<{
  children: React.ReactNode
  project: Project
}>

export default function ProjectLayout({ children, project }: Props) {
  return (
    <ContentContainer>
      <h1
        style={{
          viewTransitionName: `project-title-${project.title.toLowerCase().replaceAll(' ', '_')}`,
        }}
      >
        {project.title}
      </h1>

      <Image
        alt={project.image.alt}
        className="mb-8 rounded-md"
        height={240}
        loading="eager"
        priority
        sizes="240px"
        src={`/img/projects/${project.image.src}`}
        style={{
          viewTransitionName: `project-image-${project.title.toLowerCase().replaceAll(' ', '_')}`,
        }}
        title={project.title}
        width={384}
      />

      {children}

      <div className="flex flex-col gap-8 pt-4">
        <div
          className="flex flex-wrap gap-2"
          style={{
            viewTransitionName: `project-tags-${project.title.toLowerCase().replaceAll(' ', '_')}`,
          }}
        >
          {project.tags.map((tagId) => (
            <IconTag key={tagId} tagId={tagId} />
          ))}
        </div>

        <Link
          className="flex items-center gap-2 text-ellipsis text-sky-800 hover:underline dark:text-sky-300"
          href={project.repo}
          target="_blank"
        >
          <Icon className="size-5 shrink-0" icon={iconGithub} ssr />
          {project.repo}
        </Link>
      </div>
    </ContentContainer>
  )
}
