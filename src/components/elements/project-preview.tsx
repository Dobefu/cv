import Image from 'next/image'
import LocaleLink from '../utils/locale-link.client'

type Props = Readonly<{
  label: string
  subtext: string
  link: string
  img: string
}>

export default function ProjectPreview({ label, subtext, link, img }: Props) {
  return (
    <LocaleLink
      className="my-4 inline-flex w-full items-center gap-8 max-md:min-w-full"
      href={link}
    >
      <Image
        alt=""
        className="rounded-md drop-shadow-md"
        height={160}
        sizes="160px"
        src={img}
        width={256}
      />

      <div className="flex flex-col gap-1">
        <h3 className="pb-2">{label}</h3>

        <p>{subtext}</p>
      </div>
    </LocaleLink>
  )
}
