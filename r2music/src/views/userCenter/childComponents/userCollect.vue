<template>
  <div class="userCollect">
     <div class="likedLabel">
       <span class="fa fa-heart likedIcon"></span>
       <span class="myLiked">我的喜欢</span>
     </div>

    <infoBox id="likedSong">
      <div slot="pic" class="liked"><img src="~assets/img/cover/ymo.jpg" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>歌曲</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{likedSongsCount}}首歌曲</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
       <infoBox id="likedAlbum">
      <div slot="pic" class="liked"><img src="~assets/img/cover/yao.jpg" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>专辑</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{likedAlbumsCount}}张专辑</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
       <infoBox id="likedSonglist">
      <div slot="pic" class="liked"><img src="~assets/img/cover/1.jpg" alt=""></div>
      <div slot="charAbove" class="likedCharAbove"><span>歌单</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{likedPlayListCount}}歌单</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
  </div>
</template>

<script>
  import infoBox from 'components/content/base/infoBox'
    //网络请求导入
  import {getUserInfo} from "network/user"
  import {getSubCount} from "network/user"
  import {getLikedMusic} from "network/user"
  import {getLikedAlbums} from "network/user"
  
export default {
  name:"userCollect",
  components:{
    infoBox
  },
  data() {
    return {
      uid:this.$store.state.user.id,
      likedSongsCount:0,
      likedAlbumsCount:0,
      likedPlayListCount:0,
      ownPlayListCount:0
    }
  },
  created() {
    this._getUserInfo(this.uid)
    this._getSubCount()
    this._getLikedMusic(this.uid)
    this._getLikedAlbums()
  },
  methods: {
    _getUserInfo(uid){
      getUserInfo(uid).then((res) => {
        console.log(res)
        // console.log(this.$store.state)
      })
    },
    _getSubCount(){
      getSubCount().then((res) => {
        this.likedPlayListCount = res.subPlaylistCount
        this.$store.commit('GET_OWN_PLAYLIST_COUNT', res.createdPlaylistCount)
      })
    },
    _getLikedMusic(uid){
      getLikedMusic(uid).then((res) => {
        this.likedSongsCount = res.ids.length
      })
    },
    _getLikedAlbums(){
      getLikedAlbums().then((res) => {
        this.likedAlbumsCount = res.count
      })
    },
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