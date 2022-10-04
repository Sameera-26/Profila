<template>
  <div class="text-center h-full text-xl md:px-8 px-4 md:py-10 py-8 flex flex-col items-center w-full heightCalc">
    <p class="md:text-[22px] text-xl lg:px-8 text-black font-bold py-2">
      Your nickname
    </p>
    <p class="md:text-sm text-lg text-gray-800 pt-2">Brands and Platforms will refer to this nickname</p>
    <form class="w-full pt-5 h-full flex flex-col justify-between" @submit.prevent="next">
      <div :class="{ valid: !v$.$error && v$.$dirty, error: v$.$error }">
        <label class="block tracking-wide text-left text-xs font-bold mb-2"
          :class="v$.$error ? 'text-red-600' :'text-gray-100'" for="name">
          Nickname
        </label>
        <input
          class="appearance-none block w-full text-xs bg-gray-150 text-gray-800 border-2 rounded-lg p-4 leading-tight focus:outline-none placeholder-gray-800"
          :class="v$.$error ? 'border-red-600' :'border-gray-600 focus:border-primary-100'" type="text"
          v-model="v$.name.$model" placeholder="Your Nickname" required />
      </div>
      <button class="bg-primary-100 mt-auto md:mt-8 w-full text-white text-xs py-3.5 rounded-lg">
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
  name: {
    required,
  },
};
const state = reactive({
  name: '',
});
const v$ = useVuelidate(rules, state);
const router = useRouter()
const next = () => {
  if (!v$.$error) {
    router.push('/Country')
  }
}

</script>
