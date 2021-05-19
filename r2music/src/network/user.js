/*
 * @Descripttion: 请求用户数据的API
 * @version: 
 * @Author: yrh
 * @Date: 2021-04-08 11:36:50
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-19 23:58:25
 */
// 637944142
import {request} from "./request"
//获取用户信息
export function getUserInfo(uid){
  return request({
    url:'/user/detail',
    params:{
      uid
    }
  })
}
//获取收藏的歌单，mv等数量
export function getSubCount(){
  return request({
    url:'/user/subcount',
  })
}
//获取用户喜欢的歌曲id列表
export function getLikedMusicIds(uid){
  return request({
    url:'/likelist',
    params:{
      uid
    }
  })
}
export function getLikedAlbums(){
  return request({
    url:'/album/sublist',
  })
}
//该api只能获取到所有歌单，所以要用js将用户自建歌单和收藏歌单分开
export function getlikedPlayLists(uid){
  return request({
    url:'/user/playlist',
    params:{
      uid
    }
  })
}