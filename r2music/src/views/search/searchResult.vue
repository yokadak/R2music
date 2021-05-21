<!--
 * @Descripttion: 
 * @version: 
 * @Author: yrh
 * @Date: 2020-10-24 20:05:59
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-21 18:16:33
-->
<template>
  <div class="searchResult">
    <searchNav></searchNav>
    <scroll class="wrapper">
      <div class="content">
        <songBox></songBox>
      </div>
    </scroll>
  </div>
</template>

<script>
  import searchNav from './searchNav'
  import songBox from 'components/content/base/songBox'
  import scroll from 'components/common/scroll/scroll'


export default {
  name:"searchResult",
  components:{
    searchNav,
    songBox ,
    scroll,
  },
  data(){
    return{

    }
  },
  methods: {

  },
}
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
    height: calc(100vh - 145px);
  }
  .PlayControl{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
  }
</style>