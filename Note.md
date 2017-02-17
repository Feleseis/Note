## HTML
---
## CSS
* 清除浮动
```css
.clear:after {
  content:"";
  display:block;
  clear:both;
}
```

* 图片圆角
```css
.pic_radius {
  border-radius: 5px;
  overflow:hidden;
}
```
* 小三角形
```css
.triangle {
  width: 0;
  height: 0;
  overflow: hidden;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent #000;
}
```
---
## Javascript
* DOM优化
  * Js操作DOM:
    * 尽量减少对DOM的操作
    * 节点克隆 —— cloneNode
    * 访问元素集合 —— 尽量用局部变量
    * 元素节点 —— 尽量只用获取元素节点的方法
    * 选择器API —— 利用querySelector、querySelectorAll
    * webkit:dom方法比innerHTML性能好 moz:则相反
  * DOM与浏览器
    * 重排 —— 改变页面的内容
    * 重绘 —— 浏览器显示内容
    * 添加顺序 —— 尽量在appendChild前添加操作
    * 合并DOM操作 —— 利用cssText
    * 缓存布局信息
    * 文档碎片 —— createDocumentFragment()
  * DOM与事件
    * 事件委托
  * DOM与前端模板
    * 逻辑与视图的分离，MVC框架

* 控制台调试语句
```javascript
console.dir(); //输出所有信息
console.dirxml(); //输出当前代码结构
console.log();
console.warn();
console.error();
console.group(); console.groupEnd(); //分组
console.assert(); //断言失败
console.trace(); //追踪运行路径
console.time("a"); console.timeEnd("a");
console.profile(); console.profileEnd(); //显示性能
```
* 定时器
    * 使用定时器之前 关闭已有定时器
    * 把定时器之前的行为和关闭定时器隔开(if/else)
    * 每个obj单独一个定时器

* Js跨域
  * ajax: XMLHttpRequest(); 不能跨域
  * 解决方案
    * document.domain = "x.com";
    * 服务器代理 XMLHttpRequest代理文件
    * script标签 jsonp: json+padding(内填充)
    * location.hash
    * window.name
    * flash
    * html5 postMessage

* Js闭包
  * 特征
    * 函数嵌套函数
    * 内部函数能引用外部函数的参数和变量
    * 参数和变量不会被垃圾回收机制回收
  * 优点
    * 变量能长期驻扎在内存中
    * 避免全局变量污染
    * 私有成员的存在
  * 应用
    * 模块化代码
    * 循环中直接找到对应元素的索引
  * 注意
    * IE下会引发内存泄漏 手动将变量指向null

* Js对象引用
  * 对象和函数都是引用关系
  * 浅拷贝与深拷贝
    * 将对象的每个attr都拷贝
    * 深拷贝——递归的方式进行拷贝
* Js函数声明与函数表达式
  * 函数表达式可以直接在后面加括号执行，函数声明不可以
  * 函数声明可以提前被解析
* Js事件委托
  * 利用冒泡原理把事件加到父级上，触发执行效果
  * 好处
    * 提高性能
    * 新添加的元素，还会有之前的事件
---

## Other
* 模块化
  * 找出公共部分，提炼出来，然后再写私有部分
* 大纲算法原则
  * &lt;section&gt; &lt;nav&gt;  大纲要求有标题h1~h6。
  * &lt;section&gt; 是某个区域章节的标题，&lt;h1&gt;是整个网站的标题。
  * &lt;nav&gt; 本质上市用来存放一组作为导航的链接。
  * &lt;section&gt; 必须有标题才规范。 &lt;nav&gt; 如果没有也是合理的。添上会让大纲更好看。页面中可隐藏。
  * &lt;header&gt; 不需要强制标题，如果有标题算body的。
* 运动
  * 缓冲运动时 速度取整  
  * 速度由距离决定
  * 速度 = (目标值 - 当前值) / 缩放系数
  * 匀速运动终止条件 距离足够近
  * 缓冲运动终止条件 两点重合
<pre></pre>
