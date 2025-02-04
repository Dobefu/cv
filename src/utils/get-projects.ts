import projects from '@/projects.json'
import { Project } from '@/types/project'

export default function getProjects(locale: string): Project[] {
  return (projects as Record<string, Project[]>)[locale]
}
