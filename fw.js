
var FW = function() {};

FW.prototype = {

    // 遍历对象依次拷贝方法
    extend : function(tag, src) {
        for (var method in src) {
            if (src.hasOwnProperty(method)) {
                tag[method] = src[method];
            }
        }
    }
};

var fw = new FW();


//Basic模块
fw.extend(fw, {});

//Selector模块
fw.extend(fw, {
    $id : function(id) {
        return document.getElementById(id);
    },
    $tag : function(tag) {
        return document.getElementsByTagName(tag);
    },
    $class : function(className) {
        return document.getElementsByClassName(className);
    }
});

//Event模块
fw.extend(fw, {
    getEvent : function(ev) {
        return ev ? ev : window.event;
    },
    getTarget : function(ev) {
        var event = getEvent(ev);
        return event.target || event.srcElement;
    },
    preventDefault : function(ev) {
        var event = getEvent(ev);
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation : function(ev) {
        var event = getEvent(ev);
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    /**
    * 为对象添加事件
    */
    on : function(obj, type, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        } else if (obj.attachEvent) {
            obj.attachEvent('on' + type, fn);
        }
    },
    un : function(obj, type fn) {
        if (obj.removeEventListener) {
            obj.removeEventListener(type, fn, false);
        } else if (obj.attachEvent) {
            obj.detachEvent(type, fn);
        }
    },
    click : function(obj, fn) {
        this.on(obj, 'click', fn);
    },
    mouseover : function(obj, fn) {
        this.on(obj, 'mouseover', fn);
    },
    mouseout : function(obj, fn) {
        this.on(obj, 'mouseout', fn);
    },
    hover : function(obj, fnOver, fnOut) {
        this.on(obj, 'mouseover', fnOver);
        this.on(obj, 'mouseout', fnOut);
    }

});

//String模块
fw.extend(fw, {
    //去除左边空格
    triml : function(str) {
        return str.replace(/(^\s*)/g,'');
    },
    //去除右边空格
    trimr : function(str) {
        return str.replace(/(\s*$)/g,'');
    },
    //去除空格
    trim : function(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }
});

//Number模块
fw.extend(fw, {
    random : function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});

//Date模块
fw.extend(fw, {});

//Ajax模块
fw.extend(fw, {});

//Type模块
fw.extend(fw, {});

//基础模块
fw.extend(fw, {});
