<template>
  <div class="appMenu">
    <navTop class="appMenuNav">
       <div slot="left"><span></span></div>
       <div slot="center"><span></span></div>
       <div slot="right"><span class="fa fa-close closeMenu"></span></div>
    </navTop>
    <div class="menuBox">
      <div class="menuOps">
        <a href=""><div>联系作者</div></a>
        <a href=""><div>帮助</div></a>
        <a href=""><div>喜欢</div></a>
        <span class="cutLine">——</span>
        <a href=""><span class="loginOrExit">登录/注销</span></a>
      </div>
      <div class="myInfo">
        <a href=""><div><i class="fa fa-github"></i><span>yokodak</span></div></a>
        <a href=""><div><i class="fa fa-envelope-o"></i><span>1393050651@qq.com</span></div></a>
        <a href=""><div><i class="fa fa-commenting-o"></i><span>意见反馈</span></div> </a>
      </div>
    </div>
    <div class="myAppLogo">
      <div><img src="~assets/img/logo/R2logoWhite.png" alt=""></div>
      <div><span>R2music</span><i class="fa fa-music"></i></div> 
    </div>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
export default {
  name:"appMenu",
  components:{
     navTop
  }

}
</script>

<style scoped>
  .menuBox{
    width: 80%;
    margin:auto;
    margin-top: -20px;
  }
  .menuOps{
    /* background-color: red; */
    width: 100%;
  }
  .menuOps div{
    margin-top: 40px;
    font-size: 33px;
    font-weight: bold;
  }
  .menuOps div:hover{
    color:var(--color-high-text);
  }
  .menuOps span:hover{
    color:var(--color-high-text);
  }
  .cutLine{
    display: block;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  .loginOrExit{
    font-size: 20px;
    display: block;
    margin-top: 20px;
    font-weight: bold;
  }
  .myInfo{
    /* background-color:green; */
    margin-top: 50px;
  }
  .myInfo div{
     margin-top: 20px; 
     display: flex;
     align-items: center;
  }
  .fa{
    font-size:24px;
    color:var(--icon-color);
  }
  .fa-github{
    font-size:30px;
  }
  .myInfo span{
    margin-left: 15px;
  }
  .myInfo span:hover{
    color:var(--color-high-text);
  }
  .myAppLogo{
    /* background-color:blue; */
    display: flex;
    width: 90%;
    margin: auto;
    margin-top: 45px;

  }
   .myAppLogo div{
     width: 90px;
     margin-left: 10px;
     display: flex;
     align-items: flex-end;
   }
   .myAppLogo div img{
     width: 100%;
   }
   .myAppLogo span{
     font-size: 18px;
     font-style: italic;
     font-weight: bold;
     color:var(--icon-color);
   }
   .myAppLogo i{
     margin-left: 5px;
     font-size: 16px;
   }
</style>