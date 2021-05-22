/*
 * @Descripttion: 使用VueX统一管理共享数据
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-19 20:26:47
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-22 19:29:49
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
    playQueue:[],//播放列表
    //当前播放的歌曲
    playingSong:{
      song:{},
      index:0,
      playingState:false,
      lyrics:'',
      transLyrics:''
    },
    //歌曲播放状态
    playingState:false,
    //是否第一次进入应用
    isFirstIn:false,
    showPlayer:false,
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
    },
    getPlayQueue(state,payload){
      state.playQueue = payload.playQueue
    },
    getPlayingSong(state,payload){
      state.playingSong.song = payload.playingSong
      state.playingSong.index = payload.index
    },
    setPlayingState(state,payload){
      state.playingSong.playingState = payload.playingState
    },
    getPlayingLyrics(state,payload){
      state.playingSong.lyrics = payload.lyrics
    },
    getPlayingTransLyrics(state,payload){
      state.playingSong.transLyrics = payload.transLyrics
    },
    IsShowPlayer(state,payload){
      state.showPlayer = payload.show
    },
    setFirstInFlag(state,payload){
      state.isFirstIn = payload.isFirstIn
    }
  },
  actions: {
  },
  modules: {
  }
})
