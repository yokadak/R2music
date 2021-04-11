import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import("../views/home/home.vue") 
const menu = () => import("../views/menu/appMenu.vue") 
const userCenter = () => import("../views/userCenter/userCenter.vue") 
const player = () => import("../views/player/player.vue") 
const search = () => import("../views/search/search.vue") 
const login = () => import("../views/login/login.vue") 
//解决报错
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

//安装插件
Vue.use(VueRouter)
//创建路由对象
const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:home
  },
  {
    path:"/menu",
    component:menu
  },
  {
    path:"/userCenter",
    component:userCenter,
  },
  {
    path:"/login",
    component:login,
  },
  {
    path:"/player",
    component:player
  },
  {
    path:"/search",
    component:search
  },

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login') {
    next();
  } else {
    let token = window.sessionStorage.token;
    if(token === 'null' || token === '') {
      next('/login');
    }else {
      next();
    }
  }
});


export default router
