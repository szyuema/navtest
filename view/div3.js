var div3 = (function () {
    var div = document.getElementById('div3');
    var viewPage = $(div);

    var init = true;
    function render() {
        show();
        if (init) {
            init = false;
            debugger
            var sampleIconList = MString.between(div.innerHTML, '<!--', '-->');
            var list = [1, 2, 1, 3, 4, 5, 4, 5, 4, 5, 12, 41, 4, 5, , 5, 4, 4, 45, 45, 4, 4, 54, 2, 1, 54, 5, 45, ]
            div.innerHTML = MArray.keep(list, function (item, index) {
                return MString.format(sampleIconList, {
                    'name': item
                });
            }).join('');
            bindEvents();
        }
    }

    function bindEvents() {
        viewPage.delegate('h3', {
            'click': function () {
                Jump.toview('div4');
                //MEvent.trigger('div3', 'test', [['aaaa', 'aaaa']]);
            }
        });
    }

    function show() {
        viewPage.show();
    }

    return {
        render: render,
        show: show,
        hide: function () {
            viewPage.hide();
        }
    };

})();