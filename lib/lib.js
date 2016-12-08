var Lib = (function (Lib) {
    var Navigation = Lib.Navigation = (function () {
        function Navigation(views) {
            this.views = views;
            this.historys = [];
            this.nobacks = [];
        }

        MObject.extend(Navigation.prototype, {
            push: function (name, view) {
                this.views[name] = view;
            },
            to: function (name, reload, args) {

                var views = this.views;
                var historys = this.historys;
                var nobacks = this.nobacks;

                var current = historys[historys.length - 1]; //取最后一个
                if (current) {
                    views[current.name].hide();
                }
                //没有回退的视图
                if (nobacks.length > 0) {
                    var last = nobacks[nobacks.length - 1];
                    if (last) {
                        views[last.name].hide();
                    }
                }
                var bcheck = (args && args.length > 0);
                var noBack = bcheck ? !!args[0].noBack : false;
                var noRepeat = bcheck ? !!args[0].noRepeat : false;
                if (noBack) {
                    nobacks.push({
                        name: name,
                        args: args
                    });
                } else {
                    if (noRepeat) {
                        if (current.name != name) {
                            historys.push({
                                name: name,
                                args: args
                            });
                        }
                    } else {
                        historys.push({
                            name: name,
                            args: args
                        });
                    }
                }
                var item = views[name];
                if (reload) {
                    item.render.apply(null, args);
                }
                else {
                    item.show();
                }
            },
            back: function (reload, count) {
                if (typeof reload == 'number') {
                    count = reload;
                    reload = false;
                }
                reload = reload || false;
                count = count || 1;

                var historys = this.historys;
                var index = historys.length - 1 - count;
                var obj = historys[index];


                if (obj) {
                    var hashName = OptHash.get();
                    //获取hash值 看跟视图是否一致，一致则显示，否则继续回退
                    if (hashName == obj.name) {
                        this.to(obj.name, reload, obj.args);
                        historys.length = index + 1;
                    } else {
                        history.back();
                    }
                }
            },
            clear: function (step) {
                var historys = this.historys;
                var len = historys.length - 1;
                var deleteStart = len - step;
                if (deleteStart < 0) {
                    deleteStart = 0;
                }
                historys.splice(deleteStart, step);
            }
        });
        return Navigation;

    })();
    return Lib;

})({});