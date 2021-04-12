<template>
  <div class="userOwnList">
     <div class="ownListLabel">
       <span class="fa fa-music ownListIcon"></span>
       <span class="myownList">我的歌单</span>
     </div>
     <div class="playListWrapper">
      <infoBox id="ownListSong" v-for="item of ownPlayList" :key="item.id">
        <div slot="pic" class="ownList"><img :src="item.image" alt=""></div>
        <div slot="charAbove" class="ownListCharAbove"><span>{{item.name}}</span></div>
        <div slot="charBelow" class="ownListCharBelow"><span>{{item.songsCount}}首歌曲</span></div>
        <div slot="rightIcon" class="ownListRightIcon"><span class="fa fa-angle-right"></span></div>
      </infoBox>
     </div>
  </div>
</template>

<script>
  import infoBox from 'components/content/base/infoBox'

export default {
  name:"userOwnList",
  components:{
    infoBox,
  },
  props:{
    ownPlayList:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style>
  .userOwnList{
     width:81%;
     margin:auto;
  }
  .ownList img{
    width:40px;
    border-radius:5px;
  }
  .ownListCharAbove{
    font-size: 11px;
    color:var(--color-high-text);
    margin-top: 3px;
    font-weight: bold;
  }
  .ownListCharBelow{
    font-size: 11px;
    margin-top: 6px;
  }
  .ownListLabel{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .ownListIcon{
    color:#FAE100;
  }
  .myownList{
    margin-left: 5px;
    font-size: 14px;
  }

</style>