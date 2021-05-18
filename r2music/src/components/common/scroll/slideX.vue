<!--
 * @Descripttion: 
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-14 20:40:04
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-18 19:49:29
-->
<template>
      <div class="slide-banner-wrapper" ref="slideX">
        <div class="slide-banner-content">
          <!-- 设置插槽默认有元素，避免slide初始化内部无元素报错 -->
           <slot><div></div></slot>
        </div>
    </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Slide from '@better-scroll/slide'

  BScroll.use(Slide)

  export default {

    mounted() {
      this.init()
    },
    beforeDestroy() {
      this.slideX.destroy()
    },
    methods: {
      init() {
        this.slideX = new BScroll(this.$refs.slideX, {
          click:true,
          scrollX: true,
          scrollY: false,
          slide: {
            threshold: 0.1,
            autoplay:false,
            loop:false,
          },
          disableTouch: false,//启用手指触摸
          momentum: false,
          probeType: 3,
          useTransition: true,
          bounce: false,
          stopPropagation: true,
        })
      },
      goToPage(){
        this.slideX && this.slideX.goToPage.apply(this.slideX, arguments)
      },
      getCurrentPage(){
        this.slideX && this.slideX.getCurrentPage.apply(this.slideX, arguments)
      }
    }
  }
</script>

<style scoped>
.slide-banner-content{
  overflow: hidden;
  width: 100%;
  display: inline-flex;
}
</style>
