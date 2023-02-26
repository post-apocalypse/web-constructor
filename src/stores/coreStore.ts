export const useCoreStore = defineStore('core', () => {
  const sections = ref<string[]>(['1. HEADERS AND CONTENT', '2. BLOCKS AND CARDS', '3. API'])
  const curSection = ref<string>('1. HEADERS AND CONTENT')
  const templates = ref<Template[]>([])
  const layout = ref<{ id: number, type: string, img?: string, header?: string, desc?: string }[]>([])
  const disabled = ref<boolean>(false)

  const img = ref<string>('')
  const header = ref<string>('')
  const desc = ref<string>('')

  const reset = () => { header.value = ''; desc.value = ''; img.value = '' }
  watch(() => curSection.value, () => reset())

  const addSection = () => {
    if (curSection.value === '1. HEADERS AND CONTENT') {
      layout.value.push(
        {
          id: layout.value.length,
          type: 'hac',
          header: header.value,
          desc: desc.value
        }
      )
    } else if (curSection.value === '2. BLOCKS AND CARDS') {
      layout.value.push(
        {
          id: layout.value.length,
          type: 'bac',
          img: img.value,
          header: header.value,
          desc: desc.value
        }
      )
    }
    reset()
  }

  const isValid = (val: string) => val !== ''
  const isAllValid = computed(() => isValid(header.value) && isValid(desc.value))

  return {
    templates,
    curSection,
    img,
    header,
    desc,
    sections,
    layout,
    addSection,
    disabled,
    isAllValid
  }
})
