<template>
  <div class="searchResult">
    <searchNav></searchNav>
    <scroll class="wrapper">
      <div class="content">
        <songBox></songBox>
      </div>
    </scroll>
    <playControl class="PlayControl"></playControl>
  </div>
</template>

<script>
  import searchNav from './searchNav'
  import songBox from 'components/content/base/songBox'
  import scroll from 'components/common/scroll/scroll'
  import playControl from 'components/content/base/playControl'


export default {
  name:"searchResult",
  components:{
    searchNav,
    songBox ,
    playControl,
    scroll,
  },
  data(){
    return{

    }
  },
  methods: {

  },
}
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
    height: calc(100vh - 145px);
  }
  .PlayControl{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
  }
</style>