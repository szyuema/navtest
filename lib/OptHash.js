/*浏览器hash事件处理*/
var OptHash = (function () {
    var viewNameList = [];
    var viewHashList = [];
    // window.addEventListener("popstate", hashDeal, false);

    if (window.addEventListener) {
        window.addEventListener('popstate', hashDeal, false);
    } else if (window.attachEvent) {
        window.attachEvent("popstate", hashDeal);
    }

    function hashDeal() {
        var hash = window.location.hash;
        hash = hash.substr(1, hash.length - 1);
        var len = viewHashList.length - 1;
        if (len >= 0 && hash != viewHashList[len]) {
            Jump.backview();
        }
    }

    function pushHash(viewName, args) {
        var hash_para = '/' + encodeURIComponent(args ? JSON.stringify(args) : '');
        var hashView = viewName + hash_para;
        viewHashList.push(hashView);
        viewNameList.push(viewName);
        window.location.hash = hashView;
    }

    function popHash(num1) {
        var num = num1 || 1;
        for (var i = 0; i < num; i++) {
            viewHashList.pop();
            viewNameList.pop();
        }
        //隐藏键盘
        document.activeElement.blur();
    }

    function clear() {
        viewNameList = [];
        viewHashList = [];
        //隐藏键盘
        document.activeElement.blur();
    }

    function get() {
        //var hash = window.location.hash;
        //var posi = hash.indexOf('/');
        //return (posi >= 0) ? hash.substring(1, posi) : hash.substring(1);

        var len = viewHashList.length - 1;
        var hash = viewHashList[len] || '';
        if (hash) {
            var posi = hash.indexOf('/');
            hash = (posi >= 0) ? hash.substring(0, posi) : hash.substring(1);
        }
        return hash;
    }

    return {
        pushHash: pushHash,
        popHash: popHash,
        clear: clear,
        get: get
    }

})();


