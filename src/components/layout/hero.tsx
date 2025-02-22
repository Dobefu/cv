import iconChevronRight from '@iconify/icons-mdi/chevron-right'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import LocaleLink from '../utils/locale-link.client'

type Props = Readonly<{
  title: string
  subtitle: string
  img?: {
    src: string
    alt: string
    height: number
    width: number
  }
  imgBg?: {
    src: string
    alt: string
  }
  cta?: {
    title: string
    href: string
  }
}>

export default function Hero({ title, subtitle, img, imgBg, cta }: Props) {
  return (
    <section className="relative -mt-28 -mb-8 h-[30vh] min-h-[450px] w-full">
      {!!imgBg && (
        <Image
          alt={imgBg.alt}
          className="absolute inset-0 h-[30vh] min-h-[450px] w-screen object-cover contrast-more:brightness-75"
          fill
          loading="eager"
          priority
          quality={70}
          src={imgBg.src}
          title={`${title} - ${subtitle}`}
        />
      )}

      <div className="absolute top-0 h-full w-full bg-black/20 p-4 max-sm:p-2">
        <div className="mx-auto h-full max-w-5xl p-8">
          <div className="flex h-full text-white">
            <div className="mt-8 flex h-full flex-col justify-center gap-2">
              <h1 className="text-5xl font-medium text-white drop-shadow-md max-md:text-4xl max-sm:text-3xl">
                {title}
              </h1>
              <h2 className="text-4xl text-white drop-shadow-md max-md:text-2xl max-sm:text-xl">
                {subtitle}
              </h2>
              {cta ? (
                <LocaleLink
                  className="me-auto inline-flex items-center gap-2 rounded-lg border border-transparent bg-sky-700 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-800 focus:bg-sky-800 focus:outline-hidden sm:px-4 sm:py-3 print:hidden"
                  href={cta.href}
                >
                  <Icon className="size-5" icon={iconChevronRight} ssr />

                  {cta.title}
                </LocaleLink>
              ) : undefined}
            </div>

            {!!img && (
              <Image
                alt={img.alt}
                className="relative mx-auto mt-auto -mb-4 w-64 flex-none origin-bottom drop-shadow-md transition-transform active:scale-95 max-sm:-ms-8 max-sm:-mb-2 max-sm:w-32"
                height={256}
                loading="eager"
                priority
                quality={70}
                sizes="(max-width: 640px) 128px, (max-width: 768px) 256px, (max-width: 1024px) 512px"
                src={img.src}
                title={`${title} - ${subtitle}`}
                width={256}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
