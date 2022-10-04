<template>
  <div class="md:pt-10 pt-16 md:p-8 p-4 h-full heightCalc">
    <h3 class="text-center text-gray-200 font-puffinSemibold text-xl"
      :class="{ hidden: openTab !== 1, block: openTab === 1 }">Log in to your Profila</h3>
    <h3 class="text-center text-gray-200 font-puffinSemibold text-xl"
      :class="{ hidden: openTab !== 2, block: openTab === 2 }">Sign up for free</h3>
    <ul class="flex rounded-lg border p-1 items-center border-gray-300 mt-8 space-x-1">
      <li class="text-sm font-bold capitalize text-center cursor-pointer w-full p-3 rounded-md" @click="toggleTabs(1)"
        :class="{
          'text-gray-900 bg-white': openTab !== 1,
          'text-gray-400 bg-gray-50': openTab === 1,
        }">
        Phone Number
      </li>
      <li class="text-sm font-bold capitalize text-center cursor-pointer w-full p-3 rounded-md" @click="toggleTabs(2)"
        v-bind:class="{
          'text-gray-900 bg-white': openTab !== 2,
          'text-gray-400 bg-gray-50': openTab === 2,
        }">
        Email
      </li>
    </ul>

    <form class="flex flex-col justify-between h-[calc(100%_-_8rem)]" @submit.prevent="signin"
      :class="{ hidden: openTab !== 1, block: openTab === 1 }">
      <div class="grid grid-cols-6 gap-4 py-8">
        <div class="col-span-2">
          <label :class="v$.$error ? 'text-red-600' :'text-gray-100'" class="block tracking-wide text-xs font-bold mb-2"
            for="code">
            Country code
          </label>
          <div class="relative">
            <select
              class="block bg-gray-150 appearance-none w-full border-2 border-gray-600 text-xs text-black p-4 pr-8 rounded-lg leading-tight focus:outline-none"
              :class="v$.$error ? 'border-red-600' :'border-gray-600 focus:border-primary-100'" v-model="v$.code"
              required id="code">
              <option>+38</option>
              <option>+92</option>
              <option>+91</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="col-span-4 w-full" :class="{ valid: !v$.$error && v$.$dirty, error: v$.$error }">
          <label class="block tracking-wide text-left text-xs font-bold mb-2"
            :class="v$.$error ? 'text-red-600' :'text-gray-100'" for="phone">
            Phone number
          </label>
          <input id="phone"
            class="appearance-none block w-full text-xs bg-gray-150 text-gray-800 border-2 rounded-lg p-4 leading-tight focus:outline-none placeholder-gray-800"
            :class="v$.$error ? 'border-red-600' :'border-gray-600 focus:border-primary-100'" type="number"
            v-model="v$.number" placeholder="XXX-XXX-XXXX" required />
        </div>
        <div v-if="!v$.$error" class="col-span-6 md:-mt-4 md:-mb-3">
          <Banner text="Not registered phone number" />
        </div>
      </div>
      <div class="space-y-5 mt-auto">
        <button type="submit" class="bg-primary-100 w-full text-white text-xs py-3.5 rounded-lg">
          Log in with code
        </button>
        <div class="flex items-center justify-center text-sm tracking-tight">
          <span class="text-gray-100">Don't have an account? </span>
          <a href="/" class="text-primary-500 px-1 font-semibold">Sign up</a>
        </div>
      </div>
    </form>

    <form class="flex flex-col justify-between h-[calc(100%_-_8rem)]" @submit.prevent="signup"
      :class="{ hidden: openTab !== 2, block: openTab === 2 }">
      <div>
        <p class="text-center text-sm pt-7 text-gray-400">
          You will receive an email with a link to confirm registration.
        </p>
        <div class="w-full pb-5 pt-5" :class="{ valid: !v$.$error && v$.$dirty, error: v$.$error }">
          <label class="block tracking-wide text-left text-xs font-bold mb-2"
            :class="v$.$error ? 'text-red-600' :'text-gray-100'" for="email">
            Email
          </label>
          <input id="email"
            class="appearance-none block w-full text-xs bg-gray-150 text-gray-800 border-2 rounded-lg p-4 leading-tight focus:outline-none placeholder-gray-800"
            :class="v$.$error ? 'border-red-600' :'border-gray-600 focus:border-primary-100'" type="email"
            v-model="v$.email.$model" placeholder="Your Email" required />
          <div v-if="!v$.$error">
            <Banner text="Not registered email" />
          </div>
        </div>
      </div>
      <div class="space-y-5">
        <button type="submit" class="bg-primary-100 w-full text-white text-xs py-3.5 rounded-lg">
          Get Started
        </button>
        <div class="flex items-center justify-center text-sm tracking-tight">
          <span class="text-gray-100">Already have an account? </span>
          <a href="/" class="text-primary-500 px-1 font-semibold">Sign in</a>
        </div>
      </div>
    </form>
  </div>

</template>

<script setup>
import useVuelidate from "@vuelidate/core"
import { required } from "@vuelidate/validators"
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Banner from "../components/banner/index.vue";

const rules = {
  email: {
    required,
  },
  number: {
    required,
  },
  code: {
    required,
  },
};
const state = reactive({
  email: '',
  number: '',
  code: ''
})

const v$ = useVuelidate(rules, state);

const openTab = ref(1)

const toggleTabs = (tabNumber) => {
  openTab.value = tabNumber;
}

const router = useRouter()

const signup = () => {
  // v$.$validate() // checks all inputs
  if (!v$.$error) {
    router.push('/emailLink')
  }
}
const signin = () => {
  router.push('/verification')
}
</script>
