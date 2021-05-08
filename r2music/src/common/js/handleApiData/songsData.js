//处理歌曲信息
//创建一个类用于保存歌曲的基本信息，做这一步是为了从复杂的数据中提取出我们想要的信息
//创建歌曲类
export default class Asong{
  constructor({id,name,singer,singerId,album,albumId,image,publishTime}){
    this.id = id
    this.name = name
    this.singer = singer  
    this.singerId = singerId  
    this.album = album
    this.albumId = albumId
    this.image = image
    // this.publishTime = publishTime || null
  }
}
//对歌手信息的处理，因为可能是多个歌手
function getSingerName(arr){
  let singerName = []
  singerName = arr.map((item) =>{
    return item.name
  })
  return singerName.join('/')
}
//获取歌手的Id
function getSingerId(arr){
  let singerId = []
  singerId = arr.map((item) =>{
    return item.id
  })
  return singerId.join()
}
//从复杂的数据中提取出我们想要的信息
//传入的实际参数是data里的每一个对象（每一首歌）
//过滤数据的方法中返回该类的实例
export function getWantedSongInfo(theSong){
  return new Asong({
    id: theSong.id,
    name: theSong.name,
    singer: getSingerName(theSong.artists),
    singerId:getSingerId(theSong.artists),
    album: theSong.album.name,
    albumId: theSong.album.id,
    image: theSong.album.picUrl
  })
}