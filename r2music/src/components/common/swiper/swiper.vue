<template>
<div class="bgBox">
  <swiper ref="mySwiper" :options="swiperOptions" class="wrapper">
    <swiper-slide  v-for="item of songs" :key="item.id" class="aSongBox">
        <a href=""><img v-lazy="item.image"></a>
        <div class="homeBoxCenter">
          <div class="homeInfo">
            <info>
              <div slot="infoAbove"><span class="fa fa-music"></span>
              <span class="songName">{{item.name}}</span></div>
              <div slot="infoBetween"><span class="fa fa-user"></span>
              <span class="singerName">{{item.singer}}</span></div>
              <div slot="infoBelow"><span class="fa fa-dot-circle-o"></span>
              <span class="albumName">{{item.album}}</span></div>
            </info>
          </div>
          <div class="playIcon"><span class="fa fa-play-circle"></span></div>
        </div>
    </swiper-slide>
  </swiper>
  <operationBar class="homeOperationBar">
    <div slot="operation-3" class="biggerIcon"><span class="fa fa-heart-o"></span></div>
  </operationBar>
</div>
</template>

<script>
  // import scroll from 'components/common/scroll/scroll'
  // import swiper from 'components/common/swiper/swiper'
  import info from 'components/content/base/info'
  import operationBar from 'components/content/base/operationBar'
  export default {
    name: 'carrousel',
    components:{
      info,
      // scroll,
      // swiper,
      operationBar
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
          direction : 'vertical',
          speed:500,
          effect : 'fade',
          mousewheel: true,
        }
      }
    },
     props:{
      songs:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(0, 1000, false)
    }
  }
</script>
<style scoped>
  .bgBox img{
    width: 100%;
    border-radius: 5px;
  }
  .wrapper{
    overflow: hidden;
    height: 445px;
  }
  /* .aSongBox{
    margin-bottom: 20px;
  } */
  .homeOperationBar{
    width: 100%;
    font-size: 20px;
    margin-top: 15px;
  }
  .biggerIcon{
    font-size: 25px;
    align-items: flex-start;
  }
  .homeBoxCenter{
    display: flex;
    height:95px;
    margin-top: 10px;
  }
  .fa-play-circle{
    color:var(--icon-color);
    font-size: 50px;
  }
  .playIcon{
    height: 50px;
    align-items: center;
    margin-top: 25px;
    margin-left: 40px;
  }
  .homeInfo{
  width: 70%;
  height:100%;
  margin-left: 7px;
}
.fa-music,.fa-user,.fa-dot-circle-o{
  font-size: 20px;
  color:var(--icon-color);
  margin-right: 10px;
  margin-left: 5px;
}
.songName{
  font-weight:bold;
  color:var(--color-high-text);
}
.singerName,.albumName{
  color:var(--color-high-text);
}
</style>