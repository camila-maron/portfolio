"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Palette,
  Download,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Calendar,
  Building,
  Menu,
  X,
  Construction,
  Award,
} from "lucide-react";
import Link from "next/link";
import { TechIcon, TechIconGrid } from "@/components/tech-icons";
import { useLanguage } from "@/contexts/language-context";
import { LanguageToggle } from "@/components/language-toggle";
import { useState } from "react";

export default function Portfolio() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    {
      name: t("skills.frontend"),
      icon: Globe,
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Next.js",
        "Redux",
      ],
    },
    {
      name: t("skills.backend"),
      icon: Server,
      technologies: [
        "Node.js",
        "Express.js",
        "Java",
        "PHP",
        "REST APIs",
        "Nest.js",
        "FastAPI",
        "Prisma",
      ],
    },
    {
      name: t("skills.database"),
      icon: Database,
      technologies: ["MySQL", "MongoDB", "SQL Server"],
    },
    {
      name: t("skills.testing"),
      icon: Code2,
      technologies: ["Jest", "React Testing Library", "Cypress"],
    },
    {
      name: t("skills.cloud"),
      icon: Smartphone,
      technologies: ["AWS", "Azure", "Docker", "Git", "Google Cloud"],
    },
    {
      name: t("skills.tools"),
      icon: Palette,
      technologies: [
        "Bootstrap",
        "Ant Design",
        "Postman",
        "Jira",
        "Swagger",
        "DeepSeek",
      ],
    },
  ];

  const projects = [
    {
      title: "Kaitomo",
      description: t("projects.kaitomo.description"),
      technologies: [
        "React Native",
        "FastAPI",
        "Prisma",
        "MongoDB",
        "Google Cloud",
        "DeepSeek",
      ],
      github: "#",
      live: "#",
      featured: true,
      year: "2025",
      company: "Escalada Kaihatsu",
      type: "Mobile • Discount Finder",
    },
    {
      title: "Eyethena",
      description: t("projects.eyethena.description"),
      technologies: [
        "Node.js",
        "TypeScript",
        "Next.js",
        "React Native",
        "Redux",
        "AWS",
      ],
      github: "#",
      live: "#",
      featured: true,
      year: "2024",
      company: "Patagonian",
      type: "Healthcare • Mobile App",
    },
    {
      title: "MBODY360",
      description: t("projects.mbody360.description"),
      technologies: [
        "Java",
        "MySQL",
        "MongoDB",
        "React",
        "Bootstrap",
        "AWS",
        "Azure",
      ],
      github: "#",
      live: "#",
      featured: true,
      year: "2023",
      company: "Patagonian",
      type: "Healthcare • Web Platform",
    },
    {
      title: "Overplay",
      description: t("projects.overplay.description"),
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Bootstrap",
        "AWS",
      ],
      github: "#",
      live: "#",
      featured: false,
      year: "2022",
      company: "Patagonian",
      type: "Gaming • Web Tool",
    },
    {
      title: "AMIGO",
      description: t("projects.amigo.description"),
      technologies: ["PHP", "SQL Server", "Bootstrap"],
      github: "#",
      live: "#",
      featured: false,
      year: "2019",
      company: "Ciar S.A",
      type: "Enterprise • Oil & Gas",
    },
    {
      title: "UltraCarSys",
      description: t("projects.ultracarsys.description"),
      technologies: ["PHP", "MySQL", "Bootstrap"],
      github: "#",
      live: "#",
      featured: false,
      year: "2018",
      company: "Ciar S.A",
      type: "Business • Automotive",
    },
    {
      title: "Confluencia",
      description: t("projects.confluencia.description"),
      technologies: ["PHP", "MySQL", "Bootstrap"],
      github: "#",
      live: "#",
      featured: false,
      year: "2017",
      company: "EdkApps",
      type: "Business • SME Platform",
    },
  ];

  const personalProjects = [
    {
      title: "AI-Powered Task Manager",
      description: t("personal.aiTask.description"),
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "Prisma",
        "PostgreSQL",
      ],
      github: "#",
      live: "#",
      status: t("personal.status.inProgress"),
      icon: Code2,
      learningGoals: [
        "AI Integration",
        "Advanced TypeScript",
        "Performance Optimization",
      ],
    },
    {
      title: "Real-time Collaboration Tool",
      description: t("personal.collaboration.description"),
      technologies: ["React", "Socket.io", "WebRTC", "Node.js", "Redis"],
      github: "#",
      live: null,
      status: t("personal.status.planning"),
      icon: Globe,
      learningGoals: ["WebRTC", "Real-time Architecture", "Socket.io"],
    },
    {
      title: "Microservices E-commerce",
      description: t("personal.microservices.description"),
      technologies: ["Docker", "Kubernetes", "Node.js", "MongoDB", "AWS"],
      github: "#",
      live: "#",
      status: t("personal.status.active"),
      icon: Server,
      learningGoals: ["Microservices", "Kubernetes", "DevOps Practices"],
    },
    {
      title: "Mobile Fitness Tracker",
      description: t("personal.fitness.description"),
      technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
      github: "#",
      live: null,
      status: t("personal.status.completed"),
      icon: Smartphone,
      learningGoals: [
        "Mobile Development",
        "Device Integration",
        "Offline-first",
      ],
    },
    {
      title: "Data Visualization Dashboard",
      description: t("personal.dashboard.description"),
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      github: "#",
      live: "#",
      status: t("personal.status.active"),
      icon: Database,
      learningGoals: ["Data Visualization", "D3.js", "Python Backend"],
    },
    {
      title: "Blockchain Voting System",
      description: t("personal.blockchain.description"),
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      github: "#",
      live: null,
      status: t("personal.status.learning"),
      icon: Palette,
      learningGoals: ["Blockchain", "Smart Contracts", "Web3 Development"],
    },
  ];

  const experience = [
    {
      company: "Escalada Kaihatsu",
      role: "Technical Leader",
      period: "July 2025 – Present",
      duration: "1 month",
      description: t("experience.escalada.description"),
      projects: ["Kaitomo"],
    },
    {
      company: "Patagonian",
      role: "Full Stack Developer",
      period: "May 2019 – May 2025",
      duration: "6 years",
      description: t("experience.patagonian.description"),
      projects: ["Eyethena", "MBODY360", "Overplay"],
    },
    {
      company: "Ciar S.A",
      role: "Full Stack Developer",
      period: "Apr 2018 – May 2019",
      duration: "1 year 1 month",
      description: t("experience.ciar.description"),
      projects: ["AMIGO", "UltraCarSys"],
    },
    {
      company: "EdkApps",
      role: "Full Stack Developer",
      period: "Oct 2016 – Mar 2018",
      duration: "1 year 5 months",
      description: t("experience.edkapps.description"),
      projects: ["Barbieri Riesgos", "Confluencia"],
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <div className="container flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
              CM
            </div>
            <div className="font-bold text-lg md:text-xl">Camila Maron</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm">
            <Link
              href="#about"
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#experience"
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t("nav.experience")}
            </Link>
            <Link
              href="#skills"
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t("nav.skills")}
            </Link>
            <Link
              href="#projects"
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t("nav.projects")}
            </Link>
            <Link
              href="#personal-projects"
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t("nav.personal")}
            </Link>
            <Link
              href="#contact"
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t("nav.contact")}
            </Link>
          </div>

          <div className="flex items-center space-x-2 md:space-x-3">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-white hover:bg-slate-800"
              asChild
            >
              <Link href="https://github.com/camila-maron" target="_blank">
                <Github className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">{t("common.github")}</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-white hover:bg-slate-800"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/camila-maron/"
                target="_blank"
              >
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 hidden sm:flex"
              asChild
            >
              <Link
                href={
                  t("nav.resume") === "CV"
                    ? "https://drive.google.com/file/d/1O0MQhYAGgfBPS75vTOcbnuJPaar3L2JQ/view?usp=drive_link"
                    : "https://drive.google.com/file/d/1toHLE-hmMlPVHnFQodBz9fOl-ZVbtYZT/view?usp=drive_link"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden md:inline">{t("nav.resume")}</span>
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">
            <div className="container py-4 space-y-3">
              <Link
                href="#about"
                className="block text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="#experience"
                className="block text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.experience")}
              </Link>
              <Link
                href="#skills"
                className="block text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.skills")}
              </Link>
              <Link
                href="#projects"
                className="block text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.projects")}
              </Link>
              <Link
                href="#personal-projects"
                className="block text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.personal")}
              </Link>
              <Link
                href="#contact"
                className="block text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 w-full mt-4"
                asChild
              >
                <Link
                  href={
                    t("nav.resume") === "CV"
                      ? "/CV - Camila Maron.pdf"
                      : "/Resume - Camila Maron.pdf"
                  }
                  download={
                    t("nav.resume") === "CV"
                      ? "CV - Camila Maron.pdf"
                      : "Resume - Camila Maron.pdf"
                  }
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("nav.resume")}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-pink-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 md:top-20 left-5 md:left-10 h-48 w-48 md:h-72 md:w-72 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 h-48 w-48 md:h-72 md:w-72 rounded-full bg-pink-500/10 blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-3 md:px-4 py-2 text-xs md:text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                {t("hero.available")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight">
                <span className="block">{t("hero.title1")}</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  {t("hero.title2")}
                </span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
                {t("hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>{t("hero.location")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="break-all">camila.maron93@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+542994644900</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                asChild
              >
                <Link href="#projects">
                  {t("hero.cta1")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                asChild
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  {t("hero.cta2")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 relative">
        <div className="container">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {t("about.title")}
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>
              <div className="space-y-4 md:space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
                <p>{t("about.description1")}</p>
                <p>{t("about.description2")}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-purple-400 flex-shrink-0"></div>
                    <span className="text-sm">{t("about.education")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-pink-400 flex-shrink-0"></div>
                    <span className="text-sm">{t("about.languages")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-purple-400">
                    8+
                  </div>
                  <div className="text-xs md:text-sm text-slate-400">
                    {t("about.stat1")}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-pink-400">
                    10+
                  </div>
                  <div className="text-xs md:text-sm text-slate-400">
                    {t("about.stat2")}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-red-400">
                    4
                  </div>
                  <div className="text-xs md:text-sm text-slate-400">
                    {t("about.stat3")}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="h-64 md:h-96 w-full rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-slate-700 flex items-center justify-center">
                  <div className="text-center space-y-4 px-4">
                    <Award className="h-12 w-12 md:h-16 md:w-16 mx-auto text-purple-400" />
                    <div className="text-lg md:text-xl font-semibold">
                      {t("about.subtitle")}
                    </div>
                    <div className="text-sm md:text-base text-slate-400">
                      {t("about.tagline")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("experience.title")}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              {t("experience.subtitle")}
            </p>
          </div>
          <div className="space-y-6 md:space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <CardHeader className="p-4 md:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Building className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <CardTitle className="text-xl md:text-2xl text-white">
                          {exp.company}
                        </CardTitle>
                      </div>
                      <div className="text-base md:text-lg text-purple-300">
                        {exp.role}
                      </div>
                    </div>
                    <div className="lg:text-right space-y-1">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          {exp.period}
                        </span>
                      </div>
                      <div className="text-xs md:text-sm text-slate-500">
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-slate-400">
                      {t("experience.keyProjects")}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project, projectIndex) => (
                        <span
                          key={projectIndex}
                          className="px-2 md:px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs md:text-sm border border-slate-700"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("skills.title")}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              {t("skills.subtitle")}
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <CardHeader className="pb-4 p-4 md:p-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <skill.icon className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-lg md:text-xl text-white truncate">
                        {skill.name}
                      </CardTitle>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-purple-400 text-purple-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <TechIcon key={techIndex} tech={tech} size="sm" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("projects.title")}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              {t("projects.subtitle")}
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2 mb-12 md:mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="group bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
              >
                <div className="relative p-4 md:p-6 lg:p-8 bg-gradient-to-br from-purple-900/10 to-pink-900/10">
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="space-y-2 min-w-0 flex-1">
                      <div className="text-xs md:text-sm text-slate-400">
                        {project.company} • {project.year}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-xs md:text-sm text-purple-300">
                        {project.type}
                      </div>
                    </div>
                    <div className="flex space-x-2 flex-shrink-0 ml-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-400 hover:text-white hover:bg-slate-800 h-8 w-8 md:h-10 md:w-10"
                        asChild
                      >
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4 md:h-5 md:w-5" />
                          <span className="sr-only">{t("common.github")}</span>
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-400 hover:text-white hover:bg-slate-800 h-8 w-8 md:h-10 md:w-10"
                        asChild
                      >
                        <Link href={project.live} target="_blank">
                          <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
                          <span className="sr-only">
                            {t("common.liveDemo")}
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  <TechIconGrid
                    technologies={project.technologies}
                    maxVisible={4}
                    showLabels={false}
                  />
                </div>
                <CardContent className="p-4 md:p-6 pt-0">
                  <TechIconGrid technologies={project.technologies} size="sm" />
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="bg-slate-700 mb-12 md:mb-16" />

          {/* Other Projects */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              {t("projects.other")}
            </h3>
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group bg-slate-900/30 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5"
                >
                  <CardHeader className="pb-4 p-4 md:p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="text-xs text-slate-500">
                          {project.company} • {project.year}
                        </div>
                        <CardTitle className="text-base md:text-lg text-white group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="text-xs text-purple-400">
                          {project.type}
                        </div>
                      </div>
                      <div className="flex space-x-1 flex-shrink-0 ml-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800"
                          asChild
                        >
                          <Link href={project.github} target="_blank">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">
                              {t("common.github")}
                            </span>
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800"
                          asChild
                        >
                          <Link href={project.live} target="_blank">
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">
                              {t("common.liveDemo")}
                            </span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 p-4 md:p-6">
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <TechIconGrid
                      technologies={project.technologies}
                      maxVisible={3}
                      size="sm"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section
        id="personal-projects"
        className="py-16 md:py-24 bg-slate-900/30"
      >
        <div className="container">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("personal.title")}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              {t("personal.subtitle")}
            </p>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 md:px-6 py-3">
              <Construction className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-slate-300">
                {t("personal.comingSoon")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 px-4">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t("contact.title")}
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                {t("contact.description")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                asChild
              >
                <Link href="mailto:camila.maron93@gmail.com">
                  <Mail className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  {t("contact.email")}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/camila-maron/"
                  target="_blank"
                >
                  <Linkedin className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  {t("contact.linkedin")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 md:py-12 bg-slate-900/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
                CM
              </div>
              <div className="text-sm text-slate-400">
                © {new Date().getFullYear()}
                {t("footer.copyright")}
              </div>
            </div>
            <div className="flex items-center space-x-4 md:space-x-6">
              <Link
                href="https://github.com/camila-maron"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">{t("common.github")}</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/camila-maron/"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:camila.maron93@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
