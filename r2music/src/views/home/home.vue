<template>
<div id="home">
  <homeNavTop path ='/userCenter'></homeNavTop>
  <homeLabel class="homeLabel"></homeLabel>
  <homeBgBox class="homeBgBox" :songs = "recommendSongs" path ='/player'></homeBgBox>
  <miniPlayer class="homePlayControl"></miniPlayer>
  <!-- <swiper :songs = "recommendSongs"></swiper> -->
  <!-- <search v-show="isShow"></search> -->
</div>
</template>

<script>
  //组件导入
  import homeNavTop from './childComponents/homeNavTop'
  import homeLabel from './childComponents/homeLabel'
  import homeBgBox from './childComponents/homeBgBox'
  import miniPlayer from 'components/content/base/miniPlayer'
  import swiper from 'components/common/swiper/swiper'
  import search from '../search/search'
  //网络请求导入
  import {getRecommendSong} from "network/home"
  //处理数据的js导入（抽取歌曲有用信息)
  import {getWantedSongInfo} from "common/js/handleApiData"
  
  export default {
   name:"home",
   components:{
     homeNavTop,
     homeLabel,
     homeBgBox,
     miniPlayer,
     swiper,
     search 
   },
   data() {
     return {
      recommendSongs:[],
      isShow:true
     }
   },

   created() {
    //请求首页推荐歌曲数据（新歌速递）
     this._getRecommendSong(0)//type = 0 请求全部地区类型的歌曲
   },

   methods: {
      _getRecommendSong(type){
        getRecommendSong(type).then(res => {
          let list = res.data.map((item) => {
            return getWantedSongInfo(item)
          })
          //删除从索引9开始到原数组结尾的所有元素
          list.splice(29)
          this.recommendSongs = list
          // console.log( this.recommendSongs)      
        })
      }
   },
}
</script>

<style scoped >
  #home{
    height: 667px;
    position: relative;
  }
  .homePlayControl{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    height: 45px;
  }


  
  
</style>