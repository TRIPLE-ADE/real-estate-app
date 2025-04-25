interface Safety {
  securityCameras: string
  smokeAlarm: string
}

interface PropertySafetyProps {
  safety: Safety
}

export function PropertySafety({ safety }: PropertySafetyProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Safety & Property</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-700">Security cameras</span>
          <span className="text-gray-700">{safety.securityCameras}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Smoke alarm</span>
          <span className="text-gray-700">{safety.smokeAlarm}</span>
        </div>
      </div>
    </div>
  )
}
