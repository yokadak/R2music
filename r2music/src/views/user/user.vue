<!--
 * @Descripttion: 用户主页，根据路由不同渲染不同的视图，
 * 用户中心和用户的喜欢作为其子路由
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-19 15:11:33
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-19 22:10:57
-->
<template>
  <div>
    <div class="notLogIn" v-if="!isLoginIn">立即登录</div>
    <router-view v-else></router-view>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      isLoginIn:window.sessionStorage.token
    }
  },
  components: {
  },
  created() {
    // console.log(window.sessionStorage.token)
  },
  methods: {
  }
}
</script>

<style  scoped>
.notLogIn{
  font-size: 90px;
}
</style>

