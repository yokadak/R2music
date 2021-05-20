<!--
 * @Descripttion: 用户中心下半部分 “我的歌单”
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-14 16:16:46
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-20 15:54:48
-->
<template>
  <div class="userOwnList">
     <div class="ownListLabel">
       <span class="fa fa-music ownListIcon"></span>
       <span class="myownList">我的歌单</span>
     </div>
     <div class="playListWrapper" v-if="ownPlayLists">
      <infoBox v-for="item of ownPlayLists" :key="item.id" @click.native="toListDetail(item.id)">
        <div slot="pic" class="ownList"><img :src="item.image" alt=""></div>
        <div slot="charAbove" class="ownListCharAbove ellipsis"><span>{{item.name}}</span></div>
        <div slot="charBelow" class="ownListCharBelow ellipsis"><span>{{item.songsCount}}首歌曲</span></div>
        <div slot="rightIcon" class="ownListRightIcon ellipsis"><span class="fa fa-angle-right"></span></div>
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
    ownPlayLists:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods: {
    toListDetail(id){
      this.$router.push(`/songList/${id}`)
    }
  },
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