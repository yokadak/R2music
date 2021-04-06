<template>
  <div class="infoBox">
    <div class="infoLeft"><slot name="pic"></slot></div>    
    <info class="infoCenter">
      <div slot="infoAbove"><div class="charAbove"><slot name="charAbove"></slot></div></div>
      <div slot="infoBetween"><div class="charBetween"><slot name="charBetween"></slot></div></div>
      <div slot="infoBelow"><div class="charBelow"><slot name="charBelow"></slot></div></div>
    </info>
    <div  class="infoRight"><slot name="rightIcon"></slot></div>
  </div>
</template>

<script>
  import info from './info'
export default {
  name:"infoBox",
  components:{
    info,
  }

}
</script>

<style scoped>
  .infoBox{
    display: flex;
    margin:auto;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 7px;
    align-items: center; 
  }
  .infoLeft{
    display: flex;
    justify-content: center;
    order:1;
  }
   .infoCenter{
    display: flex;
    flex:1;
    order:2;
    margin-left: 20px; 
    height: 100%;
  }
  .infoRight{
    display: flex;
    justify-content: center;
    order:3;
  }

</style>