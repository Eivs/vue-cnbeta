import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import config from './config'
import 'vux/dist/vux.css'

Vue.use(VueRouter)
Vue.use(vueResource)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  hashbang: false,
  transitionOnLoad: true
})

config.router(router)

router.start(App, 'app')

window.router = router
