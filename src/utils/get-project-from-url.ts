import { Project } from '@/types/project'
import getProjects from './get-projects'

export default function getProjectFromUrl(
  url: string,
  locale: string,
): Project | undefined {
  const page = url?.split('/').reverse()[0]
  const projects = getProjects(locale)
  return projects.find((p) => p.path === page)
}
