<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
  
</template>

<script>
  import BScroll from "better-scroll"
export default {
  name:"scrollX",
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      mouseWheel: true,//开启鼠标滚轮
      disableMouse: false,//启用鼠标拖动
      disableTouch: false,//启用手指触摸
      bounce: true,
      eventPassthrough: 'vertical',
      scrollX: true,
      scrollY: false, //Y轴滚动禁用    
      preventDefault: false
    })
  },
}
</script>

<style scoped>
  .content{
    display: inline-flex;
    overflow: hidden;
  }
</style>