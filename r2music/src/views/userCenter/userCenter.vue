<template>
  <div id="userCenter"> 
    <navTop class="userNav">
       <div slot="left" class="userIcon"><span class="fa fa-chevron-left" @click="toHome"></span></div>
       <div slot="center"><span class="user" @click="toLogin">个人主页</span></div>
    </navTop>
    <userBox></userBox>
     <playControl class="userCenterPlayControl"></playControl>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import userBox from './childComponents/userBox'
  import playControl from 'components/content/base/playControl'

export default {
  name:"userCenter",
  components:{
    navTop,
    userBox,
    playControl,
  },
  methods: {
    toLogin(){
      // console.log(this.$store.state)
      this.$router.push('/login');
    },
    toHome(){
      this.$router.push('/home');  
    },
  },
}
</script>

<style>
  .userCenterPlayControl{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
  }

</style>