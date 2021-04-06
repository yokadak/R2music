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
//请求推荐歌单数据
