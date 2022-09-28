<template>
  <div class=" divide-y-2 w-full">
    <div class="flex">
      <button @click="$router.back()" class=" -mt-4 text-2xl font-bold px-3">
        <font-awesome-icon icon="fa-solid fa-arrow-left" /></button>
        <div class="mx-7 ">
    <img class="mx-8 mb-3" src="../assets/profila.png" alt=""/>
    </div>
    </div>
    
    <div class="h1 text-black text-xl text-center font-bold py-10">What is you birth date?</div>
  </div>
   <!-- <div >
          <date-time-picker
            v-model="now"
            type="date"
            :pattern="{
              year: 'YYYY',
              month: 'M',
              date: 'D',
            }"
            height="98px"
          />
        </div> -->
        <div class="text-center py-12 mt-16">
    <button  @click="Next" class="h2 bg-[#4ea6cc] w-full text-white text-md px-5 py-3 rounded-lg">
      Proceed
    </button>
    </div>
  
</template>
<script>
  import { DateTimePicker } from "vue-drumroll-datetime-picker";
import "vue-drumroll-datetime-picker/dist/style.css";
export default {
  components: {
    DateTimePicker,
  },
  
  methods: {
    Next(){
      this.$router.push({ 
        
        path: '/Gender',
        
     })
    }
    
  
  },

  }
</script>