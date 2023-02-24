<script setup lang="ts">
import TheAside from './TheAside.vue'
</script>

<template>
  <div min-h-screen flex flex-row>
    <div w-auto>
      <TheAside />
    </div>
    <div flex-1>
      <RouterView />
    </div>
  </div>
</template>
