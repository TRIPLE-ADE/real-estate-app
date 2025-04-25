interface PropertyCancellationProps {
  policy: string
}

export function PropertyCancellation({ policy }: PropertyCancellationProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Cancellation Policy</h2>
      <p className="text-gray-700">{policy}</p>
    </div>
  )
}
