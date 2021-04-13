<template>
<div class="bgBox listBgBox">
  <div class="listInfoBox">
    <div class="listCover">
      <img :src="playListDetail.image" alt="">
    </div>
    <info class="theListInfo">
      <div slot="infoAbove" class="listName ellipsis">{{playListDetail.name}}</div>
      <div slot="infoBetween" class="listCreator">
        <div class="listCreatorPic"><img :src="userInfo.avatarUrl" alt=""></div> 
        <div class="listCreatorName ellipsis">{{playListDetail.creator}}</div>
      </div>
      <div slot="infoBelow" class="listDescription ellipsis">
        <span>{{playListDetail.description || "暂无简介"}}</span>
        <span class="chevron-right"><i class="fa fa-chevron-right"></i></span>
      </div>
    </info>
  </div>
  <div class="opration">
    <div>
      <span class="listHeart"><i class="fa fa-heart-o"></i></span>
      <span class="likedNum">{{playListDetail.subscribedCount}}</span>
    </div>
    <div>
      <span class="shareButton"><i class="fa fa-share-square-o"></i></span>
      <span class="shareButton">分享</span>   
    </div>
  </div>
</div>
</template>

<script>
  import info from 'components/content/base/info'
export default {
  name:"listInfo",
  components:{
    info,
  },
  props:{
    playListDetail:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data() {
    return {
      userInfo:this.$store.state.profile
    }
  }
}
</script> 

<style>
  .listBgBox{
   padding-top: 20px;
}
  .listInfoBox{
    display: flex;
    margin-bottom: 10px;
  }
   .listCover{
    width:120px;
    border-radius: 10px;
    margin-left: 20px;
  }
  .listCover img{
    width: 100%;
    border-radius: 5px;
  }
  .listCreatorPic img{
    width: 100%;
    border-radius: 50%;
  }
  .theListInfo{
    width: 150px;
    margin-left: 20px;
    padding-top: 5px;
  }
  .listCreator{
    display: flex;  
    margin-top: 22px;
  }
  .listCreatorPic{
    width: 30px;
  }
  .listCreatorName{
    margin-left: 8px;
    font-size:11px;
    display: flex;
    align-items: center;
  }
  .listHeart{
    font-size: 20px;
    color: var(--icon-color);
  }
  .likedNum,.shareButton{
    margin-left: 7px;
    color: var(--icon-color);

  }
  .listDescription{
    font-size: 10px;
    margin-top: 28px;
  }
  .chevron-right{
    margin-left: 5px;
  }
  .opration{
    width: 80%;
    display: flex;
    margin-left: 20px;
    margin-top: 15px;
    justify-content: space-between;
  }
</style>