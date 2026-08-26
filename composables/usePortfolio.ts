import { computed } from 'vue'
import { contactLinks, portfolioContent } from '~/data/portfolio'

type LocaleCode = 'es' | 'en'

export function usePortfolio() {
  const { locale, t } = useI18n()

  const yearsOfExperience = computed(() => {
    const start = new Date(2021, 8)
    const elapsed = Date.now() - start.getTime()
    return Math.max(4, Math.floor(elapsed / (365.25 * 24 * 60 * 60 * 1000)))
  })

  const content = computed(() => portfolioContent[locale.value as LocaleCode] ?? portfolioContent.es)

  const stats = computed(() => [
    { value: `${yearsOfExperience.value}+`, label: t('stats.experience') },
    { value: '360°', label: t('stats.product') },
    { value: locale.value === 'es' ? 'IA' : 'AI', label: t('stats.ai') }
  ])

  return {
    contactLinks,
    experiences: computed(() => content.value.experiences),
    navigation: computed(() => content.value.navigation),
    services: computed(() => content.value.services),
    skillGroups: computed(() => content.value.skillGroups),
    stats
  }
}
