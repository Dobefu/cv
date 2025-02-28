import IconTag from '@/components/elements/tag.client'
import ContentContainer from '@/components/layout/content-container'
import { Project } from '@/types/project'
import iconGithub from '@iconify/icons-mdi/github'
import iconGitlab from '@iconify/icons-mdi/gitlab'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useMemo } from 'react'
import LocaleLink from '../utils/locale-link.client'

export type Props = Readonly<{
  children: React.ReactNode
  project: Project
}>

export default function ProjectLayout({ children, project }: Props) {
  const repoIcon = useMemo(() => {
    if (
      project.repo.includes('git.drupalcode') ||
      project.repo.includes('gitlab.com')
    ) {
      return iconGitlab
    }

    return iconGithub
  }, [project.repo])

  return (
    <ContentContainer>
      <h1
        style={{
          viewTransitionName: `project-title-${project.path}`,
        }}
      >
        {project.title}
      </h1>

      <Image
        alt={project.image.alt}
        className="mb-8 rounded-lg"
        height={216}
        loading="eager"
        priority
        src={`/img/projects/${project.image.src}`}
        style={{
          viewTransitionName: `project-image-${project.path}`,
        }}
        title={project.title}
        width={384}
      />

      <p
        className="pb-4"
        style={{
          viewTransitionName: `project-subtext-${project.path}`,
        }}
      >
        {project.subtext}
      </p>

      {children}

      <div className="flex flex-col gap-8 pt-4">
        <div
          className="flex flex-wrap gap-2"
          style={{
            viewTransitionName: `project-tags-${project.path}`,
          }}
        >
          {project.tags.map((tagId) => (
            <IconTag key={tagId} tagId={tagId} />
          ))}
        </div>

        <LocaleLink
          className="flex items-center gap-2 break-all text-sky-800 hover:underline dark:text-sky-400"
          href={project.repo}
        >
          <Icon className="size-5 shrink-0" icon={repoIcon} ssr />

          {project.repo}
        </LocaleLink>
      </div>
    </ContentContainer>
  )
}
