<!--
 * @Descripttion: 播放列表组件
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-19 14:08:07
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-20 22:51:50
-->
<template>
  <div class="playListPage">
    <div class="mask" @click="hidePlayList">
      点击这里关闭
    </div>
    <div class="playList">

    </div>
    <navTop>
      <div slot="left"><span class="fa fa-random"></span></div>
      <div slot="center" class="title">
        <span>随机播放</span>
        <span>（{{count}}）首</span>
      </div>
      <div slot="right"><span></span></div>
    </navTop>
    <!-- <songBox :songs= "playQueue"></songBox> -->
    <!-- <progressBar></progressBar> -->
    <div class="close" @click="hidePlayList"><span>关闭</span></div>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import progressBar from './progressBar'
  import songBox from 'components/content/base/songBox'
export default {
  name: "playList",
  components: {
    navTop,
    songBox,
    progressBar
  },
  computed:{
    playQueue(){
      return this.$store.state.playQueue
    }
  },
  methods: {
  }
}
</script>

<style  scoped>
  .playListPage{
    height: 100vh;
    position: relative;
  }
  .mask{
    width:100%;
    height:200px;
    background-color: rgba(0,0.0, 0.2);
  }
  .playList{
    width:100%;
    background-color: var(--popUpBgColor);
    position:absolute;
    margin-top: 200px;
    bottom: 0;
  }
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

