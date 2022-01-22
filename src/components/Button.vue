<script setup lang="ts">
interface Props {
  label?: string
  color?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  label: '',
  color: '#3EB489',
  disabled: false,
})

defineEmits<{ (e: 'clicked'): void }>()
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    @click="!disabled && $emit('clicked')"
  >
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;

  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration: none;

  background-color: v-bind(color);
  outline: none;
  cursor: pointer;

  &:disabled {
    background-color: #eae9e3;
    color: #aaa8a1;
    cursor: not-allowed;

    pointer-events: none;
  }
}
</style>
