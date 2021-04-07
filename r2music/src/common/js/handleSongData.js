//创建一个类用于保存歌曲的基本信息，
//做这一步是为了从复杂的数据中提取出我们想要的信息
export default class Asong{
  constructor({id,name,singer,album,image}){
    this.id = id
    this.name = name
    this.singer = singer  
    this.album = album
    this.image = image
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
    album: theSong.album.name?theSong.album.name:theSong.name,
    image: theSong.album.picUrl
  })
}