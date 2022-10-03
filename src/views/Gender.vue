<template>
  <div class="text-center h-full text-xl md:px-8 px-4 md:py-10 py-8 flex flex-col items-center w-full heightCalc">
    <p class="md:text-[22px] text-xl lg:px-8 text-black font-bold py-2 lg:pt-0">
      Gender
    </p>
    <p class="text-sm px-4 md:px-0 text-gray-800 pt-2">Brands often have gender-specific content and offers.</p>
    <div class="w-full md:pb-8 pt-5 space-y-3 mt-auto">
      <button @click="$router.push('/Birthdate')"
        class="text-left font-bold w-full text-xs text-black border tracking-wide border-primary-400 rounded-lg py-4 px-4 focus:outline-none focus:border-primary-500">Male</button>
      <button @click="$router.push('/Birthdate')"
        class="text-left font-bold w-full text-xs text-black border tracking-wide border-primary-400 rounded-lg py-4 px-4 focus:outline-none focus:border-primary-500">Female</button>

      <button @click="$router.push('/Birthdate')"
        class="text-left font-bold w-full text-xs text-black border tracking-wide border-primary-400 rounded-lg py-4 px-4 focus:outline-none focus:border-primary-500">Other</button>

      <button @click="$router.push('/Birthdate')"
        class="text-left font-bold w-full text-xs text-black border tracking-wide border-primary-400 rounded-lg py-4 px-4 focus:outline-none focus:border-primary-500">Prefer
        not to say</button>
    </div>
  </div>
</template>
