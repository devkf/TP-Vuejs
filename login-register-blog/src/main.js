import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const authdata = localStorage.getItem("auth");

new Vue({
  router,
  data:{
    auth:authdata ? JSON.parse(authdata) : {}
  },
  render: h => h(App),
}).$mount('#app')
