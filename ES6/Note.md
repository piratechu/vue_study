## ES5(2009 推出)

### 嚴格模式(strict mode)

JavaScript 是個相當自由、不嚴謹的語言，例如變數可以不宣告就使用、不能使用 eval、arguments 作為變數名稱等等，因為 JS 太過自由，所以就會在寫程式的過程中就很容易忽略錯誤，造成後續 debug 的麻煩，因此使用嚴格模式可以幫助穩定 code、增加嚴謹程度。
使用方法就是直接在 JS 文件最前面加上 "use strice"即可。

### Array/Object 的方法

例如 Array.reduce()、Array.filter()、Array.map()、Array.forEach()、Object.difineProperty()、Object.keys()、Object.freeze()等等，這些方法網路上都有教學，這裡就不寫出來啦！

### 其他方法

例如 Date.now()、JSON.parse()、JSON.stringify()，Getter/Setter 的用法等等。

https://zh.wikipedia.org/zh-tw/ECMAScript

## ES6(ES2016)

### CONST / LET

-   CONST 常量不能變動，但數組、對象的內容是可以變動的。因為位址不變。

### 解構賦值

ES6 允許按照一定模式從數組與對象中提取值，對變量進行賦值。這被稱為解構賦值。

-   array 陣列則可以自己命名
-   object 解構要與裡面的 key 名稱一樣。

### 模板字符串 Template Literals (Template String)

ES6 引入新的字符串 【``】

-   內容中可以出現換行
-   如果需要帶入參數，則可以這樣使用

```
let say = `Hi! My name is ${name}, I am ${age} years old.`
```

### 函式參數的預設值

ES6 也新增了函式中參數的預設值，如果沒有傳值進去的話，就會使用預設值

```
function plus(x, y=5) {     //預設y為5
  return x + y
}
console.log(plus(5))        //5+5=10  使用預設值
console.log(plus(5, 10))    //5+10=15  y有給值
//以前的寫法
function plus(x, y=5) {
  let y = y | 5
  return x + y
}
```

### 物件簡化寫法

-   可以再物件內寫入變量、函數，作物件的屬性和方法

### Arguments 物件

arguments 物件是一個對應傳入函式之引數的類陣列（Array-like）物件

### callbacks(回調函數)

Loupe - 可以模擬 JS 的順序
http://latentflip.com

```
//直接風格，簡單易懂
function func(x){
    return x
}
```

```
//CPS(Countinuation-Passing sytle)風格，
function func(x,cb){
    //一堆運算後，再將資料傳入 cb函數內
    cb(x)
}
```

```
//針對callbacks(回調)函式來說，異步與同步的執行到底是差在那裡？
function aFunc(value, callback){
  callback(value)
}

function bFunc(value, callback){
  setTimeout(callback, 0, value)
}

function cb1(value){ console.log(value) }
function cb2(value){ console.log(value) }
function cb3(value){ console.log(value) }
function cb4(value){ console.log(value) }

aFunc(1, cb1)
bFunc(2, cb2)
aFunc(3, cb3)
bFunc(4, cb4)
```

### rest 參數(ES9) / 擴展運算符(...)

### Symbol 基本使用

-   Symbol 的值是唯一的，用來解決命名衝突
-   Symbol 值不能與其他數據進行運算
-   symbol 定義的物件屬性不能使用 for...in 遍歷，但是可以使用 reflect.ownKeys 來獲取物件的所有鍵名
-   symbol 提供 11 種內置方法

### Iterator 迭代器

-   ES6 創造一個遍歷命令 for...of 循環，Iterator 主要使用 for...of
    原生具备 iterator 接口(屬性)的数据(可用 for of 遍历)
    a) Array
    b) Arguments
    c) Set
    d) Map
    e) String
    f) TypedArray
    g) NodeList
    工作原理
    a) 创建一个指针对象，指向当前数据结构的起始位置
    b) 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员
    c) 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员
    d) 每调用 next 方法返回一个包含 value 和 done 属性的对象

### 生成器 generator

生成器函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同

-   關鍵字 yeild，通常用於生成器，會回傳 vaule & done 的物件

### 非同步語法-Promise

Promise 是 ES6 引入的异步编程的新解决方案。语法上 Promise 是一个构造函数，
用来封装异步操作并可以获取其成功或失败的结果。

1. Promise 构造函数: Promise (excutor) {}
2. Promise.prototype.then 方法
3. Promise.prototype.catch 方法

### async 函数(ES8)

-   await 就是搭配 async 的回覆
-   回覆值是 promise

### set 集合

ES6 新的數據類型

-   for...of

1. size 返回集合的元素个数
2. add 增加一个新元素，返回当前集合
3. delete 删除元素，返回 boolean 值
4. has 检测集合中是否包含某个元素，返回 boolean 值
5. clear 清空集合，返回 undefined

### Map

ES6 提供的新數據類型

-   for...of

1. size 返回 Map 的元素个数
2. set 增加一个新元素，返回当前 Map
3. get 返回键名对象的键值
4. has 检测 Map 中是否包含某个元素，返回 boolean 值
5. clear 清空集合，返回 undefined

### class

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对
象的模板。通过 class 关键字，可以定义类。

### 數值擴展

0. Number.EPSILON
   是 javascript 表示的最小精度

```
console.log(Number.EPSILON);   // 2.220446049250313e-16
```

javascript  是浮点运算，会出现经典的   0.1 + 0.2  的问题；

```
function equal(a,b){
    if(Math.abs(a-b) < Number.EPSILON){
        return true;
    }else{
        return false;
    }
}
console.log( 0.1 + 0.2 === 0.3);
console.log( equal(0.1 + 0.2,0.3));
```

1. 二進制、八進制

```
let b = 0b1010;   // 10   二进制
let o = 0o777;    // 517  八进制
let x = 0xff;     // 255  十六进制
```

2. Number.isFinite
   检测一个数值是否为有限数

```
console.log(Number.isFinite(100));       // true
console.log(Number.isFinite(100/0));     // false
console.log(Number.isFinite(Infinity));  // false
```

3. Number.isNaN
   检测一个数值是否为  NaN；

和全局函数 isNaN() 相比，Number.isNaN() 不会自行将参数转换成数字，只有在参数是值为 NaN 的数字时，才会返回 true

```
console.log(Number.isNaN(NaN));         // true
console.log(Number.isNaN(Number.NaN));  // true
console.log(Number.isNaN(0 / 0) );      // true

console.log(Number.isNaN(123));         // false
console.log(Number.isNaN(null));        // false
console.log(Number.isNaN(undefined));   // false
console.log(Number.isNaN("true"));      // false

```

4.  Number.parseInt  Number.parseFloat
    字符串转整数，这个方法和全局的 parseInt() 函数具有一样的函数功能

```
console.log(Number.parseInt('3223Love'));     //  3223
console.log(Number.parseInt('3.14159神奇'));  //  3
```

5. Number.isInteger
   判断一个数是否为整数

```
console.log(Number.isInteger(5));    // true
console.log(Number.isInteger(5.5));  // false
```

6. Math.trunc
   将数字的小数部分抹掉

```
console.log(Number.trunc(3.5));     //  3
```

7. Math.sign
   判断一个数到底为正数、负数还是零；

正数返回 1；

零返回 0 ；

负数返回 -1；

```
console.log(Math.sign(3.5));       // 1
console.log(Math.sign(0));         // 0
console.log(Math.sign(-200));      // -1
```

### 對象擴展

1. Object.is
   判断两个值是否完全相等，和 “===”  有点像，但 NaN 就比较特殊；

```
console.log(Object.is(120,121));   // false
console.log(Object.is(120,120));   // true
console.log(Object.is(NaN,NaN));   // true
console.log(NaN === NaN));         // false
```

2. Object.assign
   对象的合并，返回新的对象，重名的部分会被后一个对象覆盖，不相同的元素都保留；

```
const con1 = {
    host:'localhost',
    port:9090,
    name:'root',
    pswd:'root',
    test:'test'
}
const con2 ={
    host:'127.0,0,1',
    port:3306,
    name:'admin',
    pswd:'admin',
    method:'post'
}
let con3 = Object.assign(con1,con2);
console.log(con3);
```

3. Object.setPrototypeOf
   设置原型对象， Object.getPrototypeOf ，获取对象的原型；

```
const company ={
    name:'yinsui',
}
const cities ={
    area:['Urumchi','shihezi','ningbo'],
}
cities.numArr = ['100','200','300'];
Object.setPrototypeOf(company,cities);   // 把 cities 设置为 company 的原型
console.log(company);                    // company 继承了 cities 的属性；
console.log(company.numArr);             // ['100', '200', '300']
console.log(Object.getPrototypeof(company));   // 获取 compnay 的原型
```

### export / import (ES6 模組化方案)

-   export 命令用于规定模块的对外接口
-   import 命令用于输入其他模块提供的功能
    有多種方式，有說明。主要以 export default 為主

```
<script type="module">
import xxx from '...path'

</script>
```

### babel

https://babeljs.io/

Javascript 編譯器，要將新的語法解析成其他瀏覽器可以相容的 javascript

### Reflect API

```
var O = {a: 1};
Object.defineProperty(O, 'b', {value: 2});
O[Symbol('c')] = 3;

Reflect.ownKeys(O); // ['a', 'b', Symbol(c)]

function C(a, b){
  this.c = a + b;
}
var instance = Reflect.construct(C, [20, 22]);
instance.c; // 42
```

## ES7

### Array.prototype.includes

    Includes 方法用来检测数组中是否包含某个元素，返回布尔类型值

```
const arr = ['apple', 'orange', 'pear']
console.log(arr.includes('apple'))   //true
console.log(arr.includes('banana')   //false
```

### 指数操作符

    在 ES7 中引入指数运算符「**」，用来实现幂运算，功能与 Math.pow 结果相同

```
let result = 3 ** 3   //27  等同於  Math.pow(3,3)
```
