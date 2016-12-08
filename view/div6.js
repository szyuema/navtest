var div6 = (function () {
    var div = document.getElementById('div6');
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
                //Jump.clear(3);
                //Jump.toview('div3');
                //Jump.backview(3);
                //Jump.backviewshow(3);
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