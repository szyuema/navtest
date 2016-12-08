var MArray = (function () {

    /**
     * 将一个数组中的元素转换到另一个数组中，并且保留所有的元素，返回一个新数组。
     * 作为参数的转换函数会为每个数组元素调用，并把当前元素和索引作为参数传给转换函数。
     * 该方法与 map 的区别在于本方法会保留所有的元素，而不管它的返回是什么。
     */
    function keep(array, fn) {

        var a = [];

        for (var i = 0, len = array.length; i < len; i++) {
            var value = fn(array[i], i);
            a.push(value);
        }

        return a;
    }

    /**
     * 对数组进行迭代，即对数组中的每个元素执行指定的操作。
     * @param {Array} array 要进行迭代的数组。
     * @param {function} fn 要执行处理的回调函数，会接受到当前元素和其索引作为参数。<br />
     *   只有在 fn 中明确返回 false 才停止循环(相当于 break)。
     * @param {boolean} [isReversed=false] 指定是否使用倒序进行迭代。
     如果要使用倒序来进行迭代，请指定 true；否则默认按正序。
     * @return {Array} 返回当前数组。
     * @example
     $.Array.each([0, 1, 2, 3], function(item, index) {
        if(index == 2) {
            return false;
        }
        console.log(index, ': ', item);
    });
     */
    function each(array, fn, isReversed) {
        var len = array.length;

        if (isReversed === true) { //使用反序。 根据<<高性能 JavaScript>>的论述，这种循环性能可以比 else 中的提高 50% 以上
            for (var i = len; i--;) { //这里只能用后减减，而不能用前减减，因为这里是测试条件，先测试，再减减
                //如果用 callback.call(array[i], i)，
                //则在 callback 中的 this 就指参数中的 array[i]，但类型全部为 object
                if (fn(array[i], i) === false) { // 只有在 fn 中明确返回 false 才停止循环
                    break;
                }
            }
        }
        else {
            for (var i = 0; i < len; i++) {
                if (fn(array[i], i) === false) {
                    break;
                }
            }
        }

        return array;
    }

    return {
        each: each,
        keep: keep,
    }
})();





