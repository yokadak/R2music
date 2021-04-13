<template>
  <div class="listDetail">
    <navTop class="listNav">
      <div slot="center" class="ellipsis"><span class="listName">歌单</span></div>
      <div slot="right"><span class="fa fa-ellipsis-h"></span></div>
    </navTop>
    <scroll class="wrapper">
      <div class="content">
        <listInfo :playListDetail="playListDetail" v-if="isShowInfoBox"></listInfo>
        <div class="listLabel">{{playListDetail.songsCount}} 首歌曲 上面空白为搜索功能占位</div>
        <songBox :songs="playListSongs"></songBox>
      </div>
    </scroll>
    <playControl class="listPlayControl"></playControl>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import listInfo from './listInfo'
  import songBox from 'components/content/base/songBox'
  import playControl from 'components/content/base/playControl'
  import scroll from 'components/common/scroll/scroll'

    //网络请求导入
  import {getPlayListDetail} from "network/songList"
  import {getPlayListData} from "common/js/handleApiData"
  import {getPlayListSongInfo} from "common/js/handleApiData"


 
export default {
  name:"listDetail",
  components:{
    navTop,
    listInfo,
    songBox,
    playControl,
    scroll
  },
  data() {
    return {
      playListId:this.$route.query.playListId,
      playListDetail:{},
      playListSongs:[],
      playListSongsIds:[],
      likedAlbums:this.$route.params.likedAlbums,
      isShowInfoBox:this.$route.path === '/songList' ? true : false,
      path:this.$route.path,
    }
  },
  created() {
    // console.log
    this.chooseFunc()
  },
  methods: {
    chooseFunc(){
      if(this.path === '/songList'){
        this._getplayListDetail(this.playListId)
      }
      if(this.path === '/myLikedSongs'){
        this.playListSongs = this.$route.params.liked
      }
    },
    _getplayListDetail(id){
      getPlayListDetail(id).then((res) =>{
        this.playListDetail = getPlayListData(res.playlist)
        this.playListSongs = res.playlist.tracks.map((item) =>{
          return getPlayListSongInfo(item)
        })
        this.playListSongsIds = res.playlist.trackIds.map((item)=>{
          return item.id
        })
        console.log(this.playListSongs)
      })
    },
  },
}
</script>

<style scoped>
  .listName{
    color:var(--color-high-text);
  }
  .listLabel{
    /* color:var(--color-high-text); */
    font-size: 16px;
    width: 90%;
    margin:auto;
    margin-top: 65px;
  }
  .wrapper{
    overflow: hidden;
    height: calc(100vh - 115px);
  }
  .listPlayControl{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
  }


</style>