!function(){
  var a = 1;
  delete a;
  b = 1;
  delete b;
  console.log(a);
  // console.log(b); //b is not defined
}();
console.log("/**********************************/");
!function(){
  console.log(a); //undefined
  var a = 1;
}();
console.log("/**********************************/");
!function(){
  // console.log(b); //b is not defined
  b = 1;
}();
console.log("/**********************************/");
!function(){
  {
    var a = 1;
  }
  console.log(a); //1
}();
console.log("/**********************************/");
!function(){
  console.log(Number(null)); //0
  console.log(10 + null); //10
  console.log(Number(undefined)); //NaN
  console.log(10 + undefined); //NaN
}();
console.log("/**********************************/");
!function(){
  console.log(1 === 1.0); //true
}();
console.log("/**********************************/");
!function(){
  console.log(Number.MAX_VALUE); //1.7976931348623157e+308
  console.log(Number.MIN_VALUE); //5e-324
  console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
  console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
}();
console.log("/**********************************/");
!function(){
  console.log(-0 === +0); //true
  console.log(0 === +0); //true
  console.log(0 === -0); //true
  console.log((1 / +0) === (1 / -0)); //false
}();
console.log("/**********************************/");
!function(){
  console.log(typeof ["a", "b", "c"]); //object
  console.log(Object.keys(["a", "b", "c"])); //[ '0', '1', '2' ]
  for (var variable in ["a", "b", "c"]) {
    console.log(variable);
    // 0
    // 1
    // 2
  }
}();
console.log("/**********************************/");
!function(){
  if (true) {
    var x = 10;
  }
  console.log(x); //10
}();
console.log("/**********************************/");
!function(){
  var res = [1, 2, 3, 4, 5].reduce(function(x,y){
    return x + y;
  });
  console.log(res);
}();
