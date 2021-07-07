import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/normalize.css'//基础样式
import baseUI from '../src/baseUI'
// import { Field } from 'vant'
// Vue.use(Field);按需引入不需要了
import Vant from 'vant'
import { Lazyload } from 'vant';
Vue.use(Lazyload);
import 'vant/lib/index.css'//全局引入vant
Vue.use(Vant).use(baseUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
