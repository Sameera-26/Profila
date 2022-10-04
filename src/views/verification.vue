<template>
  <div class="text-center h-full text-xl md:px-8 px-4 py-8 flex flex-col items-center w-full heightCalc">
    <p class="md:text-[22px] text-xl lg:px-8 text-black font-bold py-2">
      Verification code
    </p>
    <p class="md:text-sm text-lg text-gray-800 pt-2">Please enter the code we've sent to</p>
    <p class="text-base text-primary-500 py-3">+38 073 100 0000</p>
    <form class="w-full pt-1 h-full flex flex-col justify-between" @submit.prevent="next">
      <div :class="{ valid: !v$.$error && v$.$dirty, error: v$.$error }" class="flex space-x-2 justify-center">
        <input v-for="v in 4" :key="v"
          class="appearance-none block w-10 text-base bg-gray-150 text-gray-800 border-2 rounded-lg p-3 py-4 text-center leading-tight focus:outline-none placeholder-gray-800"
          :class="v$.$error ? 'border-red-600' :'border-gray-600 focus:border-primary-100'" type="text"
          v-model="v$.code.$model" required />
      </div>
      <div class="flex items-center justify-center text-xs tracking-tight mt-6">
        <span class="text-gray-100 tracking-wide">Didn't receive the SMS? </span>
        <a href="/" class="text-primary-500 px-1 font-semibold">Resend (59s)</a>
      </div>
      <button class="bg-primary-100 mt-auto md:mt-4 w-full text-white text-xs py-3.5 rounded-lg">
        Verify
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
  code: {
    required,
  },
};
const state = reactive({
  code: '',
});
const v$ = useVuelidate(rules, state);
const router = useRouter()
const next = () => {
  if (!v$.$error) {
    router.push('/Country')
  }
}

</script>
