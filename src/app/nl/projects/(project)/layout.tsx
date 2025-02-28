'use client'

import ProjectLayout from '@/components/layout/project-layout'
import getProjectFromUrl from '@/utils/get-project-from-url'
import { notFound, usePathname } from 'next/navigation'

export type Props = Readonly<{
  children: React.ReactNode
}>

export default function Layout({ children }: Props) {
  const url = usePathname()
  const { project, linkedData } = getProjectFromUrl(url, 'nl')
  if (!project) notFound()

  return (
    <ProjectLayout project={project}>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(linkedData) }}
        type="application/ld+json"
      />

      {children}
    </ProjectLayout>
  )
}
