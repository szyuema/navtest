var div4 = (function () {
    var div = document.getElementById('div4');
    var viewPage = $(div);

    var init = true;
    function render() {
        show();
        if (init) {
            // bindEvents();
            init = false;
            bindEvents();

        }
    }
    function bindEvents() {
        viewPage.delegate('h3', {
            'click': function () {
                Jump.toview('div5');
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