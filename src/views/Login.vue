<template>
  <div class="divide-y-2">
    <!-- <div class="h1 text-center text-3xl -mt-4 font-bold py-4">Profila</div> -->
    <div class="mx-16 ">
    <img class="mx-8" src="../assets/profila.png" alt=""/>
    </div>
    <div class="flex flex-wrap ">
      <div class="w-full ">
        <div class="h2 font-bold text-center mt-8  text-[#2c2f37] text-lg lg:text-4xl  ">Sign up for free</div>
        <ul class="flex mb-0 list-none flex-wrap pt-1 w-[88%] pb-4 flex-row mx-8 shadow rounded-lg border lg:h-14 h-14 mt-8 flex p-1 relative items-center border-[#d0d1de]">
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center ">
            <a
              class="h2 text-sm text-center font-bold capitalize px-3 py-3  rounded-lg block leading-normal"
              v-on:click="toggleTabs(1)"
              v-bind:class="{
                'text-[#9da2b0] bg-white': openTab !== 1,
                'text-[#4d5058] bg-[#dcdde6]': openTab === 1,
              }"
            >
              Phone Number
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="h2 text-sm font-bold capitalize px-10 py-3 rounded-lg block leading-normal"
              v-on:click="toggleTabs(2)"
              v-bind:class="{
                'text-[#9da2b0] bg-white': openTab !== 2,
                'text-[#4d5058] bg-[#dcdde6]': openTab === 2,
              }"
            >
              Email
            </a>
          </li>
        </ul>
        <div
          class="relative no-border flex flex-col min-w-0 break-words bg-white w-full mb-6"
        >
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div
                v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
              >
                <p class="h2 text-center text-md">
                  You will receive a link by SMS on your phone to confirm
                  registration.
                  <br />
                  <br />
                </p>
                <div class="flex flex-row">
                  <div class="w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="h2 block capitalize tracking-wide text-[#a4a8bf] text-[70%] font-bold mb-2"
                      for="grid-state"
                    >
                      Country Code
                    </label>
                    <div class="relative">
                      <select
                        class="h2 block appearance-none w-full border border-[#d6d8e3] text-xs text-[#8a93b0] py-4 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-[#fbfbfc] focus:border-[#d6d8e3]"
                        id="grid-state"
                      >
                        <option>+38</option>
                        <option>+92</option>
                        <option>+91</option>
                        <option>+1</option>
                      </select>
                      <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                      >
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0  lg:w-[100%]">
                    <label
                      class="h2 block capitalize tracking-wide text-[#a4a8bf] text-xs font-bold mb-2"
                      for="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      class="h2 appearance-none block w-[110%]  text-xs text-[#8a93b0] border border-[#d6d8e3] rounded-lg py-4 px-4 leading-tight focus:outline-none focus:bg-[#fbfbfc] focus:border-[#d6d8e3]"
                      id="phone"
                      v-model="state.number"
                      placeholder="XXX-XXX-XXXX"
                    />
                  </div>
                  
                </div>
                <br />
  <br />
  <br />
  <br />
  <div class="h2 text-center py-12 mt-16">
    <button  @click="onButtonPhone" class="bg-[#87cae1] w-full text-white text-md px-5 py-3 rounded-lg">
      Get Started
    </button>
    
    
    <div class="h2 flex flex-row px-6 lg:px-16 py-6">
    <div>Already have an account? </div>
    <div class="text-[#59abcf] px-1">Sign In</div>
    </div>
  </div>
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <p class="h2 text-centesr text-md">
                  You will receive an email with a link to confirm registration.
                  <br />
                  <br />
                </p>
                
                <p class="w-full md:w-1/3 px-3 lg:w-full mb-6 md:mb-0">
                  <label
                    class="h2 block capitalize tracking-wide text-[#a4a8bf] text-left text-xs font-bold mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  
                  <input
                    class="h2 appearance-none block w-[105%]  text-xs text-[#8a93b0] border border-[#dcdde6] rounded-lg py-4 px-4 leading-tight focus:outline-none focus:bg-[#fbfbfc] focus:border-[#d6d8e3]"
                    type="text"
                    v-model="state.email"
                    placeholder="Your Email"
                    
                  />
                  <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </span>
                </p>
             
                <br />
  <br />
  <br />
  <br />
  <div class="h2 text-center py-12 mt-16">
    <button  @click="onButtonEmail" class="bg-[#87cae1] w-full text-white text-md px-5 py-3 rounded-lg">
      Get Started
    </button>
    
    
    <div class=" h2 flex flex-row px-6 lg:px-16 py-6">
    <div>Already have an account? </div>
    <div id="nav">
    <router-link to="/InfoAdded" class="text-[#59abcf] px-1">Sign In</router-link>
    
    </div>
    </div>
  </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <vue-tel-input></vue-tel-input>
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
      email:'',
      number: ''
    })
    const rules = computed (() => {
      return {
        email: { required, email},

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
      openTab: 1,
      v$: useVuelidate(),
      email: '',

    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    onButtonPhone(){
      
        this.$router.push('/phoneLink')
        
      
    },
    onButtonEmail(){
      console.log(this.v$)


      
      this.v$.$validate() // checks all inputs
      if (!this.v$.$error) {
        this.$router.push('/emailLink')
      } 
    },
  },
  validations() {
    return {
      email: { required, email },


      
    }
  },
  }
</script>
<style >
  .h1 {
    font-family: Puffin-SemiBold;
  }
  .h2 {
    font-family: Puffin-Regular;
  }

</style>
