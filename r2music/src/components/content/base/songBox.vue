<template>
<div class="songBoxWrapper">
  <div class="songBox" v-for="(item,index) of songs" :key="item.id">
      <div class="aSong" @click="toPlayer(item,songs,index)">
        <div class="songIndex" v-if="isShowIndex"><slot name="songIndex">{{index + 1}}</slot></div>
        <info class="theSong">
          <div slot="infoAbove" class="theName ellipsis">{{item.name}}</div>
          <div slot="infoBelow" class="SingerAalbum ellipsis">
            <span @click.stop="toSingerPage(item.singerId)">{{item.singer}}&nbsp;&nbsp; </span>
            <span v-if="isShowAlbum">·&nbsp;&nbsp;{{item.album}}</span></div>
        </info> 
        <div class="deletesong"><slot name="deletesong"></slot></div>
        <div class="songOperation"><span class="fa fa-ellipsis-h"></span></div>
      </div>   
  </div>
</div>
</template>

<script>
  import info from './info'
  import {checkMusic} from "network/songs"

export default {
  name:"songBox",
  components:{
    info
  },
  props:{
    songs:{
        type:Array,
        default(){
          return[]
        }
      },
    },
    data() {
      return {
        isShowIndex: this.$route.name === 'songList' || 'albumDetail'? true : false,
        isShowAlbum: this.$route.name === 'albumDetail'? false : true,
        songsIds:[],
        songsQueue:[],//播放队列
      }
    },
    mounted() {
      this.getSongsIds()
      // this.getSongsQueue()
      // console.log(this.songs)
      // this._getSongUrl(this.song.id)
    },
    methods: {
      getSongsIds(){
        // console.log(this.songs)
        this.songsIds = this.songs.map((item)=>{
          return item.id
        })
      },
      getSongsQueue(songs){
         let playQueue = [];
         for(let item of songs){
          if(item.copyRight === false){
            //没有版权的歌曲
            console.log(item.name,"没版权")
            continue
          }else if(item.needToBuy === true && item.bought === false){
            //没有购买的歌曲
            console.log(item.name,"没购买")
            continue
          }else{
            //vip歌曲和普通歌曲加入播放队列
            playQueue.push(item)
          }
        }
        this.$store.commit({
          type:'getPlayQueue',
          playQueue:playQueue
        })
      },
      toPlayer(item,songs,index){
        //显示播放器之前先判断当前歌曲是否有版权
        if(item.copyRight === false){
          console.log("没有版权")
        }else if(item.needToBuy === true && item.bought === false){
          //TODO:需要付费的歌曲是否已购买（需要购买一张进行测试）
          console.log("还未购买该歌曲哦")
        }else{
          this.getSongsQueue(songs)
          this.$store.commit({type:"getPlayingSong",playingSong:item,index:index})
          this.$store.commit({type:"IsShowPlayer",show:true})
        }
      },
      toSingerPage(id){
        this.$router.push({name:'singerPage',params: {singerId:id}})
      }
    },
}
</script>

<style>
.songBoxWrapper{
  width: 100%;
  padding-bottom: 20px;
}
  .songBox{
    width: 90%;
    margin:auto;
    margin-top:20px;
  }
  .aSong{
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .songIndex{
    margin-right: 18px;
    font-size: 18px;
    color: var(--color-high-text)
  }
  .theSong{
    flex:1;
    height: 45px;
    width: 85%;
    overflow: hidden;
  }
  .theName{
    color:var(--color-high-text); 
  }
  .SingerAalbum{
   margin-top: 7px;
   font-size: 13px;
  }
  .deletesong{
    margin-right: 10px;
    width: 15px;
  }
  .songOperation{
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

</style>