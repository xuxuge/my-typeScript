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
window.onresize = debounce(log, 500);
