<template>
  <div id="userCenter"> 
    <navTop class="userNav">
       <div slot="left" class="userIcon"><span class="fa fa-chevron-left" @click="toHome"></span></div>
       <div slot="center"><span class="user" @click="toLogin">个人主页</span></div>
    </navTop>
    <div class="bgBox userBgBox">
      <scroll class="wrapper">
        <div class="content">
          <userInfo></userInfo>
          <userCollect class="userCollect"
          :likedSongs = 'likedSongs'
          :albumCollections = 'albumCollections'
          :playListCollections = 'playListCollections'
          ></userCollect>
          <userOwnList class="userOwnList"
          :ownPlayLists = 'ownPlayLists'
          ></userOwnList>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  //组件导入
  import navTop from 'components/common/navBar/navTop'
  import userInfo from './childComponents/userInfo'
  import userCollect from './childComponents/userCollect'
  import userOwnList from './childComponents/userOwnList'
  import scroll from 'components/common/scroll/scroll'
  //网络请求，数据处理
  import {getSongsDetail} from "network/songs"
  import {
    getLikedMusicIds,
    getLikedAlbums,
    getlikedPlayLists,
    getSubCount,
  } from "network/user"
  import {
    getPlayListInfo,
    getAlbumInfo,
    getPlayListSongInfo
  } from "common/js/handleApiData/list.js"

export default {
  name:"userCenter",
  components:{
    navTop,
    userInfo,
    userCollect,
    userOwnList,
    scroll,
  },
  computed:{
    userId(){
      return this.$store.state.user.account.id
    }
  },
  data() {
    return {
      ownPlayListCount:0,
      ownPlayLists:[],
      likedSongs:[],
      albumCollections:[],
      playListCollections:[],
    }
  },

  //TODO:前进刷新，后退不刷新
  beforeRouteEnter (to, from, next) {
    if(from.name === "myCollections"){
      to.meta.isBack = true;
    }
    next();
  },
  activated() {
    if(!this.$route.isBack ){
      //不是后退，需要获取数据
    }else{
      //重置isBack
      this.$route.isBack = false
    }
  },
  created() {
    this._getLikedMusicIds(this.userId)  //获取用户喜欢的音乐
    this._getLikedAlbums()  //获取用户喜欢的专辑列表
    this._getlikedPlayLists(this.userId) //获取用户喜欢的歌单列表
  },
  methods: {
    toLogin(){
      this.$router.push('/login');
    },
    toHome(){
      this.$router.push('/home');  
    },
    //因为不能直接获取到用户喜欢的音乐（获取到歌单也要用歌单id进行网络请求）
    //API只提供了获取喜欢音乐id的接口，所以要通过id获取歌曲详情
    _getLikedMusicIds(id){
      getLikedMusicIds(id).then((res) => {
        const likedSongsIds = res.ids.join()
        getSongsDetail(likedSongsIds).then((res)=>{
          let index = 0
          this.likedSongs = res.songs.map((item) =>{
            item.privilege = res.privileges[index]
            index++;
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
        this.albumCollections = res.data.map((item) =>{
          return getAlbumInfo(item)
        })
        // console.log(this.albumCollections)
      })
    },
    _getlikedPlayLists(id){
      //因为无法直接获取用户的自建歌单，所以只能这样获取
      getSubCount().then((res) => {
        const ownPlayListCount = res.createdPlaylistCount
        getlikedPlayLists(id).then((res)=>{
          this.ownPlayLists = res.playlist.slice(0,ownPlayListCount)
          .map((item)=>{
            return getPlayListInfo(item)
          })
          this.playListCollections = res.playlist.slice(ownPlayListCount)
          .map((item)=>{
            return getPlayListInfo(item)
          })
          // console.log(this.playListCollections)
        })
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