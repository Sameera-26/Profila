<template>
  <div class="text-center text-xl md:px-8 px-4 md:py-10 py-8 flex flex-col items-center heightCalc h-full">
    <p class="md:text-[22px] text-lg text-gray-650 font-bold py-2">
      Now, Let us introduce to Zeke. They will help you get started on your Profile Journey.
    </p>
    <img class="mx-auto" src="../assets/zeke.png" alt="zeke" />
    <div class="text-center relative text-gray-700 my-5 rounded-2xl px-4 text-base font-medium py-5 bg-primary-600">
      <div class="text-5xl text-center text-primary-600 absolute -top-6 left-[48%]">
        <font-awesome-icon icon="fa-solid fa-caret-up" />
      </div>
      <p class="">Welcome! To get Started with Profila I'd like to know a little more about you.</p>
    </div>
    <button @click="$router.push('/Nickname')"
      class="bg-primary-400 w-full mt-auto text-white text-sm font-bold py-3.5 rounded-lg">
      Get Started
    </button>
  </div>

</template>
<script></script>
