<template>
<div class="bgBox">
  <slideY class="wrapper" ref="homeSlideY" >
    <div v-for="item of songs" :key="item.id" class="aSongBox"> 
        <img v-lazy="item.image">
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
          <div class="playIcon"><span class="fa fa-play-circle" @click="play"></span></div>
        </div> 
    </div>
  </slideY>  
  <operationBar class="homeOperationBar">
    <div slot="operation-3" class="biggerIcon"><span class="fa fa-heart-o" @click="like"></span></div>
  </operationBar>
</div>
</template>

<script>
  //better-scroll滚动组件导入
  import scroll from 'components/common/scroll/scroll'
  import slideY from 'components/common/scroll/slideY'
  import swiper from 'components/common/swiper/swiper'
  import info from 'components/content/base/info'
  import operationBar from 'components/content/base/operationBar'
  import {debounce} from 'common/js/utils.js'
  export default {
    name:"homeBgBox",
    components:{
      info,
      scroll,
      slideY,
      swiper,
      operationBar
  },
    props:{
      path: String,
      songs:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    mounted() {
      // const refresh = debounce(this.$refs.homeSlideY.refresh,50)
      //   refresh()
    },
    methods: {
      play(){
        this.$router.push(this.path);
      },
      like(){
      console.log("i like");
      }
    },
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
  /* .content{
  display: inline-flex;
  overflow: hidden;
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