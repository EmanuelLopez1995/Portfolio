export interface Experience {
  company: string
  role: string
  period: string
  title: string
  summary: string
  highlights: string[]
  technologies: string[]
}

export interface PortfolioContent {
  navigation: { label: string, href: string }[]
  services: {
    number: string
    icon: string
    title: string
    description: string
  }[]
  experiences: Experience[]
  skillGroups: {
    icon: string
    title: string
    description: string
    skills: string[]
  }[]
}

export const portfolioContent: Record<'es' | 'en', PortfolioContent> = {
  es: {
    navigation: [
      { label: 'Lo que hago', href: '#servicios' },
      { label: 'IA aplicada', href: '#ia' },
      { label: 'Casos', href: '#experiencia' },
      { label: 'Stack', href: '#stack' },
      { label: 'Contacto', href: '#contacto' }
    ],
    services: [
      {
        number: '01',
        icon: 'mdi-application-braces-outline',
        title: 'Productos web',
        description: 'Convierto una necesidad de negocio en una experiencia clara, rapida y mantenible, desde la interfaz hasta la API.'
      },
      {
        number: '02',
        icon: 'mdi-connection',
        title: 'Integraciones',
        description: 'Hago que plataformas, datos y procesos hablen entre si mediante APIs, GraphQL, SQL y automatizaciones.'
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
        title: 'Puente tecnico',
        description: 'Traduzco entre clientes, operacion y desarrollo para que el equipo resuelva el problema correcto.'
      }
    ],
    experiences: [
      {
        company: 'CleverIt',
        role: 'Software Developer - Consultor tecnico',
        period: 'Abr 2026 - Actualidad',
        title: 'Conectar la planta con sus sistemas de negocio',
        summary: 'Trabajo en el punto donde tecnologia y operacion se encuentran, haciendo que plataformas ERP/MES acompanen procesos industriales reales.',
        highlights: [
          'Responsable tecnico del sistema MES DOEET: soporte, diagnostico y mantenimiento productivo.',
          'Desarrollo de funcionalidades e integraciones entre Odoo, DOEET y sistemas externos.',
          'Analisis de procesos, relevamiento y coordinacion directa con clientes.'
        ],
        technologies: ['Odoo', 'DOEET MES', 'REST APIs', 'SQL Server']
      },
      {
        company: 'Beast CRM',
        role: 'Full Stack Developer',
        period: 'Jul 2025 - Mar 2026',
        title: 'Hacer evolucionar un CRM sin frenar el producto',
        summary: 'Construi funcionalidades y resolvi incidencias conectando una experiencia agil en Vue con un backend robusto.',
        highlights: [
          'Nuevas funcionalidades de producto construidas con Vue.js.',
          'Integracion frontend-backend mediante GraphQL y Apollo.',
          'Mantenimiento, resolucion de incidencias y mejora de funcionalidades existentes.'
        ],
        technologies: ['Vue.js', 'GraphQL', 'Apollo', 'Ruby on Rails']
      },
      {
        company: 'Accenture Argentina',
        role: 'Desarrollador Web',
        period: 'Sep 2021 - Mar 2025',
        title: 'Llevar aplicaciones empresariales de la interfaz a la nube',
        summary: 'Participe en productos de escala combinando frontend, backend, servicios cloud, testing y accesibilidad.',
        highlights: [
          'Desarrollo y mantenimiento con Vue 2/3 y .NET/C#.',
          'APIs REST y servicios AWS: Lambda, DynamoDB, S3, CloudFront, CloudWatch y API Gateway.',
          'Tests con Jest, XUnit y Mocha/Chai, junto con buenas practicas WCAG.'
        ],
        technologies: ['Vue.js', '.NET / C#', 'AWS', 'Testing']
      }
    ],
    skillGroups: [
      {
        icon: 'mdi-creation-outline',
        title: 'IA & Automatizacion',
        description: 'Herramientas de IA integradas con criterio en el ciclo de producto y desarrollo.',
        skills: ['OpenAI Codex', 'Claude', 'MCP', 'AI APIs', 'Agentes', 'Automatizacion']
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
        description: 'Soluciones fiables desde la base de datos hasta produccion.',
        skills: ['SQL Server', 'PostgreSQL', 'DynamoDB', 'AWS', 'IIS', 'Windows Server']
      },
      {
        icon: 'mdi-factory',
        title: 'ERP / MES',
        description: 'Tecnologia aplicada al trabajo real de equipos industriales.',
        skills: ['Odoo', 'DOEET MES', 'Integraciones', 'Automatizacion', 'Soporte productivo']
      },
      {
        icon: 'mdi-check-decagram-outline',
        title: 'Calidad & Delivery',
        description: 'Software que puede evolucionar con confianza y llegar bien a produccion.',
        skills: ['Jest', 'XUnit', 'Mocha / Chai', 'Git', 'WCAG', 'Soporte productivo']
      }
    ]
  },
  en: {
    navigation: [
      { label: 'What I do', href: '#servicios' },
      { label: 'Applied AI', href: '#ia' },
      { label: 'Cases', href: '#experiencia' },
      { label: 'Stack', href: '#stack' },
      { label: 'Contact', href: '#contacto' }
    ],
    services: [
      {
        number: '01',
        icon: 'mdi-application-braces-outline',
        title: 'Web products',
        description: 'I turn business needs into clear, fast and maintainable experiences, from the interface to the API.'
      },
      {
        number: '02',
        icon: 'mdi-connection',
        title: 'Integrations',
        description: 'I make platforms, data and processes talk to each other through APIs, GraphQL, SQL and automation.'
      },
      {
        number: '03',
        icon: 'mdi-robot-outline',
        title: 'Applied AI',
        description: 'I bring models and agents into real workflows to reduce repetitive work, speed up decisions and create new experiences.'
      },
      {
        number: '04',
        icon: 'mdi-account-switch-outline',
        title: 'Technical bridge',
        description: 'I translate between clients, operations and development so the team solves the right problem.'
      }
    ],
    experiences: [
      {
        company: 'CleverIt',
        role: 'Software Developer - Technical consultant',
        period: 'Apr 2026 - Present',
        title: 'Connecting the factory floor with business systems',
        summary: 'I work where technology and operations meet, helping ERP/MES platforms support real industrial processes.',
        highlights: [
          'Technical owner of the DOEET MES system: support, diagnostics and production maintenance.',
          'Feature development and integrations between Odoo, DOEET and external systems.',
          'Process analysis, discovery and direct coordination with clients.'
        ],
        technologies: ['Odoo', 'DOEET MES', 'REST APIs', 'SQL Server']
      },
      {
        company: 'Beast CRM',
        role: 'Full Stack Developer',
        period: 'Jul 2025 - Mar 2026',
        title: 'Evolving a CRM without slowing the product down',
        summary: 'I built features and solved issues by connecting an agile Vue experience with a robust backend.',
        highlights: [
          'New product features built with Vue.js.',
          'Frontend-backend integration through GraphQL and Apollo.',
          'Maintenance, incident resolution and improvement of existing features.'
        ],
        technologies: ['Vue.js', 'GraphQL', 'Apollo', 'Ruby on Rails']
      },
      {
        company: 'Accenture Argentina',
        role: 'Web Developer',
        period: 'Sep 2021 - Mar 2025',
        title: 'Taking enterprise apps from interface to cloud',
        summary: 'I contributed to scaled products combining frontend, backend, cloud services, testing and accessibility.',
        highlights: [
          'Development and maintenance with Vue 2/3 and .NET/C#.',
          'REST APIs and AWS services: Lambda, DynamoDB, S3, CloudFront, CloudWatch and API Gateway.',
          'Testing with Jest, XUnit and Mocha/Chai, alongside WCAG good practices.'
        ],
        technologies: ['Vue.js', '.NET / C#', 'AWS', 'Testing']
      }
    ],
    skillGroups: [
      {
        icon: 'mdi-creation-outline',
        title: 'AI & Automation',
        description: 'AI tools integrated with judgment across the product and development cycle.',
        skills: ['OpenAI Codex', 'Claude', 'MCP', 'AI APIs', 'Agents', 'Automation']
      },
      {
        icon: 'mdi-monitor-cellphone',
        title: 'Frontend',
        description: 'Maintainable, accessible interfaces centered on people.',
        skills: ['Vue 2/3', 'JavaScript', 'Composition API', 'Vuetify', 'Pinia', 'Vuex', 'SASS / SCSS']
      },
      {
        icon: 'mdi-server-outline',
        title: 'Backend & APIs',
        description: 'Services and integrations that connect products and processes.',
        skills: ['.NET / C#', 'Node.js', 'REST APIs', 'GraphQL', 'Ruby on Rails']
      },
      {
        icon: 'mdi-database-outline',
        title: 'Data & Cloud',
        description: 'Reliable solutions from database to production.',
        skills: ['SQL Server', 'PostgreSQL', 'DynamoDB', 'AWS', 'IIS', 'Windows Server']
      },
      {
        icon: 'mdi-factory',
        title: 'ERP / MES',
        description: 'Technology applied to the real work of industrial teams.',
        skills: ['Odoo', 'DOEET MES', 'Integrations', 'Automation', 'Production support']
      },
      {
        icon: 'mdi-check-decagram-outline',
        title: 'Quality & Delivery',
        description: 'Software that can evolve confidently and reach production well.',
        skills: ['Jest', 'XUnit', 'Mocha / Chai', 'Git', 'WCAG', 'Production support']
      }
    ]
  }
}

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
