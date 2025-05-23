import type React from "react"

interface SectionHeadingProps {
  title: string
  icon?: React.ReactNode
}

export default function SectionHeading({ title, icon }: SectionHeadingProps) {
  return (
    <div className="flex items-center space-x-2 mb-6">
      {icon && <div className="text-red-500">{icon}</div>}
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="flex-grow h-px bg-red-900/30 ml-4"></div>
    </div>
  )
}
