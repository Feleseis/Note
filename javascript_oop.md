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


```javascript
```








































```javascript
```
