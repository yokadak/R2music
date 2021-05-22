<!--
 * @Descripttion: 播放列表组件
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-19 14:08:07
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-22 18:11:56
-->
<template>
  <div>
    <div class="mask" @click="hidePlayList">
      <!-- TODO:mask的过渡应该用透明度-->
    </div>
    <div class="playList">
      <navTop>
        <div slot="left"><span class="fa fa-random"></span></div>
        <div slot="center" class="title">
          <span>随机播放</span>
          <span>（{{}}）首</span>
        </div>
        <div slot="right"><span></span></div>
      </navTop>
      <scroll class="playListScroll" ref="playListScroll">
        <ul class="list" v-if="playQueue">
          <li v-for="(item,index) of playQueue" 
            :key="index" class="song" 
            @click="playSong(item,index)"
            ref="song">
            <div class="songInfo" :class="{'active':item.id === playingSong.id}">
              {{item.name}} <div class="vipSong" v-if="item.vipSong">VIP</div>
              <span>- {{item.singer}}</span> 
            </div>
            <span class="fa fa-close"></span>
          </li>
        </ul>
      </scroll>
      <div class="close" @click="hidePlayList"><span>关闭</span></div>
    </div>
    <!-- <progressBar></progressBar> -->
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import progressBar from './progressBar'
  import songBox from 'components/content/base/songBox'
  import scroll from 'components/common/scroll/scroll.vue'

export default {
  name: "playList",
  components: {
    navTop,
    songBox,
    progressBar,
    scroll
  },
  computed:{
    playQueue(){
      return this.$store.state.playQueue
    },
    playingSong(){
       return this.$store.state.playingSong.song
    },
    playingSongIndex(){
       return this.$store.state.playingSong.index
    }
  },
  mounted() {
    this.$bus.$on("scrollToPlayingSong",this.scrollToPlayingSong)
  },
  methods: {
    scrollToPlayingSong(){
      const playingItem = this.$refs.song[this.playingSongIndex]
      const playListScroll = this.$refs.playListScroll
      playListScroll.scrollToElement(playingItem,0)
    },
    hidePlayList(){
      this.$emit("hidePlayList")
      this.scrollToPlayingSong()
    },
    playSong(item,index){
      if( item.id !== this.playingSong.id){
        this.$store.commit({type:"getPlayingSong",playingSong:item,index:index})
      }
    }
  }
}
</script>

<style  scoped>

  .mask{
    width:100%;
    height:150px;
    background-color: rgba(0,0,0,0.2);
  }
  .navTop{
    height: 55px;
    border-bottom: 1px solid var(--borderBottomColor);
  }
  .playList{
    height:calc(100vh - 150px);
    width:100%;
    background-color: var(--popUpBgColor);
    /* filter: blur(50px); */
    position:absolute;
    bottom: 0;
  }
  .title span{
    margin-left: 10px;
  }
  .playListScroll{
    height: calc(100vh - 270px);
    overflow: hidden;
  }
  .song{
    display:flex;
    width:90%;
    height: 45px;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--borderBottomColor);
  }
  .songInfo{
    width:100%;
    height: 100%;
    top: 0;
    bottom: 0;
    overflow: hidden;
    white-space: nowrap;
    color:var(--text-color);
    font-size: 13px;
    display: flex;
    align-items: center;
  }
  .vipSong{
    margin-right: -5px;
  }
  .active{
    color:var(--color-high-text);
    font-weight:bold;
  }
  .songInfo span{
    font-size: 12px;
    transform: scale(0.9);
  }
  .fa-close{
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
  .close{
    width: 100%;
    height: 55px;
    border-top: 1px solid var(--borderBottomColor);
    position:absolute;
    bottom: 0;
    line-height: 55px;
    font-size:18px;
    text-align: center;
  }
</style>

