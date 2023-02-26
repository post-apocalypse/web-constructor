<template>
  <div class="builder-layout">
    <div class="builder-wrapper">
      <div class="_container" style="height: 100%;">
        <div class="builder-row">
          <SettingsSection />
          <LayoutSection />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.builder-layout {
  height: 100vh;
  padding-top: var(--nav-height);
}

.builder-wrapper {
  border-top: 1px solid rgba(128, 128, 128, 0.5);
  height: 100%;
}

.builder-row {
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>