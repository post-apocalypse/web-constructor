<template>
  <TheNavbar />
  <AppHotifications />
  <div class="app-wrapper _full-fixed"></div>
  <RouterView v-slot="{ Component }">
    <Transition name="main" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script setup lang="ts">
const router = useRouter()
const i18n = inject('func') as LangFunc
router.beforeEach((to, _, next) => { document.title = i18n(to.name as string); next() })
</script>
