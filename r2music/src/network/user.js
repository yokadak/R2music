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
export function getLikedMusic(uid){
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
export function getLikedPlayList(uid){
  return request({
    url:'/user/playlist',
    params:{
      uid
    }
  })
}