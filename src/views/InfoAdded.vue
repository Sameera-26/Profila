<template>
  <div class="text-center text-xl md:px-8 px-4 md:py-10 py-8 flex flex-col items-center heightCalc h-full">
    <p class="md:text-[22px] text-lg text-gray-650 font-bold px-4 md:px-0">
      You are all set up! Zeke has added the new information to your Profila.
    </p>
    <img class="mx-auto" src="../assets/infoadded.png" alt="comment" />

    <button @click="$router.push('/')"
      class="bg-primary-400 w-full mt-auto text-white text-sm font-bold py-3.5 rounded-lg">
      Okay
    </button>
  </div>
</template>