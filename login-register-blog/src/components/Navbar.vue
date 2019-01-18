<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="../assets/logo.png" alt="logo" width="30px" height="30px">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/login" v-if="!authUser">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/register" v-if="!authUser">Register</router-link>
            </li>
            <li class="nav-item dropdown" v-if="authUser">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Hey {{ authUser.name }}</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    computed: {
        authUser(){
            return this.$root.auth.user;
        }
    }
};
</script>
<style>
</style>


