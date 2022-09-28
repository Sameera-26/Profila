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
    <img class="mx-10" src="../assets/mail.png" />
  
    <div class="text-center text-xl my-8">
      <div class="h1 text-black font-bold py-2">Check for the link we sent to the email address you provided:</div>
      <div class="h2 text-blue-500 py-2" @click="toZeke">user_email@gmail.com </div>
      <div class="h2 text-md">Click the link to sign up</div>
    </div>

</template>

<script>
export default {
  name: "emailLink",
  methods: {
    toZeke(){
      this.$router.push({ 
        
        path: '/Zeke',
        
     })
    }
    
  
  },

};
</script>
