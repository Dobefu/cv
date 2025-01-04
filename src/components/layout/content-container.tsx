type Props = Readonly<{
  children: React.ReactNode
}>

export default function ContentContainer({ children }: Props) {
  return (
    <div className="relative px-4">
      <div className="container mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white/80 p-12 shadow-md backdrop-blur-lg contrast-more:bg-white dark:bg-neutral-800/90 contrast-more:dark:bg-neutral-900 print:bg-white">
        {children}
      </div>
    </div>
  )
}
