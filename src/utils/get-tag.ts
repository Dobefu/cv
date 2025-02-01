import { Tag } from '@/types/tag'

export default function getTag(tag: string): Tag {
  const tagMapping: Record<string, Tag> = {
    nextjs: {
      title: 'NextJS',
      icon: 'devicon:nextjs',
      classes: '',
    },
    typescript: {
      title: 'TypeScript',
      icon: 'devicon:typescript',
      classes: '',
    },
    tailwindcss: {
      title: 'TailwindCSS',
      icon: 'devicon:tailwindcss',
      classes: '',
    },
    go: {
      title: 'Go',
      icon: 'devicon:go',
      classes: '',
    },
    contentstack: {
      title: 'Contentstack',
      icon: 'simple-icons:contentstack',
      classes: 'text-[#7c4dff]',
    },
  }

  if (!(tag in tagMapping)) {
    return {
      title: 'Unknown tag',
      icon: 'mdi:question-mark-rhombus',
      classes: '',
    }
  }

  return tagMapping[tag]
}
