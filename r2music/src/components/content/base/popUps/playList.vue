<template>
<div class="playListBox">
  <div class="playListTop">
    <span class="fa fa-random"></span> 
    <div class="randomPlay">随机播放（25首）</div>
  </div>
  <songBox><div slot="deletesong"><span class="fa fa-close"></span></div></songBox>  
  <div class="closeOp">关闭</div>
</div>
</template>

<script>
   import songBox from 'components/content/base/songBox'
export default {
  name:"playList",
  components:{
    songBox 
  }

}
</script>

<style scoped>
  .playListBox{
    background-color:var(--popUpBgColor);
    width: 100%;
    position: fixed;
    bottom: 0px;
    padding:10px;
    padding-top: 15px;
    height: 480px;
  }
  .playListTop{
    display: flex;
    height: 40px;
    font-size: 16px;
    width: 90%;
    margin: auto;
  }
  .randomPlay{
    margin-left: 10px;
  }
  .closeOp{
    line-height: 60px;
    height: 60px;
    text-align: center;
    font-size: 18px;
    position: fixed;
    bottom: 0;
    width: 90%;

  }

</style>