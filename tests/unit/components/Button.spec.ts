import { shallowMount, mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('renders provided label', () => {
    const label = 'Click me'
    const wrapper = shallowMount(Button, {
      props: { label },
    })
    expect(wrapper.text()).toMatch(label)
  }),
    it('renders default label when no label is provided', () => {
      const wrapper = shallowMount(Button, {})
      expect(wrapper.text()).toMatch('')
    }),
    it('emits clicked event on click', () => {
      const wrapper = mount(Button, {})

      wrapper.find('button').trigger('click')

      expect(wrapper.emitted('clicked')).toHaveLength(1)
    }),
    it('does not emit clicked event on click when disabled', () => {
      const wrapper = mount(Button, { props: { disabled: true } })

      wrapper.find('button').trigger('click')

      expect(wrapper.emitted('clicked')).toBe(undefined)
    })
})
