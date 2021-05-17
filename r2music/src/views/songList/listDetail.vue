<template>
<!-- 该组件显示的是歌曲列表 -->
  <div>
    <navTop class="listNav">
      <div slot="center" class="ellipsis"><span class="listName">{{title}}</span></div>
      <div slot="right"><span class="fa fa-ellipsis-h"></span></div>
    </navTop>
    <scroll class="wrapper">
      <div>
        <listInfo :playListDetail="playListDetail"></listInfo>
        <div class="listCount" v-if="count">{{count}} {{listItem}}</div>
        <songBox
        :songs="list"
        ></songBox>
      </div>
    </scroll>
  <miniPlayer></miniPlayer>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import listInfo from './listInfo'
  import songBox from 'components/content/base/songBox'
  import scroll from 'components/common/scroll/scroll'
  import miniPlayer from 'components/content/base/miniPlayer'
  //网络请求导入
  import {getPlayListDetail} from "network/songList"
  import {getAlbumDetail} from "network/songList"
  import {getPlayListData} from "common/js/handleApiData"
  import {getPlayListSongInfo} from "common/js/handleApiData/list.js"
  import {getWantedAlbumInfo} from "common/js/handleApiData"
 
export default {
  name:"listDetail",
  components:{
    navTop,
    listInfo,
    songBox,
    scroll,
    miniPlayer
  },
  data() {
    return {
      playListId:this.$route.params.playListId,//歌单Id
      albumId:this.$route.params.albumId,//专辑Id
      count:0,//列表项计数
      listItem:'首歌曲',//列表的内容是歌曲
      playListDetail:{},
      list:[],//歌曲列表，未登录只能获取20首
      listIds:[],//完整歌曲Id列表
      routeName:this.$route.name,
      title: '' ,
      myLikedSongs:this.$route.params.myLikedSongs,
    }
  },
  created() {
    this.$nextTick(()=>{
      this.judgeRoute()
    })
  },
  methods: {
    judgeRoute(){
      if(this.routeName === 'songList'){
        this._getplayListDetail(this.playListId)
      }
      if(this.routeName === 'albumDetail'){
        this._getAlbumDetail(this.albumId)
      }
      if(this.routeName === 'myLikedSongs'){
        this.list = this.myLikedSongs
        this.count = this.myLikedSongs.length
        this.title = '我喜欢'
      }
    },
    _getplayListDetail(id){
      getPlayListDetail(id).then((res) =>{
        this.playListDetail = getPlayListData(res.playlist)
        this.count = this.playListDetail.songsCount
        this.title = '歌单'
        let index = 0;
        this.list = res.playlist.tracks.map((item) =>{
          //通过res.privileges获取到权限信息
          item.privilege = res.privileges[index]
          index++
          return getPlayListSongInfo(item)
        })
        console.log(this.list)
  //TODO:未登录获取完整歌单、专辑信息
        this.listIds = res.playlist.trackIds.map((item)=>{
          return item.id
        })
        // console.log(this.listIds)
      })
    },
    _getAlbumDetail(id){
      getAlbumDetail(id).then((res) =>{
        const albumSongs = res.songs.map((item)=>{
          this.listIds.push(item.id)//未登录获取完整专辑歌曲列表
          return getPlayListSongInfo(item)
        })
        const album = getWantedAlbumInfo(res.album)
        this.playListDetail = album
        this.title = '专辑'
        this.list = albumSongs
        console.log(this.list)
        this.count = albumSongs.length  
      })
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
    margin-top: 15px;
  }
  .wrapper{
    overflow: hidden;
    height: calc(100vh - 115px);
  }
  /*TODO: 即使内容未溢出也可以滚动 */

  .charAbove{
    font-size: 11px;
    color:var(--color-high-text);
    margin-top: 3px;
  }
  .charBelow{
    font-size: 11px;
    margin-top: 6px;
  }



</style>