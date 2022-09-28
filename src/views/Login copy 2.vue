<template>
<input type="text" placeholder="Email" v-model="email" />
<!-- -->
<input type="password" placeholder="Password" v-model="password.password" />
<!-- -->
<input
  type="password"
  placeholder="Confirm Password"
  v-model="password.confirm"
/>
<button @click="submitForm">Submit</button>

</template>

<script>
  import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  data() {
    return {
      v$: useValidate(),
      email: '',
      password: {
        password: '',
        confirm: '',
      },
    }
  },
  methods: {
    submitForm() {
      this.v$.$validate() // checks all inputs
      if (!this.v$.$error) {
        // if ANY fail validation
        alert('Form successfully submitted.')
        this.$router.push('/Zeke')
      } else {
        alert('Form failed validation')
      }
    },
  },

  validations() {
    return {
      email: { required },
      password: {
        password: { required },
        confirm: { required },
      },
    }
  },
}
</script>
