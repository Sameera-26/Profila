<template>
  <div class="text-center h-full text-xl md:px-8 px-4 md:py-10 py-8 flex flex-col items-center w-full heightCalc">
    <p class="md:text-[22px] text-xl lg:px-8 text-black font-bold pb-2">
      Your country of residence
    </p>
    <p class="text-sm px-4 md:px-0 text-gray-800 pt-2">This Information will help us understand which privacy laws
      apply to where you live in.</p>
    <form class="w-full h-full flex flex-col justify-between pt-5" @submit.prevent="next">
      <div>
        <label class="block tracking-wide text-left text-gray-100 text-xs font-puffinSemibold mb-2"
          :class="v$.$error ? 'text-red-600' :'text-gray-100'" for="country">
          Country of residence
        </label>
        <div class="relative">
          <country-select
            class="appearance-none cursor-pointer font-puffinSemibold block w-full text-sm bg-gray-150 border-2 text-gray-400 rounded-lg py-4 px-4 leading-tight focus:outline-none"
            :class="v$.$error ? 'border-red-600' :'border-gray-600 focus:border-primary-100'" v-model="v$.country"
            required />
          <div class="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <button type="submit" class="bg-primary-400 mt-auto md:mt-8 w-full text-white text-xs py-3.5 rounded-lg">
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

const rules = {
  country: {
    required,
  },
};
const state = reactive({
  country: '',
});
const v$ = useVuelidate(rules, state);
const router = useRouter()
const next = () => {
  if (!v$.$error) {
    router.push('/Gender')
  }
}

</script>
