<template>
  <div class="searchNav">
    <div class="searchBox">
      <input>
      <button class="searchConfirm"><i class="fa fa-search"></i></button>
      <button class="searchClean"><i class="fa fa-close"></i></button>
    </div>
    <div class="cancelButton">取消</div>
  </div>
</template>

<script>
export default {
  name:"searchNav"

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