"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ExternalLink, Github, Gitlab, Code, 
  Globe, Smartphone, Gamepad, Binary, 
  MonitorPlay, Layout, Pizza, ShoppingCart, 
  Cpu, Puzzle, Building 
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    title: "Sync-O-Theft Game Marketing Website",
    description: "Developed a responsive marketing website for a 2D stealth game using Next.js, React, and TypeScript.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/tarook0/sync",
    live: "https://sync-sjqt.vercel.app/",
    category: "web",
  },
  {
    title: "Bike",
    description: "Browse a wide selection of bicycles by various categories.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/tarook0/Bike/",
    live: "https://bike-gold.vercel.app/",
    category: "web",
  },
  {
    title: "Dentist Management System",
    description: "A system designed to help dental clinics manage patient appointments and treatments.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/tarook0/dentist",
    live: "https://dentist-eight.vercel.app/",
    category: "web",
  },
  {
    title: "Tic Tac Toe",
    description: "Tic-Tac-Toe game with single-player and multiplayer modes.",
    tags: ["React", "TypeScript", "Zustand"],
    github: "https://github.com/tarook0/tic_tac",
    live: null,
    category: "game",
  },
  {
    title: "Fast React Pizza",
    description: "React app for ordering pizza with location positioning.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/tarook0/fast-react-pizza/",
    live: null,
    category: "web",
  },
  {
    title: "Next.js Dashboard",
    description: "Dashboard application built with Next.js App Router.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/tarook0/nextjs-dashboard",
    live: null,
    category: "web",
  },
  {
    title: "E-Shopping App",
    description: "Electronic commercial shop built with Flutter.",
    tags: ["Flutter", "Dart", "Firebase"],
    gitlab: "https://gitlab.com/tarook0/e_shop",
    live: "https://e-shopew.vercel.app",
    category: "mobile",
  },
  {
    title: "Storefront",
    description: "Modern e-commerce platform for businesses.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/tarook0/storfront",
    live: null,
    category: "web",
  },
  {
    title: "Sync-O-Theft Game",
    description: "Stealth 2D computer game with top-down perspective.",
    tags: ["Unity", "C#", "Game Development"],
    github: null,
    live: "https://fivelittletheives.itch.io/sync-o-theft",
    category: "game",
  },
  {
    title: "State Space Search",
    description: "Implemented UCS and A* algorithms in Dart for pathfinding.",
    tags: ["Dart", "Algorithms", "Flutter"],
    github: "https://github.com/tarook0/state_space_search-main",
    live: null,
    category: "algorithm",
  },
  {
    title: "ISA Algorithms",
    description: "Search algorithms in 2D array with Flutter UI.",
    tags: ["Flutter", "Dart", "Algorithms"],
    github: "https://github.com/tarook0/isa_algorithms",
    live: null,
    category: "algorithm",
  },
  {
    title: "Al-Aqsa Mosque Simulation",
    description: "C++ simulation project using OpenGL.",
    tags: ["C++", "OpenGL", "3D Modeling"],
    github: "https://github.com/tarook0/Al-Aqsa",
    live: "https://www.youtube.com/watch?v=mQgjuTec9U8&feature=youtu.be",
    category: "simulation",
  },
  {
    title: "Puzzle Game",
    description: "Puzzle game built with modern OpenGL.",
    tags: ["C++", "OpenGL", "Game Development"],
    github: "https://github.com/tarook0/Puzzle",
    live: null,
    category: "game",
  },
]

const CategoryIcon = ({ category }: { category: string }) => {
  const iconMap = {
    web: Globe,
    mobile: Smartphone,
    game: Gamepad,
    algorithm: Binary,
    simulation: MonitorPlay,
    default: Layout,
  }

  const Icon = iconMap[category as keyof typeof iconMap] || iconMap.default

  return (
    <div className="p-4 bg-primary/10 rounded-xl">
      <Icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" ref={ref} className="w-full py-20 px-4 section-alt-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, personal projects, and contributions.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="game">Games</TabsTrigger>
              <TabsTrigger value="algorithm">Algorithms</TabsTrigger>
              <TabsTrigger value="simulation">Simulations</TabsTrigger>
            </TabsList>
          </div>

          {['all', 'web', 'mobile', 'game', 'algorithm', 'simulation'].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} inView={inView} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
    >
      <Card className="h-full flex flex-col overflow-hidden group theme-card hover:shadow-lg transition-shadow">
        <div className="p-6 flex items-center justify-center bg-muted/50">
          <CategoryIcon category={project.category} />
        </div>
        
        <CardHeader className="pb-2 px-6">
          <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow px-6">
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="flex gap-2 p-6 pt-2">
          {project.github && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" /> Code
              </Link>
            </Button>
          )}
          {project.gitlab && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={project.gitlab} target="_blank" rel="noopener noreferrer">
                <Gitlab className="h-4 w-4 mr-2" /> GitLab
              </Link>
            </Button>
          )}
          {project.live && (
            <Button asChild variant="default" size="sm" className="flex-1">
              <Link href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}