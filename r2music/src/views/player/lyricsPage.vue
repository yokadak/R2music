<template>
  <div class="lyricsPage">
    <div class="bgBox">
      <scroll class="lyricsWrapper" ref="lyricList">
        <ul class="lyricsBox">
          <li class="lyrics" v-for="(item,index) of lyricsObjArray" 
              :key="index"
              ref="lyricLine"> 
            <info>
              <div slot="infoAbove" class="songLyrics"
              v-if="item.lyric"
              :style="index === scrollIndex -1 ? playingLyricStyle: ''"
              >{{item.lyric}}</div>
              <div slot="infoBelow" class="translation"
              v-if="item.tranLyric"
              :style="index === scrollIndex -1 ? transLyricStyle: ''"
              >{{item.tranLyric}}</div>
            </info>
          </li>
        </ul>
        <div v-if="showPrompt">
          {{lyrics}}
        </div>
      </scroll>
    </div>
  </div>
 
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import switchPageBlock from 'components/content/base/switchPageBlock'
  import info from 'components/content/base/info'
  import scroll from 'components/common/scroll/scroll'


export default {
  name:"lyricsPage",
  components:{
    navTop,
    switchPageBlock,
    info,
    scroll
  },
  props:{
    lyrics:{
      default:''
    },
    transLyrics:{
      default:''
    },
    showPrompt:{
      default:false
    }
  },
  data() {
    return {
      lyricsArray:[],//保存未经处理过的歌词
      lyricsObjArray:[],//保存了歌曲原歌词，歌词对应时间，（歌词翻译）
      OriginalLastIndex:0,//原词的最后一行""作为原词和翻译的分割项
      transIndex:0,//需要翻译的歌词项索引
      translator:'',//歌词翻译者
      scrollIndex:0,//歌词滚动索引
      playingLyricStyle:"color:white;font-size:18px;font-weight:bold;",//正在播放的歌词的样式
      transLyricStyle:"color:white;"
    }
  },
  created() {
    //  this.getLyrics()
  },
  mounted() {
    this.$bus.$on("durationchanged",this.getLyrics)
    this.$bus.$on("timeUpdated",this.scrollLyrics)
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
      let line = lyric.split(']')[1].trim() //每一行歌词
      lyricObj.lyric = line === ''?'':line //有些行占据时间，但是没有歌词
      let lyricTime = lyric.match(/\[\d{2}\:\d{2}\.\d{2,}\]/)[0] //获取歌词时间
      lyricObj.lyricTime = this.getLyricTime(lyricTime.slice(1,lyricTime.length-1))
      return lyricObj
    },
    //该方法获取到每一句歌词及其对应的时间和翻译
    getTransLyric(transLyric){
      //赋值是引用传递，修改变量，数组中对应的值也会改变
      let lyricObj = this.lyricsObjArray[this.transIndex]
      let line = transLyric.split(']')[1].trim() //每一行翻译歌词
      let transLyricTime = transLyric.match(/\[\d{2}\:\d{2}\.\d{2,}\]/)[0] //翻译对应的时间
      transLyricTime = this.getLyricTime(transLyricTime.slice(1,transLyricTime.length-1))
      while(lyricObj.lyricTime !== transLyricTime){
      //判断当前取出的原词时间是否对应翻译的时间，不对应则取下一段原词
        this.transIndex += 1 
        lyricObj = this.lyricsObjArray[this.transIndex]
      }
      lyricObj.tranLyric = line === ''?'':line
      this.transIndex += 1
      return lyricObj
    },
    getOriginalLyrics(lyrics){
      lyrics.forEach((item,index)=>{
        if(item === ""){
          return
        }else{
          let OriginalLyric = this.getLyric(item)
          //占时间但是没歌词的行不加入歌词数组
          if( OriginalLyric.lyric !== ''){
            this.lyricsObjArray.push(OriginalLyric)
          }
        }
      })
    },
    getLyricsWithTrans(lyrics){
      lyrics.forEach((item,index)=>{
        if(item === ""){
          return
        }else if(index < this.OriginalLastIndex){
          //该行是原词
          let OriginalLyric = this.getLyric(item)
          if( OriginalLyric.lyric !== ''){
            this.lyricsObjArray.push(OriginalLyric)
          }

        }else if(index === this.OriginalLastIndex +1){
          //该行是歌词翻译者
          this.translator = item.replace('\[','').replace('\]','')//去掉[]

        }else if(index > this.OriginalLastIndex +1){
          //改行是翻译的歌词
          this.getTransLyric(item)
        
        }
      })
    },
    getLyrics(){
      console.log(this.showPrompt)
      if(this.showPrompt !== true){
        console.log("即将获取歌词")
        //切换歌曲先进行重置
        this.lyricsObjArray = [];
        this.scrollIndex = 0;
        this.OriginalLastIndex = 0;
        this.transIndex = 0;
        const originalLyrics = this.lyrics.split(/\n/) //根据换行符分割字符串,将每句歌词保存到数组
        const transLyricsArray = this.transLyrics.split(/\n/) //根据换行符分割字符串
        this.OriginalLastIndex = originalLyrics.length - 1//记录原词的最后一项索引值
        if(transLyricsArray[0] !== ''){
          //有歌词翻译，将原词和翻译歌词拼接
          this.lyricsArray = originalLyrics.concat(transLyricsArray)
          this.getLyricsWithTrans(this.lyricsArray)
        }else{
          //没有歌词翻译
          this.lyricsArray = originalLyrics
          this.getOriginalLyrics(this.lyricsArray)
        }
        console.log(this.lyricsObjArray)
      }
    },
    scrollLyrics(currentTime){
      if(this.showPrompt !== true && 
         this.lyricsObjArray[this.scrollIndex].lyricTime !== undefined){
           if(currentTime > this.lyricsObjArray[this.scrollIndex].lyricTime){
             //从第3行开始滚动
             if(this.scrollIndex > 1){
               //调用better-scroll提供的API实现歌词滚动
               let scrollLine = this.$refs.lyricLine[this.scrollIndex -1 ]
               this.$refs.lyricList.scrollToElement(scrollLine,1000)
             }
             this.scrollIndex ++
           }
      }
    },
  },
}
</script>

<style scoped>
 .lyricsTopLeft{
    font-size: 25px;
  }
  .lyricsWrapper{
    overflow: hidden;
    height: calc(100vh - 405px);
    position: relative;
  }
 .lyricsBox{
   width: 90%;
   display:flex;
   flex-wrap: wrap;
   margin: auto;
   padding-top: 20px;
 }
 .lyrics{
   /* height: 45px; */
   width: 100%;
   margin-top: 15px;
 }
 .translation{
   margin-top: 7px;
   font-size: 13px;
 }
</style>