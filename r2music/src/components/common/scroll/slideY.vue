<template>
      <div class="slide-vertical-wrapper" ref="slide">
        <div class="slide-vertical-content">
          <slot>
            <div></div>
          </slot>
        </div>       
      </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Slide from '@better-scroll/slide'
  import MouseWheel from '@better-scroll/mouse-wheel'
  import ObserveDOM from '@better-scroll/observe-dom'
  BScroll.use(Slide)
  BScroll.use(MouseWheel)
  BScroll.use(ObserveDOM)
  export default {
    name:"slideY",
    data() {
      return {
      }
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
    },
    methods: {
      init() {
        this.bs = new BScroll(this.$refs.slide, { 
          mouseWheel: true,
          click: true, 
          observeDOM: true,  
          scrollX: false,
          scrollY: true,
          slide: {
            threshold: 100,
             autoplay:false,
             loop:false,
          },
          useTransition: true,
          momentum: false,
          bounce: true,
          stopPropagation: true,
        })
      },
       refresh() {
        this.bs && this.bs.refresh()
      },
    }
  }
</script>

<style scoped>    
</style>