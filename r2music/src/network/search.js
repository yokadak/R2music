import {request} from "./request"
//获取热搜列表
export function getHotSearch(){
  return request({
    url:'/search/hot',
  })
}
//获取搜索建议
export function getSearchSuggestion(keywords,type){
  return request({
    url: '/search/suggest',
    params:{
      keywords,
      type
    }
  })
}