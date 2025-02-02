import iconContentstack from '@/icons/contentstack'
import { Tag } from '@/types/tag'
import iconGo from '@iconify/icons-devicon/go'
import iconNextjs from '@iconify/icons-devicon/nextjs'
import iconNuxtjs from '@iconify/icons-devicon/nuxtjs'
import iconTailwindcss from '@iconify/icons-devicon/tailwindcss'
import iconTypescript from '@iconify/icons-devicon/typescript'
import iconVuejs from '@iconify/icons-devicon/vuejs'
import iconQuestionMarkRhombus from '@iconify/icons-mdi/question-mark-rhombus'

export default function getTag(tag: string): Tag {
  const tagMapping: Record<string, Tag> = {
    nextjs: {
      title: 'NextJS',
      icon: iconNextjs,
      classes: '',
    },
    nuxtjs: {
      title: 'NuxtJS',
      icon: iconNuxtjs,
      classes: '',
    },
    vuejs: {
      title: 'VueJS',
      icon: iconVuejs,
      classes: '',
    },
    typescript: {
      title: 'TypeScript',
      icon: iconTypescript,
      classes: '',
    },
    tailwindcss: {
      title: 'TailwindCSS',
      icon: iconTailwindcss,
      classes: '',
    },
    go: {
      title: 'Go',
      icon: iconGo,
      classes: '',
    },
    contentstack: {
      title: 'Contentstack',
      icon: iconContentstack,
      classes: 'text-[#7c4dff]',
    },
  }

  if (!(tag in tagMapping)) {
    return {
      title: 'Unknown tag',
      icon: iconQuestionMarkRhombus,
      classes: '',
    }
  }

  return tagMapping[tag]
}
