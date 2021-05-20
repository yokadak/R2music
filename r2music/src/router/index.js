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
const user = () => import("../views/user/user.vue") 
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
  //重定向到首页
  {
    path:"",
    redirect:"/home"
  },
  //首页
  {
    path:"/home",
    component:home
  },
  //菜单
  {
    path:"/menu",
    component:menu
  },
  //登录
  {
    path:"/login",
    component:login,
  },
  //用户中心
  {
    path:"/user/:userId",
    component:user,
    children:[
      {
        path:"",
        component:userCenter,
      },
    ]
  },
  //用户收藏
  {
    path:"/myCollections",
    name:'myCollections',
    component:userLiked,
    // meta:{
    //   keepAlive: true //需要被缓存
    // }
  },
  // {
  //   path:"/userCenter/:userName",
  //   component:userCenter,
  //   meta:{
  //     keepAlive: true, //需要被缓存
  //     isBack:false //是否是后退进入该页面
  //   }
  // },
  //播放界面
  {
    path:"/player/:id",
    name:"player",
    component:player
  },
  //搜索
  {
    path:"/search",
    component:search
  },
  //歌单和专辑详情
  {
    path:"/songList/:id",
    name:'songList',
    alias:'/album/:id',
    component:listDetail,
    // meta:{
    //   keepAlive: true //需要被缓存
    // }
  },
  //歌手详情
  {
    path:"/singer/:id",
    name:'singerPage',
    component:singerPage,
    // meta:{
    //   keepAlive: true //需要被缓存
    // }
  },
  // {
  //   path:"/myliked"
  //   component:
  // },


  // {
  //   path:"/myLiked/Songs",
  //   name:'myLikedSongs',
  //   component:listDetail,
  //   meta:{
  //     keepAlive: true //需要被缓存
  //   }
  // },
  // {
  //   path:"/myLiked/Albums",
  //   name:'myLikedAlbums',
  //   component:alOrPlList,
  //   meta:{
  //     keepAlive: true //需要被缓存
  //   }
  // },
  // {
  //   path:"/myLiked/PlayLists",
  //   name:'myLikedPlayLists',
  //   component:alOrPlList,
  //   meta:{
  //     keepAlive: true //需要被缓存
  //   }
  // },
  // {
  //   path:"/albumDetail",
  //   name:'albumDetail',
  //   component:listDetail,
  //   meta:{
  //     keepAlive: true //需要被缓存
  //   }
  // },

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
