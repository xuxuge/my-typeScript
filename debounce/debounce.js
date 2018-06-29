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
            action();
        }, wait);
    };
}
function log() {
    console.log(1);
}
window.onresize = debounce(log, 1000);
