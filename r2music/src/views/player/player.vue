<!--
 * @Descripttion: 播放器组件集合在一起
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-21 14:56:59
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-21 18:35:31
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-15 14:35:20
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-20 23:38:08
-->
<template>
  <div>
    <div class="playerPageWrapper" ref="playerPage">
      <playerPage @hidePlayerPage="showMiniPlayer"></playerPage>
    </div>
    <div class="playListWrapper" ref="playList">
      <playList @hidePlayList="showMiniPlayer"></playList>
    </div>
    <div class="miniPlayerWrapper" ref="miniPlayer" 
      @click="showPlayerPage">
      <miniPlayer @showPlaylist="showPlaylist"></miniPlayer>
    </div>
  </div>
</template>

<script>
  import playerPage from './childComponents/playerPage.vue'
  import miniPlayer from './childComponents/miniPlayer.vue'
  import playList from './childComponents/playList.vue'


export default {
  name: "player",
  computed:{
  },
  components: {
    playerPage,
    miniPlayer,
    playList,
  },
  mounted() {
  },
  methods: {
    showMiniPlayer(){
      this.$refs.playerPage.style= "height:0px;"
      this.$refs.playList.style= "height:0px;"
      this.$refs.miniPlayer.style= "height:55px;transition-delay: 0.3s"
    },
    showPlayerPage(){
      this.$refs.miniPlayer.style= "height:0px;"
      this.$refs.playerPage.style= "height:100vh;"
    },
    showPlaylist(){
      this.$refs.miniPlayer.style= "height:0px;"
      this.$refs.playList.style= "height:100vh;transition-delay: 0.2s"
    }
  }
}
</script>

<style  scoped>
.playerPageWrapper{
  width: 100%;
  height: 0vh;
  /* TODO:修改播放器背景为模糊图片 */
  background-color:black;
  transition: height 0.4s;
  position: absolute;
  bottom: 0px;
  overflow: hidden;
}
.miniPlayerWrapper{
  width: 100%;
  height: 55px;
  transition: height 0.3s;
  position: absolute;
  bottom: 0px;
  overflow: hidden;
}
.playListWrapper{
  width: 100%;
  height: 0vh;
  transition: height 0.4s;
  position: absolute;
  bottom: 0px;
  overflow: hidden;
}
.miniPlayer{
  width: 90%;
  border-radius: 15px;
  background-color: black;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  height: 45px;
}

</style>

