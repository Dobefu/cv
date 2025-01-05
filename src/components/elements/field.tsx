type Props = Readonly<{
  label: string
  value: string
}>

export default function Field({ label, value }: Props) {
  return (
    <div className="inline-block pb-4">
      <label>{label}</label>
      {value}
    </div>
  )
}
