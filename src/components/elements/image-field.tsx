import Image from 'next/image'

type Props = Readonly<{
  label: string
  text: string
  subtext: string
  link?: string
  img?: {
    src: string
    alt: string
  }
}>

export default function ImageField({ label, text, subtext, link, img }: Props) {
  const Tag = link ? 'a' : 'div'

  return (
    <Tag
      className="my-4 inline-flex w-full items-center gap-4 max-md:min-w-full"
      href={link}
      target={link ? '_blank' : undefined}
    >
      {!!img && (
        <Image
          alt={img.alt}
          className="drop-shadow-md"
          height={100}
          sizes="100px"
          src={img.src}
          width={100}
        />
      )}

      <div className="flex flex-col gap-1">
        <p className="text-lg font-semibold text-sky-700 dark:text-sky-500">
          {label}
        </p>
        <p>{text}</p>
        <p className="text-sm">{subtext}</p>
      </div>
    </Tag>
  )
}
