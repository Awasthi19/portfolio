import { Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"

export default function Experience() {
  const experiences = [
    {
      title: "Python Developer Remote Intern",
      company: "PixelShift - Carpediam Nepal",
      period: "Jan 2025 – Current",
      location: "Lalitpur, Nepal",
      description: [
        "Designed and implemented RESTful APIs using FastAPI for internal services.",
        "Applied Domain-Driven Design (DDD) and Test-Driven Development (TDD) to structure scalable and maintainable code.",
        "Improved Python development skills through task-based learning and mentorship from senior developers.",
        "Working on payment integration module using the Ports and Adapters (Hexagonal) architecture.",
      ],
    },
    {
      title: "Full Stack Web Development Remote Intern",
      company: "Prodigy InfoTech",
      period: "Jun 2024 – Jul 2024",
      location: "Remote",
      description: [
        "Developed backend services using Python and Django framework for a web application project.",
        "Implemented RESTful APIs to facilitate communication between frontend and backend systems.",
      ],
    },
  ]

  return (
    <section id="experience" className="pt-20 -mt-20">
      <SectionHeading title="Experience" icon={<Briefcase className="h-6 w-6" />} />

      <div className="mt-8 space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="overflow-hidden border-l-4 border-l-red-600 bg-gray-900/50 border-red-900/30">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-red-500 font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-400 text-sm md:text-right">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
