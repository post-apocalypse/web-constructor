<template>
  <div class="view-wrapper">
    <div class="empty _column _center">
      <ComponentIcon />
      <h1>Это ваш шаблон</h1>
      <h3>Здесь будут отображаться секции и компоненты, попробуйте что-нибудь добавить!</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.view-wrapper {
  width: 100%;
  height: 100%;
}

.empty {
  width: 100%;
  height: 100%;
  text-align: center;

  svg {
    height: 100px;
    width: auto;
  }
}
</style>
