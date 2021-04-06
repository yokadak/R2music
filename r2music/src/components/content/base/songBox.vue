<template>
  <div class="songBox">
      <div class="aSong">
        <info class="theSong">
          <div slot="infoAbove" class="theName">Time</div>
          <div slot="infoBelow" class="SingerAalbum">Pink Floyd · The Dark Side of...</div>
        </info> 
        <div class="deletesong"><slot name="deletesong"></slot></div>
        <div class="songOperation"><span class="fa fa-ellipsis-h"></span></div>
      </div>  

      <div class="aSong">
        <info class="theSong">
          <div slot="infoAbove" class="theName">Fat Old Sun</div>
          <div slot="infoBelow" class="SingerAalbum">Pink Floyd · Atom Heart Mother</div>
        </info> 
         <div class="deletesong"><slot name="deletesong"></slot></div>
        <div class="songOperation"><span class="fa fa-ellipsis-h"></span></div>
      </div>  

        <div class="aSong">
        <info class="theSong">
          <div slot="infoAbove" class="theName">Comfortably Numb</div>
          <div slot="infoBelow" class="SingerAalbum">Pink Floyd · The Wall</div>
        </info>
         <div class="deletesong"><slot name="deletesong"></slot></div> 
        <div class="songOperation"><span class="fa fa-ellipsis-h"></span></div>
      </div>    
  </div>
</template>

<script>
  import info from './info'
export default {
  name:"songBox",
  components:{
    info
  }

}
</script>

<style>
  .songBox{
    width: 90%;
    margin:auto;
    margin-top:20px;
  }
  .aSong{
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
  .deletesong{
    margin-right: 10px;
  }
  .songOperation{
    flex:1;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

</style>