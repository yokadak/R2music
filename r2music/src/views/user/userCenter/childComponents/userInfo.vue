<!--
 * @Descripttion: 
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-14 16:16:46
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-19 21:57:26
-->
<template>
   <infoBox class="userInfoBox">
      <div slot="pic" class="userPic"><img :src="profile.avatarUrl" alt=""></div>
      <div slot="charAbove" class="userName"><span>{{profile.nickname}}</span></div>
      <div slot="charBelow" class="userFollow"><span>{{profile.follows}}关注</span></div>
  </infoBox>
</template>

<script>
    import infoBox from 'components/content/base/infoBox'
export default {
  name:"userInfoBox",
   components:{
    infoBox,
  },
  data() {
    return {
    }
  },
  computed:{
    profile(){
      return this.$store.state.user.profile
    }
  }
  }
  
</script>
 
<style>
  .userInfoBox{
     width:81%;
     margin:auto;
  }
  .userPic{
    width:80px;
    border-radius: 10px;
    background-color: #fff;
  }
  .userPic img{
    width:100%;
    border-radius: 10px;
  }
  .userName{
    font-size: 18px;
    font-weight: bold;
    color:var(--color-high-text);
    margin-top: 3px;
  }
  .userFollow{
    margin-top: 36px;
  }

</style>