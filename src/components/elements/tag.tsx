import getTag from '@/utils/get-tag'
import { Icon } from '@iconify/react'

type Props = Readonly<{
  tagId: string
}>

export default function IconTag({ tagId }: Props) {
  const tag = getTag(tagId)

  return (
    <span className="flex items-center gap-1 rounded-full border border-white bg-white px-3 py-1 text-sm shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <span className="size-4">
        <Icon className={tag.classes} icon={tag.icon} />
      </span>

      {tag.title}
    </span>
  )
}
