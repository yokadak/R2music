<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <!-- <home></home> -->
    <!-- <swiperTestY></swiperTestY> -->
    <!-- <home></home> -->
    <!-- <slideY></slideY> -->
    <search></search>
  </div>
</template>

<script> 
  import slideY from './slideY'  
  import swiperTest from './swiperTest'
  import swiperTestY from './swiperTestY'
  import home from './views/home/home'
  import search from './views/search/search'
export default {
  name:'app',
  components:{  
    swiperTest,
    swiperTestY,
    home,
    slideY,
    search,
  }
}
</script>
<style lang="less">
  @import "assets/css/base.css";
</style>
