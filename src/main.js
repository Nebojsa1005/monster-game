import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import {store} from './store.js'
import vueRouter from 'vue-router'
import {routes} from './routes.js'
 
Vue.use(vueRouter)
const router = new vueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
