<template>
  <div class="text-center h-full text-xl md:px-8 px-4 md:py-10 pt-18 pb-8 flex flex-col items-center w-full heightCalc">
    <p class="md:text-[22px] text-xl lg:px-8 text-black font-bold py-2 lg:pt-0">
      What is you birth date?
    </p>
    <form class="w-full h-full flex flex-col justify-between" @submit.prevent="next">
      <div class="w-full grid grid-cols-3 pb-8 pt-5 gap-1.5"
        :class="{ valid: !v$.$error && v$.$dirty, error: v$.$error }">
        <div>
          <label class="block tracking-wide text-left text-gray-100 text-xs pb-2 font-bold"
            :class="v$.$error ? 'text-red-600' :'text-gray-100'" for="day">
            Day
          </label>
          <div class="relative">
            <select
              class="block bg-gray-150 appearance-none w-full border border-gray-600 text-xs text-black p-4 pr-8 rounded-lg leading-tight focus:outline-none"
              :class="v$.$error ? 'border-red-600' :'border-gray-600 focus:border-primary-100'" v-model="v$.day"
              required id="day">
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
          <label class="block tracking-wide text-left text-xs pb-2 font-bold"
            :class="v$.$error ? 'text-red-600' :'text-gray-100'" for="month">
            Month
          </label>
          <div class="relative">
            <select
              class="block bg-gray-150 appearance-none w-full border border-gray-600 text-xs text-black p-4 pr-8 rounded-lg leading-tight focus:outline-none"
              :class="v$.$error ? 'border-red-600' :'border-gray-600 focus:border-primary-100'" v-model="v$.month"
              required id="month">
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
          <label class="block tracking-wide text-left text-xs pb-2 font-bold"
            :class="v$.$error ? 'text-red-600' :'text-gray-100'" for="year">
            Year
          </label>
          <div class="relative">
            <select
              class="block bg-gray-150 appearance-none w-full border border-gray-600 text-xs text-black p-4 pr-8 rounded-lg leading-tight focus:outline-none"
              :class="v$.$error ? 'border-red-600' :'border-gray-600 focus:border-primary-100'" v-model="v$.year"
              required id="year">
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
        <div v-if="!v$.$error" class="w-full col-span-3">
          <Banner text="You must be at least 13 years old to register with Profila" />
        </div>
      </div>
      <button class="bg-primary-400 w-full mt-auto text-white text-sm font-bold py-3.5 rounded-lg">
        Proceed
      </button>
    </form>
  </div>

</template>
<script setup>
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useRouter } from 'vue-router'
import Banner from "../components/banner/index.vue";

const rules = {
  day: {
    required,
  },
  month: {
    required,
  },
  year: {
    required,
  },
};
const state = reactive({
  day: '',
  month: '',
  year: '',
});
const v$ = useVuelidate(rules, state);
const router = useRouter()
const next = () => {
  if (!v$.$error) {
    router.push('/InfoAdded')
  }
}

</script>