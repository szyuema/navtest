var div2 = (function () {
    var div = document.getElementById('div2');
    var viewPage = $(div);

    var init = true;
    function render() {
        show();
        if (init) {
            MEvent.observe('div3', 'test', function (aa) {
                debugger
                //Jump.toview('div4')
                Jump.clear()
            });
            var ul = document.getElementById('div2-view-li');
            var sampleIconList = MString.between(ul.innerHTML, '<!--', '-->');
            var list = [{
                herf: "aa",
                title: "mayue",
                name: "mayue",
            },
           {
               herf: "aa",
               title: "mayue2",
               name: "mayue2",
           }, ];

            ul.innerHTML = MArray.keep(list, function (item, index) {
                return MString.format(sampleIconList, {
                    'href': '#',
                    'title': item.title,
                    'name': item.name,
                });
            }).join('');
            bindEvents();
            init = false;
        }
    }

    function bindEvents() {
        $(div).delegate('ul li', {
            'click': function () {
                console.log('aaa');
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