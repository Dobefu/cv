'use client'

type Props = Readonly<{
  children: React.ReactNode
}>

export default function ContentContainer({ children }: Props) {
  return (
    <div className="relative px-4">
      <div className="content-container">{children}</div>
    </div>
  )
}
