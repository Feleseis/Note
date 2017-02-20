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














































/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
/*----------------------------*/
