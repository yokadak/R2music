<template>
  <div id="userCenter"> 
    <navTop class="userNav">
       <div slot="left" class="userIcon"><span class="fa fa-chevron-left" @click="toHome"></span></div>
       <div slot="center"><span class="user" @click="toLogin">个人主页</span></div>
    </navTop>
    <userContent></userContent>
    <miniPlayer></miniPlayer>
  </div>
</template>

<script>
  //组件导入
  import navTop from 'components/common/navBar/navTop'
  import userContent from './childComponents/userContent'
  import miniPlayer from 'components/content/base/miniPlayer'


export default {
  name:"userCenter",
  components:{
    navTop,
    userContent,
    miniPlayer,
  },
  methods: {
    toLogin(){
      this.$router.push('/login');
    },
    toHome(){
      this.$router.push('/home');  
    },
    
  },
}
</script>

<style scoped>


</style>