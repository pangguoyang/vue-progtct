import Vue from 'vue'
import App from './App.vue'
import router from './router'
import swiper from '../src/assets/css/swiper.min.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vant);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
