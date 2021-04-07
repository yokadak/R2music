<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <!-- <home></home> -->
    <!-- <swiperTestY></swiperTestY> -->
    <!-- <home></home> -->
    <!-- <slideY></slideY> -->
    <!-- <searchResult></searchResult> -->
    <!-- <search></search> -->
    <singerPage></singerPage>

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
  }
}
</script>
<style lang="less">
  @import "assets/css/base.css";
</style>
