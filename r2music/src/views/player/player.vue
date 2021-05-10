<template>
<div id="player">
   <navTop>
       <div slot="left"><span class="fa fa-angle-down"></span></div>
       <div slot="center"><switchPageBlock></switchPageBlock></div>
  </navTop>
  <lyricsPage v-if="gotLyrics"
    :lyrics= "songLyrics" 
    :transLyrics= "tansLyrics"
  ></lyricsPage>
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
    <playControl class="playerPlayControl"
    @playModeChange="changePlayMode"
    @playPrevSongClicked="playPrevSong"
    @playStateChange="changePlayState"
    @playNextSongClicked="playNextSong"
    @playListOpen="openPlayList"
    :playStateIcon= "playStateIcon"
    :playModeIcon= "playModeIcon"
    ></playControl>
 
  </div>
</div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import switchPageBlock from 'components/content/base/switchPageBlock'
  import playerBgBox from './playerBgBox'
  import progressBar from './progressBar'
  import lyricsPage from './lyricsPage'
  import info from 'components/content/base/info'
  import operationBar from 'components/content/base/operationBar'
  import playControl from 'components/content/base/playControl'

  //网络请求导入
  import {getSongUrl} from "network/songs"
  import {getSongLyrics} from "network/songs"
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
     lyricsPage,
     info,
     playControl,
   },
   data()
   {
     return {
       song:this.$route.params.song,
       songIndex:this.$route.params.songIndex,
       songs:this.$route.params.songs,//未登录只能获取歌单/专辑20首歌曲
       songUrl:'',//歌曲音源链接
       songLyrics:'',//歌曲歌词
       tansLyrics:undefined,//歌词翻译
       gotLyrics:false,//是否获取到歌词
       showLyrics:false,//是否显示歌词
       duration:0,//歌曲持续时间，单位秒
       currentTime:0,//歌曲当前时间，单位秒
       progress:0,//当前歌曲进度
       playing:false,//是否播放
       playStateIcon:"fa fa-play-circle",//设定播放按钮的状态，默认为暂停状态
       volume: 100,//音量
       playList:[],//播放列表
       playMode:'singleCycle',//播放模式，默认顺序播放
       playModeIcon:'fa fa-exchange',//设置播放模式的图标默认为顺序播放
       randomOrder:[],//随机播放是支持有序的，可返回上下曲，需要用数组保存顺序
       //TODO:随机播放记录上一曲，下一曲，并非全部打乱顺序
     }
   },
   watch:{
     volume(){
       this.$refs.music.volume = this.volume / 100
     },
   },
   created() {
     this._getSongUrl(this.song.id)
     this._getSongLyrics(this.song.id)
   },
   mounted() {
     let music = this.$refs.music
     music.addEventListener("durationchange",e =>{
       this.duration = e.target.duration
       this.playStateIcon = "fa fa-play-circle"
     })
     music.addEventListener("timeupdate",e =>{
       this.currentTime = e.target.currentTime
       this.progress = (this.currentTime / this.duration) * 100
      //  console.log(this.progress)
     })
     music.addEventListener("playing", e => {
       this.playing = true;
       //播放时，图标变暂停图标
       this.playStateIcon = "fa fa-pause-circle"
    });
     music.addEventListener("pause", e => {
       this.playing = false;
       //暂停时，图标变播放图标
       this.playStateIcon = "fa fa-play-circle"
    });
     music.addEventListener("ended", e => {
       this.playing = false;
       //单曲循环不进行切换操作默认重复播放
       if(this.playMode === "singleCycle"){
         this.startPlay()
       }else{
         this.playNextSong()
       }
    });
   },
   methods: {
    _getSongUrl(id){
      getSongUrl(id).then(res =>{
        this.songUrl = res.data[0].url
       })
     },
    _getSongLyrics(id){
      getSongLyrics(id).then(res =>{
        if(!res.nolyric){
          // console.log(res.klyric.lyric)
          if(res.lrc.lyric === ''){
            this.songLyrics = '暂无歌词'
          }else{
            this.gotLyrics = true;
            this.songLyrics = res.lrc.lyric
            this.tansLyrics = res.tlyric.lyric

          }
        }else if(res.nolyric){
          this.songLyrics = "此歌曲为没有填词的纯音乐，请您欣赏"
        }
        // console.log(this.songLyrics)
        // console.log(this.tansLyrics)
       })
     },
     startPlay(){
       this.$refs.music.play()
     },
     changePlayMode(){
       if(this.playMode === "singleCycle"){
         this.playMode = "random"
         this.playModeIcon = 'fa fa-random'
       }else if(this.playMode === "random"){
         this.playMode = "inOrder"
         this.playModeIcon = 'fa fa-exchange'
       }else if(this.playMode === "inOrder"){
         this.playMode = "singleCycle"
         this.playModeIcon = 'fa fa-refresh'
       }
       console.log(this.playMode)
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
    //TODO:每次随机播放一定要循环到列表每一首歌
    //播放下一首
    playNextSong(){
      //判断播放列表是否只有一首歌
      if(this.songs.length === 1){
        this._getSongUrl(this.song.id)
        this._getSongLyrics(this.song.id)
      }
      else if(this.playMode === 'inOrder' || this.playMode === 'singleCycle'){
        //顺序播放或者单曲循环
        if(this.songIndex === this.songs.length - 1){
          this.songIndex = -1
        }
        //获取歌曲链接和歌词
        this._getSongUrl(this.songs[this.songIndex + 1].id)
        this._getSongLyrics(this.songs[this.songIndex + 1].id)
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
          this._getSongLyrics(this.songs[this.songIndex].id)
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
        this._getSongLyrics(this.songs[this.songIndex - 1].id)
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
          this._getSongLyrics(this.songs[this.songIndex].id)
          this.song = this.songs[this.songIndex]
          console.log(this.songIndex)
        }
      }
    },
    openPlayList(){
      console.log("playListOpen")
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