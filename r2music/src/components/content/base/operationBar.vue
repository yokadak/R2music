<template>
  <div class="operationBar">
    <div class="op operation-1"><slot name="operation-1"><span class="fa fa-caret-square-o-left"></span></slot></div>
    <div class="op operation-2"><slot name="operation-2"><span class="fa fa-share-square-o"></span></slot></div>
    <div class="op operation-3"><slot name="operation-3"><span class="fa fa-heart-o"></span></slot></div>
    <div class="op operation-4"><slot name="operation-4"><span class="fa fa-plus-square-o"></span></slot></div>
    <div class="op operation-5"><slot name="operation-5"><span class="fa fa-caret-square-o-right"></span></slot></div>
  </div>
</template>

<script>
export default {
  name:"operationBar",
  components:{
    
  }

  

}
</script>

<style scoped>
   .operationBar{
    display:flex;
    color:var(--icon-color);
    width: 100%;
    display: flex;
    align-items: center;
  }
   .op{
    flex:1;
    display: flex;
    justify-content: center;
  }
</style>