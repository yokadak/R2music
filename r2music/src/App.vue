<!--
 * @Descripttion: 
 * @version: 
 * @Author: yrh
 * @Date: 2020-10-16 21:48:20
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-21 17:42:54
-->
<template>
  <div id="app">
    <div class="router-view">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <!-- <div class="home"></div>
    <div class="player"></div> -->
    <player ></player>
    <!-- <router-view :key="this.$route.path + new Date()"></router-view> -->
    <!-- <listDetail></listDetail> -->
    <!-- <home></home> -->
    <!-- <swiperTestY></swiperTestY> -->
    <!-- <home></home> -->
    <!-- <scrollTest></scrollTest> -->
    <!-- <searchResult></searchResult> -->
    <!-- <search></search> -->
    <!-- <singerPage></singerPage> -->
    <!-- <userCenter></userCenter> -->
    <!-- <login></login> -->
    <!-- <infoBox></infoBox> -->
    <!-- <info></info> -->
    <!-- <listItem></listItem> -->
    <!-- <userLiked></userLiked> -->
    <!-- <slideY></slideY> -->
    <!-- <slideYTest></slideYTest> -->
    <!-- <slideXTest></slideXTest> -->
    <!-- <scrollTest></scrollTest> -->
    <!-- <navTest></navTest> -->
    <!-- <playList></playList> -->
  </div>
</template>

<script> 
  import slideY from './slideY'  
  import slideYTest from './slideYTest'  
  import slideXTest from './slideXTest'  
  import scrollTest from './scrollTest'  
  import home from './views/home/home'
  import searchResult from './views/search/searchResult'
  import search from './views/search/search'
  import singerPage from './views/singer/singerPage'
  import login from './views/login/login'
  import infoBox from 'components/content/base/infoBox'
  import info from 'components/content/base/info'
  import listDetail from './views/songList/listDetail'
  import userLiked from './views/user/userLiked/userLiked.vue'
  import navTest from './navTest.vue'
  // import playList from './views/player/playList'
  import player from './views/player/player'
  // import miniPlayer from './components/content/base/miniPlayer.vue'
export default {
  name:'app',
  components:{  
    home,
    slideY,
    scrollTest,
    slideYTest,
    slideXTest,
    searchResult,
    search,
    singerPage,
    login,
    listDetail,
    infoBox,
    info,
    userLiked,
    navTest,
    player,
  },
}
</script>

<style >
  @import "assets/css/base.css";
  #app{
    position: relative;
  }
  .router-view{
    height: 100vh;
  }
  /* .home{
    width: 100%;
    height: 100vh;
    background-color: aquamarine;
  }
  .player{
    width: 100%;
    height: 100vh;
    background-color: black;
    position: absolute;
    top:0px;
    z-index: 9;
  } */
</style>

