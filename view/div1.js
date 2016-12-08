var div1 = (function () {
    var div = document.getElementById('div1');
    var viewPage = $(div);


    var init = true;
    function render() {
        show();
        if (init) {
            bindEvents();
            init = false;
        }
    }

    function bindEvents() {
        viewPage.delegate('h3', {
            'click': function () {
                Jump.toview('div3')
            }
        });
        //viewPage.delegate("h3", "click", function () {
        //   debugger
        //});
        //viewPage.find('h3').click(function () {
        //    Jump.toview('div2')
        //});
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