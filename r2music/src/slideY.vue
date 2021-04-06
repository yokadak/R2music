<template>
      <div class="slide-vertical-wrapper" ref="slide">
        <div class="slide-vertical-content">
          <slot></slot>
          <div class="slide-page page1">page1</div>
          <div class="slide-page page2">page2</div>
          <div class="slide-page page3">page3</div>
          <div class="slide-page page4">page4</div>
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
      this.slide.destroy()
    },
    methods: {
      init() {
        new BScroll(this.$refs.slide, {
          mouseWheel: true,   
          scrollX: false,
          scrollY: true,
          slide: {
            threshold: 0.1,
             autoplay:false,
             loop:false,
          },
          useTransition: true,
          momentum: false,
          bounce: true,
          stopPropagation: true,
        })
      },
    }
  }
</script>

<style scoped>
    
  .slide-vertical-wrapper{
    height: 600px;
    overflow: hidden;
  }
    
    .slide-page{
      width: 100%;
      text-align: center;
      font-size:60px;
    }
      .page1{
background-color:yellowgreen;
      }
        
      .page2{
 background-color:green;
      }
       
      .page3{
 background-color: red;
      }
       
      .page4{
 background-color: blue;
      }
       
</style>