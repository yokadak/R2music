/*
 * @Descripttion: 过滤获取专辑，歌单详情，歌手歌曲，调用的api返回的数据
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-15 22:47:45
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-19 22:36:54
 */
import {Song} from './publicClass'
import {PlayList} from './publicClass'
import {Album} from './publicClass'
import {getSingerName} from '../utils'
import {getSingerId} from '../utils'

export function getPlayListInfo(playList){
  return new PlayList({
    id: playList.id,
    creator: playList.creator.nickname,
    creatorPic: playList.creator.avatarUrl,
    name: playList.name,
    image: playList.coverImgUrl,
    playCount: playList.playCount,
    subscribedCount: playList.subscribedCount,
    subscribed: playList.subscribed,
    description: playList.description,
    songsCount:playList.trackCount
  })
}
export function getAlbumInfo(album){
  return new Album({
    id: album.id,
    name: album.name,
    singer: getSingerName(album.artists),
    size: album.size,
    image: album.picUrl,
    publishTime: album.publishTime,
    description: album.description
  })
}
export function getPlayListSongInfo(theSong){
  const noCopyright = theSong.privilege.st === -200
  return new Song({
    id: theSong.id,
    name: theSong.name,
    singer: getSingerName(theSong.ar),
    singerId: getSingerId(theSong.ar),
    album: theSong.al.name,
    albumId: theSong.al.id,
    image: theSong.al.picUrl,
    copyRight: noCopyright?false:true,
    needToBuy: theSong.fee === 4?true:false,
    bought: theSong.privilege.payed === 0?false:true,
    vipSong: theSong.fee === 1?true:false,
  })
}