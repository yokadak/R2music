/*
 * @Descripttion: 
 * @version: 
 * @Author: yrh
 * @Date: 2020-10-24 20:41:54
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-17 15:35:19
 */
import {request} from "./request"

//请求新歌速递数据
export function getRecommendSong(type) {
  return request({
    url: '/top/song',
    params:{
      type
    }
  })
}
//请求每日推荐歌曲数据，需要登录
// export function getRecommendSong() {
//   return request({
//     url: '/recommend/songs',
//   })
// }
//请求每日推荐歌单数据，需要登录
// export function getRecommendSong() {
//   return request({
//     url: '/recommend/resource',
//   })
// }
