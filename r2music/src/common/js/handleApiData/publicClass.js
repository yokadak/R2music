/*
 * @Descripttion: 在这里创建歌曲类,专辑类，歌单,歌手类等以过滤api信息
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-15 21:50:57
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-15 23:21:29
 */

 /*
 *歌曲类，
 *copyRight表示是否有版权
 *needToBuy表示该歌曲是否需要购买，
 *bought表示是否已经购买
 *vipSong表示该歌曲是否需要开通会员收听完整版
 */

export class Song{
  constructor({
    id,name,singer,singerId,album,albumId,image,
    publishTime,copyRight,needToBuy,bought,vipSong,}){
    this.id = id
    this.name = name
    this.singer = singer  
    this.singerId = singerId  
    this.album = album
    this.albumId = albumId
    this.image = image
    this.copyRight = copyRight
    this.needToBuy = needToBuy
    this.bought = bought
    this.vipSong = vipSong
    // this.publishTime = publishTime || null
  }
}
export class Album{
  constructor({id,name,size,image,publishTime,singer,description}){
    this.id = id
    this.singer = singer
    this.name = name
    this.size = size  
    this.publishTime = publishTime
    this.image = image
    this.description = description || null
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
export class PlayList{
  constructor({id,name,creator,image,playCount,subscribedCount,subscribed,description, songsCount, creatorPic}){
    this.id = id
    this.name = name
    this.creator = creator
    this.image = image
    this.subscribed = subscribed  
    this.subscribedCount = subscribedCount
    this.playCount = playCount
    this.description = description
    this.songsCount = songsCount
    this.creatorPic = creatorPic
  }
}

