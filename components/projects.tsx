"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink, Github, Gitlab,
  Globe, Smartphone, Gamepad, Binary,
  MonitorPlay, Layout, Bot,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    title: "Rashad Law Chatbot",
    description:
      "AI-powered legal assistant chatbot with natural language Q&A, markdown-formatted legal documents, and session management, built with a Next.js frontend and a NestJS backend.",
    tags: ["Next.js", "NestJS", "AI/NLP", "TypeScript"],
    gitlab: "https://gitlab.com/tarook0/legal-backend/-/tree/master?ref_type=heads",
    live: "https://final-rashad-law-chatbot.vercel.app/",
    category: "ai",
  },
  {
    title: "Fitness Programs App",
    description: "Cross-platform fitness app with personalized workout plans, Firebase authentication, real-time data sync, and progress tracking.",
    tags: ["Next.js", "Firebase", "React"],
    github: null,
    live: "https://fitness-programs-app.vercel.app/",
    category: "web",
  },
  {
    title: "Sync-O-Theft Game Marketing Website",
    description: "Developed a responsive marketing website for a 2D stealth game using Next.js, React, and TypeScript.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/tarook0/sync",
    live: "https://sync-sjqt.vercel.app/",
    category: "web",
  },
  {
    title: "Link Shortener Tool",
    description: "Full-stack URL shortener with click analytics, PostgreSQL storage, and a minimalist React frontend. Docker/Heroku-ready.",
    tags: ["Node.js", "Express", "PostgreSQL", "React"],
    github: "https://github.com/tarook0/link-shortner",
    live: null,
    category: "web",
  },
  {
    title: "Task Management",
    description: "Task creation and management app with categorization, search/filter, and secure user authentication.",
    tags: ["NestJS", "TypeScript"],
    github: "https://github.com/tarook0/nestts-task-management",
    live: null,
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
    description: "A system designed to help dental clinics manage patient appointments and treatments, with drag-and-drop scheduling and patient categorization.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/tarook0/dentist",
    live: "https://dentist-eight.vercel.app/",
    category: "web",
  },
  {
    title: "Tic Tac Toe",
    description: "Tic-Tac-Toe game with single-player (AI) and multiplayer modes, state managed with Zustand.",
    tags: ["React", "TypeScript", "Zustand"],
    github: "https://github.com/tarook0/tic_tac",
    live: null,
    category: "game",
  },
  {
    title: "Fast React Pizza",
    description: "React app for ordering pizza with features like food ordering and location positioning.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/tarook0/fast-react-pizza/",
    live: null,
    category: "web",
  },
  {
    title: "Next.js Dashboard",
    description: "Dashboard application built with the Next.js App Router.",
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
    description: "Modern e-commerce platform for small to medium-sized businesses.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/tarook0/storfront",
    live: null,
    category: "web",
  },
  {
    title: "Sync-O-Theft Game",
    description: "Stealth 2D computer game with a top-down perspective.",
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
    description: "C++ simulation project using OpenGL for a virtual experience.",
    tags: ["C++", "OpenGL", "3D Modeling"],
    github: "https://github.com/tarook0/Al-Aqsa",
    live: "https://www.youtube.com/watch?v=mQgjuTec9U8&feature=youtu.be",
    category: "simulation",
  },
  {
    title: "Puzzle Game",
    description: "Puzzle game built with modern OpenGL featuring block manipulation.",
    tags: ["C++", "OpenGL", "Game Development"],
    github: "https://github.com/tarook0/Puzzle",
    live: null,
    category: "game",
  },
]

const categoryStyles = {
  ai: {
    icon: Bot,
    gradient: "from-violet-500/25 via-violet-500/5 to-transparent",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  web: {
    icon: Globe,
    gradient: "from-blue-500/25 via-blue-500/5 to-transparent",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  mobile: {
    icon: Smartphone,
    gradient: "from-emerald-500/25 via-emerald-500/5 to-transparent",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  game: {
    icon: Gamepad,
    gradient: "from-pink-500/25 via-pink-500/5 to-transparent",
    iconBg: "bg-pink-500/15",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  algorithm: {
    icon: Binary,
    gradient: "from-amber-500/25 via-amber-500/5 to-transparent",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  simulation: {
    icon: MonitorPlay,
    gradient: "from-cyan-500/25 via-cyan-500/5 to-transparent",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
  default: {
    icon: Layout,
    gradient: "from-primary/25 via-primary/5 to-transparent",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
  },
} as const

const ProjectCover = ({ category }: { category: string }) => {
  const style = categoryStyles[category as keyof typeof categoryStyles] || categoryStyles.default
  const Icon = style.icon

  return (
    <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${style.gradient}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="relative h-full flex items-center justify-center">
        <div className={`p-5 rounded-2xl ${style.iconBg} backdrop-blur-sm`}>
          <Icon className={`h-10 w-10 ${style.iconColor} transition-transform duration-300 group-hover:scale-110`} />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState("ai");
  const categories = ["ai", "web", "mobile", "game", "algorithm", "simulation"];

  return (
    <section id="projects" ref={ref} className="w-full py-20 px-4">
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

        <Tabs defaultValue="ai" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <div className="flex justify-center">
            <TabsList className="flex-wrap h-auto">
              <TabsTrigger value="ai">AI</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="game">Games</TabsTrigger>
              <TabsTrigger value="algorithm">Algorithms</TabsTrigger>
              <TabsTrigger value="simulation">Simulations</TabsTrigger>
            </TabsList>
          </div>

          {categories.map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => 
                    tab === "all" ? true : project.category === tab
                  )
                  .map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={index}
                      inView={inView}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

type Project = (typeof projects)[number]

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project
  index: number
  inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
    >
      <Card className="h-full flex flex-col overflow-hidden group theme-card hover:shadow-lg transition-shadow">
        <ProjectCover category={project.category} />

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