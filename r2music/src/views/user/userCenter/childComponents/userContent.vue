<template>
    <div class="bgBox userBgBox">
      <scroll  class="wrapper">
        <div class="content">
          <userInfo class="userInfo"></userInfo>
          <userCollect class="userCollect"
          :likedAlbums = 'likedAlbums'
          :likedSongs = 'likedSongs'
          :likedPlayLists = 'likedPlayLists'
          :likedAlbumsCover = 'likedAlbumsCover'
          :likedSongsCover = 'likedSongsCover'
          :likedPlayListsCover = 'likedPlayListsCover'
          ></userCollect>
          <userOwnList class="userOwnList"
          :ownPlayList = 'ownPlayList'
          ></userOwnList>
        </div>
      </scroll>
    </div>
</template>

<script>
    import userInfo from './userInfo'
    import userCollect from './userCollect'
    import userOwnList from './userOwnList'
    import scroll from 'components/common/scroll/scroll'
    //网络请求，数据处理
    //获取用户的所有歌单（包括自建歌单和收藏歌单）
    import {getUserInfo} from "network/user"
    import {getLikedMusicIds} from "network/user"
    import {getLikedAlbums} from "network/user"
    import {getlikedPlayLists} from "network/user"
    import {getPlayListData} from "common/js/handleApiData"
    import {getPlayListSongInfo} from "common/js/handleApiData"
    import {getWantedAlbumInfo} from "common/js/handleApiData"
    import {getSubCount} from "network/user"
    import {getSongsDetail} from "network/songs"

export default {
  name:"userBox",
  components:{
     userInfo,
     userCollect,
     userOwnList,
     scroll,
  },
  data() {
    return {
      uid:this.$store.state.user.id,
      ownPlayListCount:0,
      ownPlayList:[],
      likedSongs:[],
      likedSongsCover:'',
      likedAlbums:[],
      likedAlbumsCover:'',
      likedPlayLists:[],
      likedPlayListsCover:'',
    }
  },
  created() {
    this._getSubCount()
    this._getlikedPlayLists(this.uid)
    this._getUserInfo(this.uid)
    this._getLikedMusicIds(this.uid)
    this._getLikedAlbums()
  },
  methods: {
    _getSubCount(){
      getSubCount().then((res) => {
        this.ownPlayListCount = res.createdPlaylistCount
      })
    },
    _getUserInfo(uid){
      getUserInfo(uid).then((res) => {
        // console.log(res)
        // console.log(this.$store.state)
      })
    },
    _getLikedMusicIds(uid){
      getLikedMusicIds(uid).then((res) => {
        const likedSongsIds = res.ids.join()
        getSongsDetail(likedSongsIds).then((res)=>{
          this.likedSongs = res.songs.map((item) =>{
            return getPlayListSongInfo(item)
          })
          this.likedSongsCover = this.likedSongs[0].image
          // console.log (this.likedSongs)
        })
        // console.log(...res.ids)
        // this.likedSongs = 
        // res.ids.map((item)=>{
        //   getSongsDetail(item).then((res) =>{
        //     let song = getPlayListSongInfo(res.songs[0])
        //     this.likedSongs.push(song)
        //     console.log(this.likedSongs)
        //   })
        // })
      })
    },
    _getLikedAlbums(){
      getLikedAlbums().then((res) => {
        this.likedAlbums = res.data.map((item) =>{
          return getWantedAlbumInfo(item)
        })
        this.likedAlbumsCover = res.data[0].picUrl
        // console.log(this.likedAlbums)
      })
    },
    _getlikedPlayLists(uid){
      getlikedPlayLists(uid).then((res) => {
        const cutNum = this.ownPlayListCount 
        this.ownPlayList = res.playlist.slice(0,cutNum)
        .map((item)=>{
          return getPlayListData(item)
        })
        this.likedPlayLists = res.playlist.slice(cutNum)
        .map((item)=>{
          return getPlayListData(item)
        })
        this.likedPlayListsCover = this.likedPlayLists[0].image
        // console.log(this.likedPlayLists)
      })
    },
  },
}
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
    height: calc(100vh - 180px);
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