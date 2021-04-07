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

