<template>
<nav ref="navSize" class="nav-wrapper">
  <div class="_container">
    <div class="nav">
      <div class="_row">
      <img src="@/assets/img/logo.png" alt="Logo">
        <div class="nav-column">
          <h3>{{ $i18n('nav.logoTitle') }}</h3>
          <h5>{{ $i18n('nav.logoDesc') }}</h5>
        </div>
      </div>
      <div v-if="width > 900" class="_row">
        <NavThemeSwitcher />
        <div class="_br"></div>
        <div class="_i" :title="$i18n('nav.lang')"><TranslateIcon @click="changeLang" /></div>
        <div class="_br"></div>
        <NavContacts />
      </div>
      <NavMobMenu v-else>
        <template #theme><NavThemeSwitcher /></template>
        <template #translation><div class="_i"><TranslateIcon @click="changeLang" /></div></template>
        <template #contacts><NavContacts /></template>
      </NavMobMenu>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">
const changeLang = inject('i18n') as any
const curLang = inject('curLang') as string
const navSize = ref<HTMLInputElement | null>(null)
const width = ref<number>(0)

useResizeObserver(navSize, entries => width.value = entries[0].contentRect.width)
onMounted(() => document.documentElement.lang = curLang)
</script>

<style scoped lang="scss">
.nav-wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  z-index: 8;
  background-color: var(--tp-c);
  backdrop-filter: blur(8px);
}

.nav-column {
  display: flex;
  flex-direction: column;
  justify-content: center;

  h5 {
    color: var(--txt-c-h);
  }
}

.nav {
  display: flex;
  width: 100%;
  height: var(--nav-height);
  justify-content: space-between;
  gap: var(--space);
  padding: var(--space);

  img {
    max-height: 33px;
    width: auto;
  }
}
</style>
