'use client'

import { Icon, type IconifyIcon } from '@iconify/react'

type Props = Readonly<{
  label: string
  value: string
  icon?: IconifyIcon | string
}>

export default function Field({ label, value, icon }: Props) {
  return (
    <div className="flex w-full items-center gap-4">
      {icon ? (
        <div className="size-8">
          <Icon
            className="size-8 shrink-0 text-sky-700 dark:text-sky-400"
            icon={icon}
          />
        </div>
      ) : undefined}

      <div>
        <label>{label}</label>
        <p>{value}</p>
      </div>
    </div>
  )
}
