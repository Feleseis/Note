## 语法
### 基本语法
* 变量
  - var申明的变量无法delete
```javascript
var a = 1;
delete a;
b = 1;
delete b;
console.log(a);
console.log(b); //b is not defined
```
* 变量提升
  - js引擎先解析代码，获取所有声明的变量，然后再一行一行执行。所有声明变量的语句会被提升到头部。
```javascript
console.log(a); //undefined
var a = 1;
console.log(b); //b is not defined
b = 1;
```
* 区块
  - JavaScript的区块不构成单独的作用域（scope）
```javascript
{
  var a = 1;
}
console.log(a); //1
```
### 数据类型
* null & undefined
 - null是一个表示”无”的对象，转为数值时为0
 - undefined是一个表示”无”的原始值，转为数值时为NaN
```javascript
console.log(Number(null)); //0
console.log(10 + null); //10
console.log(Number(undefined)); //NaN
console.log(10 + undefined); //NaN
```
### 数值
* 整数和浮点数
  - avaScript内部，所有数字都是以64位浮点数形式储存，即使整数也是如此
  - 大于等于2的53次方的数值，无法保持精度
```javascript
console.log(1 === 1.0); //true
```
* 数值范围
  - 数值范围为21024到2-1023（开区间），超出这个范围的数无法表示
  - 指数部分等于或超过最大正值1024，JavaScript会返回Infinity
  - 等于或超过最小负值-1023（即非常接近0），JavaScript会直接把这个数转为0
```javascript
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
```
* 特殊数值
  - 在JavaScript内部，存在2个0：一个是+0，一个是-0。它们是等价的
  - 除以正零得到+Infinity，除以负零得到-Infinity
```javascript
console.log(-0 === +0); //true
console.log(0 === +0); //true
console.log(0 === -0); //true
console.log((1 / +0) === (1 / -0)); //false
```
### 字符串
* 引号
  - 由于HTML语言的属性值使用双引号，所以很多项目约定JavaScript语言的字符串只使用单引号
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
