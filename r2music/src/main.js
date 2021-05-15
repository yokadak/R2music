import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
//引入font-awesome
import 'font-awesome/css/font-awesome.css';
//引入FastClick
import FastClick from 'fastclick'

//初始化FastClick实例。在页面的DOM文档加载完成后
FastClick.attach(document.body)
//解决fastclick导致输入框无法立刻聚焦的问题
FastClick.prototype.focus =function(targetElement){
  'use strict';
  targetElement.focus();
}
//事件总线
Vue.prototype.$bus = new Vue()
//图片懒加载
Vue.use(VueLazyLoad,{loading:require("./assets/img/cover/loadingbg.png")})
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
