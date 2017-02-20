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
* 工厂方式创建
  - 在function中创建一个对象
  - 为这个对象设置相应的属性和方法
  - 返回这个对象
  - 工厂方式虽然解决了类的问题，但无法检测对象的数据类型
```javascript
function createPerson (name, age) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.say = function () {
    console.log(this.name);
  };
  return obj;
}
var p1 = createPerson("zhangsan", 20);
```
* 构造函数方式创建
  - 构造函数的创建方式和工厂方式的创建类似
  - 函数的名称就是类的名称，在函数内部通过this关键字来完成属性和方法的定义
  - 使用构造函数的方式可以通过instanceof来检测对象的类型
  - 每一个对象中都会存在方法的拷贝，对象行为过多会占用大量空间，可以将函数放置于全局变量中定义，让类中的行为指向同一个函数
```javascript
function Person (name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this.name);
  };
}
var p1 = new Person("zhangsan", 20);
//检测对象的数据类型
console.log(p1 instanceof Person);
//对象是否是某个函数的原型
console.log(Person.prototype.isPrototypeOf(p1));
//检测某个对象的constructor
console.log(p1.constructor == Person);
//检测属性是否是自己的属性
console.log(p1.hasOwnProperty("age"));
//检测某个对象在原型或自身中是否包含某属性
console.log("age" in p1);
//检测某个属性是否在原型中存在
function hasPrototypeProperty (obj, prop) {
  return ((!obj.hasOwnProperty(prop)) && (prop in obj));
}
p1.say();
```
* 基于原型创建
  - 通过json方式改写
  - 这种方式会重写原型
  - constructor会指向Object 可以在json中说明原型指向
  - 存在问题
    - 可以有效完成封装
    - 无法通过构造函数来设置属性值
    - 当属性中有引用类型变量时，可能存在变量值重复
  - 为了解决原型所带来的问题，此处需要通过组合构造函数和原型来实现对象的创建
    - 将属性在构造函数中定义 讲方法在原型中定义

```javascript
function Person () {}
Person.prototype = {
  constructor:Person, //手动指定constructor
  name:"zhangsan",
  age:20,
  say:function () {
    console.log(this.name);
  }
};
var p1 = new Person();
p1.say();
console.log(p1.constructor == Person);
```
* 基于组合和原型创建对象
  - 将属性在构造函数中定义 讲方法在原型中定义
```javascript
function Person (name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  constructor:Person, //手动指定constructor
  say:function () {
    console.log(this.name);
  }
};
var p1 = new Person("zhangsna", 20);
p1.say();
```
## 继承
* 基于原型链
  - 不能再设定了原型链后重新为原型链赋值
  - 一定要在原型链赋值之后才能添加或覆盖方法
  - 缺点
    - 无法在子类中调用父类的构造函数，无法把子类的属性赋值到父类
    - 父类中有引用类型，会添加至子类的原型中，其中一个对象修改了这个引用的值后其他对象的引用的值也会被修改
  - 一般不会单纯的使用原型链的方式来实现继承
```javascript
function Parent () {
  this.pv = "Parent";
}
Parent.prototype.showParentValue = function () {
  console.log(this.pv);
}
function Child () {
  this.cv = "child";
}
//让Child的原型链指向Parent对象
Child.prototype = new Parent();
Child.prototype.showChildValue = function () {
  console.log(this.cv);
}
var c = new Child();
c.showChildValue();
c.showParentValue();
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
