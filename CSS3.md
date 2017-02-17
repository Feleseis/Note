## 选择器
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




* 1
```css
```
