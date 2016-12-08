var MString = (function () {

    /**
         * 获取位于两个标记子串之间的子字符串。
         * @param {String} string 要进行获取的大串。
         * @param {String} tag0 区间的开始标记。
         * @param {String} tag1 区间的结束标记。
         * @return {String} 返回一个子字符串。当获取不能结果时，统一返回空字符串。
         * @example
         $.String.between('abc{!hello!} world', '{!', '!}'); //结果为 'hello'
         */

    function between(string, tag0, tag1) {
        var startIndex = string.indexOf(tag0);
        if (startIndex < 0) {
            return '';
        }

        startIndex += tag0.length;

        var endIndex = string.indexOf(tag1, startIndex);
        if (endIndex < 0) {
            return '';
        }

        return string.substr(startIndex, endIndex - startIndex);
    }


    /*
     *
     * @dom {string} dom节点的id标识 或者jquery 包裹的对象
     * @returns 返回这个节点的默认模板
     *
     * */
    function template(domId) {
        var htmlStr = (typeof domId == 'string') ? document.getElementById(domId).innerHTML : domId[0].innerHTML;
        return between(htmlStr, '<!--', '-->');
    }


    function templateExt(domId, $view) {
        var htmlStr = (typeof domId == 'string') ? document.getElementById(domId).innerHTML : domId[0].innerHTML;
        var sample = between(htmlStr, '<!--', '-->');
        $view[0].innerHTML = $view[0].innerHTML.replace('<!--' + sample + '-->', '');
        return sample;
    }

    /**
        * 用指定的值去填充一个字符串。
        * 当不指定字符串的填充标记时，则默认为 {}。
        * @param {String} string 要进行格式填充的字符串模板。
        * @param {Object} obj 要填充的键值对的对象。
        * @return 返回一个用值去填充后的字符串。
        * @example
        * 用法：
        $.String.format('{id}{type}', {id: 1, type: 'app'});
        $.String.format('{2}{0}{1}', 'a', 'b', 'c');
        */
    function format(string, obj, arg2) {
        var s = string;
        if (typeof obj == 'object') {
            for (var key in obj) {
                s = replaceAll(s, '{' + key + '}', obj[key]);
            }
        }
        else {
            var args = Array.prototype.slice.call(arguments, 1);
            for (var i = 0, len = args.length; i < len; i++) {
                s = replaceAll(s, '{' + i + '}', args[i]);
            }
        }
        return s;
    }

    /**
        * 对字符串进行全局替换。
        * @param {String} target 要进行替换的目标字符串。
        * @param {String} src 要进行替换的子串，旧值。
        * @param {String} dest 要进行替换的新子串，新值。
        * @return {String} 返回一个替换后的字符串。
        * @example
        $.String.replaceAll('abcdeabc', 'bc', 'BC') //结果为 aBCdeBC
        */
    function replaceAll(target, src, dest) {
        return target.split(src).join(dest);
    }
    return {
        between: between,
        template: template,
        templateExt: templateExt,
        format: format
    };

})();