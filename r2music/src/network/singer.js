import {request} from "./request"

//请求歌手数据(歌手详情及单曲)
export function getSingerInfo(id) {
  return request({
    url: '/artists/desc',
    method:"PUT" ,
    params:{
      id
    }
  })
}
// 请求歌手专辑
export function getSingerAlbums(id) {
  return request({
    url: '/artist/album',
    params:{
      id
    }
  })
}