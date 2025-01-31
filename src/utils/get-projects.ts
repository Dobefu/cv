import { Project } from '@/types/project'

export default function getProjects(): Project[] {
  return [
    {
      title: 'CV',
      image: 'cv.png',
      path: 'cv',
    },
  ]
}
