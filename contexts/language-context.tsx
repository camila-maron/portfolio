"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.personal": "Personal",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    // Hero Section
    "hero.available": "Available for work",
    "hero.title1": "Full Stack",
    "hero.title2": "Developer",
    "hero.description":
      "Software Developer with 8+ years of experience designing, developing, and maintaining scalable enterprise applications across healthcare, gaming, and business domains.",
    "hero.location": "Neuquén, Argentina",
    "hero.cta1": "Explore My Work",
    "hero.cta2": "Get In Touch",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "Technical Leader & Full Stack Expert",
    "about.tagline": "Building scalable solutions with modern technologies",
    "about.description1":
      "I'm a passionate full-stack developer with over 8 years of experience crafting digital solutions across diverse industries. My expertise spans healthcare applications, gaming platforms, and enterprise business systems.",
    "about.description2":
      "I specialize in modern technologies like React, Node.js, FastAPI, and cloud services, with a strong focus on delivering high-quality, scalable applications. I thrive in collaborative environments and am always seeking growth-oriented opportunities to advance my technical excellence.",
    "about.education": "Programming Analyst - National University of Comahue (2017)",
    "about.languages": "Languages: Spanish (Native), English (Advanced)",
    "about.stat1": "Years Experience",
    "about.stat2": "Projects Delivered",
    "about.stat3": "Companies",

    // Experience Section
    "experience.title": "Professional Experience",
    "experience.subtitle": "A journey through diverse industries and challenging projects",
    "experience.keyProjects": "Key Projects:",
    "experience.escalada.description":
      "Leading the design and development of mobile applications with AI integration. Mentoring junior developers and driving continuous code refactoring for improved maintainability and scalability.",
    "experience.patagonian.description":
      "Developed scalable web and mobile applications using modern stacks and cloud services across healthcare and gaming domains.",
    "experience.ciar.description":
      "Built custom web systems for internal operations and business processes in the oil and automotive industries.",
    "experience.edkapps.description":
      "Developed web applications for SMEs to manage operations and resources efficiently.",

    // Skills Section
    "skills.title": "Skills & Technologies",
    "skills.subtitle": "A comprehensive toolkit built through years of hands-on experience",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Database",
    "skills.testing": "Testing",
    "skills.cloud": "Cloud & DevOps",
    "skills.tools": "Tools & AI",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "Showcasing impactful solutions across healthcare, gaming, and business domains",
    "projects.other": "Other Notable Projects",
    "projects.kaitomo.description":
      "Mobile application for discovering discounts with AI-powered OCR using Google Vision and DeepSeek for semantic interpretation. Features social login with Google and Apple.",
    "projects.eyethena.description":
      "Mobile platform for glaucoma monitoring, providing healthcare professionals with advanced tools for patient care and disease tracking.",
    "projects.mbody360.description":
      "Comprehensive healthcare management system designed for both healthcare professionals and patients, streamlining medical workflows.",
    "projects.overplay.description":
      "Innovative web tool that empowers users to create immersive first-person video games with intuitive drag-and-drop functionality.",
    "projects.amigo.description":
      "Advanced pipeline management system for oil companies, optimizing operations and resource allocation in the energy sector.",
    "projects.ultracarsys.description":
      "Comprehensive business management platform designed to streamline operations for automotive industry clients.",
    "projects.confluencia.description":
      "Full-featured business management platform providing SMEs with complete operational control and resource management.",

    // Personal Projects Section
    "personal.title": "Personal Projects",
    "personal.subtitle": "Side projects and experiments where I explore new technologies and expand my skillset",
    "personal.comingSoon": "Coming Soon",
    "personal.tagline": "Always learning, always building",
    "personal.learningGoals": "Learning Goals:",
    "personal.status.inProgress": "In Progress",
    "personal.status.planning": "Planning",
    "personal.status.active": "Active",
    "personal.status.completed": "Completed",
    "personal.status.learning": "Learning",
    "personal.aiTask.description":
      "A smart task management app that uses AI to prioritize tasks, suggest optimal work schedules, and provide productivity insights.",
    "personal.collaboration.description":
      "A collaborative workspace with real-time editing, video calls, and project management features for remote teams.",
    "personal.microservices.description":
      "A scalable e-commerce platform built with microservices architecture, exploring modern deployment and monitoring practices.",
    "personal.fitness.description":
      "Cross-platform mobile app for fitness tracking with wearable device integration and social features.",
    "personal.dashboard.description":
      "Interactive dashboard for visualizing complex datasets with custom charts, filters, and real-time updates.",
    "personal.blockchain.description":
      "Secure voting platform using blockchain technology to ensure transparency and immutability of votes.",

    // Contact Section
    "contact.title": "Let's Build Something Amazing",
    "contact.description":
      "I'm seeking a growth-oriented company where I can contribute with technical excellence and continue advancing my professional development. Let's discuss how we can work together.",
    "contact.email": "Send Email",
    "contact.linkedin": "Connect on LinkedIn",

    // Footer
    "footer.copyright": " Camila Maron. Crafted with passion.",

    // Common
    "common.github": "GitHub",
    "common.liveDemo": "Live Demo",
  },
  es: {
    // Navigation
    "nav.about": "Acerca de",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.personal": "Personal",
    "nav.contact": "Contacto",
    "nav.resume": "CV",

    // Hero Section
    "hero.available": "Disponible para trabajar",
    "hero.title1": "Desarrolladora",
    "hero.title2": "Full Stack",
    "hero.description":
      "Desarrolladora de Software con más de 8 años de experiencia diseñando, desarrollando y manteniendo aplicaciones empresariales escalables en los sectores de salud, gaming y negocios.",
    "hero.location": "Neuquén, Argentina",
    "hero.cta1": "Ver Mi Trabajo",
    "hero.cta2": "Contactar",

    // About Section
    "about.title": "Acerca de Mí",
    "about.subtitle": "Líder Técnico y Experta Full Stack",
    "about.tagline": "Construyendo soluciones escalables con tecnologías modernas",
    "about.description1":
      "Soy una desarrolladora full-stack apasionada con más de 8 años de experiencia creando soluciones digitales en diversas industrias. Mi experiencia abarca aplicaciones de salud, plataformas de gaming y sistemas empresariales.",
    "about.description2":
      "Me especializo en tecnologías modernas como React, Node.js, FastAPI y servicios cloud, con un fuerte enfoque en entregar aplicaciones escalables y de alta calidad. Prospero en entornos colaborativos y siempre busco oportunidades orientadas al crecimiento para avanzar en mi excelencia técnica.",
    "about.education": "Analista Programadora - Universidad Nacional del Comahue (2017)",
    "about.languages": "Idiomas: Español (Nativo), Inglés (Avanzado)",
    "about.stat1": "Años de Experiencia",
    "about.stat2": "Proyectos Entregados",
    "about.stat3": "Empresas",

    // Experience Section
    "experience.title": "Experiencia Profesional",
    "experience.subtitle": "Un recorrido a través de diversas industrias y proyectos desafiantes",
    "experience.keyProjects": "Proyectos Clave:",
    "experience.escalada.description":
      "Liderando el diseño y desarrollo de aplicaciones móviles con integración de IA. Mentoreando desarrolladores junior e impulsando la refactorización continua del código para mejorar la mantenibilidad y escalabilidad.",
    "experience.patagonian.description":
      "Desarrollé aplicaciones web y móviles escalables utilizando stacks modernos y servicios cloud en los dominios de salud y gaming.",
    "experience.ciar.description":
      "Construí sistemas web personalizados para operaciones internas y procesos de negocio en las industrias petrolera y automotriz.",
    "experience.edkapps.description":
      "Desarrollé aplicaciones web para PyMEs para gestionar operaciones y recursos de manera eficiente.",

    // Skills Section
    "skills.title": "Habilidades y Tecnologías",
    "skills.subtitle": "Un conjunto integral de herramientas construido a través de años de experiencia práctica",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Base de Datos",
    "skills.testing": "Testing",
    "skills.cloud": "Cloud y DevOps",
    "skills.tools": "Herramientas e IA",

    // Projects Section
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Mostrando soluciones impactantes en los dominios de salud, gaming y negocios",
    "projects.other": "Otros Proyectos Notables",
    "projects.kaitomo.description":
      "Aplicación móvil para encontrar descuentos con OCR potenciado por IA usando Google Vision y DeepSeek para interpretación semántica. Incluye inicio de sesión social con Google y Apple.",
    "projects.eyethena.description":
      "Plataforma móvil para monitoreo de glaucoma, proporcionando a profesionales de la salud herramientas avanzadas para el cuidado del paciente y seguimiento de enfermedades.",
    "projects.mbody360.description":
      "Sistema integral de gestión de salud diseñado tanto para profesionales de la salud como para pacientes, optimizando flujos de trabajo médicos.",
    "projects.overplay.description":
      "Herramienta web innovadora que permite a los usuarios crear videojuegos inmersivos en primera persona con funcionalidad intuitiva de arrastrar y soltar.",
    "projects.amigo.description":
      "Sistema avanzado de gestión de tuberías para compañías petroleras, optimizando operaciones y asignación de recursos en el sector energético.",
    "projects.ultracarsys.description":
      "Plataforma integral de gestión empresarial diseñada para optimizar operaciones para clientes de la industria automotriz.",
    "projects.confluencia.description":
      "Plataforma de gestión empresarial completa que proporciona a las PyMEs control operacional completo y gestión de recursos.",

    // Personal Projects Section
    "personal.title": "Proyectos Personales",
    "personal.subtitle": "Proyectos paralelos y experimentos donde exploro nuevas tecnologías y amplío mis habilidades",
    "personal.comingSoon": "Próximamente",
    "personal.tagline": "Siempre aprendiendo, siempre construyendo",
    "personal.learningGoals": "Objetivos de Aprendizaje:",
    "personal.status.inProgress": "En Progreso",
    "personal.status.planning": "Planificando",
    "personal.status.active": "Activo",
    "personal.status.completed": "Completado",
    "personal.status.learning": "Aprendiendo",
    "personal.aiTask.description":
      "Una aplicación inteligente de gestión de tareas que usa IA para priorizar tareas, sugerir horarios de trabajo óptimos y proporcionar insights de productividad.",
    "personal.collaboration.description":
      "Un espacio de trabajo colaborativo con edición en tiempo real, videollamadas y funciones de gestión de proyectos para equipos remotos.",
    "personal.microservices.description":
      "Una plataforma de e-commerce escalable construida con arquitectura de microservicios, explorando prácticas modernas de despliegue y monitoreo.",
    "personal.fitness.description":
      "Aplicación móvil multiplataforma para seguimiento de fitness con integración de dispositivos wearables y funciones sociales.",
    "personal.dashboard.description":
      "Dashboard interactivo para visualizar conjuntos de datos complejos con gráficos personalizados, filtros y actualizaciones en tiempo real.",
    "personal.blockchain.description":
      "Plataforma de votación segura usando tecnología blockchain para asegurar transparencia e inmutabilidad de los votos.",

    // Contact Section
    "contact.title": "Construyamos Algo Increíble",
    "contact.description":
      "Busco una empresa orientada al crecimiento donde pueda contribuir con excelencia técnica y continuar avanzando en mi desarrollo profesional. Hablemos sobre cómo podemos trabajar juntos.",
    "contact.email": "Enviar Email",
    "contact.linkedin": "Conectar en LinkedIn",

    // Footer
    "footer.copyright": " Camila Maron. Creado con pasión.",

    // Common
    "common.github": "GitHub",
    "common.liveDemo": "Demo en Vivo",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
