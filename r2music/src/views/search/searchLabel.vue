<template>
  <div class="searchLabel">
    <div class="searchLabel-1"><slot name = "searchLabel-1">歌曲</slot></div>
    <div class="searchLabel-2"><slot name = "searchLabel-2">专辑</slot></div>
    <div class="searchLabel-3"><slot name = "searchLabel-3">歌手</slot></div>
    <div class="searchLabel-4"><slot name = "searchLabel-4">歌单</slot></div>
  </div>
</template>

<script>
export default {
  name:"searchLabel"

}
</script>

<style>
  .searchLabel{
    height: 30px;
    display:flex;
    width: 90%;
    margin-top: 20px;
    margin:auto;
  }
  .searchLabel-1, .searchLabel-2,.searchLabel-3,.searchLabel-4{
    flex:1;
    line-height: 30px;  
  }

</style>