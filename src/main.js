import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
 
Vue.use(VModal, { dynamic: true })

new Vue({
  el: '#app',
  render: h => h(App)
})
