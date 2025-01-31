import { cn } from '@/utils/cn'
import getTag from '@/utils/get-tag'
import { Icon } from '@iconify/react'

type Props = Readonly<{
  tagId: string
}>

export default function IconTag({ tagId }: Props) {
  const tag = getTag(tagId)

  return (
    <span className="flex items-center gap-1 rounded-full border border-white bg-zinc-100 px-3 py-1 text-sm shadow dark:border-zinc-700 dark:bg-zinc-900">
      <Icon className={cn('h-4 w-4', tag.classes)} icon={tag.icon} ssr />
      {tag.title}
    </span>
  )
}
