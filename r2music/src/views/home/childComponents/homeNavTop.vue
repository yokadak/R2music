<template>
    <div class="homeNav">
       <div class = "homeNavLeft" @click="toUserCenter"><span class="fa fa-user"></span></div>
       <div class = "homeNavCenter"> 
         <input type="text" class = "searchInput" @focus="showSearchPage">
       <span class="fa fa-search homeSearch"></span></div>
       <div class = "homeNavRight" @click="toLogin"><span class="fa fa-navicon"></span></div>
    </div>
</template>

<script>
export default {
  name:"homeNavTop",
  props:{
    path:String
  },
  data() {
    return {
    
    }
  },
  methods: {
    toUserCenter(){
      this.$router.push(this.path);
    },
    toLogin(){
      this.$router.push('/login');
    },
    showSearchPage(){
      this.$router.push('/search');
    }
  },

}
</script>

<style>
  .homeNav{
    height: 60px;
    display: flex;
    border:none;
  }
  .homeNavLeft,.homeNavRight{
    font-size: 26px;
    color: var(--icon-color);
    display: flex;
    align-items: center;
    justify-content:center;
    width: 60px;
  }
   .homeNavCenter{
    position: relative;
    display: flex;
    align-items: center;
    justify-content:center;
    flex:1;
    position: relative;
    font-size: 18px;
  }
  .homeNavRight{
    font-size: 20px;
  }
  .searchInput{
    border-radius: 10px;
    border:none;
    width: 100%;
    height: 28px;
    outline: none;
    padding-left:10px;
    font-size: 13px;
    color:#706b6b;
  }
  .homeSearch{
    color:#706b6b;
    position:absolute;
    left:232px;
    height: 20px;
    width: 20px;
  }




</style>