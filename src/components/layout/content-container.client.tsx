'use client'

type Props = Readonly<{
  children: React.ReactNode
}>

export default function ContentContainer({ children }: Props) {
  return (
    <div className="relative px-4">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-md dark:bg-zinc-800">
        {children}
      </div>
    </div>
  )
}
