## DOM 属性/方法
>* element.accessKey	设置或返回元素的快捷键。
>* element.appendChild()	向元素添加新的子节点，作为最后一个子节点。
>* element.attributes	返回元素属性的 NamedNodeMap。
>* element.childNodes	返回元素子节点的 NodeList。
>* element.className	设置或返回元素的 class 属性。
>* element.clientHeight	返回元素的可见高度。
>* element.clientWidth	返回元素的可见宽度。
>* element.cloneNode()	克隆元素。
>* element.compareDocumentPosition()	比较两个元素的文档位置。
>* element.contentEditable	设置或返回元素的文本方向。
>* element.dir	设置或返回元素的文本方向。
>* element.firstChild	返回元素的首个子。
>* element.getAttribute()	返回元素节点的指定属性值。
>* element.getAttributeNode()	返回指定的属性节点。
>* element.getElementsByTagName()	返回拥有指定标签名的所有子元素的集合。
>* element.getFeature()	返回实现了指定特性的 API 的某个对象。
>* element.getUserData()	返回关联元素上键的对象。
>* element.hasAttribute()	如果元素拥有指定属性，则返回true，否则返回 false。
>* element.hasAttributes()	如果元素拥有属性，则返回 true，否则返回 false。
>* element.hasChildNodes()	如果元素拥有子节点，则返回 true，否则 false。
>* element.id	设置或返回元素的 id。
>* element.innerHTML	设置或返回元素的内容。
>* element.insertBefore()	在指定的已有的子节点之前插入新节点。
>* element.isContentEditable	设置或返回元素的内容。
>* element.isDefaultNamespace()	如果指定的 namespaceURI 是默认的，则返回 true，否则返回 false。
>* element.isEqualNode()	检查两个元素是否相等。
>* element.isSameNode()	检查两个元素是否是相同的节点。
>* element.isSupported()	如果元素支持指定特性，则返回 true。
>* element.lang	设置或返回元素的语言代码。
>* element.lastChild	返回元素的最后一个子元素。
>* element.namespaceURI	返回元素的 namespace URI。
>* element.nextSibling	返回位于相同节点树层级的下一个节点。
>* element.nodeName	返回元素的名称。
>* element.nodeType	返回元素的节点类型。
>* element.nodeValue	设置或返回元素值。
>* element.normalize()	合并元素中相邻的文本节点，并移除空的文本节点。
>* element.offsetHeight	返回元素的高度。
>* element.offsetWidth	返回元素的宽度。
>* element.offsetLeft	返回元素的水平偏移位置。
>* element.offsetParent	返回元素的偏移容器。
>* element.offsetTop	返回元素的垂直偏移位置。
>* element.ownerDocument	返回元素的根元素（文档对象）。
>* element.parentNode	返回元素的父节点。
>* element.previousSibling	返回位于相同节点树层级的前一个元素。
>* element.removeAttribute()	从元素中移除指定属性。
>* element.removeAttributeNode()	移除指定的属性节点，并返回被移除的节点。
>* element.removeChild()	从元素中移除子节点。
>* element.replaceChild()	替换元素中的子节点。
>* element.scrollHeight	返回元素的整体高度。
>* element.scrollLeft	返回元素左边缘与视图之间的距离。
>* element.scrollTop	返回元素上边缘与视图之间的距离。
>* element.scrollWidth	返回元素的整体宽度。
>* element.setAttribute()	把指定属性设置或更改为指定值。
>* element.setAttributeNode()	设置或更改指定属性节点。
>* element.setIdAttribute()
>* element.setIdAttributeNode()
>* element.setUserData()	把对象关联到元素上的键。
>* element.style	设置或返回元素的 style 属性。
>* element.tabIndex	设置或返回元素的 tab 键控制次序。
>* element.tagName	返回元素的标签名。
>* element.textContent	设置或返回节点及其后代的文本内容。
>* element.title	设置或返回元素的 title 属性。
>* element.toString()	把元素转换为字符串。
>* nodelist.item()	返回 NodeList 中位于指定下标的节点。
>* nodelist.length	返回 NodeList 中的节点数。
## DOM 事件
* 鼠标事件
>* onclick	当用户点击某个对象时调用的事件句柄。
>* oncontextmenu	在用户点击鼠标右键打开上下文菜单时触发	 
>* ondblclick	当用户双击某个对象时调用的事件句柄。
>* onmousedown	鼠标按钮被按下。
>* onmouseenter	当鼠标指针移动到元素上时触发。
>* onmouseleave	当鼠标指针移出元素时触发
>* onmousemove	鼠标被移动。
>* onmouseover	鼠标移到某元素之上。
>* onmouseout	鼠标从某元素移开。
>* onmouseup	鼠标按键被松开。
* 键盘事件
>* onkeydown	某个键盘按键被按下。
>* onkeypress	某个键盘按键被按下并松开。
>* onkeyup	某个键盘按键被松开。
* 框架/对象（Frame/Object）事件
>* onabort	图像的加载被中断。 ( <object>)
>* onbeforeunload	该事件在即将离开页面（刷新或关闭）时触发
>* onerror	在加载文档或图像时发生错误。 ( <object>, <body>和 <frameset>)	 
>* onhashchange	该事件在当前 URL 的锚部分发生修改时触发。	 
>* onload	一张页面或一幅图像完成加载。
>* onpageshow	该事件在用户访问页面时触发
>* onpagehide	该事件在用户离开当前网页跳转到另外一个页面时触发
>* onresize	窗口或框架被重新调整大小。
>* onscroll	当文档被滚动时发生的事件。
>* onunload	用户退出页面。 ( <body> 和 <frameset>)
* 表单事件
>* onblur	元素失去焦点时触发
>* onchange	该事件在表单元素的内容改变时触发( &lt;input&gt;, &lt;keygen&gt;, &lt;select&gt;, 和 &lt;textarea&gt;)
>* onfocus	元素获取焦点时触发
>* onfocusin	元素即将获取焦点时触发
>* onfocusout	元素即将失去焦点时触发
>* oninput	元素获取用户输入时触发
>* onreset	表单重置时触发
>* onsearch	用户向搜索域输入文本时触发 ( &lt;input="search"&gt;)	 
>* onselect	用户选取文本时触发 ( &lt;input&gt; 和 &lt;textarea&gt;)
>* onsubmit	表单提交时触发
* 剪贴板事件
>* oncopy	该事件在用户拷贝元素内容时触发	 
>* oncut	该事件在用户剪切元素内容时触发	 
>* onpaste	该事件在用户粘贴元素内容时触发	 
* 打印事件
>* onafterprint	该事件在页面已经开始打印，或者打印窗口已经关闭时触发	 
>* onbeforeprint	该事件在页面即将开始打印时触发
* 拖动事件
>* ondrag	该事件在元素正在拖动时触发	 
>* ondragend	该事件在用户完成元素的拖动时触发	 
>* ondragenter	该事件在拖动的元素进入放置目标时触发	 
>* ondragleave	该事件在拖动元素离开放置目标时触发	 
>* ondragover	该事件在拖动元素在放置目标上时触发	 
>* ondragstart	该事件在用户开始拖动元素时触发	 
>* ondrop	该事件在拖动元素放置在目标区域时触发
* 多媒体（Media）事件
>* onabort	事件在视频/音频（audio/video）终止加载时触发。	 
>* oncanplay	事件在用户可以开始播放视频/音频（audio/video）时触发。	 
>* oncanplaythrough	事件在视频/音频（audio/video）可以正常播放且无需停顿和缓冲时触发。	 
>* ondurationchange	事件在视频/音频（audio/video）的时长发生变化时触发。	 
>* onemptied	当期播放列表为空时触发	 
>* onended	事件在视频/音频（audio/video）播放结束时触发。	 
>* onerror	事件在视频/音频（audio/video）数据加载期间发生错误时触发。	 
>* onloadeddata	事件在浏览器加载视频/音频（audio/video）当前帧时触发触发。	 
>* onloadedmetadata	事件在指定视频/音频（audio/video）的元数据加载后触发。	 
>* onloadstart	事件在浏览器开始寻找指定视频/音频（audio/video）触发。	 
>* onpause	事件在视频/音频（audio/video）暂停时触发。	 
>* onplay	事件在视频/音频（audio/video）开始播放时触发。	 
>* onplaying	事件在视频/音频（audio/video）暂停或者在缓冲后准备重新开始播放时触发。	 
>* onprogress	事件在浏览器下载指定的视频/音频（audio/video）时触发。	 
>* onratechange	事件在视频/音频（audio/video）的播放速度发送改变时触发。	 
>* onseeked	事件在用户重新定位视频/音频（audio/video）的播放位置后触发。	 
>* onseeking	事件在用户开始重新定位视频/音频（audio/video）时触发。	 
>* onstalled	事件在浏览器获取媒体数据，但媒体数据不可用时触发。	 
>* onsuspend	事件在浏览器读取媒体数据中止时触发。	 
>* ontimeupdate	事件在当前的播放位置发送改变时触发。	 
>* onvolumechange	事件在音量发生改变时触发。	 
>* onwaiting	事件在视频由于要播放下一帧而需要缓冲时触发。
* 动画事件
>* animationend	该事件在 CSS 动画结束播放时触发	 
>* animationiteration	该事件在 CSS 动画重复播放时触发	 
>* animationstart	该事件在 CSS 动画开始播放时触发
* 过渡事件
>* transitionend	该事件在 CSS 完成过渡后触发。
* 其他事件
>* onmessage	该事件通过或者从对象(WebSocket, Web Worker, Event Source 或者子 frame 或父窗口)接收到消息时触发	 
>* onmousewheel	已废弃。 使用 onwheel 事件替代	 
>* ononline	该事件在浏览器开始在线工作时触发。	 
>* onoffline	该事件在浏览器开始离线工作时触发。	 
>* onpopstate	该事件在窗口的浏览历史（history 对象）发生改变时触发。	 
>* onshow	该事件当 <menu> 元素在上下文菜单显示时触发	 
>* onstorage	该事件在 Web Storage(HTML 5 Web 存储)更新时触发	 
>* ontoggle	该事件在用户打开或关闭 <details> 元素时触发	 
>* onwheel	该事件在鼠标滚轮在元素上下滚动时触发

### 事件对象
* 常量
>* CAPTURING-PHASE	当前事件阶段为捕获阶段(3)
>* AT-TARGET	当前事件是目标阶段,在评估目标事件(1)
>* BUBBLING-PHASE	当前的事件为冒泡阶段 (2)
* 属性
>* bubbles	返回布尔值，指示事件是否是起泡事件类型。
>* cancelable	返回布尔值，指示事件是否可拥可取消的默认动作。
>* currentTarget	返回其事件监听器触发该事件的元素。
>* eventPhase	返回事件传播的当前阶段。
>* target	返回触发此事件的元素（事件的目标节点）。
>* timeStamp	返回事件生成的日期和时间。
>* type	返回当前 Event 对象表示的事件的名称。
* 方法
>* initEvent()	初始化新创建的 Event 对象的属性。
>* preventDefault()	通知浏览器不要执行与事件关联的默认动作。
>* stopPropagation()	不再派发事件。
### 目标事件对象
* 方法
>* addEventListener()	允许在目标事件中注册监听事件(IE8 = attachEvent())
>* dispatchEvent()	允许发送事件到监听器上 (IE8 = fireEvent())
>* removeEventListener()	运行一次注册在事件目标上的监听事件(IE8 = detachEvent())
### 事件监听对象
* 方法
>* handleEvent()	把任意对象注册为事件处理程序
### 文档事件对象
* 方法
>* createEvent()	 
### 鼠标/键盘事件对象
* 属性
>* altKey	返回当事件被触发时，"ALT" 是否被按下。
>* button	返回当事件被触发时，哪个鼠标按钮被点击。
>* clientX	返回当事件被触发时，鼠标指针的水平坐标。
>* clientY	返回当事件被触发时，鼠标指针的垂直坐标。
>* ctrlKey	返回当事件被触发时，"CTRL" 键是否被按下。
>* Location	返回按键在设备上的位置
>* charCode	返回onkeypress事件触发键值的字母代码。
>* key	在按下按键时返回按键的标识符。
>* keyCode	返回onkeypress事件触发的键的值的字符代码，或者 onkeydown 或 onkeyup 事件的键的代码。
>* which	返回onkeypress事件触发的键的值的字符代码，或者 onkeydown 或 onkeyup 事件的键的代码。
>* metaKey	返回当事件被触发时，"meta" 键是否被按下。
>* relatedTarget	返回与事件的目标节点相关的节点。
>* screenX	返回当某个事件被触发时，鼠标指针的水平坐标。
>* screenY	返回当某个事件被触发时，鼠标指针的垂直坐标。
>* shiftKey	返回当事件被触发时，"SHIFT" 键是否被按下。
* 方法
>* initMouseEvent()	初始化鼠标事件对象的值
>* initKeyboardEvent()	初始化键盘事件对象的值
