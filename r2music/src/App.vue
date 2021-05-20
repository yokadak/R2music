<!--
 * @Descripttion: 
 * @version: 
 * @Author: yrh
 * @Date: 2020-10-16 21:48:20
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-20 23:00:33
-->
<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
    </router-view> -->
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
    <navTest></navTest>
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
  import playList from './views/player/playList'
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
    playList,
  },
}
</script>

<style lang="less">
  @import "assets/css/base.css";
</style>

