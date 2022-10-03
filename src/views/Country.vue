<template>
  <div class="text-center h-full text-xl md:px-8 px-4 md:py-10 py-8 flex flex-col items-center w-full heightCalc">
    <p class="md:text-[22px] text-xl lg:px-8 text-black font-bold py-2">
      Your Country of residence
    </p>
    <p class="text-sm px-4 md:px-0 text-gray-800 pt-2">This Information will help us understand which privacy laws
      apply to where you live in.</p>
    <div class="w-full pb-8 pt-5">
      <label class="block tracking-wide text-left text-gray-100 text-xs font-bold mb-2" for="country">
        Country of residence
      </label>
      <country-select
        class="appearance-none block w-full text-xs border-2 border-gray-600 focus:border-primary-100 text-gray-800 rounded-lg py-4 px-4 leading-tight focus:outline-none focus:bg-white" />
    </div>
    <button @click="$router.push('/Gender')" class="bg-primary-400 mt-auto w-full text-white text-xs py-3.5 rounded-lg">
      Proceed
    </button>
  </div>

</template>
<script></script>
