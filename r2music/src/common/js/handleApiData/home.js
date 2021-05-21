/*
 * @Descripttion: 过滤home组件调用的api返回的数据
 * @version: 
 * @Author: yrh
 * @Date: 2021-05-15 21:50:03
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-21 19:01:03
 */
import {Song} from './publicClass'
import {getSingerName} from '../utils'
import {getSingerId} from '../utils'

export function getWantedSongInfo(theSong){
  //TODO:搜索结果Api数据，无bought属性,专辑属性无图片
  let privilege = theSong.privilege?theSong.privilege:theSong
  return new Song({
    id: theSong.id,
    name: theSong.name,
    singer: getSingerName(theSong.artists),
    singerId: getSingerId(theSong.artists),
    album: theSong.album.name,
    albumId: theSong.album.id,
    image: theSong.album.picUrl,
    copyRight:theSong.copyrightId >=0 ?true:false,
    needToBuy: privilege.fee === 4?true:false,//要付费购买的肯定是有版权的
    bought: privilege.payed === 0?false:true,
    vipSong: privilege.fee === 1?true:false,
  })
}
