import { FolderGit2, ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"

export default function Projects() {
  const projects = [
    {
      title: "PLANT GO",
      subtitle: "AR‑Powered Plant Identification Game built with Go",
      description: [
        "Designed an augmented‑reality scavenger hunt where players identify real‑world plants to earn rewards, guided by an in‑game AR assistant.",
        "Implemented a high‑performance backend in Go using Gorilla/Mux and gRPC for real‑time gameplay services and concurrency handling.",
        "Integrated a TensorFlow‑serving CNN model to classify plants from camera frames sent by the mobile client.",
        "Developed core gameplay loops mirroring the use‑case diagram: start game, view map, get hints, open camera, process image, receive response, and reward distribution.",
        "Containerised the stack with Docker and deployed on Kubernetes; used PostgreSQL for persistence and Redis for session state caching.",
      ],
      technologies: ["Go", "gRPC", "PostgreSQL", "TensorFlow", "Docker", "Kubernetes", "ARCore/ARKit"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "BIJULI WORKSPACE",
      subtitle: "Cloud Utility Software for Electricity Offices",
      description: [
        "Developed the backend using Java and the Spring Boot framework for enhanced performance and robust support for financial operations and reporting.",
        "Built the frontend using TypeScript and the Electron.js framework for a desktop application.",
        "Developed a native mobile application for meter reading and receipt printing using a connected thermal printer.",
        "Deployed the backend on AWS using a VPS server and utilized PostgreSQL as the database.",
      ],
      technologies: ["Java", "Spring Boot", "TypeScript", "Electron.js", "PostgreSQL", "AWS"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "RUPCHITRAN",
      subtitle: "Face Recognition and Emotion Detection",
      description: [
        "Developed the backend using Python and Django for efficient recognition and detection.",
        "Built an emotion detection AI model based on CNN architecture.",
        "Implemented features for real‑time detection and attendance systems.",
      ],
      technologies: ["Python", "Django", "CNN", "Machine Learning", "TensorFlow"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "VEGGIE VAULT",
      subtitle: "Inventory Management System",
      description: [
        "Developed backend and frontend using C++, Qt, and SQLite for efficient inventory management.",
        "Implemented features for inventory tracking, reporting, notifications, and data visualization.",
      ],
      technologies: ["C++", "Qt", "SQLite", "Data Visualization"],
      links: {
        github: "#",
        live: "#",
      },
    },
  ]

  return (
    <section id="projects" className="pt-20 -mt-20 geometric-pattern">
      <SectionHeading title="Projects" icon={<FolderGit2 className="h-6 w-6" />} />

      <div className="mt-8 grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden bg-gray-900/50 border-red-900/30">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-red-500 font-medium mt-1">{project.subtitle}</p>

                  <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
                    {project.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-red-900/20 text-gray-200 border border-red-500/30 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 md:mt-0 md:ml-4 flex md:flex-col gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-red-500/50 text-white hover:bg-red-900/30"
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white">
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
