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
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
