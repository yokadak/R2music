<template>
      <div class="slide-banner-wrapper" ref="slide">
        <div class="slide-banner-content" ref="content">
          <!-- 设置插槽默认有元素，避免slide初始化内部无元素报错 -->
      <!-- <slideY class="slideY-wrapper" ref="homeSlideY" >
        <div v-for="item of songs" :key="item.id" class="aSongBox"> 
          <img :src="item.image">
          <div class="homeBoxCenter">
            <div class="homeInfo">
              <info>
                <div slot="infoAbove" class="ellipsis"><span class="fa fa-music"></span>
                <span class="songName">{{item.name}}</span></div>
                <div slot="infoBetween" class="ellipsis"><span class="fa fa-user"></span>
                <span class="singerName">{{item.singer}}</span></div>
                <div slot="infoBelow" class="ellipsis"><span class="fa fa-dot-circle-o"></span>
                <span class="albumName">{{item.album}}</span></div>
              </info>
            </div>
            <div class="playIcon"><span class="fa fa-play-circle" @click="play"></span></div>
          </div> 
        </div>
      </slideY>  
      <operationBar class="homeOperationBar">
        <div slot="operation-3" class="biggerIcon"><span class="fa fa-heart-o" @click="like"></span></div>
      </operationBar> -->
          <div class="page page1">page1</div>
          <div class="page page2">page2</div>
          <div class="page page3">page3</div>
          <div class="page page4">page4</div>
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
      // this.slide.destroy()
    },
    methods: {
      init() {
        this.slide = new BScroll(this.$refs.slide, {
          scrollX: true,
          scrollY: false,
          slide: {
            //设置一开始显示的页面
            startPageXIndex:2,
            threshold: 0.1,
            autoplay:false,
            loop:false,
          },
          momentum: false,
          probeType: 3,
          useTransition: true,
          bounce: false,
          stopPropagation: true,
        })
      },
    }
  }
</script>

<style scoped>

.slide-banner-wrapper{
    min-height: 1px;
    overflow: hidden;
    white-space: nowrap;
  }
    .page{
      display: inline-block;
      height: 200px;
      width: 400px;
      line-height: 200px;
      text-align: center;
      font-size: 26px;
    }
      .page1{

        background-color:#95B8D1;
      }
      .page2{

        background-color:#DDA789;
      }
      .page3{

        background-color:#C3D899;
      }
      .page4{

        background-color:#F2D4A7;
      }
</style>
