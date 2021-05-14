<template>
  <div id="app">
    <!-- <keep-alive include="listDetail">
    </keep-alive> -->
    <router-view :key="this.$route.path + new Date()"></router-view>
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
  </div>
</template>

<script> 
  import slideY from './slideY'  
  import slideYTest from './slideYTest'  
  import slideXTest from './slideXTest'  
  import scrollTest from './scrollTest'  
  import swiperTest from './swiperTest'
  import swiperTestY from './swiperTestY'
  import home from './views/home/home'
  import searchResult from './views/search/searchResult'
  import search from './views/search/search'
  import singerPage from './views/singer/singerPage'
  import userCenter from './views/userCenter/userCenter'
  import login from './views/login/login'
  import infoBox from 'components/content/base/infoBox'
  import info from 'components/content/base/info'
  import listDetail from './views/songList/listDetail'
  import userLiked from './views/user/userLiked/userLiked.vue'
export default {
  name:'app',
  components:{  
    swiperTest,
    swiperTestY,
    home,
    slideY,
    scrollTest,
    slideYTest,
    slideXTest,
    searchResult,
    search,
    singerPage,
    userCenter,
    login,
    listDetail,
    infoBox,
    info,
    userLiked,
  },
}
</script>
<style lang="less">
  @import "assets/css/base.css";
</style>

