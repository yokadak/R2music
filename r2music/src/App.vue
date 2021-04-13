<template>
  <div id="app">
    <router-view></router-view>
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
  </div>
</template>

<script> 
  import slideY from './slideY'  
  import scrollTest from './scrollTest'  
  import swiperTest from './swiperTest'
  import swiperTestY from './swiperTestY'
  import home from './views/home/home'
  import searchResult from './views/search/searchResult'
  import search from './views/search/search'
  import singerPage from './views/singer/singerPage'
  import userCenter from './views/userCenter/userCenter'
  import login from './views/login/login'
  import listDetail from './views/songList/listDetail'
export default {
  name:'app',
  components:{  
    swiperTest,
    swiperTestY,
    home,
    slideY,
    scrollTest,
    searchResult,
    search,
    singerPage,
    userCenter,
    login,
    listDetail,
  }
}
</script>
<style lang="less">
  @import "assets/css/base.css";
</style>
