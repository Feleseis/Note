* 布局常用方式
  - 如果是分两列布局，可以同时对两个盒子应用浮动来进行布局，可以设定左右两个盒子自己的宽度或者是宽度百分比。
  - 同样是分两列布局，也可以对左边的盒子应用左浮动布局，对右边的盒子应用定位或者设置它的margin值来定位。
  - 对于三列布局，最好采用浮动加定位的方法，对于左右两侧的盒子进行浮动处理，对于中间元素（盒子）进行设置其左右margin来实现定位。
* 父容器塌陷解决方式
  - 给父容器设置一个高度
  - 设置父容器overflow：hidden或者overflow：auto； BFC
  - 设置父元素浮动（不推荐）
  - 设置空元素对其（clear：both）
  - 给父元素应用以下样式
```css
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
}
.clearfix::after {
  clear: both;
}
```
