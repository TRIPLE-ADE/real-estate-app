import { Clock, Users, PawPrint } from "lucide-react"

interface Rule {
  title: string
  description: string
}

interface PropertyRulesProps {
  rules: Rule[]
}

export function PropertyRules({ rules }: PropertyRulesProps) {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "check-in":
      case "check-out":
        return <Clock className="h-5 w-5 text-gray-600" />
      case "guests":
        return <Users className="h-5 w-5 text-gray-600" />
      case "pets":
        return <PawPrint className="h-5 w-5 text-gray-600" />
      default:
        return <Clock className="h-5 w-5 text-gray-600" />
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">House Rules</h2>
      <div className="space-y-4">
        {rules.map((rule, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-3">{getIcon(rule.title)}</div>
            <div>
              <div className="text-sm text-gray-600">{rule.title}:</div>
              <div className="text-gray-700">{rule.description}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="text-gray-600 font-medium mt-6 hover:underline">Show more</button>
    </div>
  )
}
