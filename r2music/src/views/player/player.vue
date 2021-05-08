<template>
<div id="player">
   <navTop>
       <div slot="left" @click="playPrevSong"><span class="fa fa-angle-left"></span></div>
       <div slot="center" @click="playNextSong"><switchPageBlock></switchPageBlock></div>
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
       songIndex:this.$route.params.songIndex,
       songs:this.$route.params.songs,//未登录只能获取歌单/专辑20首歌曲
       songUrl:'',//歌曲音源链接
       duration:0,//歌曲持续时间，单位秒
       currentTime:0,//歌曲当前时间，单位秒
       progress:0,//当前歌曲进度
       playing:false,//是否播放
       volume: 100,//音量
       playList:[],//播放列表
       playMode:'random',//播放模式，默认顺序播放
       randomOrder:[],//随机播放是支持有序的，可返回上下曲，需要用数组保存顺序
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
    //播放下一首
    playNextSong(){
      //判断播放列表是否只有一首歌
      if(this.songs.length === 1){
        this._getSongUrl(this.song.id)
      }
      else if(this.playMode === 'inOrder' || this.playMode === 'singleCycle'){
        //顺序播放或者单曲循环
        if(this.songIndex === this.songs.length - 1){
          this.songIndex = -1
        }
        this._getSongUrl(this.songs[this.songIndex + 1].id)
        this.song = this.songs[this.songIndex + 1 ]
        this.songIndex += 1
      }else{
        //随机播放 取0至length-1索引,不允许和当前索引相同
        const randomIndex = Math.floor(Math.random()*(this.songs.length))
        if(this.songIndex === randomIndex){
          this.playNextSong()
        }else{
          this.songIndex = randomIndex
          this._getSongUrl(this.songs[this.songIndex].id)
          this.song = this.songs[this.songIndex]
          console.log(this.songIndex)
          //记录随机播放的顺序，为了返回上一曲
          // this.randomOrder.push(this.songIndex)
          // console.log(this.randomOrder)
        }
      }

    },
    //播放上一首
    playPrevSong(){
      if(this.songs.length === 1){
        this._getSongUrl(this.song.id)
      }//顺序播放
      else if(this.playMode === 'inOrder' || this.playMode === 'singleCycle'){
        if(this.songIndex === 0){
          this.songIndex = this.songs.length
        }
        this._getSongUrl(this.songs[this.songIndex - 1].id)
        this.song = this.songs[this.songIndex - 1 ]
        this.songIndex -= 1
      }else{
        //随机播放,如果随机播放列队不为空，记录上一首index
        const randomIndex = Math.floor(Math.random()*(this.songs.length))
        if(this.songIndex === randomIndex){
          this.playNextSong()
        }else{
          this.songIndex = randomIndex
          this._getSongUrl(this.songs[this.songIndex].id)
          this.song = this.songs[this.songIndex]
          console.log(this.songIndex)
        }
      }
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