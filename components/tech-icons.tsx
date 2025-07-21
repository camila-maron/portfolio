import {
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Palette,
  Zap,
  Shield,
  Layers,
  Box,
} from "lucide-react"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Technology icon mapping
export const techIcons: Record<string, { icon: any; color: string; bgColor: string }> = {
  // Frontend
  React: { icon: Code2, color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
  "Next.js": { icon: Globe, color: "text-gray-800 dark:text-gray-200", bgColor: "bg-gray-100 dark:bg-gray-800/20" },
  "Vue.js": { icon: Code2, color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-950/20" },
  TypeScript: { icon: Code2, color: "text-blue-700", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
  "Tailwind CSS": { icon: Palette, color: "text-cyan-600", bgColor: "bg-cyan-50 dark:bg-cyan-950/20" },
  JavaScript: { icon: Zap, color: "text-yellow-600", bgColor: "bg-yellow-50 dark:bg-yellow-950/20" },

  // Backend
  "Node.js": { icon: Server, color: "text-green-700", bgColor: "bg-green-50 dark:bg-green-950/20" },
  Python: { icon: Code2, color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
  Express: { icon: Server, color: "text-gray-700", bgColor: "bg-gray-100 dark:bg-gray-800/20" },
  FastAPI: { icon: Zap, color: "text-teal-600", bgColor: "bg-teal-50 dark:bg-teal-950/20" },
  "REST APIs": { icon: Globe, color: "text-purple-600", bgColor: "bg-purple-50 dark:bg-purple-950/20" },
  GraphQL: { icon: Layers, color: "text-pink-600", bgColor: "bg-pink-50 dark:bg-pink-950/20" },

  // Database
  PostgreSQL: { icon: Database, color: "text-blue-700", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
  MongoDB: { icon: Database, color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-950/20" },
  Redis: { icon: Database, color: "text-red-600", bgColor: "bg-red-50 dark:bg-red-950/20" },
  Supabase: { icon: Database, color: "text-emerald-600", bgColor: "bg-emerald-50 dark:bg-emerald-950/20" },
  Prisma: { icon: Database, color: "text-indigo-600", bgColor: "bg-indigo-50 dark:bg-indigo-950/20" },
  Firebase: { icon: Database, color: "text-orange-600", bgColor: "bg-orange-50 dark:bg-orange-950/20" },

  // Mobile
  "React Native": { icon: Smartphone, color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
  Flutter: { icon: Smartphone, color: "text-blue-500", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
  iOS: { icon: Smartphone, color: "text-gray-700", bgColor: "bg-gray-100 dark:bg-gray-800/20" },
  Android: { icon: Smartphone, color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-950/20" },
  Expo: { icon: Smartphone, color: "text-purple-600", bgColor: "bg-purple-50 dark:bg-purple-950/20" },

  // DevOps & Cloud
  Docker: { icon: Box, color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
  AWS: { icon: Cloud, color: "text-orange-600", bgColor: "bg-orange-50 dark:bg-orange-950/20" },
  "AWS S3": { icon: Cloud, color: "text-orange-600", bgColor: "bg-orange-50 dark:bg-orange-950/20" },
  Vercel: { icon: Globe, color: "text-gray-800 dark:text-gray-200", bgColor: "bg-gray-100 dark:bg-gray-800/20" },
  "GitHub Actions": { icon: GitBranch, color: "text-gray-700", bgColor: "bg-gray-100 dark:bg-gray-800/20" },
  "CI/CD": { icon: GitBranch, color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-950/20" },

  // Design & Tools
  Figma: { icon: Palette, color: "text-purple-600", bgColor: "bg-purple-50 dark:bg-purple-950/20" },
  "Adobe XD": { icon: Palette, color: "text-pink-600", bgColor: "bg-pink-50 dark:bg-pink-950/20" },
  "UI/UX": { icon: Palette, color: "text-indigo-600", bgColor: "bg-indigo-50 dark:bg-indigo-950/20" },
  "Responsive Design": { icon: Smartphone, color: "text-teal-600", bgColor: "bg-teal-50 dark:bg-teal-950/20" },

  // Payment & Auth
  Stripe: { icon: Shield, color: "text-purple-600", bgColor: "bg-purple-50 dark:bg-purple-950/20" },

  // Real-time & Communication
  "Socket.io": { icon: Zap, color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-950/20" },
  WebSocket: { icon: Zap, color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-950/20" },

  // AI & APIs
  "OpenAI API": { icon: Zap, color: "text-emerald-600", bgColor: "bg-emerald-50 dark:bg-emerald-950/20" },

  // Data Visualization
  "D3.js": { icon: Layers, color: "text-orange-600", bgColor: "bg-orange-50 dark:bg-orange-950/20" },
  "Chart.js": { icon: Layers, color: "text-pink-600", bgColor: "bg-pink-50 dark:bg-pink-950/20" },

  // State Management
  Redux: { icon: Box, color: "text-purple-600", bgColor: "bg-purple-50 dark:bg-purple-950/20" },

  // CMS
  Strapi: { icon: Server, color: "text-indigo-600", bgColor: "bg-indigo-50 dark:bg-indigo-950/20" },
}

interface TechIconProps {
  tech: string
  size?: "sm" | "md" | "lg"
  showLabel?: boolean
}

export function TechIcon({ tech, size = "md", showLabel = true }: TechIconProps) {
  const techData = techIcons[tech]

  if (!techData) {
    // Fallback for unknown technologies
    const fallbackContent = (
      <div
        className={`inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-medium`}
      >
        <Code2 className="h-3 w-3" />
        {showLabel && <span>{tech}</span>}
      </div>
    )

    return showLabel ? (
      fallbackContent
    ) : (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{fallbackContent}</TooltipTrigger>
          <TooltipContent>
            <p>{tech}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  const { icon: Icon, color, bgColor } = techData

  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  const containerClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-2.5 py-1.5 text-xs",
    lg: "px-3 py-2 text-sm",
  }

  const iconContent = (
    <div
      className={`inline-flex items-center gap-1.5 rounded-md font-medium transition-all duration-200 hover:scale-105 cursor-default ${bgColor} ${containerClasses[size]}`}
    >
      <Icon className={`${sizeClasses[size]} ${color}`} />
      {showLabel && <span className={color}>{tech}</span>}
    </div>
  )

  return showLabel ? (
    iconContent
  ) : (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{iconContent}</TooltipTrigger>
        <TooltipContent>
          <p>{tech}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

interface TechIconGridProps {
  technologies: string[]
  maxVisible?: number
  size?: "sm" | "md" | "lg"
  showLabels?: boolean
}

export function TechIconGrid({ technologies, maxVisible, size = "md", showLabels = true }: TechIconGridProps) {
  const visibleTechs = maxVisible ? technologies.slice(0, maxVisible) : technologies
  const remainingCount = maxVisible ? technologies.length - maxVisible : 0

  const remainingTooltipContent =
    maxVisible && remainingCount > 0 ? (
      <div className="space-y-1">
        <p className="font-medium">Additional Technologies:</p>
        {technologies.slice(maxVisible).map((tech, index) => (
          <p key={index} className="text-sm">
            {tech}
          </p>
        ))}
      </div>
    ) : null

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTechs.map((tech, index) => (
        <TechIcon key={index} tech={tech} size={size} showLabel={showLabels} />
      ))}
      {remainingCount > 0 && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400 transition-all duration-200 hover:scale-105 cursor-default hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                +{remainingCount}
              </div>
            </TooltipTrigger>
            <TooltipContent>{remainingTooltipContent}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}
