import Image from 'next/image'
import LocaleLink from '../utils/locale-link.client'
import IconTag from './tag'

type Props = Readonly<{
  label: string
  subtext: string
  link: string
  img: {
    src: string
    alt: string
    priority?: boolean
  }
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
      <div className="shrink-0 overflow-hidden rounded-md drop-shadow-md">
        <Image
          alt={img.alt}
          className="transition-transform duration-300 group-hover:scale-105"
          height={144}
          priority={img.priority}
          sizes="240px"
          src={img.src}
          style={{
            viewTransitionName: `project-image-${label.toLowerCase().replaceAll(' ', '_')}`,
          }}
          width={256}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2
          className="pb-0"
          style={{
            viewTransitionName: `project-title-${label.toLowerCase().replaceAll(' ', '_')}`,
          }}
        >
          {label}
        </h2>

        <p className="pb-0">{subtext}</p>

        <div
          className="flex flex-wrap gap-2 max-md:justify-center"
          style={{
            viewTransitionName: `project-tags-${label.toLowerCase().replaceAll(' ', '_')}`,
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
