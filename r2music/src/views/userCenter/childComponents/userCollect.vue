<template>
  <div class="userCollect">
     <div class="likedLabel">
       <span class="fa fa-heart likedIcon"></span>
       <span class="myLiked">我的喜欢</span>
     </div>

    <infoBox id="likedSong" @click.native="toMyLikedSongs(likedSongs)">
      <div slot="pic" class="liked"><img :src="likedSongsCover" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>歌曲</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{likedSongs.length}}首歌曲</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
    <infoBox id="likedAlbum" @click.native="toMyLikedAlbums(likedAlbums)">
      <div slot="pic" class="liked"><img :src="likedAlbumsCover" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>专辑</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{likedAlbums.length}}张专辑</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
    <infoBox id="likedSonglist" @click.native="toMyLikedPlayLists(likedPlayLists)">
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
  
  methods: {
    toMyLikedSongs(Songs){
      // console.log(Songs)
      this.$router.push({name:'myLikedSongs',params:{myLikedSongs:Songs}})
    },
    toMyLikedAlbums(Albums){
      // console.log(Albums)
      this.$router.push({name:'myLikedAlbums',params:{myLikedAlbums:Albums}})
    },
    toMyLikedPlayLists(PlayLists){
      // console.log(PlayLists)
      this.$router.push({name:'myLikedPlayLists',params:{myLikedPlayLists:PlayLists}})
    }
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