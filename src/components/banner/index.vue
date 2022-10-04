<template>
    <div class="absolute md:relative top-10 md:top-0 inset-x-0 w-full md:rounded-lg bg-yellow-100 px-4 py-3 mt-5 flex md:items-center">
        <span class="pt-0.5 md:pt-0">
            <img src="../../assets/info.png" alt="Info" class="w-5">
        </span>
        <p class="ml-3 font-medium text-white text-sm text-left">
            <span class="text-gray-700">{{text}}</span>
        </p>
    </div>
</template>
  
<script setup lang="ts">
import {
    withDefaults,
} from 'vue'
const props = withDefaults(
    defineProps<{
        text?: string,
    }>(),
    {}
)
</script>