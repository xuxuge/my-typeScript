/**
 * 简单是函数防抖方法
 * @param action
 * @param wait
 */
function debounce(action, wait) {
    var timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            action.apply(this, arguments)
        }, wait);
    };
}
function log(n) {
    console.log(n);
}
window.onresize = debounce(log(1), 1000);
