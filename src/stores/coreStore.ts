export const useCoreStore = defineStore('core', () => {
  const templates = ref<{ path: string, href: string, desc: string, date: string, name: string }[]>([]);
  return { templates }
})
