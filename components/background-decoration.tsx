"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function BackgroundDecoration() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isLight = resolvedTheme === "light"

  return (
    <>
      {/* Top right decoration */}
      <div
        className={`absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl -z-10 transition-all duration-500 ${
          isLight ? "bg-primary/10" : "bg-primary/5"
        }`}
      />

      {/* Middle left decoration */}
      <div
        className={`absolute top-[40%] left-0 w-48 h-48 md:w-80 md:h-80 rounded-full blur-3xl -z-10 transition-all duration-500 ${
          isLight ? "bg-primary/10" : "bg-primary/5"
        }`}
      />

      {/* Bottom right decoration */}
      <div
        className={`absolute bottom-20 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl -z-10 transition-all duration-500 ${
          isLight ? "bg-primary/10" : "bg-primary/5"
        }`}
      />

      {/* Subtle grid pattern overlay */}
      <div className="fixed inset-0 bg-grid-pattern -z-20 pointer-events-none" />
    </>
  )
}
