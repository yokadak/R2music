//创建一个类用于保存歌曲的基本信息，
//做这一步是为了从复杂的数据中提取出我们想要的信息
export default class Asong{
  constructor({id,name,singer,album,image,publishTime}){
    this.id = id
    this.name = name
    this.singer = singer  
    this.album = album
    this.image = image
    // this.publishTime = publishTime || null
  }
}
//做这一步是为了从复杂的数据中提取出我们想要的信息
export class Album{
  constructor({id,name,size,image,publishTime,singer}){
    this.id = id
    this.singer = singer
    this.name = name
    this.size = size  
    this.publishTime = publishTime
    this.image = image
    // this.publishTime = publishTime || null
  }
}
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
//对歌手信息的处理，因为可能是多个歌手
function getSingerName(arr){
  let singerName = []
  singerName = arr.map((item) =>{
    return item.name
  })
  // console.log(singerName.join('/'))
  return singerName.join('/')
}

//从复杂的数据中提取出我们想要的信息
//传入的实际参数是data里的每一个对象（每一首歌）
export function getWantedSongInfo(theSong){
  return new Asong({
    id: theSong.id,
    name: theSong.name,
    singer: getSingerName(theSong.artists),
    album: theSong.album.name,
    image: theSong.album.picUrl
  })
}
export function getWantedAlbumInfo(album){
  return new Album({
    id: album.id,
    name: album.name,
    singer: getSingerName(album.artists),
    size: album.size,
    image: album.picUrl,
    publishTime: album.publishTime
  })
}
export function getSearchInfo(theSong){
  return new Asong({
    id: theSong.id,
    name: theSong.name,
    singer: getSingerName(theSong.artists),
    album: theSong.name,
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
export function getWantedSingerInfo(singer){
  return new Singer({
    id: singer.id,
    name: singer.name,
    transname: singer.trans,
    albumCount: singer.albumSize,
    songsCount: singer.musicSize,
    isFollowed: singer.followed,
    image: singer.picUrl,
    briefDesc: singer.briefDesc
  })
}