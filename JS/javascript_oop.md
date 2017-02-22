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
  - 原型是js中非常特殊的一个对象，当一个函数创建之后，会随之产生一个原型对象
  - 当通过这个函数创建了一个具体的对象后，在这个具体的对象中就会有一个属性指向原型
  - 原型理解
    - function Person(){};Person函数中有一个prototype的属性指向Person的原型对象，在原型对象中有一个constructor属性指向了Person函数，所以可以通过new Person()来创建对象
    -  通过Person.prototype.name为原型设置值之后，这些属性和方法都是设置在Person的原型中
    - 当使用Person创建了对象之后，会在对象中有一个不能访问的属性_prop_指向了原型
    - 当使用对象调用原型的时候，首先会在对象的内部找是否有这个属性，如果没有则会通过_prop_去原型中找属性。所以当调用p1.say()，在自己的空间中不存在这个方法，就会去原型中寻找，找到之后完成say的调用
    - 当创建了一个新的p2之后，依然会有一个_prop_属性指向Person的原型，此时如果通过p2.name设置了属性之后，会在对象自己的内存空间中存储name的值，当调用say方法的湿乎乎寻找name时，在自己的空间找到之后就不会去原型中查找了。原型中的值不会被替换，仅仅只是在查找的时候被忽略。
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
* 基于伪造
  - 每调用一次new Child();就等于执行了一次对象属性的设置，此时每个对象的空间中都有单独的color属性，而不再原型中存在，因此不会被共享
  - 使用伪造的方式可以把子类的构造函数参数传递到父类中
  - 由于使用伪造的方式不会完成对Child的原型指向Parent，所以say方法不存在
  - 解决方法是将这个方法放置到Parent中使用this来创建，问题是这样每个对象中都会有say，占用空间，也不会单纯的用伪造方式实现继承
```javascript
function Parent () {
  this.color = ["red", "green"];
}
function Child () {
  //在Child中的this指向的是Child的对象
  //当调用Parent方法的时候，this又指向了Child
  //this.color = ["red", "green"];
  //也就等于在Child中有了this.color属性 变相完成了继承
  Parent.call(this);
  //这种调用方式仅仅完成了函数的调用，根本无法实现继承
  // Parent();
}
var c1 = new Child();
c1.color.push("blue");
console.log(c1.color); //[ 'red', 'green', 'blue' ]
var c2 = new Child();
console.log(c2.color); //[ 'red', 'green' ]
```
```javascript
function Parent (name) {
  this.color = ["red", "green"];
  this.name = name;
  this.say = function () {
    console.log(this.name);
  }
}
// Person.prototype.say = function () {
//   console.log(this.name);
// };
function Child (name, age) {
  this.age = age;
  Parent.call(this, name);
}
var c1 = new Child("Tom", 20);
var c2 = new Child("Jim", 30);
console.log(c1.name);
console.log(c2.name);
```
* 基于组合方式
 - 属性通过伪造的方式实现 方法通过原型链的方式实现
```javascript
function Parent (name) {
  this.color = ["red", "blue"];
  this.name = name;
}
Parent.prototype.ps = function () {
  console.log(this.color);
};
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = new Parent();
Child.prototype.say = function () {
  console.log(this.name+" "+this.color);
};
var c1 = new Child("Tom", 20);
c1.color.push("green");
var c2 = new Child("Jim", 30);
c1.say();
c1.ps();
c2.say();
```
```javascript
//解耦合
function Person(name) {
  this.name = name;
}
function extend(subClass, superClass) {
  //让子类原型属性等于父类原型属性
  //初始化一个临时空对象用于转换主父类的关系
  var F = function() {};
  F.prototype = superClass.prototype;
  //让子类继承F
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;
  //为子类增加属性superClass
  subClass.superClass = superClass.prototype;
  //让父类的constructor指向父类
  if(superClass.prototype.constructor == Object.prototype.constructor) {
    subClass.prototype.constructor = superClass;
  }
}
function Author(name, books) {
  Author.superClass.constructor.call(this, name);
  this.books = books;
  this.getBooks = function() {
    return this.name + " " + this.books;
  }
}
extend(Author, Person);
var jack = new Author("jack","html");
console.log(jack.getBooks());
//掺元类——>聚合
//有些时候不需要严格的继承，只需要一个或几个类中的一些方法
function mixin(receivingClass, givingClass) {
  for (var methodName in givingClass.prototype) {
    if (!receivingClass.prototype[methodName]) {
      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
    }
  }
}
function mixin(receivingClass, givingClass) {
  for (var methodName in givingClass) {
    if (!receivingClass._proto_[methodName]) {
      receivingClass._proto_[methodName] = givingClass[methodName];
    }
  }
}
```
## 闭包
* 函数的执行顺序
  - 通过function fn()这种方式来定义的函数永远都会被最先初始化
  - 匿名函数 在定义之前调用会报错
```javascript
// fn();
function fn() {
  console.log("fn");
}
fn();
// fn2();
var fn2 = function () {
  console.log("fn2");
}
fn2();
```
* 函数作用域链
  - 在js中当进行函数调用，会为每一个函数增加一个属性SCOPE，通过这个属性来指向一块内存，
  - 这块内存包含所有上下文使用的变量，当某个函数中调用了新函数之后，心函数依然会有一个作用域来执行原有函数的SCOPE和自己新增的SCOPE，这样就形成了一个链式结构叫做作用域链
```javascript
var color = "green";
var showColor = function () {
  console.log(this.color);
};
showColor();
function changeColor () {
  var anotherColor = "red";
  function swapColor () {
    var tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
  }
  swapColor();
}
changeColor();
showColor();
```
* 匿名函数&闭包的作用域
  - 通过返回函数来扩大作用域的方法就是闭包
  - 使用闭包虽然可以延长作用域，但是会占用更多的内存，一般非特殊情况下不要使用闭包
```javascript
function compareObjectFun (prop) {
  return function (obj1, obj2) {
    if (obj1[prop] > obj2[prop]) {
      return 1;
    } else if (obj1[prop] < obj2[prop]) {
      return -1;
    } else {
      return 0;
    }
  }
}
var o1 = {name:"zhangsan", age:20};
var o2 = {name:"lisi", age:25};
var compare = compareObjectFun("name");
var res = compare(o1, o2);
console.log(res);
```
* 闭包的变量问题
```javascript
function fn () {
  var fns = [];
  //i这个变量是保存在fn这个作用域中
  for (var i = 0; i < 10; i++) {
    fns[i] = function () {
      return i;
    };
  }
  return fns;
}
var fs = fn();
for (var i = 0; i < fs.length; i++) {
  //通过闭包来调用所有函数，当输i的时候会去上一级作用域中查找
  //这个时候i的值已经是10，所以连续输出10个10
  console.log(fs[i]());
}
```
```javascript
function fn () {
  var fns = [];
  for (var i = 0; i < 10; i++) {
    var tf = function (num) {
      fns[num] = function () {
        return num;
      };
    };
    tf(i);
  }
  return fns;
}
var fs = fn();
for (var i = 0; i < fs.length; i++) {
  console.log(fs[i]());
}
```
* 闭包this问题
  - 当完成person.say()之后这个函数就调用结束了，在这个函数调用结束之前，this指向person，但是调用匿名函数的时候this就指向了null(es5解释为window)，所以得到的结果是aaa
```javascript
var name = "aaa";
var person = {
  name : "zhangsna",
  age : 20,
  say : function () {
    return function () {
      return this.name;
    }
  }
};
console.log(person.say()());
```
```javascript
var name = "aaa";
var person = {
  name : "zhangsna",
  age : 20,
  say : function () {
    var that = this;
    return function () {
      //此时that指向person，that.name就是person中的name
      return that.name;
    }
  }
};
console.log(person.say()());
```
* 块作用域
  - 在js中没有块作用域，不管是循环还是判断之后这个变量会一直存在
  - 在全局使用某个变量来进行循环或判断之后，这个变量会影响到函数中的变量，全局变量在作用域链的最上层，访问最慢
  - 解决的方式是闭包
    - 在团队开发中可能会涉及到定义同名的全局变量，所以尽量将全局变量的代码放到一个匿名函数中，并且马上调用匿名函数。既可以立即执行全局变量的代码又可以将这些变量控制在想要控制的作用域中
```javascript
for (var i = 0; i < 10; i++) {}
console.log(i); //10
```
```javascript
(function () {
  for (var i = 0; i < 10; i++) {}
})();
console.log(i); //i is not defined
```
* 私有变量
```javascript
function Person (name) {
  this.setName = function (value) {
    name = value;
  };
  this.getName = function () {
    return name;
  };
}
var p = new Person("zhangsan");
console.log(p.getName());
p.setName("lisi")
console.log(p.getName());
```
```javascript
var Person;
(function () {
  var name = "";
  Person = function (value) {
    name = value;
  };
  Person.prototype.setName = function (value) {
    name = value;
  };
  Person.prototype.getName = function () {
    return name;
  };
})();
var p1 = new Person("zhangsan");
p1.setName("lisi")
console.log(p1.getName());
```
## 接口
* 注释法
 - 最简单 但是功能也是最弱的
 - 利用interface和implement“文字” 用注释的方式表现出来
 - 缺点 要人为地遵守
* 属性检测法
* 鸭式变形法
