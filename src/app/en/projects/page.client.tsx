'use client'

import ImageField from '@/components/elements/image-field'
import useLocale from '@/hooks/use-locale'
import { Project } from '@/types/project'

type Props = Readonly<{
  projects: Project[]
}>

export default function Client({ projects }: Props) {
  const { locale, t } = useLocale()

  return (
    <>
      <h2>{t('projects.title')}</h2>

      {projects?.map((project) => (
        <ImageField
          img={{
            src: `/img/projects/${project.image}`,
            alt: '',
          }}
          key={project.title}
          label={project.title}
          link={`/${locale.code}/projects/${project.path}`}
          subtext=""
          text=""
        />
      ))}
    </>
  )
}
