import { Code, Database, Server, Layout, Cpu, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-red-500" />,
      skills: ["Java", "Spring Boot", "Python", "FastAPI", "Django REST"],
    },
    {
      title: "Frontend Development",
      icon: <Layout className="h-6 w-6 text-red-500" />,
      skills: ["TypeScript", "JavaScript", "CSS", "Next.js", "Electron"],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-red-500" />,
      skills: ["PostgreSQL", "MongoDB", "SQLite"],
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6 text-red-500" />,
      skills: ["C/C++", "Object-Oriented Programming", "Data Structures and Algorithms"],
    },
    {
      title: "Systems",
      icon: <Cpu className="h-6 w-6 text-red-500" />,
      skills: ["Operating Systems", "Computer Networks", "Computer Architecture", "Microprocessor"],
    },
    {
      title: "Familiar With",
      icon: <Lightbulb className="h-6 w-6 text-red-500" />,
      skills: ["Machine Learning", "TensorFlow", "CNN"],
    },
  ]

  return (
    <section id="skills" className="pt-20 -mt-20 dots-pattern">
      <SectionHeading title="Skills" icon={<Code className="h-6 w-6" />} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="overflow-hidden border-t-4 border-t-red-600 bg-gray-900/50 border-red-900/30">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2 text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-red-900/20 text-gray-200 border border-red-500/30 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
