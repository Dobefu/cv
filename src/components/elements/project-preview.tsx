import Image from 'next/image'
import LocaleLink from '../utils/locale-link.client'
import IconTag from './tag.client'

type Props = Readonly<{
  label: string
  subtext: string
  path: string
  link: string
  img: {
    src: string
    alt: string
  }
  tags: string[]
}>

export default function ProjectPreview({
  label,
  subtext,
  path,
  link,
  img,
  tags,
}: Props) {
  return (
    <LocaleLink
      className="group mt-4 flex w-full items-center gap-4 border-t border-zinc-300 pt-8 pb-4 max-md:min-w-full max-md:flex-col max-md:text-center md:gap-8 dark:border-zinc-600"
      href={link}
    >
      <div className="shrink-0 overflow-hidden rounded-lg drop-shadow-md">
        <Image
          alt={img.alt}
          className="transition-transform duration-300 group-hover:scale-105"
          height={144}
          src={img.src}
          style={{
            viewTransitionName: `project-image-${path}`,
          }}
          title={label}
          width={256}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2
          className="pb-0"
          style={{
            viewTransitionName: `project-title-${path}`,
          }}
        >
          {label}
        </h2>

        <p
          style={{
            viewTransitionName: `project-subtext-${path}`,
          }}
        >
          {subtext}
        </p>

        <div
          className="flex flex-wrap gap-2 max-md:justify-center"
          style={{
            viewTransitionName: `project-tags-${path}`,
          }}
        >
          {tags.map((tagId) => (
            <IconTag key={tagId} tagId={tagId} />
          ))}
        </div>
      </div>
    </LocaleLink>
  )
}
