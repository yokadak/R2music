<template>
  <div class="switchPageBlock">
    <div class="switchLeft"><slot name="switchLeft">歌曲</slot></div>
    <div class="switchCenter"><slot name="switchCenter">|</slot></div>
    <div class="switchRight"><slot name="switchRight">歌词</slot></div>
  </div>
</template>

<script>
export default {
  name:"switchPageBlock",
  components:{

  }

}
</script>

<style>
  .switchPageBlock{
    width: 85px;
    height: 20px;
    display: flex;
    font-size:16px;
  }
  .switchLeft.switchRight{
    width: 30px;
  }
   .switchCenter{
    flex:1;
    display: flex;
    justify-content:center;
    align-items: flex-start;
    font-size:14px;
    color:var(--color-high-text);
   }

</style>