import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false
Vue.component('app-server-status', Home)

new Vue({
  el: '#app',
  render: h => h(App),
})
