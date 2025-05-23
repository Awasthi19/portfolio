import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black dark:from-gray-950 dark:to-black">
      <Navbar />
      <Hero />

      <div className="container mx-auto px-4 py-8 space-y-24">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>

      <Footer />
    </div>
  )
}
