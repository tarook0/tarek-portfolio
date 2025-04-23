import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import BackgroundDecoration from "@/components/background-decoration"

export default function Home() {
  return (
    <div className="flex flex-col items-center relative">
      <BackgroundDecoration />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
