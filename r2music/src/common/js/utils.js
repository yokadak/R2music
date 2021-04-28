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
