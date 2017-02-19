## 语义化标签
* &lt;header&gt;&lt;/header&gt; 页眉
  * 主要用于页面的头部的信息介绍，也可用于板块头部
* &lt;hgroup&gt;&lt;/hgroup&gt; 页面上的一个标题组合
  * 一个标题和一个子标题，或者标语的组合
* &lt;nav&gt;&lt;/nav&gt; 导航 （包含链接的的一个列表）
* &lt;footer&gt;&lt;/footer&gt;页脚
  * 页面的底部 或者 版块底部
* &lt;section&gt;&lt;section&gt; 页面上的版块
  * 用于划分页面上的不同区域,或者划分文章里不同的节
* &lt;article&gt;&lt;/article&gt; 用来在页面中表示一套结构完整且独立的内容部分
  * 可以用来呈现论坛的一个帖子，杂志或报纸中的一篇文章，一篇博客，用户提交的评论内容，可互动的页面模块挂件等。
* &lt;aside&gt;&lt;/aside&gt; 元素标签可以包含与当前页面或主要内容相关的引用、侧边栏、广告、nav元素组，以及其他类似的有别与主要内容的部分
  * aside 的内容应该与 article 的内容相关。
  * 被包含在&lt;article&gt;中作为主要内容的附属信息部分，其中的内容 以是与当前文章有关的引用、词汇列表等
  * 在&lt;article&gt;之外使用，作为页面或站点全局的附属信息部分；最典型的形式是侧边栏(sidebar)，其中的内容可以是友情链接、附属导航或广告单元等。
* &lt;figure>&lt;/figure&gt; 用于对元素进行组合。一般用于图片或视频
* &lt;figcaption&gt;&lt;/figcaption&gt; figure的子元素 用于对figure的内容 进行说明
* &lt;time&gt;&lt;/time&gt;用来表现时间或日期
* &lt;datalist&gt;&lt;/datalist&gt;选项列表。与 input 元素配合使用，来定义 input 可能的值。
* &lt;details&gt;&lt;/details&gt;用于描述文档或文档某个部分的细节
  * 该元素用于摘录引用等 应该与页面的主要内容区分开的其他内容
  * Open 属性默认展开
* &lt;summary>&lt;/summary> details 元素的标题
* &lt;dialog>&lt;/dialog>定义一段对话
* &lt;address>&lt;/address>定义文章 或页面作者的详细联系信息
* &lt;mark&gt;&lt;/mark&gt; 需要标记的词或句子
* &lt;keygen&gt;给表单添加一个公钥
* &lt;progress&gt;&lt;/progress&gt;定义进度条

## 表单
* 输入型表单控件
  * email 电子邮箱文本框，跟普通的没什么区别
    * 当输入不是邮箱的时候，验证通不过
    * 移动端的键盘会有变化
  * tel 电话号码
  * url 网页的URL
  * search 搜索引擎
    * chrome下输入文字后，会多出一个关闭的X
  * range 特定范围内的数值选择器
  * min、max、step( 步数 )
  * number 只能包含数字的输入框
  * color 颜色选择器
  * datetime 显示完整日期
  * datetime-local  显示完整日期，不含时区
  * time 显示时间，不含时区
  * date 显示日期
  * week 显示周
  * month 显示月
    * 表单特性及函数
  * placeholder 输入框提示信息
  * autocomplete 是否保存用户输入值
    * 默认为on，关闭提示选择off
  * autofocus 指定表单获取输入焦点
  * list和datalist 为输入框构造一个选择列表
    * list值为datalist标签的id
  * required 此项必填，不能为空
  * pattern正则验证  pattern="\\d{1,5}“
  * formaction 在submit里定义提交地址
* 表单验证
  * validity对象，通过下面的valid可以查看验证是否通过，如果八种验证都通过返回true，一种验证失败返回false
    * oText.addEventListener("invalid",fn1,false);
    * ev.preventDefault()
    * valueMissing 输入值为空时
    * typeMismatch 控件值与预期类型不匹配
    * patternMismatch 输入值不满足pattern正则
    * tooLong 超过maxLength最大限制
    * rangeUnderflow验证的range最小值
    * rangeOverflow：验证的range最大值
    * stepMismatch: 验证range 的当前值 是否符合min、max及step的规则
    * customError 不符合自定义验证 setCustomValidity(); 自定义验证
  * Invalid事件 验证反馈 input.addEventListener('invalid',fn,false)
    * 阻止默认验证：ev.preventDefault()
  * formnovalidate属性 关闭验证
## 选择器
* querySelector
  * 只能选择一组标签的第一个元素
* querySelectorAll
* getElementsByClassName

## 获取class列表属性
* classList
  * length class的长度
  * add() 添加class方法
  * remove() 删除class方法
  * toggle() 切换class方法 没有就添加 有则删除
## JSON
* parse() 把字符串转成json
  * 字符串中的属性要严格的加上引号
* stringify() 把json转化成字符串
  * 会自动的把双引号加上
* 新方法与eval的区别
  * eval可以解析任何字符串变成js
  * parse()只能解析json形式的字符串变成js
* 新方法的应用
  * 深度克隆新对象
* 如何其他浏览器做到兼容
  * [json2.js](http://www.json.org/)
## data自定义数据
* dataset
  * data-name dataset.name
  * data-name-first dataset.nameFirst
* Data数据在jquery mobile中有着重要作用
## 延迟加载JS
* JS的加载会影响后面的内容加载
  * 很多浏览器都采用了并行加载JS，但还是会影响其他内容
* Html5的defer和async
  * defer 延迟加载，会按顺序执行，在onload执行前被触发
  * async 异步加载，加载完就触发，有顺序问题
* Labjs库
## 历史管理
* onhashchange 改变hash值来管理
* history
  * 服务器下运行
  * pushState 三个参数 数据  标题(都没实现)  地址(可选)
  * popstate事件 读取数据   event.state
  * 注意：网址是虚假的，需在服务器指定对应页面，不然刷新找不到页面
## 拖放事件
* draggable
  * 设置为true，元素就可以拖拽了
* 拖拽元素事件 事件对象为被拖拽元素
  * dragstart 拖拽前触发
  * drag  拖拽前、拖拽结束之间，连续触发
  * dragend 拖拽结束触发
* 目标元素事件 事件对象为目标元素
  * dragenter 进入目标元素触发，相当于mouseover
  * dragover 进入目标、离开目标之间，连续触发
  * dragleave，离开目标元素触发，相当于mouseout
  * drop 在目标元素上释放鼠标触发
* 事件的执行顺序 drop不触发的时候
  * dragstart  >  drag >  dragenter >  dragover >  dragleave > dragend
* 事件的执行顺序 drop触发的时候(dragover的时候阻止默认事件)
  * dragstart  >  drag >  dragenter >  dragover >  drop > dragend
* 不能释放的光标和能释放的光标不一样
* 解决火狐下的问题
  * 必须设置dataTransfer对象才可以拖拽除图片外的其他标签
* dataTransfer对象
  * setData() 设置数据 key和value(必须是字符串)
  * getData() 获取数据，根据key值，获取对应的value
  * effectAllowed
    * effectAllowed 设置光标样式(none， copy， copyLink，copyMove，link，linkMove，move，all 和 uninitialized)
  * setDragImage
    * 三个参数 指定的元素，坐标X，坐标Y
  * files
    * 获取外部拖拽的文件，返回一个filesList列表
    * filesList下有个type属性，返回文件的类型
## FileReader 读取文件信息
* readAsDataURL
  * 参数为要读取的文件对象，将文件读取为DataUrl
* onload
  * 当读取文件成功完成的时候触发此事件
  * this. result，来获取读取的文件数据，如果是图片，将返回base64格式的图片数据
## canvas
## 跨文本消息通信
* postMessage对象
  * 接收消息的窗口对象 .postMessage(发送的数据， 接收的域)
  * 交互方式
    * iframe contentWindow window.top
    * 窗口页 window.open window.opener
  * 接收事件
    * message
    * ev.origin 发送数据来源的域
    * ev.data 送的消息
* XMLHttpReques Level 2
  * XMLHttpRequest 改进版
    * 请求页面和数据页面必须属于不同的域
    * 服务器要设置响应头
    * origin值展现
    * ie XDomainRequest
    * 新的事件 onload
    * [XMLHttpRequest2](http://www/w3/org/TR/XMLHttpRequest2)
  * 进度事件
    * upload.onprogress上传
    * FormData对象
    * ev.total已发送的总量 ev.loaded未发送的总量
    * onprogress 下载
## websocket
* 互联网协议
  * [www.ruanyifeng.com](http://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html)
  * TCP/IP协议
    * 定义了电子设备如何连入因特网，以及数据在它们之间传输的标准(如何传输)
    * 传输数据（协议）类型:Email,www,FTP等
  * HTTP协议
    * 浏览器和万维网服务器之间互相通信的规则
* HTTP协议特点
  * 功能很强大
  * 采用请求、响应模式，单项通信
  * 短连接，响应完成连接就断开
* 实时web交互
  * 股票、聊天室、网游等应用
  * 如果实现实时应用？服务器推送
* websocket?
  * 基于TCP的双向的、全双工的数据连接
    * 双向的：客户端、服务器端
    * 全双工：数据的发送与接收，两者同步进行
  * 建立socket应用?
    * 服务器必须支持web socket.
    * Nodejs的简介 Ryan Dahl基于GoogleV8引擎创建的一套用来编写高性能网络服务器的JavaScript工具包
    * Nodejs 用js去写服务器应用    
  * 一个简单的web服务器
    * 创建HTTP服务
    * 监听客户端HTTP请求连接
    * 处理请求响应，向客户端输出返回内容
  * Websocket连接
    * 客户端发送Websocket连接请求
    * 服务器监听来自Websocket连接请求
    * 当连接成功后，客户端和服务器可以随时接收和发送数据
  * Node.js
    * 安装node.js
    * 转到项目目录
    * 运行node scriptname.js
    * http服务器的创建
    * 安装websocket模块npm install socket.io
    * websocket服务的创建
## applicationCache
* 离线应用是什么？
  * 乘坐飞机、手机信号弱、去演讲的时候，可能没有网络，这个时候就可以采用离线应用。
  * 离线存储如何工作的？
* 离线存储的好处？
  * 没网的时候，可以正常访问
  * 快速相应页面，不必用多个HTTP占用资源带宽
  * 缓存的可以是任何文件
* 搭建离线应用程序
  * 服务器设置头信息
    * AddType text/cache-manifest .manifest
  * html标签加
    * manifest="xxxxx.manifest"
  * 写manifest文件 离线的清单列表
    * 先写 CACHE MANIFEST
    * FALLBACK 第一个网络地址没获取到，就走第二个缓存的
    * NETWORK 无论缓存中存在与否，均从网络获取
## Web  Workers
* 什么是worker?
  * JS的单线程（放入UI队列的个数，利用定时器解决）
  * 可以让web应用程序具备后台处理能力，对多线程的支持非常好。
* Worker API
  * new Worker("后台处理的JS地址")
  * 利用postMessage传输数据
  * importScripts("导入其他JS文件")
* Worker运行环境
  * navgator appName、appVersion、userAgent、platform
  * location 所有属性都是只读的
  * self 指向全局 worker 对象
  * 所有的ECMA对象，Object、Array、Date等
  * XMLHttpRequest构造器
  * setTimeout和setInterval方法
  * close()方法，立刻停止worker运行
  * importScripts方法
## Geolocation
* 地理位置
  * 经度 南北极的连接线
  * 纬度 东西连接的线
* 位置信息从何而来
  * IP地址
  * GPS全球定位系统
  * Wi-Fi无线网络
  * 基站
* 地理位置对象
  * navigator.geolocation
  * 单次定位请求 getCurrentPosition(请求成功，请求失败，数据收集方式)
  * 请求成功函数
    * 经度 coords.longitude
    * 纬度 coords.latitude
    * 准确度 coords.accuracy
    * 海拔 coords.altitude
    * 海拔准确度 coords.altitudeAcuracy
    * 行进方向 coords.heading
    * 地面速度 coords.speed
    * 时间戳 new Date(position.timestamp)
  * 请求失败函数
    * 失败编号 code
    * 0  不包括其他错误编号中的错误
    * 1  用户拒绝浏览器获取位置信息
    * 2  尝试获取用户信息，但失败了
    * 3   设置了timeout值，获取位置超时了
  * 数据收集 json的形式
    * enableHighAcuracy  更精确的查找，默认false
    * timeout  获取位置允许最长时间，默认infinity
    * maximumAge 位置可以缓存的最大时间，默认0
  * 多次定位请求  watchPosition(像setInterval)
    * 移动设备有用，位置改变才会触发
    * 配置参数：frequency 更新的频率
  * 关闭更新请求  clearWatch(像clearInterval)
## 本地存储
* Cookie
* 数据存 储到计算机中，通过浏览器控制添加与删除数据
* Cookie的特点
  * 存储限制
    * 域名100个cookie,每组值大小4KB
  * 客户端、服务器端，都会请求服务器（头信息）
  * 页面间的cookie是共享
* Storage
  * sessionStorage
    * session临时回话，从页面打开到页面关闭的时间段
    * 窗口的临时存储，页面关闭，本地存储消失
  * localStorage
    * 永久存储（可以手动删除数据）
* Storage的特点
  * 存储量限制 ( 5M )
  * 客户端完成，不会请求服务器处理
  * sessionStorage数据是不共享、 localStorage共享
  * Storage API
    * setItem()
      * 设置数据，key/value类型，类型都是字符串
      * 可以用获取属性的形式操作
    * getItem()
      * 获取数据，通过key来获取到相应的value
    * removeItem()
      * 删除数据，通过key来删除相应的value
    * clear()
      * 删除全部存储的值
    * 存储事件:
      * 当数据有修改或删除的情况下，就会触发storage事件
      * 在对数据进行改变的窗口对象上是不会触发的
      * Key : 修改或删除的key值，如果调用clear(),key为null
      * newValue  新设置的值，如果调用removeStorage(),key为null
      * oldValue 调用改变前的value值
      * storageArea : 当前的storage对象
      * url 触发该脚本变化的文档的url
      * 注：session同窗口才可以,例子：iframe操作
## 音频和视频
* 标签
  * audio 、video
  * source
* 视频容器
  * 容器文件，类似于压缩了一组文件
    * 音频轨道
    * 视频轨道
    * 元数据：封面，标题，字幕等
    * 格式：.avi、.flv、.mp4、.mkv、.ogv等
* 编解码器
  * 原始的视频容器非常大，添加需编码，播放需解码
  * 音频编解码器
    * AAC、MPEG-3、Ogg Vorbis
  * 视频编解码器
    * H.264、VP8、Ogg Theora
* 媒体元素
  * controls   显示或隐藏用户控制界面
  * autoplay  媒体是否自动播放
  * loop  : 媒体是否循环播放
  * currentTime  开始到播放现在所用的时间
  * duration  媒体总时间(只读)
  * volume   0.0-1.0的音量相对值
  * muted   是否静音
  * autobuffer   开始的时候是否缓冲加载，autoplay的时候，忽略此属性
  * paused   媒体是否暂停(只读)
  * ended    媒体是否播放完毕(只读)
  * error   媒体发生错误的时候，返回错误代码 (只读)
  * currentSrc   以字符串的形式返回媒体地址(只读)
  * play()  媒体播放
  * pause()  媒体暂停
  * load()  重新加载媒体
  * loadstart progress suspend emptied stalled play pause loadedmetadata loadeddata waiting playing canplay canplaythrough seeking seeked timeupdate ended ratechange durationchange volumechange
* Video额外特性
  * poster   视频播放前的预览图片
  * width、height   设置视频的尺寸
  * videoWidth、 videoHeight   视频的实际尺寸(只读)
