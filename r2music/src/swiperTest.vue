<template>
  <swiper ref="mySwiper" :options="swiperOptions" >
    <swiper-slide ><home></home></swiper-slide>
    <swiper-slide ><home></home></swiper-slide>
    <swiper-slide ><player></player></swiper-slide>
    <swiper-slide ><lyricsPage></lyricsPage></swiper-slide>
  </swiper>
</template>

<script>
  import home from './views/home/home'
  import player from './views/player/player'
  import lyricsPage from './views/lyrics/lyricsPage'
  export default {
    name: 'carrousel',
    components:{
      home,
      player,
      lyricsPage
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          speed:300,
          // direction : 'vertical',
          // resistanceRatio : 0
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      },
    },
    mounted() {
      // console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(1, 1000, false)
    }
  }
</script>


<style scoped >
  .test{
    height: 667px;
    width: 335px;
  }
  .test1{
     background-color: green;
  }
  .test2{
     background-color: blue;
  }
  .test3{
     background-color: red;
  }
  
  

</style>