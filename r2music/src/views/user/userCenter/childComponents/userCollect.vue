<template>
  <div class="userCollect">
     <div class="likedLabel">
       <span class="fa fa-heart likedIcon"></span>
       <span class="myLiked">我的喜欢</span>
     </div>

    <infoBox 
    @click.native="toUserLiked('songs',likedSongs,likedAlbums,likedPlayLists)">
      <div slot="pic" class="liked"><img :src="likedSongsCover" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>歌曲</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{likedSongs.length}}首歌曲</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
    <infoBox 
    @click.native="toUserLiked('albums',likedSongs,likedAlbums,likedPlayLists)">
      <div slot="pic" class="liked"><img :src="likedAlbumsCover" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>专辑</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{likedAlbums.length}}张专辑</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
    <infoBox 
    @click.native="toUserLiked('playLists',likedSongs,likedAlbums,likedPlayLists)">
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
    toUserLiked(type,songs,albums,playLists){
      this.$router.push({name:'myLiked',params:{
        type:type,
        myLikedSongs:songs,
        myLikedAlbums:albums,
        myLikedPlayLists:playLists
      }
      })
    },
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