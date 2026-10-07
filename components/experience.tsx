"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Software Engineering Team Lead & CTO",
    company: "Prim Tech Solution",
    location: "Onsite",
    period: "Sep 2025 - Present",
    current: true,
    bullets: [
      "Led a software engineering team in the design and development of a full-stack application using .NET for backend services and Next.js for the frontend.",
      "Architected scalable and maintainable solutions, establishing coding standards and best practices for the .NET / Next.js environment.",
      "Mentored team members, facilitated agile ceremonies (daily stand-ups, sprint planning), and improved team velocity through effective task delegation and code review processes.",
      "Orchestrated the end-to-end development lifecycle, from requirement analysis and system design to implementation and deployment.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Pioneers",
    location: "Hybrid",
    period: "Jul 2025 - Sep 2025",
    current: false,
    bullets: [
      "Built modern web applications and admin dashboards using Next.js and MongoDB.",
      "Integrated Firebase Cloud Messaging (FCM) for real-time push notifications.",
      "Developed secure REST APIs and implemented user authentication flows.",
      "Focused on scalable architecture and efficient state management across components.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Apr 2025 - Present",
    current: true,
    bullets: [
      "Developed professional websites for legal and coaching businesses using modern React/Next.js stacks.",
      "Implemented responsive designs with Tailwind CSS and optimized performance for 30% faster load times.",
      "Integrated RESTful APIs and CMS solutions for dynamic content management.",
    ],
  },
  {
    role: "Software Developer",
    company: "Unifi Solutions",
    location: "Montreal, Quebec, Canada (Remote)",
    period: "Jun 2024 - Jan 2025",
    current: false,
    bullets: [
      "Developed responsive web interfaces using React.js, enhancing user experience across devices.",
      "Collaborated with backend teams to integrate RESTful APIs for seamless data flow.",
      "Conducted code reviews, contributing to best practices for code maintainability.",
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" ref={ref} className="w-full py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From hands-on full-stack development to leading engineering teams.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative sm:pl-14"
              >
                <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>

                <Card className="theme-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold flex items-center gap-2 flex-wrap">
                          {exp.role}
                          {exp.current && (
                            <Badge variant="secondary" className="text-xs font-normal">
                              Current
                            </Badge>
                          )}
                        </h3>
                        <p className="text-muted-foreground">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
