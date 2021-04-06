<template>
<div class="bgBox listBgBox">
  <div class="listInfoBox">
    <div class="listCover"><img src="~assets/img/cover/pf.jpg" alt=""></div>
    <info class="theListInfo">
      <div slot="infoAbove" class="listName">Pink Floyd歌单</div>
      <div slot="infoBetween" class="listCreator">
        <div class="listCreatorPic"><img src="~assets/img/cover/1.jpg" alt=""></div> 
        <span class="listCreatorName">r2music</span></div>
      <div slot="infoBelow"   class="listOperation">
        <span class="listHeart"><i class="fa fa-heart-o"></i></span>
        <span class="likedNum">280</span>
        <span class="listShare"><i class="fa fa-share-square-o"></i></span>
        <span class="fenxiang">分享</span>    
      </div>
    </info>
  </div>
</div>
</template>

<script>
  import info from 'components/content/base/info'
export default {
  name:"listInfo",
  components:{
    info,
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
  .listCover img,.listCreatorPic img{
    width: 100%;
    border-radius: 5px;
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
    margin-left: 5px;
    margin-top: 6px;
    font-size:16px;
  }
  .listOperation{
    margin-top: 22px;
  }
  .listHeart{
    font-size: 20px;
  }
  .likedNum,.fenxiang{
    margin-left: 4px;
  }
  .listShare{
    font-size: 20px;
    margin-left: 15px;
  }
</style>