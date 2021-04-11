<template>
  <div id="app">
    <router-view></router-view>
    <!-- <home></home> -->
    <!-- <swiperTestY></swiperTestY> -->
    <!-- <home></home> -->
    <!-- <slideY></slideY> -->
    <!-- <searchResult></searchResult> -->
    <!-- <search></search> -->
    <!-- <singerPage></singerPage> -->
    <!-- <userCenter></userCenter> -->
    <!-- <login></login> -->
  </div>
</template>

<script> 
  import slideY from './slideY'  
  import swiperTest from './swiperTest'
  import swiperTestY from './swiperTestY'
  import home from './views/home/home'
  import searchResult from './views/search/searchResult'
  import search from './views/search/search'
  import singerPage from './views/singer/singerPage'
  import userCenter from './views/userCenter/userCenter'
  import login from './views/login/login'
export default {
  name:'app',
  components:{  
    swiperTest,
    swiperTestY,
    home,
    slideY,
    searchResult,
    search,
    singerPage,
    userCenter,
    login
  }
}
</script>
<style lang="less">
  @import "assets/css/base.css";
</style>
