<template>
   <infoBox class="userInfoBox">
      <div slot="pic" class="userPic"><img :src="userInfo.avatarUrl" alt=""></div>
      <div slot="charAbove" class="userName"><span>{{userInfo.nickname}}</span></div>
      <div slot="charBelow" class="userFollow"><span>{{userInfo.follows}}关注</span></div>
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
      userInfo:this.$store.state.profile
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