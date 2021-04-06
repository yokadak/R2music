<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="wrapper">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
          direction : 'vertical',
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
  /* .wrapper{
    height: 200px;
  }
  .test{
    width: 375px;
    background-color:red;
    font-size: 100px;
    text-align: center;
    line-height: 200px;
  } */
</style>