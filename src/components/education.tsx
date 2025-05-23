import { GraduationCap, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"

export default function Education() {
  const education = [
    {
      degree: "BEng • Computer Engineering",
      institution: "Kathmandu University",
      location: "Kathmandu, Nepal",
      period: "Dec 2022",
      details: ["School of Engineering", "Cum. GPA: 3.96 / 4.0", "Major GPA: 4.0 / 4.0"],
    },
    {
      degree: "High School Degree",
      institution: "Nepal Education Board",
      location: "Dhangadhi, Nepal",
      period: "May 2021",
      details: [],
    },
  ]

  const coursework = [
    "Data Structures and Algorithms",
    "Object Oriented Programming",
    "C/C++",
    "Database Systems",
    "Operating Systems",
    "Computer Networks",
    "Computer Architecture",
    "Microprocessor",
  ]

  return (
    <section id="education" className="pt-20 -mt-20 dots-pattern">
      <SectionHeading title="Education" icon={<GraduationCap className="h-6 w-6" />} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2 space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-red-600 bg-gray-900/50 border-red-900/30">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-red-500 font-medium">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-gray-400 text-sm md:text-right">
                    <p>{edu.period}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>

                {edu.details.length > 0 && (
                  <ul className="mt-3 space-y-1 text-gray-300">
                    {edu.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Card className="overflow-hidden border-t-4 border-t-red-600 bg-gray-900/50 border-red-900/30 h-full">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-5 w-5 text-red-500" />
                <h3 className="text-xl font-semibold ml-2 text-white">Coursework</h3>
              </div>

              <ul className="space-y-2 text-gray-300">
                {coursework.map((course, courseIndex) => (
                  <li key={courseIndex} className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 mt-2 mr-2"></span>
                    {course}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
