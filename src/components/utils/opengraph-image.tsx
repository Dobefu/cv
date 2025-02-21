import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export type Props = Readonly<{
  title: string
}>

export default async function Image({ title }: Props) {
  const imgLogo = Uint8Array.from(
    await readFile(join(process.cwd(), '/public/logo-128.png')),
  ).buffer
  const imgAvatar = Uint8Array.from(
    await readFile(join(process.cwd(), '/public/img/avatar-transparent.png')),
  ).buffer

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#1b1718',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          height: '100%',
          padding: '3rem',
          textAlign: 'center',
          textWrap: 'balance',
          width: '100%',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          height="64"
          src={imgLogo as unknown as string}
          style={{ borderRadius: '50%' }}
        />

        <div
          style={{
            fontSize: '2.5rem',
          }}
        >
          {title}
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          height="256"
          src={imgAvatar as unknown as string}
          style={{
            bottom: '0',
            position: 'absolute',
            right: '3rem',
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
