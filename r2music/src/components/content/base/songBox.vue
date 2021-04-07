<template>
<div class="songBoxWrapper">
  <div class="songBox" v-for="item of songs" :key="item.id">
      <div class="aSong">
        <info class="theSong">
          <div slot="infoAbove" class="theName ellipsis">{{item.name}}</div>
          <div slot="infoBelow" class="SingerAalbum ellipsis">{{item.singer}}&nbsp;·&nbsp;{{item.album}}</div>
        </info> 
        <div class="deletesong"><slot name="deletesong"></slot></div>
        <div class="songOperation"><span class="fa fa-ellipsis-h"></span></div>
      </div>   
  </div>
</div>
</template>

<script>
  import info from './info'
export default {
  name:"songBox",
  components:{
    info
  },
  props:{
    songs:{
        type:Array,
        default(){
          return[]
        }
      }
    },
  mounted() {
    console.log(this.songs)
  },

}
</script>

<style>
.songBoxWrapper{
  width: 100%;
}
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
    flex:1;
    height: 45px;
    width: 85%;
    overflow: hidden;
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
    width: 15px;
  }
  .songOperation{
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  .ellipsis{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>