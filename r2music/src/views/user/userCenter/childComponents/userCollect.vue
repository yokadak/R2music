<template>
  <div class="userCollect">
     <div class="likedLabel">
       <span class="fa fa-heart likedIcon"></span>
       <span class="myLiked">我的喜欢</span>
     </div>

    <infoBox v-if="show"
    @click.native="toUserLiked(0)">
      <div slot="pic" class="liked">
        <img :src="likedSongs[0].image">
      </div>
      <div slot="charAbove" class="likedCharAbove"><span>歌曲</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{likedSongs.length}}首歌曲</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
    <infoBox v-if="show"
    @click.native="toUserLiked(1)">
      <div slot="pic" class="liked">
        <img :src="albumCollections[0].image">
      </div>
      <div slot="charAbove" class="likedCharAbove"><span>专辑</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{albumCollections.length}}张专辑</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
    <infoBox v-if="showPlayLists"
    @click.native="toUserLiked(2)">
      <div slot="pic" class="liked">
        <img :src="playListCollections[0].image">
      </div>
      <div slot="charAbove" class="likedCharAbove"><span>歌单</span></div>
      <div slot="charBelow" class="likedCharBelow"><span>{{playListCollections.length}}歌单</span></div>
      <div slot="rightIcon" class="likedRightIcon"><span class="fa fa-angle-right"></span></div>
    </infoBox>
  </div>
</template>

<script>
  import infoBox from 'components/content/base/infoBox'
  
export default {
  name:"userCollect",
  components:{
    infoBox
  },
  props:{
    likedSongs:Array,
    albumCollections:Array,
    playListCollections:Array,
  },
  data() {
    return {
      collections:[],
      show:false,
      showPlayLists:false,
    }
  },
  //获取到父组件传递的数据后再进行处理
  watch:{
    likedSongs(){
      this.show = true
    },
    playListCollections(){
      this.showPlayLists = true
      this.getAllCollections()
    }
  },
  methods: {
    getAllCollections(){
        let likedArray =[]
        for(let i = 0 ; i < 3 ; i++){
          likedArray.push({})
        }
        likedArray[0].category = '歌曲'
        likedArray[0].collection = this.likedSongs
        likedArray[1].category = '专辑'
        likedArray[1].collection = this.albumCollections
        likedArray[2].category = '歌单'
        likedArray[2].collection = this.playListCollections
        this.collections = likedArray
        console.log(this.collections)
    },
    toUserLiked(from){
      this.$router.push({name:'myCollections',params:{
        collections:this.collections,
        fromIndex:from
        }})
    },
  },
}
</script>

<style>
  .userCollect{
    width:81%;
    margin:auto;
  }
  .liked img{
    width:40px;
    border-radius:5px;
  }
  .likedCharAbove{
    font-size: 11px;
    color:var(--color-high-text);
    margin-top: 3px;
    font-weight: bold;
  }
  .likedCharBelow{
    font-size: 11px;
    margin-top: 6px;
  }
   .likedLabel{
    margin-top: 7px;
    margin-bottom: 10px;
  }
  .likedIcon{
    color:#DC5D5D;
  }
  .myLiked{
    margin-left: 5px;
    font-size: 14px;
  }

</style>