import {request} from "./request"

//请求歌手数据(歌手详情)
export function getSingerInfo(id) {
  return request({
    url: '/artists/detail',
    params:{
      id
    }
  })
}
//请求歌手单曲
export function getSingerSongs(id) {
  return request({
    url: '/artists',
    params:{
      id
    }
  })
}