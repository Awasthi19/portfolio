import { Card, CardContent } from "@/components/ui/card"
import { User, MapPin, Award } from "lucide-react"
import SectionHeading from "@/components/section-heading"

export default function About() {
  return (
    <section id="about" className="pt-20 -mt-20">
      <SectionHeading title="About Me" icon={<User className="h-6 w-6" />} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <Card className="md:col-span-2 bg-gray-900/50 border-red-900/30">
          <CardContent className="pt-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate Full Stack Developer with expertise in Java, Python, and TypeScript. With a strong
              foundation in computer engineering from Kathmandu University, I specialize in building robust and scalable
              applications using modern frameworks like Spring Boot, Django, and Next.js.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              My experience includes developing cloud utility software, inventory management systems, and implementing
              AI-based face recognition solutions. I am dedicated to writing clean, maintainable code and applying best
              practices like Domain-Driven Design and Test-Driven Development.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Currently working as a Python Developer at PixelShift, I am constantly expanding my skills and seeking new
              challenges in software development.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-gray-900/50 border-red-900/30">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">Location</h3>
                  <p className="text-gray-400">Kathmandu, Nepal</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-red-900/30">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <Award className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">Achievements</h3>
                  <ul className="text-gray-400 space-y-1 mt-1">
                    <li>2023 Himalayan Coding Runner Up</li>
                    <li>2023 KUCC Hackathon Winner</li>
                    <li>2024 KUCC Code Camp Runner Up</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
