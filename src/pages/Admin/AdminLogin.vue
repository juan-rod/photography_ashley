<template>
  <div>
      <div class="wrapper border">
        <div class="header border4"> Header</div>
        <div class="content border3">
            <div class="w-full max-w-xs mx-auto">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Email" v-model.trim="email">
                    </div>
                    <div class="mb-6">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" v-model.trim="password">
                    <p class="text-red text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex items-center justify-between">
                    <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" @click="login">
                        Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                        Forgot Password?
                    </a>
                    </div>
                </form>
                <p class="text-center text-grey text-xs">
                    ©2017 juanrod.co All rights reserved.
                </p>
            </div>
        </div>
        <div class="footer border4">FOOTER</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as firebase from 'firebase'
export default {
  name: 'Admin-Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters([
      'isAuth'
    ])
  },
  methods: {
    login () {
      console.log('hello from loging')
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          console.log('response:', response)
          this.$store.dispatch('setAuth', true)
          console.log('this.isAuth:', this.isAuth)
          this.$store.dispatch('setUser', response.email)
          this.$router.push('/admin')
        }).catch((error) => {
          console.log('error:', error)
        })
    }
  }
}
</script>

