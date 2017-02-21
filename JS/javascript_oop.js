//函数定义
// function fn () {}
// console.log(typeof fn); //function
/*----------------------------*/
// 函数重载
// var sum = function (a, b) {
//   return a + b;
// };
// var sum = function (a) {
//   return a + 100;
// };
// console.log(sum(10)); //110
// console.log(sum(10,10)); //110
/*----------------------------*/
// 函数就是一个对象
// var fn = new Function("a", "b", "return a + b");
// console.log(fn(1,10));
/*----------------------------*/
// 函数的传值
// function callFun (fun, arg) {
//   return fun(arg);
// }
// function say (str) {
//   console.log(str);
// }
// say("aaa"); //aaa
// callFun(say,"bbb"); //bbb
/*----------------------------*/
// function fn(arg){
//   var rel = function(num){
//     return arg + num;
//   }
//   return rel;
// }
// var fn2 = fn(20);
// console.log(fn2(30)); //50
/*----------------------------*/
// function sortByName(a, b){
//   return a - b;
// }
// var as = [1,3,10,23,190,210];
// //console.log(as.sort()); //[ 1, 10, 190, 210, 23, 3 ]
// as.sort(sortByName);
// console.log(as); //[ 1, 3, 10, 23, 190, 210 ]
/*----------------------------*/
//arguments
// function say(str){
//   console.log(arguments.length);
//   console.log(str);
// }
// say("a", "b", "c");
// function factorial(num){
//   if (num < 1) {
//     return 1;
//   } else {
//     // return num * factorial(num - 1);
//     return num * arguments.callee(num - 1);
//   }
// }
// console.log(factorial(5));
/*----------------------------*/
// var color = "green";
// function showColor(){
//   console.log(this.color);
// }
// function Circle(color){
//   this.color = color;
//   this.show = showColor;
// }
// var c = new Circle("red");
// c.show();
/*----------------------------*/
// function fn(a,b){}
// console.log(fn.length);
/*----------------------------*/
// function sum(a, b){
//   return a + b;
// }
// function callSum(a, b){
//   // return sum.apply(this, arguments);
//   // return sum.apply(this, [a, b]);
//   return sum.call(this, a, b);
// }
// console.log(callSum(5, 10));
/*----------------------------*/
// var person = new Object();
// person.name = "Tom";
// person.age = 20;
// person.say = function () {
//   console.log(this.name);
// };
// var person = {
//   name:"zhangsan",
//   age:20,
//   say:function () {
//     console.log(this.age);
//   }
// };
// var ps = [
//   {name:"Tom",age:30},
//   {name:"Tim",age:20}
// ];
// for (var i = 0; i < ps.length; i++) {
//   console.log(ps[i].name);
// }
/*----------------------------*/
// function createPerson (name, age) {
//   var obj = new Object();
//   obj.name = name;
//   obj.age = age;
//   obj.say = function () {
//     console.log(this.name);
//   };
//   return obj;
// }
// var p1 = createPerson("zhangsan", 20);
/*----------------------------*/
// function Person (name, age) {
//   this.name = name;
//   this.age = age;
//   this.say = function () {
//     console.log(this.name);
//   };
// }
// var p1 = new Person("zhangsan", 20);
// p1.say();
// console.log(p1 instanceof Person);
// console.log(Person.prototype.isPrototypeOf(p1));
// console.log(p1.constructor == Person);
// console.log(p1.hasOwnProperty("age"));
// console.log("age" in p1);
// function hasPrototypeProperty (obj, prop) {
//   return ((!obj.hasOwnProperty(prop)) && (prop in obj));
// }
/*----------------------------*/
// function Person () {}
// Person.prototype = {
//   constructor:Person, //手动指定constructor
//   name:"zhangsan",
//   age:20,
//   say:function () {
//     console.log(this.name);
//   }
// };
// var p1 = new Person();
// p1.say();
// console.log(p1.constructor == Person);
/*----------------------------*/
// function Person (name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype = {
//   constructor:Person, //手动指定constructor
//   say:function () {
//     console.log(this.name);
//   }
// };
// var p1 = new Person("zhangsna", 20);
// p1.say();
/*----------------------------*/
// function Parent () {
//   this.pv = "Parent";
// }
// Parent.prototype.showParentValue = function () {
//   console.log(this.pv);
// }
// function Child () {
//   this.cv = "child";
// }
// //让Child的原型链指向Parent对象
// Child.prototype = new Parent();
// Child.prototype.showChildValue = function () {
//   console.log(this.cv);
// }
// var c = new Child();
// c.showChildValue();
// c.showParentValue();
/*----------------------------*/
// function Parent () {
//   this.color = ["red", "green"];
// }
// function Child () {
//   //在Child中的this指向的是Child的对象
//   //当调用Parent方法的时候，this又指向了Child
//   //this.color = ["red", "green"];
//   //也就等于在Child中有了this.color属性 变相完成了继承
//   Parent.call(this);
//   //这种调用方式仅仅完成了函数的调用，根本无法实现继承
//   // Parent();
// }
// var c1 = new Child();
// c1.color.push("blue");
// console.log(c1.color); //[ 'red', 'green', 'blue' ]
// var c2 = new Child();
// console.log(c2.color); //[ 'red', 'green' ]
/*----------------------------*/
// function Parent (name) {
//   this.color = ["red", "green"];
//   this.name = name;
//   this.say = function () {
//     console.log(this.name);
//   }
// }
// // Person.prototype.say = function () {
// //   console.log(this.name);
// // };
// function Child (name, age) {
//   this.age = age;
//   Parent.call(this, name);
// }
// var c1 = new Child("Tom", 20);
// var c2 = new Child("Jim", 30);
// console.log(c1.name);
// console.log(c2.name);
/*----------------------------*/
// function Parent (name) {
//   this.color = ["red", "blue"];
//   this.name = name;
// }
// Parent.prototype.ps = function () {
//   console.log(this.color);
// };
// function Child(name, age) {
//   Parent.call(this, name);
//   this.age = age;
// }
// Child.prototype = new Parent();
// Child.prototype.say = function () {
//   console.log(this.name+" "+this.color);
// };
// var c1 = new Child("Tom", 20);
// c1.color.push("green");
// var c2 = new Child("Jim", 30);
// c1.say();
// c1.ps();
// c2.say();
/*----------------------------*/
// // fn();
// function fn() {
//   console.log("fn");
// }
// fn();
// // fn2();
// var fn2 = function () {
//   console.log("fn2");
// }
// fn2();
/*----------------------------*/
// var color = "green";
// var showColor = function () {
//   console.log(this.color);
// };
// showColor();
// function changeColor () {
//   var anotherColor = "red";
//   function swapColor () {
//     var tempColor = anotherColor;
//     anotherColor = color;
//     color = tempColor;
//   }
//   swapColor();
// }
// changeColor();
// showColor();
/*----------------------------*/
// function compareObjectFun (prop) {
//   return function (obj1, obj2) {
//     if (obj1[prop] > obj2[prop]) {
//       return 1;
//     } else if (obj1[prop] < obj2[prop]) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }
// }
// var o1 = {name:"zhangsan", age:20};
// var o2 = {name:"lisi", age:25};
// var compare = compareObjectFun("name");
// var res = compare(o1, o2);
// console.log(res);
/*----------------------------*/
// function fn () {
//   var fns = [];
//   //i这个变量是保存在fn这个作用域中
//   for (var i = 0; i < 10; i++) {
//     fns[i] = function () {
//       return i;
//     };
//   }
//   return fns;
// }
// var fs = fn();
// for (var i = 0; i < fs.length; i++) {
//   //通过闭包来调用所有函数，当输i的时候会去上一级作用域中查找
//   //这个时候i的值已经是10，所以连续输出10个10
//   console.log(fs[i]());
// }
/*----------------------------*/
// function fn () {
//   var fns = [];
//   for (var i = 0; i < 10; i++) {
//     (function (num) {
//       fns[num] = function () {
//         return num;
//       };
//     })(i);
//   }
//   return fns;
// }
// var fs = fn();
// for (var i = 0; i < fs.length; i++) {
//   console.log(fs[i]());
// }
/*----------------------------*/
// var name = "aaa";
// var person = {
//   name : "zhangsna",
//   age : 20,
//   say : function () {
//     return function () {
//       return this.name;
//     }
//   }
// };
// console.log(person.say()());
/*----------------------------*/
// var name = "aaa";
// var person = {
//   name : "zhangsna",
//   age : 20,
//   say : function () {
//     var that = this;
//     return function () {
//       //此时that指向person，that.name就是person中的name
//       return that.name;
//     }
//   }
// };
// console.log(person.say()());
/*----------------------------*/
// for (var i = 0; i < 10; i++) {}
// console.log(i); //10
/*----------------------------*/
// (function () {
//   for (var i = 0; i < 10; i++) {}
// })();
// console.log(i); //i is not defined
/*----------------------------*/
// function Person (name) {
//   this.setName = function (value) {
//     name = value;
//   };
//   this.getName = function () {
//     return name;
//   };
// }
// var p = new Person("zhangsan");
// console.log(p.getName());
// p.setName("lisi")
// console.log(p.getName());
/*----------------------------*/
// var Person;
// (function () {
//   var name = "";
//   Person = function (value) {
//     name = value;
//   };
//   Person.prototype.setName = function (value) {
//     name = value;
//   };
//   Person.prototype.getName = function () {
//     return name;
//   };
// })();
// var p1 = new Person("zhangsan");
// p1.setName("lisi")
// console.log(p1.getName());
/*----------------------------*/
