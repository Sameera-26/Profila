<template>
  <div class=" divide-y-2 w-full mb-8">
    <div class="flex">
      <button @click="$router.back()" class=" -mt-4 text-2xl font-bold px-3">
        <font-awesome-icon icon="fa-solid fa-arrow-left" /></button>
        <div class="mx-7 ">
    <img class="mx-8 mb-3" src="../assets/profila.png" alt=""/>
    </div>
    </div>
    <div></div>
  </div>
    <div class="h2 text-[#2c2f37] text-xl text-center font-bold py-2">Your nickname</div>
    
    <div class="h2 text-[#7a8094] px-2 text-center text-[88%]">Brands and Platforms will refer to this nickname </div>
      <div class="w-full md:w-1/3 px-3 lg:w-full mb-6 md:mb-0">
        <br />
                  <label
                    class="h2 block capitalize tracking-wide text-[#a7aac1] text-left text-xs   mb-2"
                    for="nickname"
                  >
                    Nickname
                  </label>
                  <input
                    class="appearance-none block w-full text-xs text-[#8a93b0] border border-[#4ea6cc] rounded-lg py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#4ea6cc]"
                    id="nickname"
                    type="text"
                    v-model="state.text"
                    
                  />
                </div>

    <br />
  
  <br />
  <div class="text-center py-12 mt-16">
    <button  @click="toCountry" class="h2 bg-[#4ea6cc] w-full text-white text-md px-5 py-3 rounded-lg">
      Proceed
    </button>
    </div>
  
</template>

<script>
  import useValidate, { useVuelidate } from '@vuelidate/core'
import { required , email } from '@vuelidate/validators'
import { reactive , computed } from 'vue';
export default {
name: "Login",
setup () {
  const state = reactive({
    text:'',

  })
  const rules = computed (() => {
    return {
      text: { required },

    }
  })
  const v$ = useVuelidate(rules, state)
  return {
    state,
    v$
  }
},

data() {
  return {

    v$: useVuelidate(),
    text: '',

  };
},
methods: {
  toCountry(){
    console.log(this.v$)
    this.v$.$validate() // checks all inputs
    if (!this.v$.$error) {
      this.$router.push('/Country')
    } 
  },
},
validations() {
  return {
    text: { required },
    

    
  }
},
}
</script>
