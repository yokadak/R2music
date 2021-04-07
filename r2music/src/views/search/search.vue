<template>
  <div class="searchHot">
    <searchNav @onInputChange= "inputChange"></searchNav>
    <div class="searchEnterBox" v-if="keywords">
      <span class="searchEnterLabel">搜索&nbsp;&nbsp;</span>
      <span class="searchEnterLabel">{{keywords}}</span>
      <div class="resultSongBox">
        <div class="resultlistItem" v-for="(item,index) of searchSuggestion" :key="index" v-show="keywords">
          <span class="fa fa-search resultlistIcon"></span> 
          <span>{{item}}</span>
        </div>
      </div>
    </div>
    <div class="hotSearchBox" v-if="isShow">
      <span class="hotSearchLabel">热搜</span>
      <div class="hotSongBox">
        <div class="hotsongList">
          <div v-for="(item,index) in hotSearch" :key="item" class="hotlistItem">
            <span class="hotNum"> {{index + 1}}</span><span>{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import searchNav from './searchNav'
  //网络请求导入
  import {getHotSearch} from "network/search"
  import {getSearchSuggestion} from "network/search"

export default {
  name:"searchHot",
  components:{
    searchNav,
  },
  data() {
    return {
      hotSearch: [],
      searchSuggestion: [],
      keywords:''
    }
  },
  computed:{
    isShow:function(){
      return this.keywords === ''
    }
  },
  created() {
    //获取热搜列表
    this._getHotSearch()
  },
  methods: {
    getHotList(obj){
      return Object.values(obj).shift()
    },
    _getHotSearch(){
      getHotSearch().then(res =>{
        const hotList = res.result.hots.map((item) =>{
          return this.getHotList(item);
        });
        // console.log(hotList);
        this.hotSearch = hotList;
      })
    },
    getSuggestionList(obj){
      return Object.values(obj).shift()
    },
    _getSearchSuggestion(keywords,type){
      getSearchSuggestion(keywords,type).then(res =>{
        let suggestionList = res.result.allMatch.map((item) => {
          return this.getSuggestionList(item)
        })
        console.log(suggestionList);
        this.searchSuggestion = suggestionList;
      })
    },
    inputChange(keywords){
      console.log(keywords);
      this.keywords = keywords
       //获取搜索建议列表
      this._getSearchSuggestion(this.keywords,'mobile');
    }
  },
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
    width:90%;   
    margin: auto;
    display: grid;
    grid-template-columns:50% 50%;
    grid-template-rows: repeat(5,20%);
  }
  .hotlistItem{
    margin-top: 35px;
    margin-left: 15px;
  }
  .hotlistItem:nth-child(1) .hotNum,
  .hotlistItem:nth-child(2) .hotNum,
  .hotlistItem:nth-child(3) .hotNum{
    color: rgb(209, 22, 22);
  }
  .hotNum{
    margin-right: 8px;
    font-weight: bold;
  }
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
    margin-top: 30px;
  }
  .resultlistIcon{
    margin-right: 12px;
  }
</style>