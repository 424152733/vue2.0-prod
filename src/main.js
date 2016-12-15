import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css';

import View1 from 'components/View1.vue'
import View2 from 'components/View2.vue'
import View3 from 'components/View3.vue'

import store from './store'

Vue.use(Element)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: View1 },
  { path: '/1', component: View2 },
  { path: '/2', component: View3 }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
