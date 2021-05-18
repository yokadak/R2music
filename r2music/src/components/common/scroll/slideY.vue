<!--
 * @Descripttion: 
 * @version: 
 * @Author: yrh
 * @Date: 2020-10-29 09:58:58
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-18 19:49:08
-->
<template>
      <div class="slide-vertical-wrapper" ref="slideY">
        <div class="slide-vertical-content">
          <!-- 设置插槽默认有元素，避免slide初始化内部无元素报错 -->
          <slot><div></div></slot>
        </div>
      </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Slide from '@better-scroll/slide'
  import MouseWheel from '@better-scroll/mouse-wheel'
  BScroll.use(MouseWheel)
  BScroll.use(Slide)

  export default {
    name:"slideY",

    mounted() {
      this.init()
    },
    beforeDestroy() {
      // this.slideY.destroy()
    },
    methods: {
      init() {
        this.slideY = new BScroll(this.$refs.slideY, {
          click:true,
          mouseWheel: true,   
          scrollX: false,
          scrollY: true,
          slide: {
             threshold: 0.1,
             autoplay:false,
             loop:false,
          },
          disableTouch: false,//启用手指触摸
          useTransition: true,
          momentum: false,
          bounce: true,
          stopPropagation: false,
        })
      },
    }
  }
</script>

<style scoped>
       
</style>