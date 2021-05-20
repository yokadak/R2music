<!--
 * @Descripttion: 
 * @version: 
 * @Author: yrh
 * @Date: 2020-10-26 14:45:01
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-20 19:58:52
-->
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

  mounted() {
    this.$nextTick(() =>{
      //创建BScroll对象并设置参数
      this.scroll = new BScroll(this.$refs.wrapper,{
        mouseWheel: true,//开启鼠标滚轮
        disableMouse: false,//启用鼠标拖动
        disableTouch: false,//启用手指触摸
        scrollX: true,  //X轴滚动启用 
        click: true, //可点击
        // stopPropagation: true,
        // eventPassthrough: 'vertical',//设置该属性为vertical 则只会滚动设置为true的轴
      })
    })
  },
    methods: {
    scrollTo(){
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollBy(){
      this.scroll && this.scroll.scrollBy.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }

  },
}
</script>

<style scoped>

</style>