<template>
  <div >
    <slideX class="slideX-wrapper bgBox">
      <div class="recommended-music">
        <slideY class="slideY-wrapper" ref="homeSlideY" >
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
        </operationBar>
      </div>
      <div class="page page1">page1</div>
      <div class="page page2">page2</div>
      <div class="page page3">page3</div>
      <div class="page page4">page4</div>
    </slideX>
  </div>
</template>

<script>
  //better-scroll滚动组件导入
  import slideX from 'components/common/scroll/slideX.vue'
  import slideY from 'components/common/scroll/slideY'
  import info from 'components/content/base/info'
  import operationBar from 'components/content/base/operationBar'
  import {debounce} from 'common/js/utils.js'
  export default {
    name:"homeBgBox",
    components:{
      info,
      slideX,
      slideY,
      operationBar,
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
.slideX-wrapper{
  overflow: hidden;
  height: 525px;
}
  .recommended-music{
      width: 100%;
      flex-shrink: 0;
  }
  .recommended-music img{
    width: 100%;
    border-radius: 5px;
  }
  .slideY-wrapper{
    overflow: hidden;
    height: 445px;
  }
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
.page{
      height: 200px;
      width: 100%;
      text-align: center;
      font-size: 26px;
      flex-shrink: 0;
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