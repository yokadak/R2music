<template>
<div id="player">
   <navTop>
       <div slot="left"><span class="fa fa-angle-left"></span></div>
       <div slot="center"> <switchPageBlock></switchPageBlock></div>
  </navTop>
  <div class="bgBox">
    <playerBgBox :song ="song"></playerBgBox>
    <operationBar class="playerOperationBar">
      <div slot="operation-1" class ="boxOp"><span class="fa fa-volume-down"></span></div>
      <div slot="operation-3" class="biggerIcon"> <span class="fa fa-heart-o"></span></div>
      <div slot="operation-5" class ="boxOp"><span class="fa fa-ellipsis-h"></span></div>
    </operationBar>
    <progressBar></progressBar>
    <playControl class="playerPlayControl"></playControl>
  </div>
</div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import switchPageBlock from 'components/content/base/switchPageBlock'
  import playerBgBox from './playerBgBox'
  import operationBar from 'components/content/base/operationBar'
  import playControl from 'components/content/base/playControl'
  import progressBar from './progressBar'
  //网络请求导入
  import {getSongUrl} from "network/songs"
  
  export default {
   name:"player",
   components:{
     navTop,
     switchPageBlock,
     playerBgBox,
     operationBar,
     progressBar,
     playControl,
   },
   data() {
     return {
       song:this.$route.params.song,
       songUrl:''
     }
   },
   created() {
     this._getSongUrl(this.song.id)
   },
   methods: {
     _getSongUrl(id){
       getSongUrl(id).then(res =>{
         this.songUrl = res.data[0].url
       })
     }
   },
}
</script>

<style scoped>
  .fa-angle-down{
    font-size: 25px;
  }
  .playerOperationBar{
    font-size: 20px;
    margin-top: 15px;
  }
 
</style>