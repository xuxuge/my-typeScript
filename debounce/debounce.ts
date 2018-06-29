/**
 * 简单是函数防抖方法
 * @param action 
 * @param wait 
 */
function debounce (action: Function, wait: number) {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      action()
    }, wait)
  }
}

function log (): void {
  console.log(1)
}

window.onresize = debounce(log, 1000)
