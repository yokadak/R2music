<template>
  <div class="progressBar" ref="progressBar">
    <div class="progress" 
    @click="setProgress" 
    :style="{width:innerProgress+'%'}"
    >
    </div>
    <div class="control" 
    @mousedown="startDragging" 
    :style="{left:innerProgress+'%'}"
    >
    </div>
    <div class="songTime">
      <spna>{{timeNow}}</spna>
      <spna>{{timeEnd}}</spna>
    </div>
  </div>
</template>

<script>
export default {
  name:"progressBar",
  props: {
    progress: {
      type: Number,
      default: 50,
      validator: function(value) {
        return value >= 0 && value <= 100;
      }
    },
  },
  data: function() {
    return {
      innerProgress: this.progress,
      isDragging: false,
      draggingOriginPoint: 0
    };
  },
  watch: {
    progress: function() {
      this.innerProgress = this.progress;
    }
  },
  methods: {
    startDragging: function(e) {
        this.$emit("startDragging");
        this.isDragging = true;
        this.draggingOriginPoint = e.clientX;
        this.draggingOriginProgress = this.innerProgress;
        document.addEventListener("mousemove", this.dragging);
        document.addEventListener("mouseup", this.endDragging);
      
    },
    dragging: function(e) {
      if (this.isDragging) {
        const width = getComputedStyle(this.$refs.track).width;
        this.innerProgress =
          this.draggingOriginProgress +
          ((e.clientX - this.draggingOriginPoint) / parseInt(width)) * 100;
        this.innerProgress < 0 && (this.innerProgress = 0);
        this.innerProgress > 100 && (this.innerProgress = 100);
        this.$emit("progressChanging", this.innerProgress);
      }
    },
    endDragging: function(e) {
      if (this.isDragging) {
        this.$emit("progressChanged", this.innerProgress);
        this.isDragging = false;
        document.removeEventListener("mousemove", this.dragging);
        document.removeEventListener("mouseup", this.endDragging);
      }
    },
    jumpProgress: function(e) {
      this.innerProgress =
        (e.offsetX / parseInt(getComputedStyle(this.$refs.track).width)) * 100;
      this.$emit("progressChanged", this.innerProgress);
    }
  }
};
</script>

<style>
  .progressBar{
    height: 45px;
    width: 90%;
    margin: auto;

  }
  .progress{
    width: 100%;
    margin-top: 5px;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color:var(--color-transparent);
  }
  .contorl{
    margin-top: 3px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color:white;
    z-index:99
  }
  .songTime{
    font-size: 13px;
    margin-top: 5px;
    width: 100%;
    display:flex;
    justify-content:space-between;
  }
</style>