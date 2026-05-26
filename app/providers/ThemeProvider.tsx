"use client"
import { createContext, useContext, useEffect, useState } from "react"
type Theme = "light" | "dark"
interface Ctx { theme: Theme; toggle: () => void }
const ThemeContext = createContext<Ctx>({ theme: "light", toggle: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  useEffect(() => {
    const s = localStorage.getItem("theme") as Theme | null
    const t: Theme = s ?? "light"
    setTheme(t)
    document.documentElement.classList.toggle("dark", t === "dark")
  }, [])
  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light"
    setTheme(next)
    localStorage.setItem("theme", next)
    document.documentElement.classList.toggle("dark", next === "dark")
  }
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}
export const useTheme = () => useContext(ThemeContext)
