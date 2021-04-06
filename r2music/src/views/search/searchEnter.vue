<template>
  <div class="searchresult">
    <searchNav></searchNav>
    <div class="searchEnterBox">
      <span class="searchEnterLabel">搜索 哈哈歌</span>
      <div class="resultSongBox">
        <div class="resultlistItem"><span class="fa fa-search resultlistIcon"></span> <span>偏爱</span></div>
        <div class="resultlistItem"><span class="fa fa-search resultlistIcon"></span> <span>中国新歌唱</span></div> 
      </div>
    </div>
  </div>
</template>

<script>
  import searchNav from './searchNav'

export default {
  name:"searchresult",
  components:{
    searchNav,
  }
}
</script>

<style scoped>
  .searchEnterBox{
    width: 90%;
    margin:auto;
    margin-top:10px;
  }
  .searchEnterLabel{
    color:var(--color-high-text);
  }
  .resultSongBox{
    width:90%;
    margin:auto;
  }

  .resultlistItem{
    margin-top: 20px;
  }
  .resultlistIcon{
    margin-right: 8px;
  }
</style>