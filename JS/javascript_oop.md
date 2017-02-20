## 函数的定义
* 在栈中定义了一个fn 其指向堆中的function对象function(){}
```javascript
function fn () {}
```
* 由于函数是一个对象，所以可以如下方式定义
  - fn2指向了function(){}的一份拷贝
```javascript
function fn () {}
var fn2 = fn;
```
* 函数虽然是一个对象，但却和对象有一些差别
  - 对象是通过引用完成对象的赋值
  - 函数是通过对象的拷贝完成赋值
  - fn2改变不会影响fn
  - 两个引用并没有指向同一个对象
* 函数就是一个对象
```javascript
var fn = new Function("a", "b", "return a + b");
//等价于
function fn (a, b) {
  return a + b;
}
```
## 函数的重载
* 函数的参数和调用没有关系
  - js中函数不存在重载，只存在覆盖，后面的会覆盖前面的定义
```javascript
var sum = function (a, b) {
  return a + b;
};
var sum = function (a) {
  return a + 100;
};
console.log(sum(10)); //110
console.log(sum(10,10)); //110
```
## 函数的传值
* 由于函数是对象，所以可以直接把函数作为参数传递进来
```javascript
function callFun (fun, arg) {
  return fun(arg);
}
function say (str) {
  console.log(str);
}
say("aaa"); //aaa
callFun(say,"bbb"); //bbb
```
* 函数作为返回值
```javascript
function fn(arg){
  var rel = function(num){
    return arg + num;
  }
  return rel;
}
var fn2 = fn(20);
console.log(fn2(30)); //50

function sortByName(a, b){
  return a - b;
}
var as = [1,3,10,23,190,210];
//console.log(as.sort()); //[ 1, 10, 190, 210, 23, 3 ]
as.sort(sortByName);
console.log(as); //[ 1, 3, 10, 23, 190, 210 ]
```
## arguments & this
* 函数对象中有一个属性——arguments，通过这个属性可以获取相应的参数值，这个属性是一个数组，就是传递进来的参数
```javascript
function say(str){
  console.log(arguments.length);
  console.log(str);
}
say("a", "b", "c");
```
* 在arguments这个对象中有一个callee方法，arguments.callee(arg)可以反向调用
* 以下方式实现了函数名的解耦合，js中通常使用这种方式进行递归
```javascript
function factorial(num){
  if (num < 1) {
    return 1;
  } else {
    // return num * factorial(num - 1);
    return num * arguments.callee(num - 1);
  }
}
console.log(factorial(5));
```
* 需要创建一个类的时候，设置类的属性和方法需要通过this关键字来引用
* this关键字会在调用时动态地指向调用它的对象
```javascript
var color = "green";
function showColor(){
  console.log(this.color);
}
function Circle(color){
  this.color = color;
  this.show = showColor;
}
var c = new Circle("red");
c.show();
```
## 函数的属性 length & prototype
* length 是该函数所期望传递进来参数的个数
```javascript
function fn(a,b){}
console.log(fn.length);
```
## 函数的方法 call & apply
* call和apply方法是可以通过函数名称来调用函数
  - apply——有两个参数 第一个是调用的上下文 第二个是参数组，可以直接把arguments传递进去
  - call——第一个参数是上下文对象 后面的参数是不同函数参数
  - call是通过参数列表完成传递 apply是通过参数数组完成传递
```javascript
function sum(a, b){
  return a + b;
}
function callSum(a, b){
  // return sum.apply(this, arguments);
  // return sum.apply(this, [a, b]);
  return sum.call(this, a, b);
}
console.log(callSum(5, 10));
```
## 对象的创建
* 常规方式创建
  - js中不存在类 所以可以直接通过object来创建对象
  - 这种创建方式的问题是：没有类的约束，无法实现对象的重复利用
```javascript
var person = new Object();
person.name = "Tom";
person.age = 20;
person.say = function () {
  console.log(this.name);
};
```
* 通过json创建对象
  - json —— javascript simple object notation
  - json就是js对象，但省却了xml中的标签，通过{}来完成对象的说明
  - 通过json依然可以创建对象数组，创建方式和js数组一样
```javascript
var person = {
  name:"zhangsan",
  age:20,
  say:function () {
    console.log(this.age);
  }
};
var ps = [
  {name:"Tom",age:30},
  {name:"Tim",age:20}
];
for (var i = 0; i < ps.length; i++) {
  console.log(ps[i].name);
}
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
