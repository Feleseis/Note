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
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
