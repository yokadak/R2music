/*
 * @Descripttion: 使用VueX统一管理共享数据
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-19 20:26:47
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-19 21:46:27
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //需要共享的状态
    user:{
      account:{},
      profile:{}
    },
    playlist:[],//播放列表
    //TODO:关闭浏览器才清除用户信息，session不支持多窗口，local又是永久的，可能需要结合cookie
    token: window.sessionStorage.getItem('token')//token保存到本地浏览器
  },
  mutations: {
    getUserInfo(state,payload){
      state.user.account = payload.account
      state.user.profile = payload.profile
    },
    SET_TOKEN(state,payload){
      state.token = payload
      window.sessionStorage.setItem('token', payload) 
    }
  },
  actions: {
  },
  modules: {
  }
})
