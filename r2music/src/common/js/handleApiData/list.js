/*
 * @Descripttion: 过滤获取专辑，歌单详情，调用的api返回的数据
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-15 22:47:45
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-16 00:17:18
 */
import {Song} from './publicClass'
import {getSingerName} from '../utils'
import {getSingerId} from '../utils'

export function getPlayListSongInfo(theSong){
  const noCopyright = (theSong.noCopyrightRcmd !== null || theSong.copyright === 0)
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
    //TODO:歌单接口没有payed属性
    // bought: theSong.payed === 0?false:true,
    vipSong: theSong.fee === 1?true:false,
  })
}