<template>
  <div class="lyricsPage">
    <div>
      <scroll class="lyricsWrapper" ref="lyricList">
        <div v-if="showPrompt">
          {{songLyrics}}
        </div>
        <ul class="lyricsBox" v-else>
          <li class="lyrics" v-for="(item,index) of finalLyrics" 
              :key="index"
              ref="lyricLine"> 
            <info>
              <div slot="infoAbove" class="songLyrics"
              v-if="item.lyric"
              :style="index === scrollIndex - 1 ? playingLyricStyle: ''"
              >{{item.lyric}}</div>
              <div slot="infoBelow" class="translation"
              v-if="item.transLyric"
              :style="index === scrollIndex - 1 ? transLyricStyle: ''"
              >{{item.transLyric}}</div>
            </info>
          </li>
          <div class="alwaysScroll"></div>
        </ul>
      </scroll>
    </div>
  </div>
 
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import info from 'components/content/base/info'
  import scroll from 'components/common/scroll/scroll'


export default {
  name:"lyricsPage",
  components:{
    navTop,
    info,
    scroll
  },
  props:{
    showPrompt:{
      default:false
    }
  },
  computed:{
    songLyrics(){
       return this.$store.state.playingSong.lyrics //当前歌曲的歌词
     },
    transLyrics(){
       return this.$store.state.playingSong.transLyrics //当前歌曲的歌词翻译
     },
  },
  data() {
    return {
      finalLyrics:[],//保存了歌曲原歌词，歌词对应时间，（歌词翻译）
      translator:'',//歌词翻译者
      //为了实现当歌词为空时，应总保持上一行为active
      scrollIndex:0,//歌词滚动索引,正在播放的行
      playingLyricStyle:"color:white;font-size:18px;font-weight:bold;",//正在播放的歌词的样式
      transLyricStyle:"color:white;"
    }
  },
  watch:{
    songLyrics(newLyrics){
      this.getLyrics(newLyrics,this.transLyrics)
    }
  },
  beforeDestroy() {
    this.$bus.$off("timeUpdated")
    this.$bus.$off("durationchanged")
  },
  methods: {
    getLyricTime(time){
      //将歌词时间转换为秒
      let minutes = time.slice(0,2)
      let seconds = parseFloat(time.slice(3))
      if(minutes.slice(0,1) === "0"){
        minutes = parseInt(minutes.slice(1))
      }else{
        minutes = parseInt(minutes)
      }
      return minutes * 60 + seconds //得到的是字符串
    },
    //该方法获取到每一句歌词及其对应的时间
    getLyric(lyric){
      let lyricObj = {} //每句歌词，用对象保存每句歌词及其所对应的时间 
      let line = lyric.split(']') 
      line = line[line.length - 1].trim()//每一行歌词
      lyricObj.lyric = line === ''?'':line //有些行占据时间，但是没有歌词
      let lyricTime = lyric.match(/\[\d{2}\:\d{2}\.\d{2,}\]/g)
      if(!lyricTime){
        // console.log(lyric,"这一行没有时间")
        return lyric
      }else{
        lyricTime = lyricTime[lyricTime.length - 1] //获取歌词时间
        lyricObj.lyricTime = this.getLyricTime(lyricTime.slice(1,lyricTime.length-1))
        return lyricObj
      }
    },
    getLyricsObjArray(lyrics){
      const lyricsObjArray = []
      lyrics.forEach((item,index)=>{
        if(item === ""){
          return 
        }else{
          let lyricObj = this.getLyric(item)
          if( typeof lyricObj === 'object'){
            if(lyricObj.lyric === ''){
              let noLyricFlag = true
              // console.log("nolyric")
            }else{
              lyricsObjArray.push(lyricObj) 
            }
          }else{
            this.translator = lyricObj
            console.log(this.translator)
          }
        }
      })
      // console.log(lyricsObjArray)
      return lyricsObjArray
    },
    getLyricsWithTrans(origin,trans){
      let originIndex = 0;
      trans.forEach((lyricObj,index)=>{
          while(origin[originIndex].lyricTime !== trans[index].lyricTime)
          {
            origin[originIndex].transLyric = ''
            originIndex += 1
          }
          origin[originIndex].transLyric = trans[index].lyric
          //TODO:
          originIndex += 1
      })
      return origin
    },
    getLyrics(lyrics,transLyrics){
      if(this.showPrompt === true){
        return lyrics
      }else{
        //切换歌曲先进行重置
        this.finalLyrics = [];
        this.scrollIndex = 0;
        // this.showPrompt = false
        let originalLyricsArray = lyrics.split(/\n/) //根据换行符分割字符串,将每句歌词保存到数组
        originalLyricsArray = this.getLyricsObjArray(originalLyricsArray)
        if(transLyrics !== ''){
          //有歌词翻译
          let transLyricsArray = transLyrics.split(/\n/)
          transLyricsArray = this.getLyricsObjArray(transLyricsArray)
          this.finalLyrics = this.getLyricsWithTrans(originalLyricsArray,transLyricsArray)
        }else{
          // 没有歌词翻译
          this.finalLyrics = originalLyricsArray
        }
        // console.log(this.finalLyrics)
        // 获取到歌词后再滚动
        this.$bus.$on("currentTimeChanged",this.scrollLyrics)
      }
    },
    //TODO:有些歌词滚到底部就不再滚动了，大多数是歌词较多的歌,应该是bscroll的问题
    //TODO:以及滑动歌词控制进度功能
    scrollLyrics(currentTime,prevTime){
      if(this.scrollIndex < this.finalLyrics.length){
        //判断歌曲是前进还是后退
        if(currentTime < prevTime){
          //歌曲后退,将scrollIndex置0
          this.scrollIndex = 0;
          if(currentTime < this.finalLyrics[0].lyricTime) {
            //回退到歌曲还没有播放的时候
            this.$emit("lyricChange",'')
            this.$refs.lyricList.scrollToElement(0,0,1000)
          }
        }
        while(this.scrollIndex < this.finalLyrics.length 
              && currentTime > this.finalLyrics[this.scrollIndex].lyricTime){
              this.$emit("lyricChange",this.finalLyrics[this.scrollIndex].lyric)
              if(this.scrollIndex > 1){
                //  从第3行开始滚动
                let scrollLine = this.$refs.lyricLine[this.scrollIndex -1]
                this.$refs.lyricList.scrollToElement(scrollLine,1000)
              }else{
                let scrollLine = this.$refs.lyricLine[0]
                this.$refs.lyricList.scrollToElement(scrollLine)
              }
              this.scrollIndex ++
            }
      }            
    },
  },
}
</script>

<style scoped>
  .lyricsPage{
    width: 100%;
    flex-shrink: 0;
  }
  .lyricsTopLeft{
    font-size: 25px;
  }
  .lyricsWrapper{
    overflow: hidden;
    height: calc(100vh - 95px);
    position: relative;
    border-radius: 10px;
  }
 .lyricsBox{
   width: 90%;
   display:flex;
   flex-wrap: wrap;
   margin: auto;
   padding-top: 20px;
 }
 .lyrics{
   min-height: 30px;
   width: 100%;
   margin-top: 15px;
 }
  .noLyric{
    display: none;
  }
 .translation{
   margin-top: 7px;
   font-size: 13px;
 }
</style>