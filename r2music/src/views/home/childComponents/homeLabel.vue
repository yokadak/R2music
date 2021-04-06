<template>
  <div class="homeLabel">
    <div class="homeLabel-1">今日推荐</div>
    <switchPageBlock class="homeLabel-2"><div slot="switchRight">歌单</div></switchPageBlock>
  </div>
</template>

<script>
 import switchPageBlock from 'components/content/base/switchPageBlock'
export default {
  name:"homeLabel",
  components:{
    switchPageBlock

  }

}
</script>

<style>
  .homeLabel{
    display:flex;
    align-items: center;
  }
  .homeLabel-1{
    color:white;
    font-size:16px;
    font-weight: bold;
    line-height: 30px;
    text-align:center;
    margin-left: 18px;
  }
  .homeLabel-2{
    margin-left: 63px;
  }

</style>