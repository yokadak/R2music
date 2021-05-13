<template>
  <div class="searchNav">
    <div class="searchNavTop">
      <div class="searchBox">
        <input type="text" name="search" autocomplete="off" autofocus="autofocus"
        :placeholder="placeholder" v-model="keywords" 
        @input="inputChange" 
        @focus="inputFocus">
        <button class="searchConfirm" @click="getSongsResult"><i class="fa fa-search"></i></button>
        <button class="searchClean" @click="clear"><i class="fa fa-close" v-show="keywords"></i></button>
      </div>
      <div class="cancelButton"><span @click="cancelSearch">取消</span></div>
    </div>
    
    <div class="searchLabel" v-if="isShowRes">
      <div class="searchLabel-1"><slot name = "searchLabel-1">歌曲</slot></div>
      <div class="searchLabel-2" @click="getAlbumsResult"><slot name = "searchLabel-2">专辑</slot></div>
      <div class="searchLabel-3"><slot name = "searchLabel-3">歌手</slot></div>
      <div class="searchLabel-4"><slot name = "searchLabel-4">歌单</slot></div>
    </div>
    <scroll class="resultWrapper"  v-if="isShowRes">
      <div class="result">
        //TODO:修改songs
        <songBox :songs = "songsResult"></songBox> 
      </div>
    </scroll>
    <playControl class="searchPlayControl"></playControl>

  </div>

</template>
  TODO:是否将处理搜索数据的函数提取出来
  TODO:根据专辑id获取歌曲封面

<script>
  import songBox from 'components/content/base/songBox'
  import playControl from 'components/content/base/playControl'
  import scroll from 'components/common/scroll/scroll'
  import {debounce} from 'common/js/utils.js'
  //网络请求，搜索结果
  import {getSearchResult} from "network/search"
  //检查歌曲是否可用
  //抽取歌曲信息
  import {getSearchInfo} from "common/js/handleApiData" 
  import {getWantedSongInfo} from "network/songs"



export default {
  name:"searchNav",
  components:{
    songBox,
    playControl,
    scroll,
  },
  props: {
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手、专辑'
    },
    path:String,
    // songsResult:[],
  },
  data() {
    return {
      keywords:'',
      songsResult:[],
      isShowRes:false,
      isShowSuggestionList:false,
    }
  },
  mounted() {
    // console.log(this.isShowRes)
  },
  computed:{
  },
  watch:{
    keywords(val,oldval){
      if(!val){
        this.isShowRes = false
        // console.log("nav")
      }
    }
  },
  methods: {
    clear () {
      this.keywords = ''
      this.isShowRes = false
      this.$emit('onInputChange',this.keywords);
      // console.log(this.isShowRes)
    },
    cancelSearch(){
      this.clear();
      this.$router.push('/home');
    },
    inputChange:
      debounce(function(){
      this.$emit('onInputChange',this.keywords);
    },300)
    ,
    inputFocus(){
      this.isShowSuggestionList = true
      // console.log(this.isShowSuggestionList)
    },
    _getSearchResult(keywords,type){
     getSearchResult(keywords,type).then(res =>{
       console.log(res.result.songs)
       const songsList = res.result.songs.map((item) =>{
         return getWantedSongInfo(item)
       })
       this.songsResult = songsList
      //  console.log(this.songsResult)
     })
    },
    getSongsResult(){
      this.isShowRes = true
      this._getSearchResult(this.keywords,1);
      console.log(this.isShowRes)

    },
    getAlbumsResult(){
      this.isShowRes = true
      getSearchResult(this.keywords,10).then(res =>{
       const albumsList = res.result.albums.map((item) =>{
         return getSearchInfo(item)
       })
      // const albumsList = res.result.albums
       console.log(albumsList)
     })
    },
    getSingersResult(){
      this.isShowRes = true
      this._getSearchResult(this.keywords,100);
    },
    getSongListResult(){
      this.isShowRes = true
      this._getSearchResult(this.keywords,1000);
    },
    // isResShow(){
    //   if(this.keywords === ''){
    //     this.isShowRes = false
    //   }
    // }
  }
}
</script>

<style>
  .searchNav{
    display: flex;
    border:none;
    width:100%;
    flex-wrap: wrap;
    /* overflow-x: hidden; */
  }
  .searchNavTop{
    display: flex;
    border:none;
    height: 60px;
    width:100%;
  }
  .searchBox{
    width: 80%;
    position:relative;
	  margin:0 auto;
  }
  .searchBox input{
    width:95%;
	  border-radius:10px;
	  background:white;
    color: var(--popUpBgColor);
    font-size: 14px;
	  height:30px;
	  padding-left:30px;
    border:none;
    outline:none;
    margin-top: 15px;
    margin-left:15px;
  }
  .searchBox button{
    position:absolute;
    height:30px;
	  width:30px;
	  cursor:pointer;
    border:none;
	  outline:none;
  }
  .searchConfirm,.searchClean{
    top:15px;
    font-size: 16px;
    border-radius:10px;
    background: none;
    color:rgb(115, 115, 115);
  }
  .searchConfirm{
    left:15px;
  }
  .searchClean{
    right:2px;
  }
  .cancelButton{
    color:var();
    flex:1;
    text-align: center;
    line-height: 60px;
  }
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
  .resultWrapper{
    overflow: hidden;
    height: calc(100vh - 145px);
    margin-top: 15px;
  }
  .searchPlayControl{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
  }

</style>