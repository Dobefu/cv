import Image from 'next/image'
import LocaleLink from '../utils/locale-link.client'
import IconTag from './tag'

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
          {tags.map((tagId) => (
            <IconTag key={tagId} tagId={tagId} />
          ))}
        </div>
      </div>
    </LocaleLink>
  )
}
