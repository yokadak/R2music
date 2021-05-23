<template>
  <div class="progressBar">
    <div class="backgroundTrack" ref="backgroundTrack" @click="jumpProgress">
    </div>
    <div class="progress" ref="track"
    :style="progressStyle"
    @click="jumpProgress"
    >
    </div>
    <div class="progressControl"
    @touchstart="startDragging"
    :style="progressControlStyle"
    >
    </div>
    <div class="songTime">
      <span>{{ timeNow || getTimeNow()}}</span>
      <span>{{getTimeEnd()}}</span>
    </div>
  </div>
</template>

<script>
  import {getSongTime} from "common/js/utils"

export default {
  name:"progressBar",
  props:{
    progress: {
      type: Number,
     },
    duration: {
      type: Number,
      default:0,
    },
    currentTime:{
      type:Number,
      default:0,
    },
  },
  data() {
    return {
      timeNow:null,//实现拖动进度条，数组跟着改变
      startPlay:false,
      playing:true,
      progressControlStyle:'',
      progressStyle:'',
      //最好还是用计算属性什么的处理
      trackProgress: this.progress,//HTML进度条(div)进度，progress是歌曲进度
      isDragging: false,
      draggingStartPoint: 0
    }
  },
  watch:{
    duration(){
      this.isDragging = false
    }
  },
  mounted() {
    setInterval(()=>{
      if(!this.isDragging){
        this.progressStyle = `width:${this.progress}%`
        this.progressControlStyle = `left:${this.progress}%;`
      }
    },1000)
    this.$bus.$on("songChanged",this.songChanged)
  },
  methods: {
    songChanged(){
      //歌曲切换后要将所有样式相关还原
      this.trackProgress = 0
      this.isDragging = true //避免触发定时器
      this.progressStyle = `width:0%`
      this.progressControlStyle = `left:0%;`
    },
    getTimeNow(){
      return getSongTime(this.currentTime)
    },
    getTimeEnd(){
      return getSongTime(this.duration)
    },
    progressChange(){
      console.log(this.$refs.progress.value)
    },
    startDragging(e){
      this.$emit("startDragging");
      this.isDragging = true;
      this.draggingStartPoint = e.touches[0].clientX;
      this.draggingStartProgress = this.trackProgress;
      document.addEventListener("touchmove", this.dragging);
      document.addEventListener("touchend", this.endDragging);
    },
    dragging(e){
      if(this.isDragging){
        let backgroundTrack = this.$refs.backgroundTrack
        //TODO:这里获取会报错，暂时用固定值
        const totalWidth = 297.25
        // parseFloat(window.getComputedStyle(backgroundTrack).width)
        this.trackProgress = this.draggingStartProgress +
        ((e.touches[0].clientX -  this. draggingStartPoint) / totalWidth)*100
        this.timeNow = getSongTime((this.trackProgress / 100) * this.duration)
        this.trackProgress < 0 && (this.trackProgress = 0);
        this.trackProgress > 100 && (this.trackProgress = 100);
        this.progressControlStyle = `left:${this.trackProgress}%;
          margin-top: -9px;
          height: 15px;
          width: 15px;`
        this.progressStyle = `width:${this.trackProgress}%`
      }
    },
    endDragging(e){
      this.isDragging = false
      this.timeNow = null
      this.$emit("progressChanged", this.trackProgress);
      document.removeEventListener("touchmove", this.dragging);
      document.removeEventListener("touchend", this.endDragging);
    },
    jumpProgress(e){
      const progressWidth = 297.25
      this.trackProgress = (e.offsetX / progressWidth) * 100
      this.trackProgress < 0 && (this.trackProgress = 0);
      this.trackProgress > 100 && (this.trackProgress = 100);
      this.progressStyle = `width:${this.trackProgress}%`
      this.progressControlStyle = `left:${this.trackProgress}%;`
      this.$emit("progressChanged", this.trackProgress);
    }
  },
}
</script>

<style>
  .progressBar{
    height: 35px;
    width: 88%;
    margin: auto;
    position: relative;
    /* background-color: red; */
  }
  .backgroundTrack{
    width: 100%;
    margin-top: 15px;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color:var(--color-transparent);
  }
  .progress{
    height: 3px;
    border-radius: 10px;
    background-color:white;
    transform: translatey(-70%);
    position: absolute;
    z-index: 9;
  }
  .progressControl{
    margin-top: -5px;
    margin-left: -2px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color:white;
    z-index:99;
    position: absolute;
  }
  .progressControl:active{
    margin-top: -9px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    z-index:99
  }
  .songTime{
    position: absolute;
    font-size: 13px;
    top: 15px;
    width: 100%;
    display:flex;
    justify-content:space-between;
  }
</style>