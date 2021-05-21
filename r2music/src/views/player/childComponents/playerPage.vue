<template>
  <div>
    <navTop>
      <div slot="left"><span class="fa fa-angle-down" @click="hidePlayerPage"></span></div>
        <div slot="center">
          <div class="tab">
           <span :class="{'active': currentPageIndex === 0}"
           @click="slidePlayingPage">歌曲</span>
           <span class="divider">I</span>
           <span :class="{'active': currentPageIndex === 1}"
           @click="slideToLyricsPage">歌词</span>
          </div>
       </div>
    </navTop>
    <slideX class="slideX-wrapper bgBox" ref="playerSlideX">
      <div class="playerPage">
        <songInfo :playingLyric = "playingLyric"></songInfo>  
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
          @progressChanged="changeCurrentTime">
        </progressBar>
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
      <lyricsPage v-if="gotLyrics"
        :lyrics= "songLyrics" 
        :transLyrics= "tansLyrics"
        :showPrompt= "showPrompt"
        @lyricChange= "changePlayingLyric">
      </lyricsPage>
    </slideX>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import slideX from 'components/common/scroll/slideX.vue'
  import songInfo from './songInfo'
  import playControl from './playControl'
  import progressBar from './progressBar'
  import lyricsPage from './lyricsPage'
  import info from 'components/content/base/info'
  import operationBar from 'components/content/base/operationBar'

  //网络请求导入
  import {getSongUrl,getSongLyrics} from "network/songs"
  //工具函数
  import {getSongTime,debounce} from "common/js/utils"


  
  export default {
   name:"playerPage",
   components:{
     navTop,
     slideX,
     songInfo,
     operationBar,
     progressBar,
     lyricsPage,
     info,
     playControl,
   },
   computed:{
     playQueue(){
       return this.$store.state.playQueue //播放列表
     },
     playingSong(){
       return this.$store.state.playingSong.song //当前播放的歌曲
     },
     playingSongIndex(){
       return this.$store.state.playingSong.index //当前播放的歌曲
     },
     playing(){
       return this.$store.state.playingState //当前播放状态
     },
     isFirstIn(){
       return this.$store.state.isFirstIn //是否首次进入应用
     }
   },
    data()
    {
     return {
        currentPageIndex:0,//当前slide页面的索引值
        songUrl:'',//歌曲音源链接
        copyRight:true,//是否有音源
        songLyrics:'',//歌曲歌词
        tansLyrics:undefined,//歌词翻译
        gotLyrics:false,//是否获取到歌词
        showPrompt:false,//是否提示没有歌词
        showLyrics:false,//是否显示歌词
        playingLyric: '',//播放界面显示的当前播放的歌词行
        duration:0,//歌曲持续时间，单位秒
        currentTime:0,//歌曲当前时间，单位秒
        progress:0,//当前歌曲进度
        playStateIcon:"fa fa-play-circle",//设定播放按钮的状态，默认为暂停状态
        volume: 100,//音量
        playMode:'inOrder',//播放模式，默认顺序播放
        playModeIcon:'fa fa-exchange',//设置播放模式的图标默认为顺序播放
        randomOrder:[],//随机播放是支持有序的，可返回上下曲，需要用数组保存顺序
        //TODO:随机播放记录上一曲，下一曲，并非全部打乱顺序
      }
    },
   watch:{
     //监听正在播放歌曲的变化（上下曲切换，首次加载），进行相应的网络请求
     playingSong:{
       handler(newValue){
         if(newValue){ //第一次进入app(首
           this._getSongUrl(newValue.id)
           this._getSongLyrics(newValue.id)
         }
       }
     },
     playing:{
       handler(playing){
         if(playing){
           //播放时，图标变暂停图标
           this.playStateIcon = "fa fa-pause-circle"
         }else{
           //暂停时，图标变播放图标
          this.playStateIcon = "fa fa-play-circle"
         }
       }
     },
     volume(){
       this.$refs.music.volume = this.volume / 100
     },
   },
   mounted() {
     this.$nextTick(()=>{
       //确保视图已经渲染完毕
       this.init();
       this.$bus.$on("slideToLyricsPage",this.slideToLyricsPage)
       let music = this.$refs.music
       //监听音乐的切换
       music.addEventListener("durationchange",e =>{
         this.duration = e.target.duration
         this.$bus.$emit('durationchanged')
       })
       //监听音乐的进度
       music.addEventListener("timeupdate",e =>{
         this.currentTime = e.target.currentTime
         this.progress = (this.currentTime / this.duration) * 100
         this.$bus.$emit('timeUpdated',this.currentTime)
         //  console.log(this.progress)
       })
       //监听音乐是否可以播放了,如果是首次进入应用，应该将歌曲暂停
       music.addEventListener("canplay", e => {
         if(this.isFirstIn){
           e.target.pause()
           this.$store.commit({type:'setFirstInFlag',isFirstIn:false})
         }
       });
       //监听音乐是否正在播放
       music.addEventListener("play", e => {
         this.$store.commit({type:"setPlayingState",playingState:true})
       });
       //监听音乐是否暂停
       music.addEventListener("pause", e => {
         this.$store.commit({type:"setPlayingState",playingState:false})
       });
       //监听音乐是否结束,自动播放下一首
       music.addEventListener("ended", e => {
         this.$store.commit({type:"setPlayingState",playingState:false})
         this.$bus.$emit("songEnded")
         if(this.playMode === "singleCycle"){
         //单曲循环不进行切换操作默认重复播放
           this.startPlay()
         }else{
           this.playNextSong()
         }
      });
      //监听miniPlayer播放暂停按钮的点击
      this.$bus.$on("miniPlayerStateChanged",this.changePlayState)
      //监听音乐暂停命令
      this.$bus.$on("pauseMusic",this.pauseMusic)
    })
  },
  methods:{

    init(){
      const slideX = this.$refs.playerSlideX
      //监听slidewWillChange事件
      slideX.slideX.on("slideWillChange",(page)=>{
        this.slideWillChange(page)
      })
    },
    hidePlayerPage(){
      this.$emit("hidePlayerPage")
    },
    slideToLyricsPage(){
      const slideX = this.$refs.playerSlideX
      if(slideX){
        slideX.goToPage(1,0,500)
      }
    },
    slidePlayingPage(){
      const slideX = this.$refs.playerSlideX
      if(slideX){
        slideX.goToPage(0,0,500)
      }
    },
    slideWillChange(page){
      this.currentPageIndex = page.pageX
    },
    _getSongUrl(id){
      getSongUrl(id).then(res =>{
        this.songUrl = res.data[0].url
       })
     },
    _getSongLyrics(id){
      getSongLyrics(id).then(res =>{
        if(!res.nolyric){
          if(res.lrc.lyric === ''){
            this.showPrompt = true
            this.songLyrics = '暂无歌词'
            this.gotLyrics = true;
          }else{
            this.gotLyrics = true;
            this.showPrompt = false
            this.songLyrics = res.lrc.lyric
            this.tansLyrics = res.tlyric.lyric
          }
        }else if(res.nolyric){
          this.showPrompt = true
          this.gotLyrics = true;
          this.songLyrics = "此歌曲为没有填词的纯音乐，请您欣赏"
        }
       })
     },
     //播放音乐
     startPlay(){
       this.$refs.music.play()
     },
     //暂停音乐
     pauseMusic(){
       this.$refs.music.pause()
     },
     //改变播放模式
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
     //改变歌曲的播放状态
     changePlayState(){
       if(this.$refs.music){
         if(this.playing){
           this.$refs.music.pause()
         }else{
           this.$refs.music.play()
         }
       }
     },
     //改变音量
     changeVolume(newVolume){
       this.volume = newVolume
     },
     //改变歌曲进度
     changeCurrentTime(newProgress) {
       this.progress = newProgress
       this.progress >= 0 && this.progress < 100 && (this.startPlay())
       this.currentTime = (newProgress / 100) * this.duration
       this.$refs.music.currentTime = this.currentTime;
    },
    //改变播放器界面当前显示的歌词
     changePlayingLyric(lyric){
      this.playingLyric = lyric
    },
    //TODO:每次随机播放一定要循环到列表每一首歌
    //播放下一首
    playNextSong(){
      this.$store.commit({type:"setPlayingState",playingState:false})
      this.$refs.music.pause()
      this.$bus.$emit('songChanged')
      this.playingLyric = ''
      //判断播放列表是否只有一首歌
      if(this.playQueue.length === 1){
        //TODO:即使只有一首歌，也要刷新歌曲的播放进度
        this._getSongUrl(this.playingSong.id)
        this._getSongLyrics(this.playingSong.id)
      }
      else if(this.playMode === 'inOrder' || this.playMode === 'singleCycle'){
        //顺序播放或者单曲循环
        if(this.playingSongIndex === this.playQueue.length - 1){
          //当前歌曲是播放队列的最后一首，则其下一首是播放队列的第一首
          this.$store.commit({type:'getPlayingSong',playingSong:this.playingSong,index:-1})
        }
        //获取歌曲链接和歌词
        const nextSong = this.playQueue[this.playingSongIndex + 1 ]
        const nextSongIndex = this.playingSongIndex + 1 
        this.$store.commit({type:'getPlayingSong',playingSong:nextSong,index:nextSongIndex})
        
      }else{
        //随机播放 取0至length-1索引,不允许和当前索引相同
        const randomIndex = Math.floor(Math.random()*(this.playQueue.length))
        if(this.playingSongIndex === randomIndex){
          this.playNextSong()
        }else{
          const nextSong = this.playQueue[randomIndex]
          this.$store.commit({type:'getPlayingSong',playingSong:nextSong,index:randomIndex})
          //记录随机播放的顺序，为了返回上一曲
          // this.randomOrder.push(this.playingSongIndex)
          // console.log(this.randomOrder)
        }
      }
    },
    //播放上一首
    playPrevSong(){
      this.$store.commit({type:"setPlayingState",playingState:false})
      this.$refs.music.pause()
      this.$bus.$emit('songChanged')
      this.playingLyric = ''
      if(this.playQueue.length === 1){
        this._getSongUrl(this.playingSong.id)
        this._getSongLyrics(this.playingSong.id)
      }//顺序播放
      else if(this.playMode === 'inOrder' || this.playMode === 'singleCycle'){
        if(this.playingSongIndex === 0){
          //如果当前播放的是第一首，那上一首就是列队的最后一首
          this.$store.commit({
            type:'getPlayingSong',
            playingSong:this.playingSong,
            index:this.playQueue.length
          })
        }
        const prevSong = this.playQueue[this.playingSongIndex - 1]
        const prevSongIndex = this.playingSongIndex - 1
        this.$store.commit({type:'getPlayingSong',playingSong:prevSong,index:prevSongIndex})
      }else{
        //随机播放,如果随机播放列队不为空，记录上一首index
        const randomIndex = Math.floor(Math.random()*(this.playQueue.length))
        if(this.playingSongIndex === randomIndex){
          this.playPrevSong()
        }else{
          const prevSong = this.playQueue[randomIndex]
          this.$store.commit({type:'getPlayingSong',playingSong:prevSong,index:randomIndex})
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

  .slideX-wrapper{
    overflow: hidden;
    height: calc(100vh - 95px);
  }
  .playerPage{
    width: 100%;
    flex-shrink: 0;
  }
  .tab span{
    font-size:13px;
  }
  .divider{
    margin-left: 10px;
    margin-right: 10px;
  }
  .active{
    color:white;
  }
  .fa-angle-down{
    font-size: 25px;
  }
  .playerOperationBar{
    font-size: 20px;
    margin-top: 15px;
  }
 
</style>