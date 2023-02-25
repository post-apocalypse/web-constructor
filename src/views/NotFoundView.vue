<template>
<div class="_wrapper">
  <div class="not-found _center">
    <h1>{{ $i18n('notfound.one') }}<br />{{ $i18n('notfound.two') }}</h1>
    <RouterLink to="/" :title="$i18n('notfound.linkTitle')" class="_btn">
      <small>{{ $i18n('notfound.btn') }}</small>
    </RouterLink>
  </div>
</div>
</template>

<style scoped lang="scss">
.not-found {
  text-align: center;
  flex-direction: column;
  gap: var(--space);
  height: 25rem;
  width: 100%;
}
</style>
