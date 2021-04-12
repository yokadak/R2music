<template>
    <div class="bgBox userBgBox">
      <scroll  class="wrapper">
        <div class="content">
          <userInfoBox class="userInfoBox"></userInfoBox>
          <userCollect class="userCollect"
          :likedSongsCount = 'likedSongsCount'
          :likedAlbumsCount = 'likedAlbumsCount'
          :likedPlayListCount = 'likedPlayListCount'
          :likedSongsCover = 'likedSongsCover'
          :likedAlbumsCover = 'likedAlbumsCover'
          :likedPlayListCover = 'likedPlayListCover'
          ></userCollect>
          <userOwnList class="userOwnList"
          :ownPlayList = 'ownPlayList'
          ></userOwnList>
        </div>
      </scroll>
    </div>
</template>

<script>
    import userInfoBox from './userInfoBox'
    import userCollect from './userCollect'
    import userOwnList from './userOwnList'
    import scroll from 'components/common/scroll/scroll'
    //网络请求，数据处理
    //获取用户的所有歌单（包括自建歌单和收藏歌单）
    import {getUserInfo} from "network/user"
    import {getLikedMusic} from "network/user"
    import {getLikedAlbums} from "network/user"
    import {getLikedPlayList} from "network/user"
    import {getPlayListData} from "common/js/handleApiData"
    import {getSubCount} from "network/user"

export default {
  name:"userBox",
  components:{
     userInfoBox,
     userCollect,
     userOwnList,
     scroll,
  },
  data() {
    return {
      uid:this.$store.state.user.id,
      likedSongsCount:0,
      likedAlbumsCount:0,
      likedPlayListCount:0,
      ownPlayListCount:0,
      ownPlayList:[],
      likedPlayList:[],
      likedSongsCover:'',
      likedAlbumsCover:'',
      likedPlayListCover:'',
    }
  },
  created() {
    this._getSubCount()
    this._getlikedPlayList(this.uid)
    this._getUserInfo(this.uid)
    this._getLikedMusic(this.uid)
    this._getLikedAlbums()
  },
  methods: {
    _getSubCount(){
      getSubCount().then((res) => {
        this.likedPlayListCount = res.subPlaylistCount
        this.ownPlayListCount = res.createdPlaylistCount
      })
    },
    _getUserInfo(uid){
      getUserInfo(uid).then((res) => {
        console.log(res)
        // console.log(this.$store.state)
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
        this.likedAlbumsCover = res.data[0].picUrl
      })
    },
    _getlikedPlayList(uid){
      getLikedPlayList(uid).then((res) => {
        const cutNum = this.ownPlayListCount 
        this.ownPlayList = res.playlist.slice(0,cutNum)
        .map((item)=>{
          return getPlayListData(item)
        })
        this.likedPlayList = res.playlist.slice(cutNum)
        .map((item)=>{
          return getPlayListData(item)
        })
        this.likedSongsCover = this.ownPlayList[0].image
        this.likedPlayListCover = this.likedPlayList[0].image
        console.log(this.likedPlayList)
      })
    },
  },
}
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
    height: calc(100vh - 200px);
  }
  .userBgBox{
   padding-top: 25px;
}
  .userCollect{
    margin-top: 20px;
  }
  .userOwnList{
    margin-top: 10px;
  }

</style>