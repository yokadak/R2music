<template>
   <div>
    <img :src="song.image" alt="">
    <div class="playerBoxCenter">
      <div class="playerInfo">
        <info>
          <div slot="infoAbove" class="ellipsis">
          <span class="songName">{{song.name}}</span></div>
          <div slot="infoBetween" class="ellipsis">
          <span class="singerName">{{song.singer}}</span></div>
        </info>
      </div>
    </div> 
</div> 
</template>

<script>
  import info from 'components/content/base/info'
  import operationBar from 'components/content/base/operationBar'
  import playControl from 'components/content/base/playControl'
  import progressBar from './progressBar'
  
  export default {
    name:"playerBgBox",
    components:{
      operationBar,
      progressBar,
      playControl,
      info
  },
    props:{
      song:{
        type:Object,
        default:{}
      }
    }

}
</script>

<style scoped>
  .bgBox img{
    width: 100%;
    border-radius: 5px;
  }
  .playerOperationBar{
    font-size: 20px;
    margin-top: 15px;
  }
  .biggerIcon{
    font-size: 25px;
    align-items: flex-start;
  }
  .playerBoxCenter{
    display: flex;
    height:75px;
    margin-top: 10px;
    /* background-color:blue; */
  }
  .playerInfo{
    width: 70%;
    height:100%;
    margin-left: 7px;
  }
  .fa-music,.fa-user,.fa-dot-circle-o{
    font-size: 20px;
    color:var(--icon-color);
    margin-right: 10px;
    margin-left: 5px;
  }
  .songName{
  font-weight:bold;
  color:var(--color-high-text);
  }
  .singerName,.albumName{
    font-size: 14px;
    color:var(--color-high-text);
  }

</style>