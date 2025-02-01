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
      <h2>{project.title}</h2>

      <Image
        alt=""
        className="mb-8 rounded-md"
        height={240}
        priority
        sizes="240px"
        src={`/img/projects/${project.image}`}
        width={384}
      />

      {children}

      <div className="flex flex-col gap-8 pt-8">
        <div className="flex gap-2">
          {project.tags.map((tagId) => (
            <IconTag key={tagId} tagId={tagId} />
          ))}
        </div>

        <Link
          className="flex items-center gap-2 text-sky-800 hover:underline dark:text-sky-300"
          href={project.repo}
          target="_blank"
        >
          <Icon className="h-5 w-5" icon={iconGithub} ssr />
          {project.repo}
        </Link>
      </div>
    </ContentContainer>
  )
}
