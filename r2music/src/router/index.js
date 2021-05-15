import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import("../views/home/home.vue") 
const menu = () => import("../views/menu/appMenu.vue") 
const userCenter = () => import("../views/user/userCenter/userCenter.vue") 
const player = () => import("../views/player/player.vue") 
const search = () => import("../views/search/search.vue") 
const login = () => import("../views/login/login.vue") 
const listDetail = () => import("../views/songList/listDetail.vue") 
const alOrPlList = () => import("../views/songList/alOrPlList.vue") 
const singerPage = () => import("../views/singer/singerPage.vue") 
const userLiked = () => import("../views/user/userLiked/userLiked.vue") 
const scrollTest = () => import("../scrollTest.vue") 
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
    path:"/userCenter/:userName",
    component:userCenter,
    meta:{
      keepAlive: true //需要被缓存
    }
  },
  {
    path:"/login",
    component:login,
  },
  {
    path:"/player",
    name:"player",
    component:player
  },
  {
    path:"/search",
    component:search
  },
  {
    path:"/songList",
    name:'songList',
    component:listDetail,
    meta:{
      keepAlive: true //需要被缓存
    }
  },
  // {
  //   path:"/myliked"
  //   component:
  // },

  // {
  //   path:"/myLiked",
  //   name:'myLiked',
  //   component:userLiked,
  //   children:[
  //     {
  //       path:"",
  //       components:{
  //         name:scrollTest,
  //       }
  //     },
  //   ],
  //   meta:{
  //     keepAlive: true //需要被缓存
  //   }
  // },
  {
    path:"/myLiked/Songs",
    name:'myLikedSongs',
    component:listDetail,
    meta:{
      keepAlive: true //需要被缓存
    }
  },
  {
    path:"/myLiked/Albums",
    name:'myLikedAlbums',
    component:alOrPlList,
    meta:{
      keepAlive: true //需要被缓存
    }
  },
  {
    path:"/myLiked/PlayLists",
    name:'myLikedPlayLists',
    component:alOrPlList,
    meta:{
      keepAlive: true //需要被缓存
    }
  },
  {
    path:"/albumDetail",
    name:'albumDetail',
    component:listDetail,
    meta:{
      keepAlive: true //需要被缓存
    }
  },
  {
    path:"/singer",
    name:'singerPage',
    component:singerPage,
    meta:{
      keepAlive: true //需要被缓存
    }
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
