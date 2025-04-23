"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  // Ensure theme is only applied after client-side hydration
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Prevent theme flash by rendering nothing until mounted
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
