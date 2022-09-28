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

    <div class="h1 text-black text-xl text-center font-bold py-5">Gender</div>
    <div class="h2 text-gray-400 px-2 text-center text-sm ">Brands often have gender-specific content and offers. </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <button  @click="toInfoAdded" class="h2 appearance-none text-left font-bold my-4 block w-full text-xs text-black border border-[#4ea6cc] rounded-lg py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#4ea6cc]">Male</button>
    <button  @click="toInfoAdded" class="h2 appearance-none text-left font-bold my-4 block w-full text-xs text-black border border-[#4ea6cc] rounded-lg py-4 px-4 py2 leading-tight focus:outline-none focus:bg-white focus:border-[#4ea6cc]">Female</button>

    <button  @click="toInfoAdded" class="h2 appearance-none  text-left font-bold my-4 block w-full text-xs text-black border border-[#4ea6cc] rounded-lg py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#4ea6cc]">Other</button>

    <button  @click="toInfoAdded" class="h2 appearance-none text-left font-bold my-4 block w-full text-xs text-black border border-[#4ea6cc] rounded-lg py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#4ea6cc]">Prefer not to say</button>



</template>

<script>
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
const picked = ref(new Date())
export default {
  name: "phoneLink",
  data: () => ({
    country: '',
    region: ''
  }),
  methods: {
    toInfoAdded(){
      this.$router.push({ 
        
        path: '/InfoAdded',
        
     })
    }
    
  
  },

};
</script>
