import { Project } from '@/types/project'
import getProjects from './get-projects'

export default function getProjectFromUrl(
  url: string,
  locale: string,
): { project?: Project; linkedData?: object } {
  const page = url?.split('/').reverse()[0]
  const projects = getProjects(locale)

  /* v8 ignore start */
  if (!projects) {
    return {}
  }
  /* v8 ignore stop */

  const project = projects.find((p) => p.path === page)
  const appUrl = process.env.NEXT_PUBLIC_APP_URL

  return {
    project,
    linkedData: project
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: project.title,
          image: [`${appUrl}/img/projects/${project.image.src}`],
          author: [
            {
              '@type': 'Person',
              name: 'Connor van Spronssen',
              url: appUrl,
            },
          ],
        }
      : undefined,
  }
}
