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
      {
        title: 'Contentstack Bridge',
        subtext:
          'Adds a layer between your application and Contentstack, to provide some much-needed conveniences',
        image: 'csb.png',
        tags: ['go', 'contentstack'],
        repo: 'https://github.com/Dobefu/csb',
        path: 'csb',
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
      {
        title: 'Contentstack Bridge',
        subtext:
          'Voegt een laag toe tussen een applicatie en Contentstack, om een aantal onmisbare gemakken te leveren',
        image: 'csb.png',
        tags: ['go', 'contentstack'],
        repo: 'https://github.com/Dobefu/csb',
        path: 'csb',
      },
    ],
  }

  return projects[locale]
}
