<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  text?: string
}>()
</script>

<template>
  <div class="section-heading">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="text" class="section-intro">{{ text }}</p>
  </div>
</template>
