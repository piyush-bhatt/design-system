<script setup lang="ts">
interface Props {
  text: string
}

withDefaults(defineProps<Props>(), {
  text: '',
})
</script>

<template>
  <h2 className="root">{{ text }}</h2>
</template>

<style scoped>
.root {
  color: #000;
}
</style>
