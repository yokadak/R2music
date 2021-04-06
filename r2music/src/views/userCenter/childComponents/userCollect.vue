<template>
  <div class="userCollect">
     <div class="likedLabel">
       <span class="fa fa-heart likedIcon"></span>
       <span class="myLiked">我的喜欢</span>
     </div>

    <infoBox id="likedSong">
      <div slot="pic" class="liked"><img src="~assets/img/cover/ymo.jpg" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>歌曲</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>42首歌曲</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
       <infoBox id="likedAlbum">
      <div slot="pic" class="liked"><img src="~assets/img/cover/yao.jpg" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>歌曲</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>42首歌曲</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
       <infoBox id="likedSonglist">
      <div slot="pic" class="liked"><img src="~assets/img/cover/1.jpg" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>歌曲</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>42首歌曲</span></div>
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
  }
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