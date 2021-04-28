<template>
  <div class="progressBar">
    <div class="backgroundTrack">
    </div>
    <div class="progress" ref="track"
    :style="progressStyle"
    >
    </div>
    <div class="progressControl"
    @mousedown="startDragging"
    :style="progressControlStyle"
    >
    </div>
    <div class="songTime">
      <span>{{timeNow}}</span>
      <span>{{timeEnd}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"progressBar",
  props:{
    progress: {
      type: Number,
     },
    timeNow: {
      type: String,
      default: "00:00",
    },
    timeEnd: {
      type: String,
      default: "00:00",
    },
  },

  data() {
    return {
      startPlay:false,
      progressControlStyle:'',
      progressStyle:'',
      trackProgress: this.progress,//HTML进度条(div)进度，progress是歌曲进度
      isDragging: false,
      draggingStartPoint: 0
    }
  },
  mounted() {
    setInterval(()=>{
      this.progressControlStyle = `left:${this.progress}%`
      this.progressStyle = `width:${this.progress}%`
      // console.log(this.progressControlStyle)
    },1000)
  },
  methods: {
    progressChange(){
      console.log(this.$refs.progress.value)
    },
    startDragging(e){
      console.log("strat")
      this.$emit("startDragging");
      this.isDragging = true;
      this. draggingStartPoint = e.clientX;
      this. draggingStartProgress = this.trackProgress;
      document.addEventListener("mousemove", this.dragging);
      document.addEventListener("mouseup", this.endDragging);
    },
    dragging(e){

        console.log(e.clientX)
        // this.trackProgress =this.draggingStartProgress +
        //   ((e.clientX - this.draggingStartPoint) / parseInt(width)) * 100;
        // this.trackProgress < 0 && (this.trackProgress = 0);
        // this.trackProgress > 100 && (this.trackProgress = 100);
        // this.$emit("progressChanging", this.trackProgress);
      

    },
    endDragging(e){

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