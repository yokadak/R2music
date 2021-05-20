<template>
<!-- 该组件显示的是歌单列表或专辑列表 -->
  <scroll class="wrapper">
    <div class="content">
      <div class="listCount" v-if="list">{{list.collection.length}} {{list.category}}</div>
      <ul class="list" v-if="list">
        <li v-for="item of list.collection" :key="item.id" @click="toDetail(item.id)">
          <infoBox>
            <div slot="pic" class="picture"><img :src="item.image" alt=""></div>
            <div slot="charAbove" class="charAbove ellipsis">{{item.name}}</div>
            <div slot="charBelow" class="charBelow ellipsis">{{item.size || item.songsCount}}首 来自{{item.singer || item.creator}}</div>
            <div slot="rightIcon"><span class="fa fa-angle-right"></span></div>
          </infoBox>
        </li>
      </ul>
    </div>
  </scroll>
</template>

<script>
  import scroll from 'components/common/scroll/scroll'
  import infoBox from 'components/content/base/infoBox'
 
export default {
  name:"list",
  components:{
    scroll,
    infoBox,
  },
  props:{
    list:{
      default:[]
    }
  },
  // data() {
  //   return {
  //     playListId:this.$route.params.playListId,//歌单Id
  //     albumId:this.$route.params.albumId,//专辑Id
  //     count:0,//列表项计数
  //     listItem:'',//判断列表的内容是歌单专辑还是歌曲
  //     listDetail:{},
  //     list:[],//歌曲列表，未登录只能获取20首
  //     listIds:[],//完整歌曲Id列表
  //     routeName:this.$route.name,
  //     myLikedSongs:this.$route.params.myLikedSongs,
  //     myLikedAlbums:this.$route.params.myLikedAlbums,
  //     myLikedPlayLists:this.$route.params.myLikedPlayLists,
  //   }
  // },

  // created() {
  //   this.$nextTick(()=>{
  //     this.judgeRoute()
  //   })
  // },
  methods: {
    // judgeRoute(){
    //   if(this.routeName === 'myLikedAlbums'){
    //     this.list = this.myLikedAlbums
    //     this.count = this.myLikedAlbums.length
    //     this.listItem = '张专辑'
    //   }
    //   if(this.routeName === 'myLikedPlayLists'){
    //     this.list = this.myLikedPlayLists
    //     this.count = this.myLikedPlayLists.length
    //     this.listItem = '张歌单'
    //   }
    //   // console.log(this.list)
    // },
    toDetail(id){
      if(this.list.category === '专辑'){
        this.$router.push(`/album/${id}`)
      }else{
        this.$router.push(`/songList/${id}`)
      }
    },
  },
}
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
    height: calc(100vh - 155px);
    background-color: green;
  }
  /*即使内容未溢出也可以滚动 */
  .content{
    background-color: red;
    min-height:800px
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