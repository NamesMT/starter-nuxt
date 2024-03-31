<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <div class="flex">
      <div>Theme:&nbsp;</div>
      <div
        @click="colorMode.preference = (colorMode.preference !== 'dark')
          ? 'dark'
          : 'light'"
      >
        {{ colorMode.preference }}
      </div>
    </div>
  </div>
</template>

<style>
@import url("~/assets/css/main.css");
</style>
