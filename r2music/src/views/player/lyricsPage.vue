<template>
  <div class="lyricsPage">
    <navTop>
       <div slot="left" class="lyricsTopLeft"><span class="fa fa-angle-left"></span></div>
       <div slot="center"> <switchPageBlock></switchPageBlock></div>
    </navTop>
    <div class="bgBox">
      <scroll class="lyricsWrapper">
        <div class="lyricsBox">
        <info class="lyrics" v-for="(item,index) of lyricsObjArray" :key="index">
          <div slot="infoAbove" class="songLyrics">{{item.lyric}}</div>
          <div slot="infoBelow" class="translation">{{item.tranLyric}}</div>
        </info>
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
    }
  },
  data() {
    return {
      lyricsArray:[],//保存未经处理过的歌词
      lyricsObjArray:[],//保存了歌曲原歌词，歌词对应时间，（歌词翻译）
      // isTranslated:false,//是否有歌词翻译
      OriginalLastIndex:0,//原词的最后一行""作为原词和翻译的分割项
      transIndex:0,//需要翻译的歌词项
      translator:'',//歌词翻译者
      
    }
  },
  created() {
    this.getLyrics()
  },
  mounted() {
  },
  methods: {
    getLyrics(){
      const originalLyrics = this.lyrics.split(/\n/) //根据换行符分割字符串,将每句歌词保存到数组
      const transLyricsArray = this.transLyrics.split(/\n/) //根据换行符分割字符串
      this.OriginalLastIndex = originalLyrics.length - 1//记录原词的最后一项索引值
      if(transLyricsArray[0] !== ''){
        // this.isTranslated = true
        //有歌词翻译，将原词和翻译歌词拼接
        this.lyricsArray = originalLyrics.concat(transLyricsArray)
      }else{
        this.lyricsArray = originalLyrics
      }
      console.log(this.lyricsArray)
      // console.log(lyricsArray)
      // console.log(transLyricsArray)
      this.lyricsArray.forEach((item,index)=>{
        if(item === ''){
          // console.log(this.OriginalLastIndex)
          return
        }else if(index < this.OriginalLastIndex){
          //处理原词
          let lyricObj = {} //每句歌词，用对象保存每句歌词及其所对应的时间
          let line = item.split(']')[1].trim() //每一行歌词
          lyricObj.lyric = line === ''?'':line //有些行占据时间，但是没有歌词
          lyricObj.lyricTime = item.match(/\[\d{2}\:\d{2}\.\d{2,}\]/)[0]
          if(lyricObj.lyric === ''){
            //没有歌词的行，将翻译歌词设为空串
            lyricObj.transLyric = ''
          }
          // console.log(lyricObj.lyric)
          // console.log(lyricObj.lyricTime)
          this.lyricsObjArray.push(lyricObj)
        }else if(index === this.OriginalLastIndex +1){ 
          //该行是歌词翻译者
          this.translator = item.replace('\[','').replace('\]','')//去掉[]
          // console.log(this.translator)
        }else if(index > this.OriginalLastIndex +1){
          //处理翻译
          //判断当前取出的项是否将tranLyric设置为空串，是则取下一项,从0开始取
          let lyricObj = this.lyricsObjArray[this.transIndex]
          while(lyricObj.transLyric === ''){
            console.log(this.transIndex)
            this.transIndex += 1 
            lyricObj = this.lyricsObjArray[this.transIndex]
          }
          let line = item.split(']')[1].trim() //每一行歌词
          lyricObj.tranLyric = line === ''?'':line //有些行占据时间，但是没有歌词
          this.lyricsObjArray[this.transIndex] = lyricObj
          this.transIndex += 1
        }
      })
      console.log(this.lyricsObjArray)
    }
  },
}
</script>

<style scoped>
 .lyricsTopLeft{
    font-size: 25px;
  }
  .lyricsWrapper{
    overflow: hidden;
    height: calc(100vh - 415px);
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
   margin-top: 5px;
 }
 .translation{
   margin-top: 7px;
   font-size: 13px;
 }
</style>