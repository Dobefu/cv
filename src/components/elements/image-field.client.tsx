'use client'

import Image from 'next/image'

type Props = Readonly<{
  label: string
  text: string
  subtext: string
  link?: string
  img?: {
    src: string
    alt: string
    title: string
  }
}>

export default function ImageField({ label, text, subtext, link, img }: Props) {
  const Tag = link ? 'a' : 'div'

  return (
    <Tag
      className="flex w-full gap-4 py-4 max-sm:flex-col"
      href={link}
      target={link ? '_blank' : undefined}
    >
      {!!img && (
        <Image
          alt={img.alt}
          className="mb-auto shrink-0"
          height={100}
          sizes="100px"
          src={img.src}
          title={img.title}
          width={100}
        />
      )}

      <div className="flex flex-col justify-center gap-1">
        <label className="text-lg">{label}</label>

        <p>{text}</p>
        <p className="pb-1 text-sm">{subtext}</p>
      </div>
    </Tag>
  )
}
