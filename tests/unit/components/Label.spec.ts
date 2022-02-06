import { shallowMount } from '@vue/test-utils'
import Label from '@/components/Label.vue'

describe('Label.vue', () => {
  it('renders provided text', () => {
    const text = 'Some text'
    const wrapper = shallowMount(Label, {
      props: { text },
    })
    expect(wrapper.text()).toMatch(text)
  })
})
