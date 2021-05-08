import {request} from "./request"

//请求歌手单曲(歌手部分信息及单曲)
export function getSingerSongsAndInfo(id) {
  return request({
    url: '/artists',
    method:"get" ,
    params:{
      id
    }
  })
}
//TODO:获取歌手的粉丝数
// //请求歌手描述
// export function getSingerDesc(id) {
//   return request({
//     url: '/artist/desc',
//     method:"get" ,
//     params:{
//       id
//     }
//   })
// }
//请求歌手详情
export function getSingerDetail(id) {
  return request({
    url: '/artist/desc',
    method:"get" ,
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
//创建歌手类
export class Singer{
  constructor({id,name,transname,isFollowed,albumCount,image,songsCount,briefDesc}){
    this.id = id
    this.name = name
    this.transname = transname || null
    this.isFollowed = isFollowed  
    this.albumCount = albumCount
    this.songsCount = songsCount
    this.image = image
    this.briefDesc = briefDesc
  }
}
//提取信息
export function getWantedSingerInfo(singer){
  return new Singer({
    id: singer.id,
    name: singer.name,
    transname: singer.trans,
    albumCount: singer.albumSize,
    songsCount: singer.musicSize,
    isFollowed: singer.followed,
    image: singer.cover,
    briefDesc: singer.briefDesc
  })
}
export function getWantedSingerSongs(theSong){
  return new Asong({
    id: theSong.id,
    name: theSong.name,
    singer: getSingerName(theSong.ar),
    album: theSong.al.name,
    image: theSong.al.picUrl
  })
}