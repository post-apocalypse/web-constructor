<template>
  <div class="copyright">
    <small>Made with</small>
    <HeartIcon />
    <small>by <a href="https://t.me/afterallspace" :title="$i18n('nav.telegram')">Daniil Sukharnikov</a></small>
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;

  svg {
    fill: var(--txt-c);
    fill: red;
  }

  a { transition: var(--transition); }
  a:hover { color: var(--accent-c); }
}
</style>
