// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'fullpage.js/vendors/scrolloverflow.min'
import VueFullPage from 'vue-fullpage.js/dist/vue-fullpage.min'

import 'normalize.css/normalize.css'
import './style/index.css'
import 'animate.css/animate.min.css'
import './style/transition.css'

Vue.use(VueFullPage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
