<template>
  <div class="miniPlayer">
    <div class="songWrapper">
      <div class="songCover">
        <img src="../../../assets/img/cover/2.jpg" alt="">
      </div>
      <div class="songInfo"><span>songname - singer</span></div>
    </div>
    <div class="playButton"><span class="fa fa-play-circle"></span></div>
    <div class="playList"><span class="fa fa-bars"></span></div>
  </div>
</template>

<script>
export default {
  name: "miniPlayer",//播放界面隐藏时的音乐控制台
  data() {
    return {

    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style  scoped>
.miniPlayer{
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 15px;
  background-color: black;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  height: 45px;
}
.songWrapper{
  display: flex;
  flex: 1;
  height: 100%;
}
.songInfo{
  margin: auto;
  margin-left: 15px;
  top: 0;
  bottom: 0;
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
}
.playList{
  padding-left: 6px;
  font-size:25px;
  width: 50px;
}

</style>
