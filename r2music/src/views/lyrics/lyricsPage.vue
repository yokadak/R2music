<template>
  <div class="lyricsPage">
    <navTop>
       <div slot="left" class="lyricsTopLeft"><span class="fa fa-angle-left"></span></div>
       <div slot="center"> <switchPageBlock></switchPageBlock></div>
    </navTop>
    <div class="bgBox">
      <div class="lyricsBox">
       <info class="lyrics">
        <div slot="infoAbove" class="songLyrics">When the fat old sun in the sky is falling</div>
        <div slot="infoBelow" class="translation">当官的噶就是大家</div>
       </info>
       <info class="lyrics">
        <div slot="infoAbove" class="songLyrics">Summer evenin' birds are calling</div>
        <div slot="infoBelow" class="translation"></div>
       </info>
       <info class="lyrics">
        <div slot="infoAbove" class="songLyrics">Summer's thunder time of year</div>
        <div slot="infoBelow" class="translation">嘻哈啥好处</div>
       </info>
      </div>
    </div>
  </div>
 
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import switchPageBlock from 'components/content/base/switchPageBlock'
  import info from 'components/content/base/info'

export default {
  name:"lyricsPage",
  components:{
    navTop,
    switchPageBlock,
    info
  },
  props:{
    lyrics:{
      type:String,
      default:''
    }
  }
}
</script>

<style scoped>
 .lyricsTopLeft{
    font-size: 25px;
  }
 .lyricsBox{
   width: 90%;
   display:flex;
   flex-wrap: wrap;
   margin: auto;
   padding-top: 20px;
 }
 .lyrics{
   height: 45px;
   width: 100%;
   margin-top: 5px;
 }
 .translation{
   margin-top: 7px;
   font-size: 13px;
 }
</style>