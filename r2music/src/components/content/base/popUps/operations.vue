<template>
   <div class="operations">
    <operationBar>
    <div slot="operation-1" class="popUpIconBox"><span class="fa fa-user"></span></div>
    <div slot="operation-2" class="popUpIconBox"><span class="fa fa-dot-circle-o"></span></div>
    <div slot="operation-3" class="popUpIconBox"><span class="fa fa-plus-square-o"></span></div>
    <div slot="operation-4" class="popUpIconBox"><span class="fa fa-step-forward"></span></div>
    <div slot="operation-5" class="popUpIconBox"><span class="fa fa-share-square-o"></span></div>
   </operationBar>
   <div class="opTextBox">
    <div class="operationText opText1">查看歌手</div>
    <div class="operationText opText2">查看专辑</div>
    <div class="operationText opText3">加到歌单</div>
    <div class="operationText opText4">下一首播放</div>
    <div class="operationText opText5">分享</div>
  </div>
  </div>

</template>

<script>
  import operationBar from 'components/content/base/operationBar'
export default {
  name:"operations",
  components:{
    operationBar
  }
}
</script>

<style>
 .operations{
    line-height: 100px;
    height: 100px;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 15px;
    border-bottom: solid;
    border-color: var(--borderBottomColor);
  }
  .popUpIconBox{
    font-size: 28px;
    height: 40px;
    width: 40px;
    background-color:rgba(196,192,192,0.62);
    border-radius: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    
  }
  .opTextBox{
    width: 100%;
    display: flex;
    /* justify-content:space-around; */
    align-items: center;
    height: 30px;
    line-height: 30px;
    font-size: 12px;

  }
  .opText1{
    margin-left:11px;
  }
  .opText2{
    margin-left:24px;
  }
  .opText3{
    margin-left:22px;
  }
  .opText4{
    margin-left:18px;
  }
  .opText5{
    margin-left:28px;
  }

</style>