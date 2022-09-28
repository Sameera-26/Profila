<template>
  <div class=" divide-y-2 w-full mb-8">

    <div class="mx-16 ">
    <img class="mx-8 mb-3" src="../assets/profila.png" alt=""/>
    </div>
    <div></div>
    </div>
    <div class="h2 text-[#616369] text-xl text-center font-bold py-2">Now, Let us introduce to Zeke. They will help you get started on your Profile Journey.</div>
  
    <img class="mx-8" src="../assets/zeke.png" />
    <div class="  text-6xl text-center text-[#e1f2f8]"><font-awesome-icon icon="fa-solid fa-caret-up" /></div>
    <div class="h2 text-center -mt-7 text-gray-700  rounded-xl px-4 text-[115%] py-8 bg-[#e1f2f8]">
      
      <div>Welcome! To get Started with Profila </div>
      <div>I'd like to know a little more about you.</div>
    </div>

  <div class="text-center py-8 mt-16">
    <button  @click="Nickname" class="h2 bg-[#4ea6cc] w-full text-white text-md px-5 py-3 rounded-lg">
      Get Started
    </button>
    </div>
  
</template>

<script>
export default {
  name: "Zeke",
  methods: {
    Nickname(){
      this.$router.push({ 
        path: '/Nickname',
        
     })
    }
    
  
  },
};
</script>
