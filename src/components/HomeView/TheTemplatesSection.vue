<template>
<section class="templates">
  <div class="templates-container">
    <div class="templates-wrapper">
      <RouterLink to="/builder" class="templates-new" title="$i18n('home.new')">
        <CreateIcon />
        <h3>{{ $i18n('home.create') }}</h3>
      </RouterLink>
      <RouterLink v-for="(temp, idx) in templates" :key="idx" :to="temp.path" title="$i18n('home.temp')">
        <TheTemplate :idx="idx" :link="temp.href" @del-temp="(idx: any) => templates.splice(idx, 1)">
          <template #codename><h3>{{ temp.name }}</h3></template>
          <template #desc><p>{{ temp.desc ? temp.desc : $i18n('home.noDesc') }}</p></template>
          <template #date><small>{{ temp.date }}</small></template>
        </TheTemplate>
      </RouterLink>
      <div v-if="!templates.length" class="templates-tip">
        <InfoIcon />
        <h3>{{ $i18n('home.tipTitle') }}</h3>
        <p>{{ $i18n('home.tipDesc') }}</p>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
const { templates } = useCoreStore()
</script>

<style scoped lang="scss">
.templates {
  overflow-x: scroll;
  width: 100%;
  max-width: 100%;

  svg {
    width: 50px;
    height: auto;
  }
}

.templates-container { display: inline-block; }

.templates-wrapper {
  display: flex;
  width: 100%;
  gap: var(--space);
}

.templates-new {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: var(--space);
  background-color: var(--wrapper-c);
  border-radius: var(--br-rad);
  padding: var(--space);
  height: var(--template-size);
  min-width: var(--template-size);
  transition: var(--transition);
  cursor: pointer;
  color: var(--txt-c);
  text-align: center;

  &:hover {
    background-color: var(--wrapper-c-h);
  }

  @media (max-width: 750px) {
    height: calc(var(--template-size) / 1.1);
    min-width: calc(var(--template-size) / 1.1);
  }
}

.templates-tip {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: var(--space);
  max-width: 350px;
  min-width: 350px;
}
</style>
