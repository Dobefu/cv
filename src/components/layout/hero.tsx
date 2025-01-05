import Image from 'next/image'

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
    height: number
    width: number
  }
}>

export default function Hero({ title, subtitle, img, imgBg }: Props) {
  return (
    <section className="relative -mb-8 -mt-28 h-[30vh] min-h-[450px] w-full">
      {!!imgBg && (
        <Image
          alt={imgBg.alt}
          className="absolute inset-0 h-[30vh] min-h-[450px] w-screen object-cover contrast-more:brightness-75"
          height={imgBg.height}
          src={imgBg.src}
          width={imgBg.width}
        />
      )}

      <div className="absolute top-0 h-full w-full bg-gradient-to-t from-transparent to-black/25 p-4 max-sm:p-2">
        <div className="container mx-auto h-full max-w-5xl p-8">
          <div className="flex h-full text-white">
            <div className="flex h-full flex-col justify-center gap-2">
              <h1 className="text-5xl font-semibold text-white drop-shadow-md max-md:text-4xl max-sm:text-3xl">
                {title}
              </h1>
              <h2 className="text-4xl text-white drop-shadow-md max-md:text-3xl max-sm:text-2xl">
                {subtitle}
              </h2>
            </div>

            {!!img && (
              <Image
                alt={img.alt}
                className="relative mx-auto -mb-4 mt-auto w-64 flex-none origin-bottom drop-shadow-md transition-all active:scale-95 max-sm:-mb-2 max-sm:w-32"
                height={256}
                sizes="sm:128px md:256px lg:512px"
                src={img.src}
                width={256}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
