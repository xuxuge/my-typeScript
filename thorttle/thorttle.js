/**
 * 简单的函数节流方法
 * @param action 要执行的函数
 * @param delay  要执行的时间间隔
 */
function thorttle(action, delay) {
    var last = 0;
    return function () {
        var curr = +new Date();
        if (curr - last > delay) {
            action.apply(this, arguments);
            last = curr;
        }
    };
}
var log = function () {
    console.log(1);
};
window.onresize = thorttle(log, 500);
window.onscroll = thorttle(log, 500);
