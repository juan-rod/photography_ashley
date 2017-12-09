<template>
  <div>
      <h1>Login here</h1>

        <form class="login" action="" method="post"> 
            
            <div><label for="username">Username</label>
            <input type="text" name="username" id="username"></div>
            <div><label for="password">Password</label>
            <input type="password" name="password" id="password"></div>
            
            <div class="actions">
            <input type="submit" name="login" value="Login"> <a href="/forgot">I forgot my password</a>
            </div>
        </form>

        <!-- <div class="account">
        <p>Create a new account <a href="">here</a>.</p>
        </div> -->

  </div>
</template>
<script>
export default {
  name: 'Admin-Login',
  data () {
    return {
    }
  }
}
</script>

