<template>
  <div class="ASong">
    <info class="theSong">
      <div slot="infoAbove" class="theName">Time</div>
      <div slot="infoBelow" class="SingerAalbum">Pink Floyd · The Dark Side of...</div>
    </info> 
   </div>  
</template>

<script>
  import info from './info'
export default {
  name:"ASong",
  components:{
    info
  }

}
</script>

<style>

  .ASong{
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .theSong{
    height: 45px;
    width: 100%; 
    width: 85%;
  }
  .theName{
    color:var(--color-high-text); 
  }
  .SingerAalbum{
   margin-top: 7px;
   font-size: 13px;
  }

</style>