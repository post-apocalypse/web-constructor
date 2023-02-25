<template>
<div class="template">
  <div class="_column">
    <div class="template-row">
      <BarcodeIcon />
      <div class="template-actions">
        <div @click.prevent="$emit('delTemp', idx)" class="template-action _center trash">
          <TrashIcon />
        </div>
        <div @click.prevent="shareLink" class="template-action _center share">
          <ShareIcon />
        </div>
      </div>
    </div>
    <small>{{ $i18n('home.name') }}</small>
    <slot name="codename"></slot>
    <small>{{ $i18n('home.desc') }}</small>
    <slot name="desc"></slot>
  </div>
  <div class="_row">
    <small>{{ $i18n('home.date') }}</small>
    <slot name="date"></slot>
  </div>
</div>
</template>

<script setup>
const props = defineProps(['idx', 'link'])
const i18n = inject('func')
const { share, isSupported } = useShare()
const shareLink = () => {
  if (isSupported.value) {
    share({
      title: i18n('home.shareTitle'),
      text: i18n('home.shareDesc'),
      url: props.link
    })
  } else { navigator.clipboard.writeText(props.link) }
}
</script>

<style scoped lang="scss">
.template {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: var(--space);
  background-color: var(--wrapper-c);
  border-radius: var(--br-rad);
  padding: var(--space);
  height: var(--template-size);
  min-width: var(--template-size);
  transition: var(--transition);
  cursor: pointer;

  @media (max-width: 750px) {
    height: calc(var(--template-size) / 1.1);
    min-width: calc(var(--template-size) / 1.1);
  }

  & ._column { width: 100%; }

  svg {
    width: 5rem;
    height: auto;
    pointer-events: none;
  }

  @media (max-width: 750px) {
    svg {
      width: 4rem;
    }
  }

  &:hover { background-color: var(--wrapper-c-h); }
}

.template-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.template-actions {
  display: flex;
  gap: var(--space);
  z-index: 30;
}

.template-action {
  width: 40px;
  height: 40px;
  transition: var(--transition);
  border-radius: calc(var(--br-rad) / 1.2);
  background-color: var(--wrapper-c-h);

  svg {
    width: 20px;
    height: auto;
  }

  @media (max-width: 750px) {
    width: 35px;
    height: 35px;

    svg {
      width: 15px;
    }
  }
}

.trash:hover { background-color: rgba(255, 0, 0, 0.2); }
.share:hover { background-color: rgba(0, 255, 0, 0.2); }
</style>
