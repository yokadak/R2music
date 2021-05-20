<!--
 * @Descripttion: 
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-15 14:35:20
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-20 23:38:08
-->
<template>
  <div class="wrapper">
  <navTop>
    <div slot="left"><span class="fa fa-user"></span></div>
    <div slot="center" class="inputWrapper"><input><span class="fa fa-search"></span></div>
    <div slot="right"><span class="fa fa-navicon"></span></div>
  </navTop>
  <div class="test" ref="test" @click="test">
    <img src="./assets/img/cover/22.png" width="375px" height="667px">
  </div>
  <div class="test1" ref="test1" @click="test1">
     <img src="./assets/img/cover/11.png" width="375px" height="120px">
  </div>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'


export default {
  name: "navTest",
  data() {
    return {

    }
  },
  components: {
    navTop,
  },
  methods: {
    test(){
      this.$refs.test.style= "height:0px;"
      this.$refs.test1.style= "height:120px;"
    },
    test1(){
      this.$refs.test1.style= "height:0px;transition-delay: 0s"
      this.$refs.test.style= "height:100vh;"
    }
  }
}
</script>

<style  scoped>
.wrapper{
  position: relative;
  height: 100vh;
  background-color: black;
}
.fa{
  font-size: 26px;
  color: var(--icon-color);
}
.fa-navicon{
  font-size: 20px;
}
.inputWrapper{
  width: 100%;
  position: relative;
}
.inputWrapper .fa-search{
  font-size: 18px;
  color:#706b6b;
  position:absolute;
  top:4px;
  right: 8px;
}
.center input{
  width: 100%;
  height: 28px;
  border-radius: 10px;
  border:none;
  outline: none;
  padding-left:10px;
  font-size: 14px;
  color: var(--search-text);
}
.test{
  width: 100%;
  height: 100vh;
  background-color: aqua;
  transition: height 0.4s;
  position: absolute;
  bottom: 0px;
}
.test img,.test1 img{
  width: 100%;
}
.test1{
  width: 100%;
  height: 0px;
  background-color: wheat;
  transition: height 0.2s;
  transition-delay: 0.3s;
  position: absolute;
  bottom: 0px;
}

</style>
