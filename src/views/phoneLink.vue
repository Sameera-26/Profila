<template>
  <div class=" divide-y-2 w-full mb-8">
    <div class="flex">

    <button @click="$router.back()" class=" -mt-4 text-2xl font-bold px-2">
      <font-awesome-icon icon="fa-solid fa-arrow-left" /></button>
      <div class="mx-8 ">
    <img class="mx-8 mb-3" src="../assets/profila.png" alt=""/>
    </div>
    
    </div>
    <div></div>
  </div>
    <img class="mx-10" src="../assets/comment.png" />
  
    <div class="text-center  text-xl my-8">
      <div class="h1text-black font-bold py-2">Check the link sent to the phone number you provided:</div>
      <div class="h2 text-blue-500 py-2" @click="toZeke">+38 44444656 55 </div>
      <div class="h2 text-lg">Click the link to sign up</div>
    </div>
  
</template>

<script>
export default {
  name: "phoneLink",
  methods: {
    toZeke(){
      this.$router.push({ 
        
        path: '/Zeke',
        
     })
    }
    
  
  },
};
</script>
