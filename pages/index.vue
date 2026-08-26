<script setup lang="ts">
const { contactLinks, experiences, services, skillGroups, stats } = usePortfolio()
const { locale, t } = useI18n()

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  title: t('seo.title'),
  meta: [
    { name: 'description', content: t('seo.description') },
    { property: 'og:title', content: t('seo.title') },
    { property: 'og:description', content: t('seo.ogDescription') },
    { name: 'twitter:title', content: t('seo.title') },
    { name: 'twitter:description', content: t('seo.ogDescription') }
  ]
}))

const emailHref = 'mailto:emanicolopez@gmail.com'
</script>

<template>
  <div>
    <section id="inicio" class="hero-section">
      <VContainer class="hero-container">
        <div class="hero-copy">
          <div class="availability-pill">
            <span class="pulse-dot" />
            {{ t('hero.available') }}
          </div>
          <p class="hero-kicker">{{ t('hero.kicker') }}</p>
          <h1>
            {{ t('hero.titleStart') }}
            <span>{{ t('hero.titleHighlight') }}</span>
            {{ t('hero.titleEnd') }}
          </h1>
          <p class="hero-lead">{{ t('hero.lead') }}</p>
          <div class="hero-actions">
            <VBtn color="primary" size="large" href="#servicios" append-icon="mdi-arrow-down">
              {{ t('hero.cta') }}
            </VBtn>
            <VBtn class="email-copy-btn" variant="text" size="large" append-icon="mdi-email-fast-outline" :href="emailHref">
              {{ t('common.sendEmail') }}
            </VBtn>
          </div>
        </div>

        <div class="hero-visual" :aria-label="t('hero.aria')">
          <div class="visual-grid" aria-hidden="true" />
          <div class="photo-orbit" aria-hidden="true" />
          <div class="photo-frame">
            <img src="/images/emanuel-lopez-2026.png" :alt="t('hero.imageAlt')" width="520" height="520">
          </div>
          <div class="floating-card floating-card--top">
            <VIcon icon="mdi-creation-outline" size="25" />
            <div><small>{{ t('hero.floatingTopSmall') }}</small><strong>{{ t('hero.floatingTopStrong') }}</strong></div>
          </div>
          <div class="floating-card floating-card--bottom">
            <VIcon icon="mdi-code-braces" size="25" />
            <div><small>{{ t('hero.floatingBackendSmall') }}</small><strong>{{ t('hero.floatingBackendStrong') }}</strong></div>
          </div>
          <div class="floating-card floating-card--vue">
            <VIcon icon="mdi-vuejs" size="25" />
            <div><small>{{ t('hero.floatingVueSmall') }}</small><strong>{{ t('hero.floatingVueStrong') }}</strong></div>
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
          <span>{{ t('common.location') }}</span>
        </div>
      </VContainer>
    </section>

    <section id="sobre-mi" class="about-section section-space">
      <VContainer>
        <div class="about-grid">
          <SectionHeading
            :eyebrow="t('about.eyebrow')"
            :title="t('about.title')"
          />
          <div class="about-copy">
            <p class="about-lead">{{ t('about.lead') }}</p>
            <p>{{ t('about.body') }}</p>
            <div class="about-details">
              <div>
                <VIcon icon="mdi-school-outline" color="primary" />
                <span><strong>{{ t('about.educationStrong') }}</strong> {{ t('about.educationText') }}</span>
              </div>
              <div>
                <VIcon icon="mdi-translate" color="primary" />
                <span><strong>{{ t('about.englishStrong') }}</strong> {{ t('about.englishText') }}</span>
              </div>
            </div>
          </div>
        </div>
      </VContainer>
    </section>

    <section id="servicios" class="services-section section-space">
      <VContainer>
        <SectionHeading
          :eyebrow="t('services.eyebrow')"
          :title="t('services.title')"
          :text="t('services.text')"
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
            <p class="eyebrow">{{ t('ai.eyebrow') }}</p>
            <h2>{{ t('ai.title') }}</h2>
            <p>{{ t('ai.bodyOne') }}</p>
            <p>{{ t('ai.bodyTwo') }}</p>
          </div>
          <div class="ai-capabilities">
            <div>
              <VIcon icon="mdi-code-tags" />
              <span><strong>{{ t('ai.capabilityOneStrong') }}</strong>{{ t('ai.capabilityOneText') }}</span>
            </div>
            <div>
              <VIcon icon="mdi-transit-connection-variant" />
              <span><strong>{{ t('ai.capabilityTwoStrong') }}</strong>{{ t('ai.capabilityTwoText') }}</span>
            </div>
            <div>
              <VIcon icon="mdi-robot-happy-outline" />
              <span><strong>{{ t('ai.capabilityThreeStrong') }}</strong>{{ t('ai.capabilityThreeText') }}</span>
            </div>
          </div>
        </div>
      </VContainer>
    </section>

    <section id="experiencia" class="experience-section section-space">
      <VContainer>
        <SectionHeading
          :eyebrow="t('experience.eyebrow')"
          :title="t('experience.title')"
          :text="t('experience.text')"
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
          :eyebrow="t('stack.eyebrow')"
          :title="t('stack.title')"
          :text="t('stack.text')"
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
            <p class="eyebrow">{{ t('contact.eyebrow') }}</p>
            <h2>{{ t('contact.title') }}</h2>
            <p>{{ t('contact.text') }}</p>
            <VBtn class="email-copy-btn" color="primary" size="x-large" append-icon="mdi-email-fast-outline" :href="emailHref">
              {{ t('common.sendEmail') }}
            </VBtn>
          </div>
          <div class="contact-links">
            <a
              v-for="link in contactLinks"
              :key="link.label"
              :href="link.href"
              :target="link.href.startsWith('http') ? '_blank' : undefined"
              :rel="link.href.startsWith('http') ? 'noreferrer' : undefined"
            >
              <VIcon :icon="link.icon" size="23" />
              <span><small>{{ link.label }}</small>{{ link.value }}</span>
              <VIcon :icon="link.href.startsWith('mailto:') ? 'mdi-email-fast-outline' : 'mdi-arrow-up-right'" size="20" />
            </a>
          </div>
        </div>
      </VContainer>
    </section>

    <footer class="site-footer">
      <VContainer class="footer-inner">
        <p>© {{ new Date().getFullYear() }} Emanuel Lopez</p>
      </VContainer>
    </footer>

  </div>
</template>
