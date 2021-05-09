<template>
  <div class="playControl">
   <operationBar class="playOperation">
     <div slot="operation-1" class="playOp" @click="changePlayMode">
       <span :class= "playModeIcon"></span>
     </div>
     <div slot="operation-2" class="playOp playOp2" @click="playPrevSong">
       <span class="fa fa-step-backward"></span>
     </div>
     <div slot="operation-3" class="playOp playOp3" @click="changePlayState">
       <span :class= "playStateIcon"></span>
     </div>
     <div slot="operation-4" class="playOp playOp4" @click="playNextSong">
       <span class="fa fa-step-forward"></span>
     </div>
     <div slot="operation-5" class="playOp" @click="openPlayList">
       <span class="fa fa-bars"></span>
     </div>
   </operationBar>
  </div>
</template>

<script>
  import operationBar from './operationBar'
  export default {
    name:'playControl',
    components:{
      operationBar  
    },
    props:{
      playStateIcon:{
        type:String,
        default:"fa fa-play-circle"
      },
      playModeIcon:{
        type:String,
        default:"fa fa-exchange"
      },
    },
    methods: {
      changePlayMode(){
        this.$emit("playModeChange")
      },
      playPrevSong(){
        this.$emit("playPrevSongClicked")
      },
      changePlayState(){
        this.$emit("playStateChange")
      },
      playNextSong(){
        this.$emit("playNextSongClicked")
      },
      openPlayList(){
        this.$emit("playListOpen")
      }
    },

}
</script>

<style>
  .playControl{
    width: 100%;
    display: flex;
    align-items: center;
    background-color:var(--color-tint);
  }
   .playOp{
    flex:1;
    display: flex;
    font-size: 24px;
    justify-content: center;
    align-items: center;
  }
   .playOp3{
    font-size: 50px;
  }
    .playOp2,.playOp4{
    font-size: 28px;
  }
  .playOperation{
    height: 100%;
    background-color:var(--color-tint);
  }

</style>