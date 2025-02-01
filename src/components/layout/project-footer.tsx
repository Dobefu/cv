import IconTag from '@/components/elements/tag'
import { Project } from '@/types/project'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export type Props = Readonly<{
  project: Project
}>

export default async function ProjectFooter({ project }: Props) {
  return (
    <div className="flex flex-col gap-8 pt-8">
      <div className="flex gap-2">
        {project.tags.map((tagId) => (
          <IconTag key={tagId} tagId={tagId} />
        ))}
      </div>

      <Link
        className="flex items-center gap-2 text-sky-800 hover:underline dark:text-sky-300"
        href={project.repo}
      >
        <Icon className="h-5 w-5" icon="mdi:github" ssr />
        {project.repo}
      </Link>
    </div>
  )
}
