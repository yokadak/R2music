<template>
  <div id="userCenter"> 
    <navTop class="userNav">
       <div slot="center"><span class="user">R2music</span></div>
    </navTop>
    <userBox></userBox>
     <playControl class="userCenterPlayControl"></playControl>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import userBox from './childComponents/userBox'
  import playControl from 'components/content/base/playControl'

export default {
  name:"userCenter",
  components:{
    navTop,
    userBox,
    playControl

  }

}
</script>

<style>
  .userCenterPlayControl{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
  }

</style>