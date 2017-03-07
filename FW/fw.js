var FW = function() {};

FW.prototype = {
    /**
     * 拷贝对象方法
     * @param  {obj} tag 目标对象
     * @param  {obj} src 原对象
     * @return {null}
     */
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
fw.extend(fw, {
    /**
     * 延时
     * @param  {int} time 秒数
     * @return {null}
     */
    sleep : function(time) {
        var now = +(new Date());
        while (true) {
            if (+(new Date()) - now > time) {
                break;
            }
        }
    },

    /**
     * 记录函数执行时间
     * @param  {Function} fn
     * @return {Function}
     */
    logTime : function(fn) {
        return fn = (function() {
            var timer = undefined;
            return fn.before(function() {
                timer = +(new Date());
            }).after(function() {
                console.log(new Date() - timer);
            });
        })();
    }
});

//Selector模块
fw.extend(fw, {
    /**
     * 获取dom
     * @param  {obj} obj
     * @param  {string} id
     * @return {obj}
     */
    $id : function(id, obj) {
        obj = obj || document;
        return obj.getElementById(id);
    },

    /**
     * 获取dom
     * @param  {obj} obj
     * @param  {string} tag
     * @return {obj}
     */
    $tag : function(tag, obj) {
        obj = obj || document;
        return obj.getElementsByTagName(tag);
    },

    /**
     * 获取dom
     * @param  {obj} obj
     * @param  {string} className
     * @return {obj}
     */
    $class : function(className, obj) {
        obj = obj || document;
        return obj.getElementsByClassName(className);
    },

    /**
     * 获取dom
     * @param  {obj} obj
     * @param  {string} str
     * @return {obj}
     */
    query : function(str, obj) {
        obj = obj || document;
        return obj.querySelector(str);
    },

    /**
     * 获取dom
     * @param  {obj} obj
     * @param  {string} str
     * @return {obj}
     */
    queryAll : function(str, obj) {
        obj = obj || document;
        return obj.querySelectorAll(str);
    }
});

//CSS模块
fw.extend(fw, {
    /**
     * 设置css样式
     * @param {obj} objs  dom
     * @param {string} attr  属性名
     * @param {string} value 属性值
     */
    setStyle : function(objs, attr, value) {
        for (var i = 0; i < objs.length; i++) {
            objs[i].style[attr] = value;
        }
    },

    /**
     * 获取dom属性值
     * @param  {obj} obj
     * @param  {string} attr
     * @return {string}      属性值
     */
    getStyle : function(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
    },

    /**
     * 获取屏幕的宽高
     * @return {array} [screen.width, screen.height]
     */
    screen : function() {
        return [window.screen.width, window.screen.height];
    },

    /**
     * 获取文档可视区的宽高
     * @return {array} [documentElement.clientWidth, documentElement.clientHeight]
     */
    docClient : function() {
        return [document.documentElement.clientWidth, document.documentElement.clientHeight];
    },

    /**
     * 获取文档滚动区域整体的宽高
     * @return {array} [body.scrollWidth, body.scrollHeight]
     */
    docScroll : function() {
        return [document.body.scrollWidth, document.body.scrollHeight];
    },

    /**
     * 获取元素宽高
     * @param  {obj} obj
     * @return {array} [clientWidth, clientHeight]
     */
    domClient : function(obj) {
        return [obj.clientWidth, obj.clientHeight];
    },

    /**
     * 获取元素的滚动宽高
     * @param  {obj} obj
     * @return {array} [scrollWidth, scrollHeight]
     */
    domScroll : function(obj) {
        return [obj.scrollWidth, obj.scrollHeight];
    },

    /**
     * 获取出现滚动条时 元素相对左上角的偏移量
     * @param  {obj} obj
     * @return {array} [scrollTop, scrollLeft]
     */
    domScrollTL : function(obj) {
        return [obj.scrollTop, obj.scrollLeft];
    },

    /**
     * 获取元素的绝对坐标
     * @param  {obj} obj
     * @return {array} [offect().top, offect().left]
     */
    offset : function(obj) {
        return [obj.offect().top, obj.offect().left];
    },

    /**
     * 获取元素相对父元素的相对坐标
     * @param  {obj} obj
     * @return {array} [position().top, position().left]
     */
    position : function(obj) {
        return [obj.position().top, obj.position().left];
    }
});

//Attr模块
fw.extend(fw, {
    /**
     * 设置/获取属性
     * @param  {array} objs  dom集合
     * @param  {string} key   属性名
     * @param  {string} value 属性值
     * @return {string}       无value参数时返回属性值
     */
    attr : function(objs, key, value) {
        if (value) {
            for (var i = 0; i < objs.length; i++) {
                objs[i].setAttribute(key, value);
            }
        } else {
            return objs[0].getAttribute(key);
        }
    },

    /**
     * 判断元素是否指定class
     * @param  {obj}  obj
     * @param  {string}  cls className
     * @return {Boolean}
     */
    hasClass : function(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },

    /**
     * 添加class
     * @param {array} objs dom集合
     * @param {string} cls  className
     */
    addClass: function(objs, cls) {
        for (var i = 0; i < objs.length; i++) {
            if (!objs[i].hasClass(objs[i], cls)) {
                objs[i].className += " " + cls;
            }
        }
    },

    /**
     * 移除class
     * @param {array} objs dom集合
     * @param {string} cls  className
     */
    removeClass : function(objs, cls) {
        var patten = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        for (var i = 0; i < objs.length; i++) {
            if (hasClass(objs[i], cls)) {
                objs[i].className = objs[i].className.replace(reg, ' ');
            }
        }
    },

    /**
     * 切换class
     * @param {array} objs dom集合
     * @param {string} cls  className
     */
    toggleClass : function(objs,cls) {
        for (var i = 0; i < objs[i].length; i++) {
            if(hasClass(objs[i],cls)){
                removeClass(objs[i], cls);
            } else {
                addClass(objs[i], cls);
            }
        }
    }
});

//Event模块
fw.extend(fw, {
    /**
     * 兼容ie event
     * @param  {event} ev
     * @return {event}
     */
    getEvent : function(ev) {
        return ev ? ev : window.event;
    },

    /**
     * 获取触发事件的dom
     * @param  {event} ev
     * @return {obj}    dom
     */
    getTarget : function(ev) {
        var event = getEvent(ev);
        return event.target || event.srcElement;
    },

    /**
     * 阻止默认行为
     * @param  {event} ev
     * @return {null}
     */
    preventDefault : function(ev) {
        var event = getEvent(ev);
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    /**
     * 阻止冒泡
     * @param  {event} ev
     * @return {null}
     */
    stopPropagation : function(ev) {
        var event = getEvent(ev);
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    /**
     * 为dom绑定事件
     * @param  {obj}   obj  目标
     * @param  {string}   type 事件类型
     * @param  {Function} fn   触发事件后的行为
     * @return {null}
     */
    on : function(obj, type, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        } else if (obj.attachEvent) {
            obj.attachEvent('on' + type, fn);
        }
    },

    /**
     * 删除dom事件
     * @param  {obj}   obj  目标
     * @param  {string}   type 事件类型
     * @param  {Function} fn   触发事件后的行为
     * @return {null}
     */
    un : function(obj, type, fn) {
        if (obj.removeEventListener) {
            obj.removeEventListener(type, fn, false);
        } else if (obj.attachEvent) {
            obj.detachEvent(type, fn);
        }
    },

    /**
     * 为dom绑定click事件
     * @param  {obj}   obj
     * @param  {Function} fn
     * @return {null}
     */
    click : function(obj, fn) {
        this.on(obj, 'click', fn);
    },

    /**
     * 为dom绑定mouseover事件
     * @param  {obj}   obj
     * @param  {Function} fn
     * @return {null}
     */
    mouseover : function(obj, fn) {
        this.on(obj, 'mouseover', fn);
    },

    /**
     * 为dom绑定mouseout事件
     * @param  {obj}   obj
     * @param  {Function} fn
     * @return {null}
     */
    mouseout : function(obj, fn) {
        this.on(obj, 'mouseout', fn);
    },

    /**
     * 为dom绑定hover事件
     * @param  {obj}   obj
     * @param  {Function} fn
     * @return {null}
     */
    hover : function(obj, fnOver, fnOut) {
        this.on(obj, 'mouseover', fnOver);
        this.on(obj, 'mouseout', fnOut);
    }

});

//String模块
fw.extend(fw, {
    /**
     * 去除字符串左边空格
     * @param  {string} str
     * @return {string}
     */
    triml : function(str) {
        return str.replace(/(^\s*)/g,'');
    },

    /**
     * 去除字符串右边空格
     * @param  {string} str
     * @return {string}
     */
    trimr : function(str) {
        return str.replace(/(\s*$)/g,'');
    },

    /**
     * 去除字符串两边空格
     * @param  {string} str
     * @return {string}
     */
    trim : function(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }
});

//Number模块
fw.extend(fw, {
    /**
     * 生成范围内的随机数
     * @param  {int} min 起始值
     * @param  {int} max 结束值
     * @return {int}     随机数
     */
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

//Anmate模块
fw.extend(fw, {});
