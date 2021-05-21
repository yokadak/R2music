<!--
 * @Descripttion: 播放界面隐藏时的音乐控制台
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-21 15:09:27
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-22 01:22:51
-->
<template>
  <div class="miniPlayer">
    <div class="songWrapper" v-if="playingSong">
      <div class="songCover">
        <img :src="playingSong.image">
      </div>
      <div class="songInfo">{{playingSong.name}} - {{playingSong.singer}}</div>
       <div class="vipSong" v-if="playingSong.vipSong">VIP</div>
    </div>
    <div class="playButton">
      <span :class="playStateIcon" @click.stop="changePlayState"></span>
    </div>
    <div class="playListIcon">
      <span class="fa fa-bars" @click.stop="showPlaylist"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "miniPlayer",
  components: {
  },
  computed:{
    playingSong(){
       return this.$store.state.playingSong.song
    },
    playState(){
       return this.$store.state.playingState
    }
  },
  data() {
    return {
      playStateIcon:"fa fa-play-circle"
    }
  },
  watch:{
    playState:{
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
  },
  methods: {
    changePlayState(){
      if(this.playState){
        //如果正在播放，则暂停
        this.$bus.$emit("miniPlayerStateChanged")
        this.$store.commit({type:"setPlayingState",playingState:false})
      }else{
        //暂停时，则播放
        this.$bus.$emit("miniPlayerStateChanged")
        this.$store.commit({type:"setPlayingState",playingState:true})
      }
    },
    showPlaylist(){
      this.$emit("showPlaylist")
    }
  },
}
</script>

<style  scoped>
.miniPlayer{
  display: flex;
  align-items: center;
}
.songWrapper{
  display: flex;
  flex: 1;
  height: 100%;
}
.songInfo{
  width: 160px;
  margin: auto;
  margin-left: 15px;
  top: 0;
  bottom: 0;
  overflow: hidden;
  white-space: nowrap;
  color: white;
  font-size: 13px;
}
.songCover {
  width: 45px;
  height: 100%;
}
.songCover img{
  width: 100%;
  border-radius: 5px;
}
.playButton{
  font-size:35px;
  width: 50px;
  display: flex;
  justify-content: center;
}
.playListIcon{
  padding-left: 6px;
  font-size:25px;
  width: 50px;
}

</style>
