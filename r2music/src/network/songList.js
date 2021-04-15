import {request} from "./request"

//请求歌单详情
export function getPlayListDetail(id) {
  return request({
    url: '/playlist/detail',
    params:{
      id
    }
  })
}
//请求专辑歌曲
export function getAlbumDetail(id) {
  return request({
    url: '/album',
    params:{
      id
    }
  })
}