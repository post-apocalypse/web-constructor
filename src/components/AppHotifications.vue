<template>
<div class="notifications _column">
  <TransitionGroup name="group">
    <div v-for="item in notifications" :key="item" class="_tp-wp">
      <small>{{ item }}</small>
    </div>
  </TransitionGroup>
</div>
</template>

<script setup lang="ts">
const { notifications } = useNotfStore()
</script>

<style scoped lang="scss">
.notifications {
  align-items: flex-end;
  margin: var(--space);
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 10;
}
</style>
