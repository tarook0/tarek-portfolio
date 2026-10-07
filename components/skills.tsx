"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Server, Brain, Smartphone, GitBranch, Workflow, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-5 w-5" />,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C++", "Dart", "PHP", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="h-5 w-5" />,
    skills: [
      ".NET",
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "Django",
      "Flask",
      "Laravel",
      "Flutter",
      "jQuery",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-5 w-5" />,
    skills: ["Flutter", "Android Development", "iOS Development"],
  },
  {
    title: "Database & ORM",
    icon: <Database className="h-5 w-5" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite", "Prisma", "TypeORM", "Mongoose"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Server className="h-5 w-5" />,
    skills: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins"],
  },
  {
    title: "Development Tools",
    icon: <GitBranch className="h-5 w-5" />,
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Trello", "Figma", "Postman", "Swagger", "Unity", "Blender"],
  },
  {
    title: "Methodologies & Practices",
    icon: <Workflow className="h-5 w-5" />,
    skills: [
      "Agile Development",
      "Scrum",
      "Kanban",
      "Test-Driven Development",
      "Clean Code",
      "Design Patterns",
      "RESTful APIs",
      "GraphQL",
      "Microservices",
      "MVC Architecture",
      "OOP",
      "Functional Programming",
    ],
  },
  {
    title: "Other Technical Skills",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      "Data Structures",
      "Algorithms",
      "Computer Networks",
      "Operating Systems",
      "Cybersecurity",
      "Blockchain Basics",
      "Machine Learning Basics",
      "Artificial Intelligence",
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="w-full py-20 px-4 section-alt-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="text-primary">{category.icon}</div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
