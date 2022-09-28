<template>
  <div>

    <RouterView />

  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Login from "./views/Login.vue";

</script>

<style >
@font-face {
  font-family: "Puffin-Regular";
  src: local("Puffin-Regular"),
   url(./fonts/Puffin-Regular.otf) format("truetype");
}
@font-face {
  font-family: "Puffin-SemiBold";
  src: local("Puffin-SemiBold"),
   url(./fonts/Puffin-SemiBold.otf) format("truetype");
}
@font-face {
  font-family: "Puffin-SemiBoldItalic";
  src: local("Puffin-SemiBoldItalic"),
   url(./fonts/Puffin-SemiBoldItalic.otf) format("truetype");
}
</style>
