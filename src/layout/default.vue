<template>
  <div class="flex items-start justify-center bg-primary-50 h-screen">
    <div
      class="h-full md:h-auto divide-y-2 divide-gray-300 bg-white md:rounded-2xl max-w-xl w-full md:shadow-2xl md:my-32">
      <Header />
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "../components/main/header/index.vue"
</script>
