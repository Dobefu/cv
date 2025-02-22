import Label from './label'
import ProgressBarClient from './progress-bar.client'

type Props = Readonly<{
  label: string
  percentage: number
}>

export default function ProgressBar({ label, percentage }: Props) {
  return (
    <div className="w-full max-md:min-w-full">
      <Label>{label}</Label>

      <div className="h-12 pt-2 pb-4">
        <ProgressBarClient percentage={percentage} />
      </div>
    </div>
  )
}
