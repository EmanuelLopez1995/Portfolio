# Portfolio de Emanuel López

Portfolio personal creado con Nuxt 3, Vue 3 Composition API y Vuetify 3.

## Primeros pasos

Necesitas Node.js 22 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en el navegador.

## Estructura para aprender

- `pages/index.vue`: composición de la página principal.
- `components/`: piezas reutilizables de interfaz.
- `composables/usePortfolio.ts`: estado derivado con Composition API.
- `data/portfolio.ts`: contenido tipado y separado de la vista.
- `plugins/vuetify.ts`: tema y configuración de Vuetify.
- `assets/styles/main.scss`: estilos globales y diseño responsive.

## Comandos útiles

```bash
npm run dev       # servidor de desarrollo
npm run build     # compilación de producción
npm run generate  # versión estática
npm run preview   # previsualiza la compilación
```

## Publicar en GitHub

Antes del primer commit, revisa los enlaces y textos personales. La carpeta `.tools` está excluida del repositorio y solo contiene utilidades locales usadas durante la creación.

Cuando conozcas la URL definitiva, copia `.env.example` como `.env` y cambia `NUXT_PUBLIC_SITE_URL`. Así la tarjeta social usará una dirección absoluta correcta.
