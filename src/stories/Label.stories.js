import Label from '../../src/components/Label.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Label',
  component: Label,
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Label },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Label v-bind="args" />',
})

export const CustomLabel = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
CustomLabel.args = {
  text: 'Some text here',
}
