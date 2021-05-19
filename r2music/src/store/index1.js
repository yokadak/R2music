import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: window.localStorage.getItem('user'),
    token: window.localStorage.getItem('token'),
    profile: window.localStorage.getItem('profile'),
    cookie: window.localStorage.getItem('cookie'),
    ownPlayListCount:window.localStorage.getItem('ownPlayListCount')
  },
  mutations: {
    //将token保存到localStorage里，token表示登陆状态
  SET_TOKEN: (state, data) => {
    state.token = data
    window.localStorage.setItem('token', data) 
    // console.log( window.localStorage.token)
  },
    //将cookie保存到localStorage里，记录用户登录，每次请求包含在请求头中发送
  SET_COOKIE: (state, data) => {
    state.cookie = data
    window.localStorage.setItem('cookie', data) 
    // console.log( window.localStorage.cookie)
  },
  //获取用户名
  SET_USER: (state, data) => {
    // 把用户名存起来
    state.user = data
    window.localStorage.setItem('user', data)
    // console.log(window.localStorage.user)
  },
  //获取用户简介
  SET_PROFILE: (state, data) => {
    state.profile = data
    window.localStorage.setItem('profile', data)
    // console.log(window.localStorage.profile)
  },
  //获取用户创建的歌单数量
  GET_OWN_PLAYLIST_COUNT: (state, data) => {
    state.ownPlayListCount = data
    window.localStorage.setItem('ownPlayListCount', data)
  },

  //登出
  LOGOUT: (state) => {
    // 登出的时候要清除token
    state.token = null
    state.user = null
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
  }
  },
  actions: {
  },
  modules: {
  }
})
