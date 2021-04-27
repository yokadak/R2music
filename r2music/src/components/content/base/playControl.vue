<template>
  <div class="playControl">
   <operationBar class="playOperation">
     <div slot="operation-1" class="playOp"><span class="fa fa-random"></span></div>
     <div slot="operation-2" class="playOp playOp2"><span class="fa fa-step-backward"></span></div>
     <div slot="operation-3" class="playOp playOp3"><span class="fa fa-play-circle"></span></div>
     <div slot="operation-4" class="playOp playOp4"><span class="fa fa-step-forward"></span></div>
     <div slot="operation-5" class="playOp"><span class="fa fa-bars"></span></div>
   </operationBar>
  </div>
</template>

<script>
  import operationBar from './operationBar'
  export default {
    name:'playControl',
    components:{
      operationBar  
    }

}
</script>

<style>
  .playControl{
    width: 100%;
    display: flex;
    align-items: center;
    background-color:var(--color-tint);
  }
   .playOp{
    flex:1;
    display: flex;
    font-size: 24px;
    justify-content: center;
    align-items: center;
  }
   .playOp3{
    font-size: 50px;
  }
    .playOp2,.playOp4{
    font-size: 28px;
  }
  .playOperation{
    height: 100%;
    background-color:var(--color-tint);
  }

</style>