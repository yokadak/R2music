<template>
  <div class="singerPage">
     <navTop class="singerNav">
       <div slot="center"><span class="nameOfSinger">{{singerInfo.name}}</span></div>
    </navTop>

    <div class="singerBox">
      <div class="coverSingerPic"></div>
      <div class="singerPic"><img :src="singerInfo.image" alt=""></div>
      <div class="singerInfo">
        <info>
          <div slot="infoAbove" class="nameOfSinger">{{singerInfo.name}}</div>
          <div slot="infoBelow">300.07万粉丝</div>
        </info>
        <div class="followButton"><i class="fa fa-plus"></i><button>关注</button></div>
      </div>
    </div>

    <div class="worksSwitch"><switchPageBlock><div slot="switchRight">专辑</div></switchPageBlock></div>
    <scroll class="singerSongs">
      <div>
        <songBox class="singerSongBox" :songs= "singerSongs"></songBox>  
      </div>
    </scroll>
    <playControl class="singerPagePlayControl"></playControl>
  </div>
  
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import info from 'components/content/base/info'
  import switchPageBlock from 'components/content/base/switchPageBlock'
  import scroll from 'components/common/scroll/scroll'
  import songBox from 'components/content/base/songBox'
  import playControl from 'components/content/base/playControl'
  //网络请求
  import {getSingerInfo} from "network/singer"
  import {getSingerAlbums} from "network/singer"
  //处理数据的js导入（抽取歌曲有用信息)
  import {getWantedSingerSongs} from "common/js/handleApiData"
  import {getWantedSingerInfo} from "common/js/handleApiData"
  import {getWantedAlbumInfo} from "common/js/handleApiData"


export default {
  name:"singerPage",
  components:{
    navTop,
    playControl,
    switchPageBlock,
    songBox,
    info,
    scroll,
  },
  data() {
    return {
      singerInfo: [],
      singerSongs: []
    }
  },
  created() {
    this._getSingerInfo(6452)
    this._getSingerSongs(6452)
    this._getSingerAlbums(6452)
  },
  methods: {
    _getSingerInfo(id){
      getSingerInfo(id).then(res =>{
        let info = getWantedSingerInfo(res.artist)
        console.log(info)
        this.singerInfo = info
      })
    },
    _getSingerSongs(id){
      getSingerInfo(id).then(res =>{
        let songs = res.hotSongs.map((item) =>{
          return getWantedSingerSongs(item)
        });
        this.singerSongs = songs
        console.log(this.singerSongs)
      })
    },
    _getSingerAlbums(id){
      getSingerAlbums(id).then(res =>{
        let albums = res.hotAlbums.map((item) =>{
          return getWantedAlbumInfo(item)
        })
        console.log(albums)
      })
    },
  },

}
</script>

<style>
  .singerPagePlayControl{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
  }
  .nameOfSinger{
    color: var(--color-high-text);
    font-weight: bold;
  }
  .coverSingerPic{
    width:100%;
    height: 300px;
    position: fixed;
    z-index: 1;
    background-color:rgba(29,23,23,0.10);
  }
  .singerSongs{
    overflow: hidden;
    height: calc(100vh - 415px);
  }
  .singerBox{
    width:100%;
    height: 300px;
    overflow: hidden;
    margin-top:-60px;
    position: relative;
    z-index:-999;
    border-bottom-left-radius:20px ;
    border-bottom-right-radius:20px ;
  }
  .singerPic img{
    width: 100%;
  }
  .singerInfo{
    position: absolute;
    bottom: 20px;
    color:var(--color-high-text);
    z-index: 2;
    width: 90%;
    height: 50px;
    margin-left: 20px;
    display: flex;
    align-items: center;
  }
  .followButton{
    background-color:var(--icon-color);
    color:rgb(115, 115, 115);
    width: 140px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .followButton button{
    background: none;
    border: none;
    outline: none;
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    color:rgb(115, 115, 115);
  }
  .worksSwitch{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
  }
  .singerSongBox{
    margin-top: -15px;
  }



</style>