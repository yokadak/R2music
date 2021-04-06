<template>
  <div class="listDetail">
    <navTop class="listNav">
      <div slot="center"><span class="listName">Pink Floyd歌单</span></div>
      <div slot="right"><span class="fa fa-share-square-o"></span></div>
    </navTop>
    <listInfo></listInfo>
    <div class="listLabel">歌曲</div>
    <songBox></songBox>
    <playControl class="listPlayControl"></playControl>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import listInfo from './listInfo'
  import songBox from 'components/content/base/songBox'
  import playControl from 'components/content/base/playControl'

 
export default {
  name:"listDetail",
  components:{
    navTop,
    listInfo,
    songBox,
    playControl
   
  }

}
</script>

<style>
  .listName{
    color:var(--color-high-text);
  }
  .listLabel{
    color:var(--color-high-text);
    font-size: 16px;
    width: 90%;
    margin:auto;
    margin-top: 20px;
  
  }
  .listPlayControl{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
  }


</style>