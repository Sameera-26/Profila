<template>
  <div class="text-center h-full text-xl md:px-8 px-4 md:py-10 py-8 flex flex-col items-center w-full heightCalc">
    <p class="md:text-[22px] text-xl lg:px-8 text-black font-bold py-2 lg:pt-0">
      What is you birth date?
    </p>
    <div class="w-full grid grid-cols-3 pb-8 pt-5 gap-1.5">
      <div>
        <label class="block tracking-wide text-left text-gray-100 text-xs pb-2 font-bold" for="country">
          Day
        </label>
        <div class="relative">
          <select
            class="block bg-gray-150 appearance-none w-full border border-gray-600 text-xs text-black p-4 pr-8 rounded-lg leading-tight focus:outline-none"
            id="grid-state">
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <label class="block tracking-wide text-left text-gray-100 text-xs pb-2 font-bold" for="country">
          Month
        </label>
        <div class="relative">
          <select
            class="block bg-gray-150 appearance-none w-full border border-gray-600 text-xs text-black p-4 pr-8 rounded-lg leading-tight focus:outline-none"
            id="grid-state">
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <label class="block tracking-wide text-left text-gray-100 text-xs pb-2 font-bold" for="country">
          Year
        </label>
        <div class="relative">
          <select
            class="block bg-gray-150 appearance-none w-full border border-gray-600 text-xs text-black p-4 pr-8 rounded-lg leading-tight focus:outline-none"
            id="grid-state">
            <option>1990</option>
            <option>1991</option>
            <option>1992</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <button @click="$router.push('/InfoAdded')"
      class="bg-primary-400 w-full mt-auto text-white text-sm font-bold py-3.5 rounded-lg">
      Proceed
    </button>
  </div>

</template>
<script></script>