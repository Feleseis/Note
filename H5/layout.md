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

* Flex
  - 概念
    - 主轴：Flex容器的主轴主要用来配置Flex项目，默认是水平方向
    - 侧轴：与主轴垂直的轴称作侧轴，默认是垂直方向的
    - 方向：默认主轴从左向右，侧轴默认从上到下
    - 主轴和侧轴并不是固定不变的，通过flex-direction可以互换。
  - 必要元素
    - 指定一个盒子为伸缩盒子 display: flex
    - 设置属性来调整此盒的子元素的布局方式 例如 flex-direction
    - 明确主侧轴及方向
    - 可互换主侧轴，也可改变方向
  - 属性
    - flex-direction调整主轴方向（默认为水平方向）该属性通过定义flex容器的主轴方向来决定felx子项在flex容器中的位置
      - row 水平方向
      - row-reverse 反转
      - column 垂直方向
      - column-reverse 反转列
    - justify-content设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式
      - flex-start 起点对齐
      - flex-end 终点对齐
      - center 中间对齐
      - space-around 环绕
      - space-between 两端对齐
    - flex控制子项目的缩放比例
      - 不指定flex 属性，则不参与分配
    - align-items设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。
      - flex-start 起点对齐
      - flex-end 终点对齐
      - center 中间对齐
      - baseline 基线
      - Strethc 拉伸
    - order 设置伸缩项的显示顺序
  - [参考资料](http://www.w3cplus.com/css3/flexbox-basics.html)
