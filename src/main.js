import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueResource from 'vue-resource'
import Mixin from './Mixins'
import 'bootstrap-4-grid/css/grid.min.css'

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})

Vue.use(VueResource)
Vue.mixin(Mixin)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  beforeCreate () {
    this.$store.commit('initializeStore')
  },
  render: h => h(App)
}).$mount('#app')
