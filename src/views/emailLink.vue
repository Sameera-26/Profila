<template>
  <div class="md:px-8 px-4 py-4 flex flex-col items-center">
    <img class="md:w-48 w-56" src="../assets/mail.png" alt="Mail" />
    <div class="text-center text-xl my-2 pb-3">
      <p class="md:text-[22px] text-xl lg:px-8 text-black font-bold py-2">Check for the link we sent to the email
        address you provided:</p>
      <p class="md:text-base text-xl text-blue-500 py-2" @click="$router.push('/Zeke')">user_email@gmail.com</p>
      <p class="md:text-sm text-lg text-gray-400">Click the link to sign up</p>
    </div>
  </div>

</template>
<script></script>
