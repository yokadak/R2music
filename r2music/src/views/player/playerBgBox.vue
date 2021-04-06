<template>
   <div class="bgBox">
    <img src="~assets/img/cover/ymo.jpg" alt="">
    <div class="playerBoxCenter"><homeInfo></homeInfo></div>
    <operationBar class="playerOperationBar">
      <div slot="operation-1" class ="boxOp"><span class="fa fa-volume-down"></span></div>
      <div slot="operation-3" class="biggerIcon"> <span class="fa fa-heart-o"></span></div>
      <div slot="operation-5" class ="boxOp"><span class="fa fa-ellipsis-h"></span></div>
    </operationBar>
    <progressBar></progressBar>
    <playControl class="playerPlayControl"></playControl>   
</div> 
</template>

<script>
  import homeInfo from 'views/home/childComponents/homeInfo'
  import operationBar from 'components/content/base/operationBar'
  import playControl from 'components/content/base/playControl'
  import progressBar from './progressBar'
  
  export default {
    name:"playerBgBox",
    components:{
      homeInfo,
      operationBar,
      progressBar,
      playControl
  }

}
</script>

<style scoped>
  .bgBox img{
    width: 100%;
    border-radius: 5px;
  }
  .playerOperationBar{
    font-size: 20px;
    margin-top: 15px;
  }
  .biggerIcon{
    font-size: 25px;
    align-items: flex-start;
  }
  .playerBoxCenter{
    display: flex;
    height:95px;
    margin-top: 10px;
    /* background-color:blue; */
  }

</style>