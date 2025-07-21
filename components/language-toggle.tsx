"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="text-slate-300 hover:text-white hover:bg-slate-800 gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{language === "en" ? "ES" : "EN"}</span>
    </Button>
  )
}
