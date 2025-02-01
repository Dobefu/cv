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
        repo: 'https://github.com/Dobefu/cv',
        path: 'cv',
      },
    ],
    nl: [
      {
        title: 'CV',
        subtext:
          'Mijn persoonlijke CV en de website die momenteel wordt bekeken',
        image: 'cv.png',
        tags: ['nextjs', 'typescript', 'tailwindcss'],
        repo: 'https://github.com/Dobefu/cv',
        path: 'cv',
      },
    ],
  }

  return projects[locale]
}
