<template>
  <div class=" divide-y-2 w-full mb-8">

    <div class="mx-16 ">
    <img class="mx-10 mb-3" src="../assets/profila.png" alt=""/>
    </div>
    <div></div>
    </div>
    
    <div class="text-[#616369] text-lg text-center font-bold py-2">You are all set up! Zeke has added the new information to your Profila.</div>
  
    <img  src="../assets/infoadded.png" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

  <v-footer class="text-center py-8 " >
    <button  @click="Nickname" class="h2 bg-[#4ea6cc] w-full font-bold text-white text-md px-5 py-3 rounded-lg">
      Okay
    </button>
    </v-footer>
</template>

<script>
export default {
  name: "Infoadded",
  methods: {
    Nickname(){
      this.$router.push({ 
        path: '/',
        
     })
    }
    
  
  },
};
</script>
