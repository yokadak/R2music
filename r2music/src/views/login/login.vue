<template>
  <div class="login">
    <navTop class="loginNav">
       <div slot="center"><span class="loginNavText">登录</span></div>
    </navTop>
    <div class="loginBox">
      <div class="r2Logo"><img src="~assets/img/logo/R2logoWhite.png" alt=""></div>
      <div class="account"><input type="text" placeholder="网易云账号"></div>
      <div class="password"><input type="password" placeholder="密码" name="" id=""></div>
      <button class="loginButton" type="sumbit">登录</button>
    </div>
    <div class="tipsText">请使用网易云音乐账号登录</div>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
export default {
  name:"login",
  components:{
    navTop
  }

}
</script>

<style scoped>
  .loginNavText{
    color: var(--color-high-text);
    font-weight: bold;
  }
  .loginBox{
    /* background-color: red; */
    width:90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 100px;
  }
  .r2Logo{
    width:120px;
    order:1;
  }
  .r2Logo img{
    width: 100%;
  }
  .account,.password{
    width: 90%;
    border-bottom: solid;
    border-color: var(--borderBottomColor);
    margin-top: 20px;
  }
  .account{
    order:2;
  }
  .password{
    order:3;
  }
  .loginBox input{
    border: none;
    outline: none;
    height: 40px;
    width: 90%;
    margin-left: 15px;
    background:none;
    color:var(--color-high-text);
  }
  .loginButton{
    order:4;
    border: none;
    outline: none;
    margin-top: 40px;
    height: 40px;
    width: 140px;
    background-color:#c9c0c09b;
    color:var(--color-high-text);
    border-radius: 30px;
    font-weight: bold;
  }
  .loginButton:hover{
    background-color:#c93d2d;
  }
  .tipsText{
    line-height: 60px;
    height: 60px;
    text-align: center;
    font-size: 16px;
    position: fixed;
    bottom: 0px;
    width: 100%;
  }

</style>