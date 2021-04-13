<template>
  <div class="wrapper" ref="wrapper">
      <!-- 默认插槽，使用该组件时用要滚动内容替换 -->
      <slot></slot>
  </div>
  
</template>

<script>
  //导入BScroll
  import BScroll from "better-scroll"
export default {
  name:"scroll",
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    //创建BScroll对象并设置参数
    this.scroll = new BScroll(this.$refs.wrapper,{
      mouseWheel: true,//开启鼠标滚轮
      disableMouse: false,//启用鼠标拖动
      disableTouch: false,//启用手指触摸
      scrollX: true,  //X轴滚动启用 
      click: true, //可点击

      // eventPassthrough: 'vertical',设置该属性为vertical 则只会滚动设置为true的轴
    })
  },
}
</script>

<style scoped>

</style>