import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{loading:require("./assets/img/cover/loadingbg.png")})
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
//引入font-awesome
import 'font-awesome/css/font-awesome.css';

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
