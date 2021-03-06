import Vue from 'vue'
import App from './App.vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueRouter from 'vue-router'

// for font awesome icons
Vue.component('v-icon', Icon)

// ***********ROUTING************
import Portfolio from './components/Portfolio.vue';
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Landing from './components/Landing.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Landing },
  { path: '/portfolio', component: Portfolio },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// ***********ROUTING************

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');