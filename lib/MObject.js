﻿var MObject = (function () {


    function extend(target, obj1, obj2) {

        //针对最常用的情况作优化
        if (obj1 && typeof obj1 == 'object') {
            for (var key in obj1) {
                target[key] = obj1[key];
            }
        }

        if (obj2 && typeof obj2 == 'object') {
            for (var key in obj2) {
                target[key] = obj2[key];
            }
        }

        var startIndex = 3;
        var len = arguments.length;
        if (startIndex >= len) {
            return target;
        }

        //更多的情况
        for (var i = startIndex; i < len; i++) {
            var obj = arguments[i];
            for (var name in obj) {
                target[name] = obj[name];
            }
        }

        return target;
    }

    function clone(obj) {
        var o, i, j;
        if (typeof (obj) != "object" || obj === null) return obj;
        if (obj instanceof (Array)) {
            o = [];
            i = 0;
            j = obj.length;
            for (; i < j; i++) {
                if (typeof (obj[i]) == "object" && obj[i] != null) {
                    o[i] = arguments.callee(obj[i]);
                }
                else {
                    o[i] = obj[i];
                }
            }
        }
        else {
            o = {};
            for (i in obj) {
                if (typeof (obj[i]) == "object" && obj[i] != null) {
                    o[i] = arguments.callee(obj[i]);
                }
                else {
                    o[i] = obj[i];
                }
            }
        }

        return o;
    }


    return {
        extend: extend,
        clone: clone,
    };

})();