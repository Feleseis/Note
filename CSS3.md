### 选择器
* 属性选择器
```css
E[attr]
E[attr="value"] /*属性值等于value*/
E[attr~="value"] /*属性值包含单词value*/
E[attr^="value"] /*属性值以value开头*/
E[attr$="value"] /*属性值以value结尾*/
E[attr*="value"] /*属性值包含value*/
E[attr|="value"] /*属性值等于value或value-开头*/
```
* 伪类选择器
```css
E:target /*表示当前的URL片段的类型，这个元素必须是E*/
E:disabled /*不可点击的表单控件*/
E:enabled /*可以点击的表单控件*/
E:checked /*已经选中的checkbox或radio*/
E:first-line /*E元素的第一行*/
E:first-letter /*E元素的第一个字符*/
E::selection /*E元素中的文字被用户选中*/
E::before /*生成内容在E元素前   content*/
E::after /*生成内容在E元素后*/
E:not(s) /*E元素不被匹配*/
E~F /*E元素毗邻的F元素*/
```
* 结构性伪类
```css
E:nth-child(n) /*E元素中的第n个子节点*/
E:nth-child(odd) /*奇数行*/
E:nth-child(even) /*偶数行*/
E:nth-child(2n)
E:nth-last-child(n) /*E元素中从后向前第n个子节点*/
E:nth-of-type(n) /*E元素中的第n个子节点， 且类型为E*/
E:nth-last-of-type(n) /*E元素中从后向前第n个子节点 且类型为E*/
E:empty /*E元素中没有子节点 注意：子节点包含文本节点*/
E:first-child /*E元素中的第一个子节点*/
E:last-child /*E元素中的最后一个子节点*/
E:first-of-type /*E父元素的第一个类型为E的子节点*/
E:last-of-type /*E父元素的最后一个类型为E的子节点*/
E:only-child /*E元素中只有一个不包含文本节点的子节点*/
E:only-of-type /*E父元素中只有一个不包含文本节点且类型为E的子节点*/
```
---
### 文字处理
* 文字阴影
```css
text-shadow: 0 0 0 #ccc; /*左右偏移 上下偏移 模糊程度 阴影颜色*/
```
* 文字描边
```css
-webkit-text-stroke: 0 0; /*宽度 颜色*/
```
* 文本排列方式
```css
direction: Rtl/Ltr; /*要配合unicode-bidi：bidi-override使用*/
```
* 省略文本的处理方式
```css
text-overflow: clip/elliosis; /*无省略号/省略号 注意配合overflow：hidden和white-space：nowarp使用*/
```
* 自定义字体
```css
@font-face {
font-family: myFirstFont;
src: url('Sansation_Light.ttf'),
     url('Sansation_Light.eot'); /* IE9+ */
}

E {
font-family: myFirstFont;
}
```
---
### 盒模型
* 弹性盒模型
  * 使用弹性盒模型时，父元素必须加display: box 或 display:inline-box
  * box-orient 定义盒模型的布局方向
    * horizontal 水平显示
    * vertical 垂直显示
  * box-direction 元素排列顺序
    * normal 正序
    * reverse 逆序
  * box-ordinal-group 设置元素的具体位置
  * box-flex 定义盒子的弹性空间
    * 子元素的尺寸 = 盒子的尺寸 * 子元素的box-flex属性值 / 所有子元素的box-flex属性值的和
  * box-pack 对盒子富裕空间进行管理
    * start 所有子元素在盒子左侧显示，富裕空间在右侧
    * end 所有子元素在盒子右侧显示，富裕空间在左侧
    * center 所有子元素居中
    * justify 富裕空间在子元素之间平均分布
  * box-align 在垂直方向上对元素进行管理
    * start 所有子元素居顶
    * end 所有子元素居底
    * center 所有子元素居中
* 盒模型阴影
  * box-shadow:[inset] x y blur [spread] color;
    * inset 内投影
    * x y 阴影偏移
    * blur 模糊半径
    * spread 扩展阴影半径 先扩展原有形状，再开始画阴影
    * color 阴影颜色
* 其他新增属性
  * box-reflect 倒影
    * 方向 above|below|left|right
    * 距离
    * [linear-gtadient()] 渐变
  * resize 自由缩放
    * both
    * horizontal 只能水平缩放
    * vertical 只能垂直缩放
    * 一定要配合overflow:auto
  * box-sizing 盒模型解析模式
    * content-box W3C标准盒模型
      * width/height = content + padding + border
    * border-box 微软盒模型
      * width / height = content
### CSS3布局
* 分栏布局
  * column-width 栏目宽度
  * column-count 栏目列数
  * column-gap 栏目距离
  * column-rule 栏目间隔线
* 响应式布局
  * 根据不同的屏幕尺寸引用不同的样式
```html
<link rel="stylesheet" type="text/css" href="a.css" media="screen and (min-width:100px) and (max-width:1000px)">
```
```html
<link rel="stylesheet" href="a.css" media="all and (orientation:portrait)">
```
```html
<link rel="stylesheet" href="a.css" media="all and (orientation:landscape)">
```
```css
@import url("a.css")  screen and (min-width:100px) and (max-width:1000px);
```
```css
@media screen and (min-width:100px) and (max-width:1000px) {}
```
### CSS3 动画
* transition过渡
  * transition-property 运动样式 all||[attr]||none
  * transition-duration 运动时间
  * transition-delay 延迟时间
  * transition-timing-function 运动形式
    * linear 匀速
    * ease 逐渐变慢
    * ease-in 加速
    * ease-out 减速
    * ease-in-out 先加速后减速
    * cubic-bezier 贝塞尔曲线(x1,y1,x2,y2)
  * 过渡事件完成
```javascript
obj.addEventListerner("webkitTransitionEnd", function(){},false); //webkit
obj.addEventListerner("transitionend", function(){},false); //moz
```
* transform 2D变换
  * rotate() 旋转 -deg 度数 -transform-origin 旋转基点
  * skew() 倾斜 -skexX() -skewY()
  * scale() 缩放 -scaleX() -scaleY()
  * translate() 位移 -translateX() -translateY()
* transform 3D变换
  * transform-style 建立3d空间 preserve-3d
  * persopective 景深
  * persopective-origin 景深基点
  * backface-visibility 隐藏背面
* animation 动画
  * @keyframes 动画名称 {动画状态}
  * 关键帧的时间单位 -数字 0% 100% -字符 from(0%) to(100%)
  * animation-name animation-duration 动画名称/持续时间
  * animation-play-state 播放状态 running/paused
  * animation-timing-function 运动形式
    * linear 匀速
    * ease 逐渐变慢
    * ease-in 加速
    * ease-out 减速
    * ease-in-out 先加速后减速
    * cubic-bezier 贝塞尔曲线(x1,y1,x2,y2)
  * animation-delay 动画延迟 只有第一次
  * animation-iteration-count 重复次数 infinite无限次
  * animation-direction 播放前重置 alternate 直接从上次停止的位置执行 normal 从0%开始
### CSS3 UI样式
* 圆角
  * border-radius:1-4/1-4;
* 边框
  * border-image 边框图片
    * border-image-sourceg 引入图片
    * border-image-slice 切割图片
    * border-image-width 边框宽度
    * border-image-repeat 图片排列方式 round-平铺 repeat-重复 stretch-拉伸
  * border-color 边框颜色
* 线性渐变
  * linear-gtadient([<起点>||<角度>,]?<点>,<点>...)
  * left/top/left top, 0 deg, color 50%
  * repeating-linear-gtadient
* 径向渐变
  * radial-gradient([<起点>]?[<形状>||<大小>,]?<点>,<点>...)
* 背景
  * background:url(a.jpg) 0 0, url(b.jpg) 0 100%; 多背景
  * background-size: x y; 背景尺寸
  * background-origin: border | padding | content; 从XXX区域显示背景
  * background-clip: border | padding | content | no-clip; 从XXX区域裁剪背景
* 遮罩
  * mask-image mask-position mask-repeat
