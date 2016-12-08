
var Jump = (function () {

    var nav;
    function initCategory() {
        nav = new Lib.Navigation({
            'div1': div1,
            'div2': div2,
            'div3': div3,
            'div4': div4,
            'div5': div5,
            'div6': div6,
        });
    }

    function toview(name) {
        var args = Array.prototype.slice.call(arguments, 1);
        var noBack = (args && args.length > 0) ? !!args[0].noBack : false;
        //先判断视图是否存在 不存在则先load进来
        if (nav.views[name]) {
            nav.to(name, true, args);
            if (!noBack) {
                OptHash.pushHash(name, args);
            }
        }
    }

    function backview(num) {
        OptHash.popHash(num);
        nav.back(true, num);
    }

    function backviewshow(num, type) {
        OptHash.popHash(num);
        nav.back(false, num);
    }

    function clear(num) {
        if (num) {
            OptHash.popHash(num);
        } else {
            OptHash.clear();
        }
        nav.clear(num);
    }



    return {
        initCategory: initCategory,
        toview: toview,
        backview: backview,
        clear: clear,
        backviewshow: backviewshow
    }

})();