import {request} from "./request"

//请求歌单详情
export function getplayListDetail(id) {
  return request({
    url: '/playlist/detail',
    params:{
      id
    }
  })
}