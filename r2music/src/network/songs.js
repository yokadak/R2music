import {request} from "./request"
//获取歌曲详情
export function getSongsDetail(ids){
  return request({
    url:'/song/detail',
    params:{
      ids
    }
  })
}