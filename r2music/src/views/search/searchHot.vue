<template>
  <div class="searchHot">
    <searchNav></searchNav>
    <div class="hotSearchBox">
      <span class="hotSearchLabel">热搜</span>
      <div class="hotSongBox">
        <div class="hotsongList hotlist1">
          <div class="hotlistItem"><span class="hotNum">1</span> <span>偏爱</span></div>
          <div class="hotlistItem"><span class="hotNum">3</span> <span>中国新歌唱</span></div> 
        </div>
        <div class="hotsongList hotlist2">
          <div class="hotlistItem"><span class="hotNum">1</span> <span>偏爱</span></div>
          <div class="hotlistItem"><span class="hotNum">3</span> <span>中国新歌唱</span></div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import searchNav from './searchNav'

export default {
  name:"searchHot",
  components:{
    searchNav,
  }
}
</script>

<style scoped>
  .hotSearchBox{
    width: 90%;
    margin:auto;
    margin-top:10px;
  }
  .hotSearchLabel{
    color:var(--color-high-text);
    font-weight: bold;
  }
  .hotSongBox{
    width:90%;
    margin:auto;
    display: flex;
  }
  .hotsongList{
    width:45%;   
    height: 300px;
    margin: auto;
  }
  .hotlistItem{
    margin-top: 15px;
  }
  .hotNum{
    margin-right: 8px;
  }
</style>