<template>
<div class="operationBox">
  <div class="songNameBox">Behind The mask</div>
  <operations></operations>
  <div class="volumeBar">
    <div class="volume">音量调节占位</div>
    音量调节占位
  </div>
  <div class="cancelOp">取消</div>
</div>
</template>

<script>
  import operations from './operations'
export default {
  name:"operationBox",
  components:{
    operations
  }

}
</script>

<style scoped>
  .operationBox{
    background-color:var(--popUpBgColor);
    width: 100%;
    position: fixed;
    bottom: 0px;
    padding:10px;
    padding-top: 15px;
  }
  .songNameBox,.volumeBar{
    border-bottom: solid;
    border-color: var(--borderBottomColor);
  }
  .songNameBox{
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    color:var(--color-high-text);

  }
  .volumeBar{
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cancelOp{
    line-height: 60px;
    height: 60px;
    text-align: center;
    font-size: 18px;
  }

</style>