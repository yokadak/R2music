<!--
 * @Descripttion: 显示播放的歌曲信息：图片，名字，歌手,以及当前的歌词
 * @version: 
 * @Author: yrh
 * @Date: 2020-10-24 20:08:22
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-22 01:24:06
-->
<template>
   <div v-if="song">
    <img :src="song.image">
    <div class="playerBoxCenter">
      <div class="playerInfo">
        <info>
          <div slot="infoAbove" class="ellipsis songName">
            <span>{{song.name}}</span>
            <div class="vipSong" v-if="song.vipSong">VIP</div>
          </div>
          <div slot="infoBetween" class="ellipsis singerName">
            <span @click="toSingerPage(song.singerId)">{{song.singer}}</span>
          </div>
          <div slot="infoBelow" class="playingLyric">
            <span @click="toLyricsPage">{{playingLyric}}</span>
          </div>
        </info>
      </div>
    </div> 
</div> 
</template>

<script>
  import info from 'components/content/base/info'
  
  export default {
    name:"songInfo",
    components:{
      info
  },
  props:{
    playingLyric:{
      type:String,
      default:''
    }
  },
  computed:{
    song(){
      return this.$store.state.playingSong.song
    },
  },
  methods: {
    toSingerPage(id){
      this.$router.push(`/singer/${id}`)
    },
    toLyricsPage(){
      this.$bus.$emit("slideToLyricsPage")
    }
  },
}
</script>

<style scoped>
  .bgBox img{
    width: 100%;
    border-radius: 5px;
  }
  .playerBoxCenter{
    display: flex;
    height:75px;
    margin-top: 10px;
  }
  .playerInfo{
    width: 95%;
    height:100%;
    margin-left: 7px;
  }
  .fa-music,.fa-user,.fa-dot-circle-o{
    font-size: 20px;
    color:var(--icon-color);
    margin-right: 10px;
    margin-left: 5px;
  }
  .songName{
    font-weight:bold;
    color:var(--color-high-text);
    display: flex;
  }
  .singerName,.albumName{
    margin-top:4px;
    font-size: 14px;
  }
  .playingLyric{
    min-height:16px;
    margin-top:4px;
    overflow: hidden;
    font-size: 14px;
    white-space: nowrap;
  }

</style>