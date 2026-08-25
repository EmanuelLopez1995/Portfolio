<script setup lang="ts">
const { contactLinks, experiences, services, skillGroups, stats } = usePortfolio()
const { copied, copyEmail } = useEmailContact()

function handleContactClick(event: MouseEvent, href: string) {
  if (href.startsWith('mailto:')) {
    event.preventDefault()
    copyEmail()
  }
}
</script>

<template>
  <div>
    <section id="inicio" class="hero-section">
      <VContainer class="hero-container">
        <div class="hero-copy">
          <div class="availability-pill">
            <span class="pulse-dot" />
            Valencia · Disponible para conectar
          </div>
          <p class="hero-kicker">Full Stack Developer · Integraciones · IA aplicada</p>
          <h1>
            Tecnología clara
            <span>para ideas</span>
            que quieren crecer.
          </h1>
          <p class="hero-lead">
            Soy Emanuel. Me gusta entender problemas complejos, conectar personas y sistemas, y convertir todo eso en productos útiles. Trabajo con web, integraciones e IA sin perder de vista lo más importante: para quién estamos construyendo.
          </p>
          <div class="hero-actions">
            <VBtn color="primary" size="large" href="#servicios" append-icon="mdi-arrow-down">
              Descubrir cómo aporto
            </VBtn>
            <VBtn class="email-copy-btn" variant="text" size="large" append-icon="mdi-content-copy" @click="copyEmail">
              Copiar mi email
            </VBtn>
          </div>
        </div>

        <div class="hero-visual" aria-label="Retrato de Emanuel López">
          <div class="visual-grid" aria-hidden="true" />
          <div class="photo-orbit" aria-hidden="true" />
          <div class="photo-frame">
            <img src="/images/emanuel-lopez.webp" alt="Emanuel López, desarrollador Full Stack" width="520" height="520">
          </div>
          <div class="floating-card floating-card--top">
            <VIcon icon="mdi-creation-outline" size="25" />
            <div><small>Nuevas posibilidades</small><strong>IA + MCP</strong></div>
          </div>
          <div class="floating-card floating-card--bottom">
            <VIcon icon="mdi-code-braces" size="25" />
            <div><small>Backend</small><strong>.NET / C#</strong></div>
          </div>
          <div class="floating-card floating-card--vue">
            <VIcon icon="mdi-vuejs" size="25" />
            <div><small>Mi fuerte</small><strong>Vue.js</strong></div>
          </div>
        </div>
      </VContainer>

      <VContainer class="stats-bar">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
        <div class="stat-note">
          <VIcon icon="mdi-map-marker-outline" size="20" />
          <span>Valencia, España</span>
        </div>
      </VContainer>
    </section>

    <section id="sobre-mi" class="about-section section-space">
      <VContainer>
        <div class="about-grid">
          <SectionHeading
            eyebrow="Sobre mí"
            title="Curioso por naturaleza. Práctico por experiencia."
          />
          <div class="about-copy">
            <p class="about-lead">
              No me interesa programar por programar. Me motiva descubrir qué está frenando a una persona o a un equipo y diseñar una forma más simple de avanzar.
            </p>
            <p>
              Soy cercano, curioso y resolutivo. Puedo moverme entre una interfaz en Vue, una API, una consulta SQL, una herramienta de IA y una conversación con cliente sin perder de vista el objetivo. Aprendo rápido, pregunto mucho y disfruto haciendo equipo.
            </p>
            <div class="about-details">
              <div>
                <VIcon icon="mdi-school-outline" color="primary" />
                <span><strong>Técnico Superior</strong> en Análisis de Sistemas</span>
              </div>
              <div>
                <VIcon icon="mdi-translate" color="primary" />
                <span><strong>Inglés B2</strong> para colaborar en equipos globales</span>
              </div>
            </div>
          </div>
        </div>
      </VContainer>
    </section>

    <section id="servicios" class="services-section section-space">
      <VContainer>
        <SectionHeading
          eyebrow="Lo que hago"
          title="Más que escribir código, ayudo a que las cosas avancen."
          text="Puedo sumarme a una idea, un producto en marcha o un proceso que necesita conectarse mejor."
        />
        <div class="services-grid">
          <article v-for="service in services" :key="service.number" class="service-card">
            <div class="service-top">
              <span>{{ service.number }}</span>
              <VIcon :icon="service.icon" size="28" />
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </article>
        </div>
      </VContainer>
    </section>

    <section id="ia" class="ai-section section-space">
      <VContainer>
        <div class="ai-panel">
          <div class="ai-copy">
            <p class="eyebrow">IA aplicada · Sin humo</p>
            <h2>La IA no reemplaza el criterio. Lo amplifica.</h2>
            <p>
              Estoy incorporando Codex, Claude y arquitecturas basadas en MCP a mi forma de trabajar: para explorar soluciones, acelerar desarrollo, conectar herramientas y diseñar automatizaciones que tengan un impacto concreto.
            </p>
            <p>
              Mi foco no es agregar un chat porque está de moda, sino encontrar dónde un modelo puede ahorrar tiempo, reducir fricción o habilitar algo que antes no era viable.
            </p>
          </div>
          <div class="ai-capabilities">
            <div>
              <VIcon icon="mdi-code-tags" />
              <span><strong>Desarrollo aumentado</strong>Codex y Claude para explorar, refactorizar, probar y documentar.</span>
            </div>
            <div>
              <VIcon icon="mdi-transit-connection-variant" />
              <span><strong>MCP & herramientas</strong>Modelos conectados con APIs, datos y sistemas empresariales.</span>
            </div>
            <div>
              <VIcon icon="mdi-robot-happy-outline" />
              <span><strong>Agentes & automatización</strong>Flujos que combinan IA, reglas de negocio y supervisión humana.</span>
            </div>
          </div>
        </div>
      </VContainer>
    </section>

    <section id="experiencia" class="experience-section section-space">
      <VContainer>
        <SectionHeading
          eyebrow="Cosas que ya resolví"
          title="El recorrido importa por lo que aprendí haciendo."
          text="No es una lista de puestos. Son situaciones reales en las que conecté tecnología, personas y operación para generar resultados."
        />
        <div class="experience-list">
          <ExperienceCard
            v-for="(experience, index) in experiences"
            :key="experience.company"
            :experience="experience"
            :index="index"
          />
        </div>
      </VContainer>
    </section>

    <section id="stack" class="stack-section section-space">
      <VContainer>
        <SectionHeading
          eyebrow="Mi caja de herramientas"
          title="Tecnología al servicio de la idea."
          text="Desde Vue y .NET hasta IA, cloud y sistemas industriales: elijo cada herramienta por lo que aporta al resultado."
        />
        <div class="skills-grid">
          <VCard v-for="group in skillGroups" :key="group.title" class="skill-card" variant="flat">
            <VIcon :icon="group.icon" class="skill-icon" size="30" />
            <h3>{{ group.title }}</h3>
            <p>{{ group.description }}</p>
            <div class="skill-list">
              <span v-for="skill in group.skills" :key="skill">{{ skill }}</span>
            </div>
          </VCard>
        </div>
      </VContainer>
    </section>

    <section id="contacto" class="contact-section section-space">
      <VContainer>
        <div class="contact-panel">
          <div class="contact-copy">
            <p class="eyebrow">Contacto</p>
            <h2>¿Tienes una idea o un problema interesante?</h2>
            <p>
              Si estás creando un producto, conectando sistemas o explorando cómo aplicar IA de forma útil, me encantará conocerte y pensar juntos.
            </p>
            <VBtn class="email-copy-btn" color="primary" size="x-large" append-icon="mdi-content-copy" @click="copyEmail">
              Copiar email
            </VBtn>
          </div>
          <div class="contact-links">
            <a
              v-for="link in contactLinks"
              :key="link.label"
              :href="link.href"
              :target="link.href.startsWith('http') ? '_blank' : undefined"
              :rel="link.href.startsWith('http') ? 'noreferrer' : undefined"
              @click="handleContactClick($event, link.href)"
            >
              <VIcon :icon="link.icon" size="23" />
              <span><small>{{ link.label }}</small>{{ link.value }}</span>
              <VIcon :icon="link.href.startsWith('mailto:') ? 'mdi-content-copy' : 'mdi-arrow-up-right'" size="20" />
            </a>
          </div>
        </div>
      </VContainer>
    </section>

    <footer class="site-footer">
      <VContainer class="footer-inner">
        <p>© {{ new Date().getFullYear() }} Emanuel López</p>
      </VContainer>
    </footer>

    <VSnackbar v-model="copied" color="surface" location="bottom" :timeout="2600">
      <div class="copy-confirmation">
        <VIcon icon="mdi-check-circle" color="primary" />
        <span>Email copiado: <strong>emanicolopez@gmail.com</strong></span>
      </div>
    </VSnackbar>
  </div>
</template>
