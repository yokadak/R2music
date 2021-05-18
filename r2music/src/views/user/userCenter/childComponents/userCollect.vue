<template>
  <div class="userCollect">
     <div class="likedLabel">
       <span class="fa fa-heart likedIcon"></span>
       <span class="myLiked">我的喜欢</span>
     </div>

    <infoBox v-if="likedSongs"
    @click.native="toUserLiked(0)">
      <div slot="pic" class="liked"><img :src="likedSongsCover" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>歌曲</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{likedSongs.length}}首歌曲</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
    <infoBox v-if="likedAlbums"
    @click.native="toUserLiked(1)">
      <div slot="pic" class="liked"><img :src="likedAlbumsCover" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>专辑</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{likedAlbums.length}}张专辑</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
    <infoBox v-if="likedPlayLists"
    @click.native="toUserLiked(2)">
      <div slot="pic" class="liked"><img :src="likedPlayListsCover" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>歌单</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{likedPlayLists.length}}歌单</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
  </div>
</template>

<script>
  import infoBox from 'components/content/base/infoBox'
  
export default {
  name:"userCollect",
  components:{
    infoBox
  },
  props:{
    likedSongsCover:String,
    likedPlayListsCover:String,
    likedAlbumsCover:String,
    likedSongs:Array,
    likedAlbums:Array,
    likedPlayLists:Array,
  },
  data() {
    return {
      collections:[]
    }
  },
  //获取到父组件传递的数据后再进行处理
  watch:{
    likedSongs(){
      this.getAllCollections()
    }
  },
  methods: {
    getAllCollections(){
        let likedArray =[]
        for(let i = 0 ; i < 3 ; i++){
          likedArray.push({})
        }
        likedArray[0].category = '歌曲'
        likedArray[0].collection = this.likedSongs
        likedArray[1].category = '专辑'
        likedArray[1].collection = this.likedAlbums
        likedArray[2].category = '歌单'
        likedArray[2].collection = this.likedPlayLists
        this.collections = likedArray
        console.log(this.collections)
    },
    toUserLiked(from){
      this.$router.push({name:'myLiked',params:{
        collections:this.collections,
        fromIndex:from
        }})
    },
    // toMyLikedSongs(Songs){
    //   // console.log(Songs)
    //   this.$router.push({name:'myLikedSongs',params:{myLikedSongs:Songs}})
    // },
    // toMyLikedAlbums(Albums){
    //   // console.log(Albums)
    //   this.$router.push({name:'myLikedAlbums',params:{myLikedAlbums:Albums}})
    // },
    // toMyLikedPlayLists(PlayLists){
    //   // console.log(PlayLists)
    //   this.$router.push({name:'myLikedPlayLists',params:{myLikedPlayLists:PlayLists}})
    // },
  },
}
</script>

<style>
  .userCollect{
    width:81%;
    margin:auto;
  }
  .liked img{
    width:40px;
    border-radius:5px;
  }
  .likedCharAbove{
    font-size: 11px;
    color:var(--color-high-text);
    margin-top: 3px;
    font-weight: bold;
  }
  .likedCharBelow{
    font-size: 11px;
    margin-top: 6px;
  }
   .likedLabel{
    margin-top: 7px;
    margin-bottom: 10px;
  }
  .likedIcon{
    color:#DC5D5D;
  }
  .myLiked{
    margin-left: 5px;
    font-size: 14px;
  }

</style>