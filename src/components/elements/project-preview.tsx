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
          sizes="240px"
          src={img.src}
          width={256}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="pb-0">{label}</h3>

        <p>{subtext}</p>

        <div className="flex flex-wrap gap-2 max-md:justify-center">
          {tags.map((tagId) => (
            <IconTag key={tagId} tagId={tagId} />
          ))}
        </div>
      </div>
    </LocaleLink>
  )
}
