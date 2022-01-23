import Button from '../../src/components/Button.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on action args: https://storybook.js.org/docs/vue/essentials/actions#action-args
  argTypes: { onClick: { action: 'clicked' } },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args" />',
})

export const CustomLabel = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
CustomLabel.args = {
  color: '#1ea7fd',
  label: 'Click Me!',
}

export const DefaultLabel = Template.bind({})
DefaultLabel.args = {
  label: 'Default',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'Disabled',
}
