// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ydui from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'

Vue.config.productionTip = false
Vue.use(ydui);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
