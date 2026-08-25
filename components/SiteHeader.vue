<script setup lang="ts">
const drawerOpen = ref(false)
const { navigation } = usePortfolio()
const { copyEmail } = useEmailContact()

function closeDrawer() {
  drawerOpen.value = false
}
</script>

<template>
  <VAppBar class="site-header" flat height="76">
    <VContainer class="header-inner">
      <nav class="desktop-nav" aria-label="Navegación principal">
        <a v-for="item in navigation" :key="item.href" :href="item.href">
          {{ item.label }}
        </a>
      </nav>

      <VBtn
        class="desktop-cta email-copy-btn"
        color="primary"
        append-icon="mdi-content-copy"
        @click="copyEmail"
      >
        Copiar email
      </VBtn>

      <VBtn
        class="mobile-menu"
        icon="mdi-menu"
        variant="text"
        aria-label="Abrir menú"
        @click="drawerOpen = true"
      />
    </VContainer>
  </VAppBar>

  <VNavigationDrawer v-model="drawerOpen" temporary location="right" width="300">
    <div class="drawer-content">
      <div class="drawer-top">
        <VBtn icon="mdi-close" variant="text" aria-label="Cerrar menú" @click="closeDrawer" />
      </div>
      <nav class="drawer-nav" aria-label="Navegación móvil">
        <a v-for="item in navigation" :key="item.href" :href="item.href" @click="closeDrawer">
          {{ item.label }}
        </a>
      </nav>
      <VBtn class="email-copy-btn" color="primary" prepend-icon="mdi-content-copy" block @click="copyEmail">
        Copiar email
      </VBtn>
    </div>
  </VNavigationDrawer>
</template>
