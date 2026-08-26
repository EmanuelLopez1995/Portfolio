<script setup lang="ts">
const drawerOpen = ref(false)
const { navigation } = usePortfolio()
const { copyEmail } = useEmailContact()
const { locale, setLocale, t } = useI18n()

const language = computed({
  get: () => locale.value,
  set: value => setLocale(value)
})

function closeDrawer() {
  drawerOpen.value = false
}
</script>

<template>
  <VAppBar class="site-header" flat height="76">
    <VContainer class="header-inner">
      <nav class="desktop-nav" :aria-label="t('header.navLabel')">
        <a v-for="item in navigation" :key="item.href" :href="item.href">
          {{ item.label }}
        </a>
      </nav>

      <VBtnToggle
        v-model="language"
        class="language-toggle"
        mandatory
        density="compact"
        variant="outlined"
        divided
        :aria-label="t('header.languageLabel')"
      >
        <VBtn value="es" size="small">ES</VBtn>
        <VBtn value="en" size="small">EN</VBtn>
      </VBtnToggle>

      <VBtn
        class="desktop-cta email-copy-btn"
        color="primary"
        append-icon="mdi-content-copy"
        @click="copyEmail"
      >
        {{ t('common.copyEmail') }}
      </VBtn>

      <VBtn
        class="mobile-menu"
        icon="mdi-menu"
        variant="text"
        :aria-label="t('header.openMenu')"
        @click="drawerOpen = true"
      />
    </VContainer>
  </VAppBar>

  <VNavigationDrawer v-model="drawerOpen" temporary location="right" width="300">
    <div class="drawer-content">
      <div class="drawer-top">
        <VBtn icon="mdi-close" variant="text" :aria-label="t('header.closeMenu')" @click="closeDrawer" />
      </div>
      <nav class="drawer-nav" :aria-label="t('header.mobileNavLabel')">
        <a v-for="item in navigation" :key="item.href" :href="item.href" @click="closeDrawer">
          {{ item.label }}
        </a>
      </nav>
      <VBtnToggle
        v-model="language"
        class="language-toggle language-toggle--drawer"
        mandatory
        density="compact"
        variant="outlined"
        divided
        :aria-label="t('header.languageLabel')"
      >
        <VBtn value="es" size="small">ES</VBtn>
        <VBtn value="en" size="small">EN</VBtn>
      </VBtnToggle>
      <VBtn class="email-copy-btn" color="primary" prepend-icon="mdi-content-copy" block @click="copyEmail">
        {{ t('common.copyEmail') }}
      </VBtn>
    </div>
  </VNavigationDrawer>
</template>
