<template>
  <NavMenuIcon @click="isActive = !isActive" :class="{ 'active': isActive }" />
  <Transition name="main">
    <div id="menu" v-show="isActive" class="menu-wrapper _column">
      <slot name="theme"></slot>
      <div class="_row">
        <slot name="translation"></slot>
        <div class="_br"></div>
        <slot name="contacts"></slot>
      </div>
    </div>
  </Transition>
  </template>
  
  <script setup lang="ts">
  const isActive = ref<boolean>(false)
  useEventListener(document, 'click', (evt: MouseEvent & { target: HTMLElement }) => {
    if (!evt.target.closest('#menu'))
      isActive.value = false
  })
  </script>
  
  <style scoped lang="scss">
  .menu-wrapper {
    position: fixed;
    background-color: var(--bg-c);
    padding: var(--space);
    border-radius: var(--br-rad);
    top: 60px;
    right: 0;
    margin: var(--space);
    width: 200px;
    height: 100px;
    z-index: 40;
    justify-content: center;
    align-items: center;
  }
  </style>
  