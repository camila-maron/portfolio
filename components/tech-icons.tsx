"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface TechIconProps {
  tech: string
  size?: "sm" | "md" | "lg"
  showLabel?: boolean
}

interface TechIconGridProps {
  technologies: string[]
  maxVisible?: number
  size?: "sm" | "md" | "lg"
  showLabels?: boolean
}

const techColors: Record<string, { bg: string; text: string; icon?: string }> = {
  // Frontend
  JavaScript: { bg: "bg-yellow-500/10", text: "text-yellow-400" },
  TypeScript: { bg: "bg-blue-500/10", text: "text-blue-400" },
  React: { bg: "bg-cyan-500/10", text: "text-cyan-400" },
  "React Native": { bg: "bg-cyan-600/10", text: "text-cyan-500" },
  "Next.js": { bg: "bg-slate-500/10", text: "text-slate-300" },
  Redux: { bg: "bg-purple-500/10", text: "text-purple-400" },
  "Vue.js": { bg: "bg-emerald-500/10", text: "text-emerald-400" },
  Tailwind: { bg: "bg-cyan-400/10", text: "text-cyan-300" },

  // Backend
  "Node.js": { bg: "bg-green-500/10", text: "text-green-400" },
  "Express.js": { bg: "bg-gray-500/10", text: "text-gray-300" },
  Java: { bg: "bg-red-500/10", text: "text-red-400" },
  PHP: { bg: "bg-indigo-500/10", text: "text-indigo-400" },
  "REST APIs": { bg: "bg-orange-500/10", text: "text-orange-400" },
  "Nest.js": { bg: "bg-red-600/10", text: "text-red-500" },
  FastAPI: { bg: "bg-teal-500/10", text: "text-teal-400" },
  Python: { bg: "bg-blue-600/10", text: "text-blue-500" },
  Prisma: { bg: "bg-slate-600/10", text: "text-slate-400" },

  // Database
  MySQL: { bg: "bg-blue-500/10", text: "text-blue-400" },
  MongoDB: { bg: "bg-green-600/10", text: "text-green-500" },
  "SQL Server": { bg: "bg-red-600/10", text: "text-red-500" },
  PostgreSQL: { bg: "bg-blue-600/10", text: "text-blue-500" },
  Redis: { bg: "bg-red-500/10", text: "text-red-400" },
  Supabase: { bg: "bg-emerald-500/10", text: "text-emerald-400" },

  // Testing
  Jest: { bg: "bg-red-500/10", text: "text-red-400" },
  "React Testing Library": { bg: "bg-red-600/10", text: "text-red-500" },
  Cypress: { bg: "bg-green-500/10", text: "text-green-400" },

  // Cloud & DevOps
  AWS: { bg: "bg-orange-500/10", text: "text-orange-400" },
  Azure: { bg: "bg-blue-500/10", text: "text-blue-400" },
  Docker: { bg: "bg-blue-600/10", text: "text-blue-500" },
  Git: { bg: "bg-orange-600/10", text: "text-orange-500" },
  "Google Cloud": { bg: "bg-red-500/10", text: "text-red-400" },
  Kubernetes: { bg: "bg-blue-500/10", text: "text-blue-400" },
  Vercel: { bg: "bg-slate-500/10", text: "text-slate-300" },

  // Tools & Design
  Bootstrap: { bg: "bg-purple-500/10", text: "text-purple-400" },
  "Ant Design": { bg: "bg-blue-500/10", text: "text-blue-400" },
  Postman: { bg: "bg-orange-500/10", text: "text-orange-400" },
  Jira: { bg: "bg-blue-600/10", text: "text-blue-500" },
  Swagger: { bg: "bg-green-500/10", text: "text-green-400" },
  DeepSeek: { bg: "bg-purple-600/10", text: "text-purple-500" },
  Figma: { bg: "bg-pink-500/10", text: "text-pink-400" },
  "Adobe XD": { bg: "bg-pink-600/10", text: "text-pink-500" },

  // Mobile
  Expo: { bg: "bg-slate-600/10", text: "text-slate-400" },
  Firebase: { bg: "bg-yellow-500/10", text: "text-yellow-400" },
  Flutter: { bg: "bg-blue-500/10", text: "text-blue-400" },

  // Other
  "OpenAI API": { bg: "bg-green-500/10", text: "text-green-400" },
  "Socket.io": { bg: "bg-slate-500/10", text: "text-slate-300" },
  WebRTC: { bg: "bg-blue-500/10", text: "text-blue-400" },
  Ethereum: { bg: "bg-purple-500/10", text: "text-purple-400" },
  Solidity: { bg: "bg-gray-500/10", text: "text-gray-300" },
  "Web3.js": { bg: "bg-orange-500/10", text: "text-orange-400" },
  IPFS: { bg: "bg-cyan-500/10", text: "text-cyan-400" },
  "D3.js": { bg: "bg-orange-600/10", text: "text-orange-500" },
}

const sizeClasses = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
}

export function TechIcon({ tech, size = "md", showLabel = true }: TechIconProps) {
  const colors = techColors[tech] || {
    bg: "bg-slate-500/10",
    text: "text-slate-400",
  }

  const content = (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-700/50 font-medium transition-all hover:scale-105",
        colors.bg,
        colors.text,
        sizeClasses[size],
      )}
    >
      {showLabel ? tech : tech.charAt(0)}
    </span>
  )

  if (!showLabel) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent>
            <p>{tech}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return content
}

export function TechIconGrid({ technologies, maxVisible, size = "md", showLabels = true }: TechIconGridProps) {
  const visibleTechs = maxVisible ? technologies.slice(0, maxVisible) : technologies
  const remainingCount = maxVisible ? technologies.length - maxVisible : 0

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTechs.map((tech, index) => (
        <TechIcon key={index} tech={tech} size={size} showLabel={showLabels} />
      ))}
      {remainingCount > 0 && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span
                className={cn(
                  "inline-flex items-center rounded-full border border-slate-700/50 bg-slate-500/10 text-slate-400 font-medium cursor-help",
                  sizeClasses[size],
                )}
              >
                +{remainingCount}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <div className="space-y-1">
                {technologies.slice(maxVisible).map((tech, index) => (
                  <p key={index}>{tech}</p>
                ))}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}
