import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'portfolioTheme',
      themes: {
        portfolioTheme: {
          dark: true,
          colors: {
            background: '#071e26',
            surface: '#0d2a34',
            primary: '#c7f36b',
            secondary: '#ff8064',
            accent: '#5bd6c7',
            info: '#9ad7ff'
          }
        }
      }
    },
    defaults: {
      VBtn: { rounded: 'pill', elevation: 0 },
      VChip: { rounded: 'lg' }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
