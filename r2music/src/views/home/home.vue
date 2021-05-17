<template>
<div id="home">
  <navTop>
    <div slot="left"><span class="fa fa-user" @click="toUserCenter"></span></div>
    <div slot="center" class="inputWrapper"><input @focus="showSearchPage"><span class="fa fa-search"></span></div>
    <div slot="right"><span class="fa fa-navicon" @click="toLogin"></span></div>
  </navTop>
  <slideX class="slideX-wrapper bgBox">
    <recommendedMusic :songs= "recommendSongs"></recommendedMusic>
    <div class="page page1">page1</div>
    <div class="page page2">page2</div>
    <div class="page page3">page3</div>
  </slideX>
  <miniPlayer></miniPlayer>
</div>
</template>

<script>
  //组件导入
  import navTop from 'components/common/navBar/navTop'
  import slideX from 'components/common/scroll/slideX.vue'
  import recommendedMusic from './childComponents/recommendedMusic'
  import miniPlayer from 'components/content/base/miniPlayer'
  //网络请求导入
  import {getRecommendSong} from "network/home"
  //处理数据的js导入（抽取歌曲有用信息)
  import {getWantedSongInfo} from "common/js/handleApiData/home.js"
  
  export default {
   name:"home",
   components:{
     navTop,
     slideX,
     recommendedMusic,
     miniPlayer,
   },
   data() {
     return {
      recommendSongs:[],
     }
   },
   created() {
    //请求首页推荐歌曲数据（未登录显示新歌速递）
     this._getRecommendSong(0)//type = 0 请求全部地区类型的歌曲
   },

   methods: {
     toUserCenter(){
       this.$router.push('/userCenter');
     },
     toLogin(){
       this.$router.push('/login');
     },
     showSearchPage(){
      this.$router.push('/search');
     },
     _getRecommendSong(type){
        getRecommendSong(type).then(res => {
          for( let item of res.data){
            let song = getWantedSongInfo(item)
            //如果歌曲需要付费或者没有资源（版权），不显示在推荐列表
            //home的歌曲权限信息正常
            //TODO:用户登录后，有可能购买了该歌曲，不过那也是另一个Api请求的数据了
            if(!song.needToBuy && song.copyRight ){
              this.recommendSongs.push(song) ;
            }
          }
          this.recommendSongs.splice(29)
          console.log(this.recommendSongs)
        })
      },
      
   },
}
</script>

<style scoped >
#home{
    height: 667px;
    position: relative;
}
.slideX-wrapper{
  overflow: hidden;
  height: 525px;
}
.page{
      height: 200px;
      width: 100%;
      text-align: center;
      font-size: 26px;
      flex-shrink: 0;
    }
  .page1{
    background-color:#95B8D1;
  }
  .page2{

    background-color:#DDA789;
  }
  .page3{

    background-color:#C3D899;
  }
  .page4{

    background-color:#F2D4A7;
  }
.fa{
  font-size: 26px;
  color: var(--icon-color);
}
.fa-navicon{
  font-size: 20px;
}
.inputWrapper{
  width: 100%;
  position: relative;
}
.inputWrapper .fa-search{
  font-size: 18px;
  color:#706b6b;
  position:absolute;
  top:4px;
  right: 8px;
}
.center input{
  width: 100%;
  height: 28px;
  border-radius: 10px;
  border:none;
  outline: none;
  padding-left:10px;
  font-size: 14px;
  color: var(--search-text);
}
</style>