<!--
 * @Descripttion: 播放列表组件
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-19 14:08:07
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-19 14:54:21
-->
<template>
  <div class="playList">
    <navTop>
      <div slot="left"><span class="fa fa-random"></span></div>
      <div slot="center" class="title">
        <span>随机播放</span>
        <span>（{{count}}）首</span>
      </div>
      <div slot="right"><span></span></div>
    </navTop>
    <!-- <songBox></songBox> -->
    <!-- <progressBar></progressBar> -->
    <div class="close"><span>关闭</span></div>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import progressBar from './progressBar'
  import songBox from 'components/content/base/songBox'
export default {
  name: "playList",
  data() {
    return {
      count:25
    }
  },
  components: {
    navTop,
    songBox,
    progressBar
  },
  methods: {
  }
}
</script>

<style  scoped>
  .playList{
    width:100%;
    height: calc(100vh - 200px);
    background-color: var(--popUpBgColor);
    position:absolute;
    bottom: 0;
  }
  /* .title{
  
  } */
  .title span{
    margin-left: 10px;
  }
  .close{
    position:absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size:18px;
    text-align: center;
  }
</style>

