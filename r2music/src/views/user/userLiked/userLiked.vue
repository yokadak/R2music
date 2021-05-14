<template>
<!-- 该组件显示用户喜欢的歌曲、歌单、专辑列表 -->
<div>
  <navTop>
    <div slot="center"><span >我喜欢</span></div>
    <div slot="right"><span class="fa fa-ellipsis-h"></span></div>
  </navTop>
  <div class = "tab">
    <div>歌曲 <span>1{{}}</span></div>
    <div>专辑 <span>22{{}}</span></div>
    <div>歌单 <span>444{{}}</span></div>
  </div>
  <!-- 这里根据路由携带的参数决定渲染歌曲，专辑，还是歌单 -->
  <!-- <router-view :name="name"></router-view> -->

  <miniPlayer></miniPlayer>
</div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import scroll from 'components/common/scroll/scroll'
  import infoBox from 'components/content/base/infoBox'
  import miniPlayer from 'components/content/base/miniPlayer'
 
export default {
  name:"list",
  components:{
    navTop,
    scroll,
    infoBox,
    miniPlayer,
  },
  data() {
    return {
      name:"name"
    }
  },

  created() {
    this.$nextTick(()=>{
      this.judgeRoute()
    })
    console.log(this.$route.params)
  },
  methods: {
    judgeRoute(){
      if(this.routeName === 'myLikedAlbums'){
        this.list = this.myLikedAlbums
        this.count = this.myLikedAlbums.length
        this.listItem = '张专辑'
      }
      if(this.routeName === 'myLikedPlayLists'){
        this.list = this.myLikedPlayLists
        this.count = this.myLikedPlayLists.length
        this.listItem = '张歌单'
      }
      // console.log(this.list)
    },
    toDetail(id){
      if(this.$route.name === "myLikedAlbums"){
        this.$router.push({name:'albumDetail',params: {albumId:id}})
      }
      else{
        this.$router.push({name:'songList',params: {playListId:id}})
        // console.log("songList")
      }
    },
  },
}
</script>

<style scoped>
/* TODO:点击滑块，tab底部的滑动效果 */
  .tab{
    width: 90%;
    color: var(--color-text);
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin: auto;
  }
  /* .tab div:active{
    color: white;
  } */
  .tab span{
    font-size: 12px;
  }
  .wrapper{
    overflow: hidden;
    height: calc(100vh - 125px);
  }
  /*TODO: 即使内容未溢出也可以滚动 */
  .content{
    padding-top: 20px;
    height: calc(100vh - 5px);
  }
  .listCount{
    font-size: 16px;
    width: 90%;
    margin:auto;
    margin-top: 15px;
  }
  .list{
    width:90%;
    margin:auto;
    margin-top: 20px;
  }
  .picture img{
    width:40px;
    border-radius:5px;
  }
  .charAbove{
    font-size: 11px;
    color:var(--color-high-text);
    margin-top: 3px;
  }
  .charBelow{
    font-size: 11px;
    margin-top: 6px;
  }

</style>