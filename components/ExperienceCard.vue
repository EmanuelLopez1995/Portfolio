<script setup lang="ts">
import type { Experience } from '~/data/portfolio'

defineProps<{
  experience: Experience
  index: number
}>()
</script>

<template>
  <article class="experience-card">
    <div class="experience-index">0{{ index + 1 }}</div>
    <div class="experience-content">
      <div class="experience-heading">
        <div>
          <p class="experience-period">{{ experience.company }} · {{ experience.period }}</p>
          <h3>{{ experience.title }}</h3>
          <p class="experience-role">{{ experience.role }}</p>
        </div>
        <VIcon icon="mdi-arrow-top-right" color="primary" size="28" />
      </div>
      <p class="experience-summary">{{ experience.summary }}</p>
      <ul>
        <li v-for="highlight in experience.highlights" :key="highlight">{{ highlight }}</li>
      </ul>
      <div class="chip-row">
        <VChip
          v-for="technology in experience.technologies"
          :key="technology"
          size="small"
          variant="tonal"
          color="primary"
        >
          {{ technology }}
        </VChip>
      </div>
    </div>
  </article>
</template>
