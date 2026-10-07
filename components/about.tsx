"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, MapPin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="w-full py-20 px-4 section-alt-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know my background, experience, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground mb-6">
              Accomplished Software Engineer and Team Lead with over 1 year of experience developing IoT solutions and
              high-performance applications. I specialize in full-stack development with .NET and Next.js, as well as
              Java, Python, and Dart/Flutter. I bring proven expertise in leading development teams, driving agile
              workflows, and ensuring code quality through continuous reviews — currently serving as Team Lead 
              at Prim Tech Solution.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Damascus, Syria</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">tareqhb01@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+963 949 221 567</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="theme-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Education</h3>
                      <h4 className="font-medium">Bachelor's Degree in Software Engineering</h4>
                      <p className="text-muted-foreground">
                        Damascus University, Faculty of Information Technology Engineering
                      </p>
                      <p className="text-sm text-muted-foreground">Graduated: October 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="theme-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Currently Building</h3>
                      <h4 className="font-medium">Software Engineering Team Lead </h4>
                      <p className="text-muted-foreground">Prim Tech Solution, Onsite</p>
                      <p className="text-sm text-muted-foreground">Sep 2025 - Present</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Leading a full-stack team on .NET and Next.js, setting coding standards, and running the
                        end-to-end development lifecycle from requirements to deployment.
                      </p>
                      <Link
                        href="#experience"
                        className="inline-block mt-3 text-sm font-medium text-primary hover:underline"
                      >
                        View full experience →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
