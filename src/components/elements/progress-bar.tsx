import Label from './label'
import ProgressBarClient from './progress-bar.client'

type Props = Readonly<{
  label: string
  percentage: number
}>

export default function ProgressBar({ label, percentage }: Props) {
  return (
    <div className="inline-block w-full max-md:min-w-full">
      <Label>{label}</Label>

      <div className="mt-2 mb-4 h-6">
        <ProgressBarClient percentage={percentage} />
      </div>
    </div>
  )
}
