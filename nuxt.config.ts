import vuetify from 'vite-plugin-vuetify'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@mdi/font/css/materialdesignicons.css', '~/assets/styles/main.scss'],
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Emanuel López | Full Stack Developer',
      meta: [
        {
          name: 'description',
          content: 'Emanuel López crea productos web, integraciones y soluciones con IA conectando tecnología, personas y negocio.'
        },
        { name: 'theme-color', content: '#071e26' },
        { property: 'og:title', content: 'Emanuel López | Full Stack Developer' },
        {
          property: 'og:description',
          content: 'Productos web, integraciones e IA aplicada con foco en soluciones que funcionan de verdad.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: `${siteUrl}/og.png` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Emanuel López | Full Stack Developer' },
        {
          name: 'twitter:description',
          content: 'Productos web, integraciones e IA aplicada con foco en soluciones que funcionan de verdad.'
        },
        { name: 'twitter:image', content: `${siteUrl}/og.png` }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap'
        }
      ]
    }
  },
  runtimeConfig: {
    public: { siteUrl }
  },
  build: { transpile: ['vuetify'] },
  vite: {
    plugins: [vuetify({ autoImport: true })],
    ssr: { noExternal: ['vuetify'] }
  }
})
