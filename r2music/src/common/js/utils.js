/*
 * @Descripttion: 工具函数库，包括防抖，处理歌手姓名，歌手id(多个歌手情况下)，
 *处理时间等工具函数。
 * @version: 
 * @Author: yrh
 * @Date: 2020-10-28 14:16:29
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-15 22:52:12
 */
//防抖函数
export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    const _this = this;
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(_this, args)
      // console.log(_this)
    }, delay)
  }
}
//对歌手信息的处理，因为可能是多个歌手
export function getSingerName(arr){
  let singerName = []
  singerName = arr.map((item) =>{
    return item.name
  })
  return singerName.join('/')
}
//获取歌手的Id
export function getSingerId(arr){
  let singerId = []
  singerId = arr.map((item) =>{
    return item.id
  })
  return singerId.join()
}
//将单位为秒的时间转换为分秒显示
export function getSongTime(time){
  let totalTime = parseInt(time);
  let minutes = add0Head(parseInt(totalTime / 60))
  let seconds = add0Head(totalTime % 60)
  totalTime = `${minutes}:${seconds}`
  return totalTime
}

//数值不满10前面补0
export function add0Head(num){
  if(num < 10 && num >= 0){
    let numStr = '0' + num
    return numStr
  }else{
    return num + ''
  }
}
