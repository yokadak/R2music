<template>
  <div class="progressBar">
    <div class="progress">
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
       default: 0,
     }
  },
  watch:{
    progress(){
      console.log(this.progress)
    }

  },
  data() {
    return {
      progressControlStyle:'',
      timeNow:'00:00',
      timeEnd:'03:45'
    }
  },
  mounted() {

  },
  methods: {
    progressChange(){
      console.log(this.$refs.progress.value)
    },
    startDragging(e){
      this.progressControlStyle = "left:190px;"
      console.log(e.clientX)
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
  .progress{
    width: 100%;
    margin-top: 15px;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color:var(--color-transparent);
  }
  /* .progressDragging{
    width: 100%;
    margin-top: 15px;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background-color:white
  } */
  .progressControl{
    margin-top: -5px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color:white;
    z-index:99
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