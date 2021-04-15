<template>
  <div class="listDetail">
    <navTop class="listNav">
      <div slot="center" class="ellipsis"><span class="listName">{{title}}</span></div>
      <div slot="right"><span class="fa fa-ellipsis-h"></span></div>
    </navTop>
    <!-- <switchPageBlock v-if="!isSongList"></switchPageBlock> -->
    <scroll class="wrapper">
      <div class="content">
        <listInfo :playListDetail="playListDetail" v-if="isSongList || isAlbumDetail"></listInfo>
        <div class="listCount">{{count}} {{listItem}} 上面空白为搜索功能占位</div>
        <songBox :songs="list" v-if="isItemSongs"></songBox>
        <div class="LikedList" v-else>
          <infoBox v-for="item of list" :key="item.id" @click.native ="toDetail(item.id)">
            <div slot="pic" class="likedListPic"><img :src="item.image" alt=""></div>
            <div slot="charAbove" class="likedListCharAbove ellipsis"><span>{{item.name}}</span></div>
            <div slot="charBelow" class="likedListCharBelow ellipsis"><span>{{item.size || item.songsCount}}首 来自{{item.singer || item.creator}}</span></div>
            <div slot="rightIcon" class="ownListRightIcon ellipsis"><span class="fa fa-angle-right"></span></div>
          </infoBox>
        </div>
      </div>
    </scroll>
    <playControl class="listPlayControl"></playControl>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import switchPageBlock from 'components/content/base/switchPageBlock'
  import listInfo from './listInfo'
  import songBox from 'components/content/base/songBox'
  import infoBox from 'components/content/base/infoBox'
  import playControl from 'components/content/base/playControl'
  import scroll from 'components/common/scroll/scroll'

    //网络请求导入
  import {getPlayListDetail} from "network/songList"
  import {getAlbumDetail} from "network/songList"
  import {getPlayListData} from "common/js/handleApiData"
  import {getPlayListSongInfo} from "common/js/handleApiData"
  import {getWantedAlbumInfo} from "common/js/handleApiData"
 
export default {
  name:"listDetail",
  components:{
    navTop,
    switchPageBlock,
    listInfo,
    songBox,
    infoBox,
    playControl,
    scroll
  },
  data() {
    return {
      playListId:this.$route.params.playListId,
      albumId:this.$route.params.albumId,
      count:0,
      listItem:'',
      playListDetail:{},
      list:[],
      listIds:[],
      routeName:this.$route.name,
      isItemSongs:true,
      isSongList:this.$route.name === 'songList' ? true : false,
      isAlbumDetail:this.$route.name === 'albumDetail' ? true : false,
      title:this.$route.name === 'songList' ? "歌单" : "我喜欢",
      myLikedSongs:this.$route.params.myLikedSongs,
      myLikedAlbums:this.$route.params.myLikedAlbums,
      myLikedPlayLists:this.$route.params.myLikedPlayLists,
    }
  },

  created() {
    this.$nextTick(()=>{
      this.judgeRoute()
      console.log(this.routeName)
    })
  },
  methods: {
    judgeRoute(){
      if(this.routeName === 'songList'){
        this._getplayListDetail(this.playListId)
        this.listItem = '首歌曲'
      }
      if(this.routeName === 'albumDetail'){
        this._getAlbumDetail(this.albumId)
        this.listItem = '首歌曲'
      }
      if(this.routeName === 'myLikedSongs'){
        this.list = this.myLikedSongs
        this.count = this.myLikedSongs.length
        this.listItem = '首歌曲'
      }
      if(this.routeName === 'myLikedAlbums'){
        this.list = this.myLikedAlbums
        // console.log(this.list)
        this.count = this.myLikedAlbums.length
        this.isItemSongs = false
        this.listItem = '张专辑'
      }
      if(this.routeName === 'myLikedPlayLists'){
        this.list = this.myLikedPlayLists
        // console.log(this.list)
        this.isItemSongs = false
        this.listItem = '张歌单'
      }
    },
    _getplayListDetail(id){
      getPlayListDetail(id).then((res) =>{
        this.playListDetail = getPlayListData(res.playlist)
        console.log(this.playListDetail)
        this.count = this.playListDetail.songsCount
        this.list = res.playlist.tracks.map((item) =>{
          return getPlayListSongInfo(item)
        })
        //未登录获取完整歌单音乐
        this.listIds = res.playlist.trackIds.map((item)=>{
          return item.id
        })
      })
    },
    _getAlbumDetail(id){
      getAlbumDetail(id).then((res) =>{
        const albumSongs = res.songs.map((item)=>{
          return getPlayListSongInfo(item)
        })
        const album = getWantedAlbumInfo(res.album)
        this.playListDetail = album
        this.list = albumSongs 
        this.count = albumSongs.length  
      })
    },
    toDetail(id){
      if(this.$route.name === "myLikedAlbums"){
        this.$router.push({name:'albumDetail',params: {albumId:id}})
      }
      else{
        this.$router.push({name:'songList',params: {playListId:id}})
        console.log("songList")
      }
    },
  },
}
</script>

<style scoped>
  .listName{
    color:var(--color-high-text);
  }
  .listCount{
    font-size: 16px;
    width: 85%;
    margin:auto;
    margin-top: 65px;
  }
  .likedCount{
    font-size: 16px;
    width: 90%;
    margin-top: 65px;
  }
  .wrapper{
    overflow: hidden;
    height: calc(100vh - 115px);
  }
  .LikedList{
    width:90%;
    margin:auto;
  }
  .likedListPic img{
    width:40px;
    border-radius:5px;
  }
  .likedListCharAbove{
    font-size: 11px;
    color:var(--color-high-text);
    margin-top: 3px;
  }
  .likedListCharBelow{
    font-size: 11px;
    margin-top: 6px;
  }
  .listPlayControl{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
  }


</style>