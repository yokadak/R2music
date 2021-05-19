<template>
  <div class="login">
    <navTop class="loginNav">
       <div slot="center"><span class="loginNavText">登录</span></div>
    </navTop>
    <div class="loginBox">
      <div class="r2Logo"><img src="~assets/img/logo/R2logoWhite.png" alt=""></div>
      <div class="phone">
        <input type="number" maxlength="13" 
        placeholder="请输入手机号"
        v-model="phone"></div>
      <div class="password">
        <input type="password" 
      placeholder="请输入密码"
       v-model="password"></div>
      <button class="loginButton" type="sumbit" @click="_login(17394942136, 'yrh190701')">登录</button>
    </div>
    <div class="tipsText">请使用网易云音乐账号登录</div>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  //网络请求导入
  import {login} from "network/login"
  import {loginStatus} from "network/login"
export default {
  name:"login",
  components:{
    navTop
  },
  data() {
    return {
      phone:'',
      password:''
    }
  },
  created() {
    this._loginStatus()
  },
  methods: {
    _loginStatus(){
      
    },
    _login(phone,password){
      login(phone,password).then(res =>{
        console.log(phone,password);
        console.log(res);
        //判断返回的结果
        if(res.code === 200){
          //登录成功
          console.log("登录成功")
          this.$store.commit({
            type:"getUserInfo",
            account:res.account,
            profile:res.profile
          })
          this.$store.commit('SET_TOKEN', res.token)
          //跳转到用户中心
          this.$router.push(`/user/${res.account.id}`)
        }else if(res.code === 502){
          //密码错误
          console.log(res.msg)
        }else if(res.code === 400){
          //账户不存在
          console.log("用户不存在")
        }
      }).catch((err) =>{
        console.log(err)
      })
    },
  },

}
</script>

<style scoped>
  .loginNavText{
    color: var(--color-high-text);
    font-weight: bold;
  }
  .loginBox{
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
  .phone,.password{
    width: 90%;
    border-bottom: solid;
    border-color: var(--borderBottomColor);
    margin-top: 20px;
  }
  .phone{
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