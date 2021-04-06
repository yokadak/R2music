<template>
<div id="player">
   <navTop>
       <div slot="left"><span class="fa fa-angle-left"></span></div>
       <div slot="center"> <switchPageBlock></switchPageBlock></div>
  </navTop>
  <playerBgBox></playerBgBox>
</div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import switchPageBlock from 'components/content/base/switchPageBlock'
  import playerBgBox from './playerBgBox'
  export default {
   name:"player",
   components:{
     navTop,
     switchPageBlock,
     playerBgBox,
     
   }

}
</script>

<style scoped>
  .fa-angle-down{
    font-size: 25px;
  }
 
</style>