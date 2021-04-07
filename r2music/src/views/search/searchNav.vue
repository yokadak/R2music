<template>
  <div class="searchNav">
    <div class="searchBox">
      <input type="text" name="search" autocomplete="off"
      :placeholder="placeholder" v-model="keywords" @input="inputChange()">
      <button class="searchConfirm"><i class="fa fa-search"></i></button>
      <button class="searchClean" @click="clear"><i class="fa fa-close" v-show="keywords"></i></button>
    </div>
    <div class="cancelButton">取消</div>
  </div>
</template>

<script>
  import {debounce} from 'common/js/utils.js'

export default {
  name:"searchNav",
  props: {
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手、专辑'
    }
  },
  data() {
    return {
      keywords:''
    }
  },
  // created () {
  //   this.$watch('keywords', debounce((newQuery) => {
  //     this.$emit('keywords', newQuery)
  //   }, 300))
  // },
  methods: {
    clear () {
      this.keywords = ''
      this.$emit('onInputChange',this.keywords);
    },
    inputChange: debounce(function(){
      this.$emit('onInputChange',this.keywords);
    },300)

  }
}
</script>

<style>
  .searchNav{
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
</style>