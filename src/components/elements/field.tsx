import { Icon, type IconifyIcon } from '@iconify/react'

type Props = Readonly<{
  label: string
  value: string
  icon?: IconifyIcon | string
}>

export default function Field({ label, value, icon }: Props) {
  return (
    <div className="flex items-center gap-4">
      {icon ? (
        <Icon
          className="h-10 w-10 shrink-0 text-sky-600 dark:text-sky-400 contrast-more:dark:text-sky-300"
          icon={icon}
          ssr
        />
      ) : undefined}

      <div>
        <label>{label}</label>
        {value}
      </div>
    </div>
  )
}
