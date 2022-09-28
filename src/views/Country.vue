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
    
    <div class="h2 text-black text-xl text-center font-bold py-2">Your Country of residence</div>

      <div class="h2 text-gray-400 px-2 text-center text-sm">This Information will help us understand which privacy laws apply to where you live in. </div>
      <div class="w-full md:w-1/3 px-3 lg:w-full mb-6 md:mb-0">
        <br />
                  <label
                    class="block capitalize tracking-wide text-[#a7aac1] text-left text-xs font-bold  mb-2"
                    for="grid-zip"
                  >
                    Country of residence
                  </label>
                <country-select class="appearance-none block w-full text-xs text-[#8a93b0] border border-[#4ea6cc] rounded-lg py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#4ea6cc]" 
                v-model="country" :country="country" topCountry="US" />
  
  </div>
    <br />
  <br />
  <div class="text-center py-12 mt-16">
    <button  @click="toBirthdate" class="bg-[#4ea6cc] w-full text-white text-md px-5 py-3 rounded-lg">
      Proceed
    </button>
    </div>
  
</template>

<script>
export default {
  name: "Country",
  data: () => ({
    country: '',
    
  }),
  methods: {
    toBirthdate(){
      this.$router.push({ 
        
        path: '/Gender',
        
     })
    }
    
  
  },

};
</script>
