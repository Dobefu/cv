import { Project } from '@/types/project'
import getProjects from './get-projects'

export default function getProjectFromUrl(
  url: string,
  locale: string,
): { project?: Project; linkedData?: object } {
  const page = url?.split('/').reverse()[0]
  const projects = getProjects(locale)
  const project = projects.find((p) => p.path === page)

  return {
    project,
    linkedData: project
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: project.title,
          image: [project.image.src],
          author: [
            {
              '@type': 'Person',
              name: 'Connor van Spronssen',
            },
          ],
        }
      : undefined,
  }
}
