<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name:'app',
  components:{
    Navbar
  }

}
</script>

<style>

body{
  font-family: 'Poppins', sans-serif;
  background-color: #f5f3ef;
}
*{
  border-radius: 0;
}

</style>
