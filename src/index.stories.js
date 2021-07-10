import CustomElement from './index.svelte'

export default { title: 'Rarible Widgets' }

export const CustomElementStory = () => ({
  Component: CustomElement,
})

export const CustomElementStoryWithProps = () => ({
  Component: CustomElement,
  props: {
    title: 'Hello from props!!',
  },
})
