<template>
<div id="player">
   <navTop>
       <div slot="left"><span class="fa fa-angle-left"></span></div>
       <div slot="center"> <switchPageBlock></switchPageBlock></div>
  </navTop>
  <div class="bgBox">
    <playerBgBox :song ="song"></playerBgBox>
    <audio :src="songUrl" autoplay ref="music"></audio>
    <operationBar class="playerOperationBar">
      <div slot="operation-1" class ="boxOp"><span class="fa fa-volume-down"></span></div>
      <div slot="operation-3" class="biggerIcon"> <span class="fa fa-heart-o"></span></div>
      <div slot="operation-5" class ="boxOp"><span class="fa fa-ellipsis-h"></span></div>
    </operationBar>
    <progressBar
    :progress = "progress"
    :duration = "duration"
    :currentTime = "currentTime"
    @progressChanged="changeCurrentTime"></progressBar>
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
  //工具函数
  import {getSongTime} from "common/js/utils"
  import {debounce} from 'common/js/utils.js'


  
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
       songUrl:'',//歌曲音源链接
       duration:0,//歌曲持续时间，单位秒
       currentTime:0,//歌曲当前时间，单位秒
       progress:0,//当前歌曲进度
       playing:false,//是否播放
       volume: 100,//音量
     }
   },
   watch:{
     volume(){
       this.$refs.music.volume = this.volume / 100
     },
   },
   created() {
     this._getSongUrl(this.song.id)
   },
   mounted() {
     let music = this.$refs.music
     music.addEventListener("durationchange",e =>{
       this.duration = e.target.duration
     })
     music.addEventListener("timeupdate",e =>{
       this.currentTime = e.target.currentTime
       this.progress = (this.currentTime / this.duration) * 100
      //  console.log(this.progress)
     })
     music.addEventListener("playing", e => {
       this.playing = true;
    });
     music.addEventListener("pause", e => {
       this.playing = false;
    });
     music.addEventListener("ended", e => {
       this.playing = false;
    });
   },
   methods: {
    _getSongUrl(id){
      getSongUrl(id).then(res =>{
        this.songUrl = res.data[0].url
       })
     },
     startPlay(){
       this.$refs.music.play()
     },
     changePlayState(){
       if(this.playing){
        this.$refs.music.pause()
       }else{
        this.$refs.music.play()
       }
     },
     changeVolume(newVolume){
       this.volume = newVolume
     },
     changeCurrentTime(newProgress) {
       this.progress = newProgress
       this.progress >= 0 && this.progress < 100 && (this.startPlay())
       this.currentTime = (newProgress / 100) * this.duration
       this.$refs.music.currentTime = this.currentTime;
    },
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