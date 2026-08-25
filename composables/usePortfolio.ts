import { computed } from 'vue'
import { contactLinks, experiences, navigation, services, skillGroups } from '~/data/portfolio'

export function usePortfolio() {
  const yearsOfExperience = computed(() => {
    const start = new Date(2021, 8)
    const elapsed = Date.now() - start.getTime()
    return Math.max(4, Math.floor(elapsed / (365.25 * 24 * 60 * 60 * 1000)))
  })

  const stats = computed(() => [
    { value: `${yearsOfExperience.value}+`, label: 'años resolviendo con software' },
    { value: '360°', label: 'visión de producto a producción' },
    { value: 'IA', label: 'aplicada con criterio' }
  ])

  return { contactLinks, experiences, navigation, services, skillGroups, stats }
}
