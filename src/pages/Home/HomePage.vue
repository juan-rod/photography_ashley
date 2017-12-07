<template>
  <div>
    <div class="wrapper border">
        <nav-bar class="header border4">HEADER Here</nav-bar>
        <div class="menu border2">MENU</div>
        <div class="content border3">CONTENT</div>
        <div class="footer border4">FOOTER</div>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/nav/Navigation.vue'
export default {
  name: 'HomePage',
  components: { NavBar },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
