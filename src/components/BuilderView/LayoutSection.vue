<template>
<div class="layout-wrapper">
  <Transition name="main" mode="out-in">
    <div v-if="!core.layout.length" class="empty _column _center">
      <ComponentIcon />
      <h1>Это ваш шаблон</h1>
      <h3>Здесь будут отображаться секции и компоненты, попробуйте что-нибудь добавить!</h3>
    </div>
    
    <div v-else class="_column">
      <TransitionGroup name="group">
        <div v-for="item in core.layout" :key="item.id" class="_content-wp">
          <section v-if="item.type === 'hac'" :data-idx="item.id" class="_column _wrap">
            <h2>{{ item.header }}</h2>
            <p>{{ item.desc }}</p>
          </section>
          <section v-if="item.type === 'bac'" :data-idx="item.id" class="block _row">
            <img v-if="item.img" :src="item.img" alt="User Image">
            <div class="_column">
              <h2>{{ item.header }}</h2>
              <p>{{ item.desc }}</p>
            </div>
          </section>
        </div>
      </TransitionGroup>
    </div>
  </Transition>
</div>
</template>

<script setup lang="ts">
const core = useCoreStore()
</script>

<style scoped lang="scss">
.layout-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: var(--space);
}

.empty {
  padding: calc(var(--space) * 10) var(--space) var(--space) var(--space);
  text-align: center;

  svg {
    height: 100px;
    width: auto;
  }
}

.block {
  align-items: flex-start;
  img {
    height: 150px;
    border-radius: var(--br-rad);
    width: auto;
  }
}
</style>
