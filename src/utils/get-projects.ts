import { Project } from '@/types/project'

export default function getProjects(locale: string): Project[] {
  const projects: Record<string, Project[]> = {
    en: [
      {
        title: 'CV',
        subtext:
          'My personal CV and the website that is currently being viewed',
        image: 'cv.png',
        tags: ['nextjs', 'typescript', 'tailwindcss'],
        path: 'cv',
      },
    ],
    nl: [
      {
        title: 'CV',
        subtext:
          'Mijn persoonlijke CV en de website die momenteel wordt bekeken',
        image: 'cv.png',
        tags: ['nextjs'],
        path: 'cv',
      },
    ],
  }

  return projects[locale]
}
