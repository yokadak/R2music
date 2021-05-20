<template>
<!-- 该组件显示的是歌单和专辑的歌曲列表 -->
  <div>
    <navTop class="listNav">
      <div slot="center" class="ellipsis"><span class="listName">{{title}}</span></div>
      <div slot="right"><span class="fa fa-ellipsis-h"></span></div>
    </navTop>
    <scroll class="wrapper">
      <div>
        <listInfo :detail="detail"></listInfo>
        <div class="listCount" v-if="list">{{list.length}} 首歌曲</div>
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
      id:this.$route.params.id,//专辑或歌单Id
      detail:{},//专辑或歌单的信息
      list:[],//歌曲列表，未登录只能获取20首
      listIds:[],//完整歌曲Id列表
      path:this.$route.path,
      title: '' ,
    }
  },
  created() {
      this.judgeRoute()
  },
  methods: {
    //判断显示专辑列表还是歌单列表
    judgeRoute(){
      if(this.path.includes("songList")){
        this._getplayListDetail(this.id)
      }else if(this.path.includes('album')){
        this._getAlbumDetail(this.id)
      }
    },
    //获取歌单歌曲及详情信息
    _getplayListDetail(id){
      getPlayListDetail(id).then((res) =>{
        this.detail = getPlayListData(res.playlist)
        this.count = this.detail.songsCount
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
    //获取专辑歌曲及详情信息
    _getAlbumDetail(id){
      getAlbumDetail(id).then((res) =>{
        const albumSongs = res.songs.map((item)=>{
          this.listIds.push(item.id)//未登录获取完整专辑歌曲列表
          return getPlayListSongInfo(item)
        })
        const album = getWantedAlbumInfo(res.album)
        this.detail = album
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