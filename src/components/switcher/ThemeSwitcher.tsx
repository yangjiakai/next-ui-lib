"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"



import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    setIsChecked(theme === "dark")
  }, [theme])

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked)
    setTheme(checked ? "dark" : "light")
  }

  return (
    <Switch
      checked={isChecked}
      onCheckedChange={handleToggle}
      aria-label="Toggle theme"
      className="data-[state=checked]:bg-primary"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Switch>
  )
}
