import { Project } from '@/types/project'
import fs from 'node:fs/promises'

export default async function getProjects(locale: string): Promise<Project[]> {
  let path: string
  console.log(process.env.NODE_ENV)
  console.log(await fs.readdir('.'))
  console.log(await fs.readdir('.next/server'))
  if (process.env.NODE_ENV === 'development') {
    path = `src/app/${locale}/projects`
  } else {
    path = `${locale}/projects`
  }

  const files = await fs.readdir(path, {
    recursive: true,
  })

  const projects: Project[] = []
  const projectFiles = files.filter((file) => file.endsWith('/page.mdx'))

  for await (const projectFile of projectFiles) {
    const project = (await import(`@/app/${locale}/projects/${projectFile}`))
      .metadata
    project['path'] = projectFile.replace('/page.mdx', '')

    projects.push(project)
  }

  return projects
}
