<template>
<div class="setting-wrapper">
  <div class="settings _column">
    <small>Создать секцию</small>
    <TheSelect
      :model="core.curSection"
      :items="core.sections"
      @update-data="value => core.curSection = value"
    />
    <div class="_hr"></div>
    <small>Редактор секции</small>
    <div class="section _column">
      <TransitionGroup name="group">
        <input
          v-if="core.curSection === '2. BLOCKS AND CARDS'"
          type="text"
          v-model="core.img"
          placeholder="Ссылка на изображение"
        >
        <input type="text" v-model="core.header" placeholder="Заголовок">
        <input type="text" v-model="core.desc" placeholder="Описание">
      </TransitionGroup>
    </div>
    <div
      @click="core.addSection"
      :class="{ '_btn': true, '_disabled': !core.isAllValid }"
    ><small>Добавить</small></div>
  </div>
</div>
</template>

<script setup lang="ts">
const core = useCoreStore()
</script>

<style scoped lang="scss">
.setting-wrapper {
  width: 350px;
  height: 100%;
  overflow-y: scroll;
}

.settings {
  height: 100%;
  border-right: 1px solid rgba(128, 128, 128, 0.5);
  padding: var(--space);
}

.main {
  flex: 1 1 auto;
}
</style>
