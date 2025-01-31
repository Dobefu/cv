import { cn } from '@/utils/cn'
import getTag from '@/utils/get-tag'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import LocaleLink from '../utils/locale-link.client'

type Props = Readonly<{
  label: string
  subtext: string
  link: string
  img: string
  tags: string[]
}>

export default function ProjectPreview({
  label,
  subtext,
  link,
  img,
  tags,
}: Props) {
  return (
    <LocaleLink
      className="group my-4 inline-flex w-full items-center gap-4 border-t border-zinc-300 pt-12 max-md:min-w-full max-md:flex-col max-md:text-center md:gap-8 dark:border-zinc-600"
      href={link}
    >
      <div className="overflow-hidden rounded-md drop-shadow-md">
        <Image
          alt=""
          className="transition-transform duration-300 group-hover:scale-105"
          height={160}
          sizes="160px"
          src={img}
          width={256}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="pb-0 md:pb-2">{label}</h3>

        <p>{subtext}</p>

        <div className="flex gap-2">
          {tags.map((tagId) => {
            const tag = getTag(tagId)

            return (
              <span
                className="flex items-center gap-1 rounded-full border border-white bg-zinc-100 px-3 py-1 text-sm shadow dark:border-zinc-700 dark:bg-zinc-900"
                key={tagId}
              >
                <Icon
                  className={cn('h-4 w-4', tag.classes)}
                  icon={tag.icon}
                  ssr
                />
                {tag.title}
              </span>
            )
          })}
        </div>
      </div>
    </LocaleLink>
  )
}
