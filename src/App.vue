<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Button from '@/components/Button.vue'

const onClick = () => {
  console.log('You clicked me!!')
}
</script>

<template>
  <div class="wrapper">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <Button label="Click me!" @clicked="onClick" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
</style>
