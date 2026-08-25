export interface Experience {
  company: string
  role: string
  period: string
  title: string
  summary: string
  highlights: string[]
  technologies: string[]
}

export const navigation = [
  { label: 'Lo que hago', href: '#servicios' },
  { label: 'IA aplicada', href: '#ia' },
  { label: 'Casos', href: '#experiencia' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contacto' }
]

export const services = [
  {
    number: '01',
    icon: 'mdi-application-braces-outline',
    title: 'Productos web',
    description: 'Convierto una necesidad de negocio en una experiencia clara, rápida y mantenible, desde la interfaz hasta la API.'
  },
  {
    number: '02',
    icon: 'mdi-connection',
    title: 'Integraciones',
    description: 'Hago que plataformas, datos y procesos hablen entre sí mediante APIs, GraphQL, SQL y automatizaciones.'
  },
  {
    number: '03',
    icon: 'mdi-robot-outline',
    title: 'IA aplicada',
    description: 'Incorporo modelos y agentes a flujos reales para reducir trabajo repetitivo, acelerar decisiones y crear nuevas experiencias.'
  },
  {
    number: '04',
    icon: 'mdi-account-switch-outline',
    title: 'Puente técnico',
    description: 'Traduzco entre clientes, operación y desarrollo para que el equipo resuelva el problema correcto.'
  }
]

export const experiences: Experience[] = [
  {
    company: 'CleverIt',
    role: 'Software Developer · Consultor técnico',
    period: 'Abr 2026 — Actualidad',
    title: 'Conectar la planta con sus sistemas de negocio',
    summary: 'Trabajo en el punto donde tecnología y operación se encuentran, haciendo que plataformas ERP/MES acompañen procesos industriales reales.',
    highlights: [
      'Responsable técnico del sistema MES DOEET: soporte, diagnóstico y mantenimiento productivo.',
      'Desarrollo de funcionalidades e integraciones entre Odoo, DOEET y sistemas externos.',
      'Análisis de procesos, relevamiento y coordinación directa con clientes.'
    ],
    technologies: ['Odoo', 'DOEET MES', 'REST APIs', 'SQL Server']
  },
  {
    company: 'Beast CRM',
    role: 'Full Stack Developer',
    period: 'Jul 2025 — Mar 2026',
    title: 'Hacer evolucionar un CRM sin frenar el producto',
    summary: 'Construí funcionalidades y resolví incidencias conectando una experiencia ágil en Vue con un backend robusto.',
    highlights: [
      'Nuevas funcionalidades de producto construidas con Vue.js.',
      'Integración frontend-backend mediante GraphQL y Apollo.',
      'Mantenimiento, resolución de incidencias y mejora de funcionalidades existentes.'
    ],
    technologies: ['Vue.js', 'GraphQL', 'Apollo', 'Ruby on Rails']
  },
  {
    company: 'Accenture Argentina',
    role: 'Desarrollador Web',
    period: 'Sep 2021 — Mar 2025',
    title: 'Llevar aplicaciones empresariales de la interfaz a la nube',
    summary: 'Participé en productos de escala combinando frontend, backend, servicios cloud, testing y accesibilidad.',
    highlights: [
      'Desarrollo y mantenimiento con Vue 2/3 y .NET/C#.',
      'APIs REST y servicios AWS: Lambda, DynamoDB, S3, CloudFront, CloudWatch y API Gateway.',
      'Tests con Jest, XUnit y Mocha/Chai, junto con buenas prácticas WCAG.'
    ],
    technologies: ['Vue.js', '.NET / C#', 'AWS', 'Testing']
  }
]

export const skillGroups = [
  {
    icon: 'mdi-creation-outline',
    title: 'IA & Automatización',
    description: 'Herramientas de IA integradas con criterio en el ciclo de producto y desarrollo.',
    skills: ['OpenAI Codex', 'Claude', 'MCP', 'AI APIs', 'Agentes', 'Automatización']
  },
  {
    icon: 'mdi-monitor-cellphone',
    title: 'Frontend',
    description: 'Interfaces mantenibles, accesibles y centradas en las personas.',
    skills: ['Vue 2/3', 'JavaScript', 'Composition API', 'Vuetify', 'Pinia', 'Vuex', 'SASS / SCSS']
  },
  {
    icon: 'mdi-server-outline',
    title: 'Backend & APIs',
    description: 'Servicios e integraciones que conectan productos y procesos.',
    skills: ['.NET / C#', 'Node.js', 'REST APIs', 'GraphQL', 'Ruby on Rails']
  },
  {
    icon: 'mdi-database-outline',
    title: 'Datos & Cloud',
    description: 'Soluciones fiables desde la base de datos hasta producción.',
    skills: ['SQL Server', 'PostgreSQL', 'DynamoDB', 'AWS', 'IIS', 'Windows Server']
  },
  {
    icon: 'mdi-factory',
    title: 'ERP / MES',
    description: 'Tecnología aplicada al trabajo real de equipos industriales.',
    skills: ['Odoo', 'DOEET MES', 'Integraciones', 'Automatización', 'Soporte productivo']
  },
  {
    icon: 'mdi-check-decagram-outline',
    title: 'Calidad & Delivery',
    description: 'Software que puede evolucionar con confianza y llegar bien a producción.',
    skills: ['Jest', 'XUnit', 'Mocha / Chai', 'Git', 'WCAG', 'Soporte productivo']
  }
]

export const contactLinks = [
  {
    label: 'Email',
    value: 'emanicolopez@gmail.com',
    href: 'mailto:emanicolopez@gmail.com',
    icon: 'mdi-email-outline'
  },
  {
    label: 'LinkedIn',
    value: 'emanuel-nicolas-lopez',
    href: 'https://www.linkedin.com/in/emanuel-nicolas-lopez/',
    icon: 'mdi-linkedin'
  },
  {
    label: 'GitHub',
    value: 'EmanuelLopez1995',
    href: 'https://github.com/EmanuelLopez1995',
    icon: 'mdi-github'
  }
]
