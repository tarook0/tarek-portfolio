"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Gitlab,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Code,
  CircleIcon,
  Badge,
  Share2Icon,
  Circle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     // Here you would typically send the form data to your backend
  //     // For demonstration, we'll simulate a successful submission
  //     await new Promise((resolve) => setTimeout(resolve, 1500));

  //     toast({
  //       title: "Message sent!",
  //       description: "Thank you for your message. I'll get back to you soon.",
  //     });

  //     setFormData({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     toast({
  //       title: "Error",
  //       description:
  //         "There was an error sending your message. Please try again.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "tareqhb01@gmail.com",
      href: "mailto:tareqhb01@gmail.com",
      link: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+963 949 221 567",
      href: "tel:+963949221567",
      link: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Damascus, Syria",
      href: "#",
      link: false,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@tarook0",
      href: "https://github.com/tarook0",
    },
    {
      icon: Gitlab,
      label: "GitLab",
      username: "@tarook0",
      href: "https://gitlab.com/tarook0",
    },
    {
      icon: Code,
      label: "Codeberg",
      username: "@TTareqHB",
      href: "https://codeberg.org/TTareqHB",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "@tarek-alhabbal",
      href: "https://linkedin.com/in/tarek-alhabbal",
    },
  ];

  return (
    <section id="contact" ref={ref} className="w-full py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols- gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-full"
              >
                <Card className="theme-card h-full">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <CircleIcon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">
                          Contact Information
                        </h3>
                      </div>

                      <div className="space-y-6">
                        {contactItems.map((item) => (
                          <div
                            key={item.label}
                            className="flex items-start gap-4"
                          >
                            <div className="bg-primary/10 p-2.5 rounded-lg mt-1">
                              <item.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-base">
                                {item.label}
                              </h4>
                              {item.link ? (
                                <a
                                  href={item.href}
                                  className="text-muted-foreground hover:text-primary transition-colors block mt-1"
                                >
                                  {item.value}
                                </a>
                              ) : (
                                <p className="text-muted-foreground mt-1">
                                  {item.value}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t">
                      <h4 className="text-sm font-medium text-muted-foreground mb-4">
                        Available for new opportunities
                      </h4>

                      <div className="flex gap-2">
                        <div className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                        <Circle size={16} />
                          Full-time
                        </div>
                        <div className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                        <Circle size={16} />
                          Remote
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right Column - Social Connections */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-full"
              >
                <Card className="theme-card h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <Share2Icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold">Connect With Me</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1">
                      {socialLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                        >
                          <Button
                            variant="outline"
                            className="h-full w-full flex flex-col items-center justify-center gap-3 p-4 transition-all group-hover:border-primary"
                          >
                            <link.icon className="h-8 w-8 text-primary" />
                            <span className="font-medium">{link.label}</span>
                            <span className="text-sm text-muted-foreground">
                              {link.username}
                            </span>
                          </Button>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t">
                      <p className="text-sm text-muted-foreground">
                        Let's build something amazing together! 🚀
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* <Card className="theme-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
