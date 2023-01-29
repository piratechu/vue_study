## ES5(2009 推出)

### 嚴格模式(strict mode)

JavaScript 是個相當自由、不嚴謹的語言，例如變數可以不宣告就使用、不能使用 eval、arguments 作為變數名稱等等，因為 JS 太過自由，所以就會在寫程式的過程中就很容易忽略錯誤，造成後續 debug 的麻煩，因此使用嚴格模式可以幫助穩定 code、增加嚴謹程度。
使用方法就是直接在 JS 文件最前面加上 "use strice"即可。

```js
"use strict";
myFunction();

function myFunction() {
    y = 3.14; // This will also cause an error because y is not declared
}
```

### Array/Object 的方法

例如 Array.reduce()、Array.filter()、Array.map()、Array.forEach()、Object.difineProperty()、Object.keys()、Object.freeze()等等，這些方法網路上都有教學，這裡就不寫出來啦！
https://www.w3schools.com/js/js_es5.asp

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

```js
let say = `Hi! My name is ${name}, I am ${age} years old.`;
```

### 函式參數的預設值

ES6 也新增了函式中參數的預設值，如果沒有傳值進去的話，就會使用預設值

```js
function plus(x, y = 5) {
    //預設y為5
    return x + y;
}
console.log(plus(5)); //5+5=10  使用預設值
console.log(plus(5, 10)); //5+10=15  y有給值
//以前的寫法
function plus(x, y = 5) {
    let y = y | 5;
    return x + y;
}
```

### 物件簡化寫法

-   可以再物件內寫入變量、函數，作物件的屬性和方法

### Arguments 物件

arguments 物件是一個對應傳入函式之引數的類陣列（Array-like）物件

### callbacks(回調函數)

Loupe - 可以模擬 JS 的順序
http://latentflip.com

```js
//直接風格，簡單易懂
function func(x) {
    return x;
}
```

```js
//CPS(Countinuation-Passing sytle)風格，
function func(x, cb) {
    //一堆運算後，再將資料傳入 cb函數內
    cb(x);
}
```

```js
//針對callbacks(回調)函式來說，異步與同步的執行到底是差在那裡？
function aFunc(value, callback) {
    callback(value);
}

function bFunc(value, callback) {
    setTimeout(callback, 0, value);
}

function cb1(value) {
    console.log(value);
}
function cb2(value) {
    console.log(value);
}
function cb3(value) {
    console.log(value);
}
function cb4(value) {
    console.log(value);
}

aFunc(1, cb1);
bFunc(2, cb2);
aFunc(3, cb3);
bFunc(4, cb4);
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

```js
console.log(Number.EPSILON); // 2.220446049250313e-16
```

javascript  是浮点运算，会出现经典的   0.1 + 0.2  的问题；

```js
function equal(a, b) {
    if (Math.abs(a - b) < Number.EPSILON) {
        return true;
    } else {
        return false;
    }
}
console.log(0.1 + 0.2 === 0.3);
console.log(equal(0.1 + 0.2, 0.3));
```

1. 二進制、八進制

```js
let b = 0b1010; // 10   二进制
let o = 0o777; // 517  八进制
let x = 0xff; // 255  十六进制
```

2. Number.isFinite
   检测一个数值是否为有限数

```js
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(100 / 0)); // false
console.log(Number.isFinite(Infinity)); // false
```

3. Number.isNaN
   检测一个数值是否为  NaN；

和全局函数 isNaN() 相比，Number.isNaN() 不会自行将参数转换成数字，只有在参数是值为 NaN 的数字时，才会返回 true

```js
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0)); // true

console.log(Number.isNaN(123)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN("true")); // false
```

4.  Number.parseInt  Number.parseFloat
    字符串转整数，这个方法和全局的 parseInt() 函数具有一样的函数功能

```js
console.log(Number.parseInt("3223Love")); //  3223
console.log(Number.parseInt("3.14159神奇")); //  3
```

5. Number.isInteger
   判断一个数是否为整数

```js
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false
```

6. Math.trunc
   将数字的小数部分抹掉

```js
console.log(Number.trunc(3.5)); //  3
```

7. Math.sign
   判断一个数到底为正数、负数还是零；

正数返回 1；

零返回 0 ；

负数返回 -1；

```js
console.log(Math.sign(3.5)); // 1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-200)); // -1
```

### 對象擴展

1. Object.is
   判断两个值是否完全相等，和 “===”  有点像，但 NaN 就比较特殊；

```js
console.log(Object.is(120,121));   // false
console.log(Object.is(120,120));   // true
console.log(Object.is(NaN,NaN));   // true
console.log(NaN === NaN));         // false
```

2. Object.assign
   对象的合并，返回新的对象，重名的部分会被后一个对象覆盖，不相同的元素都保留；

```js
const con1 = {
    host: "localhost",
    port: 9090,
    name: "root",
    pswd: "root",
    test: "test",
};
const con2 = {
    host: "127.0,0,1",
    port: 3306,
    name: "admin",
    pswd: "admin",
    method: "post",
};
let con3 = Object.assign(con1, con2);
console.log(con3);
```

3. Object.setPrototypeOf
   设置原型对象， Object.getPrototypeOf ，获取对象的原型；

```js
const company = {
    name: "yinsui",
};
const cities = {
    area: ["Urumchi", "shihezi", "ningbo"],
};
cities.numArr = ["100", "200", "300"];
Object.setPrototypeOf(company, cities); // 把 cities 设置为 company 的原型
console.log(company); // company 继承了 cities 的属性；
console.log(company.numArr); // ['100', '200', '300']
console.log(Object.getPrototypeof(company)); // 获取 compnay 的原型
```

### export / import (ES6 模組化方案)

-   export 命令用于规定模块的对外接口
-   import 命令用于输入其他模块提供的功能
    有多種方式，有說明。主要以 export default 為主

```js
<script type="module">import xxx from '...path'</script>
```

### babel

https://babeljs.io/

Javascript 編譯器，要將新的語法解析成其他瀏覽器可以相容的 javascript

### Reflect API

```js
var O = { a: 1 };
Object.defineProperty(O, "b", { value: 2 });
O[Symbol("c")] = 3;

Reflect.ownKeys(O); // ['a', 'b', Symbol(c)]

function C(a, b) {
    this.c = a + b;
}
var instance = Reflect.construct(C, [20, 22]);
instance.c; // 42
```

## ES7

### Array.prototype.includes

    Includes 方法用来检测数组中是否包含某个元素，返回布尔类型值

```js
const arr = ['apple', 'orange', 'pear']
console.log(arr.includes('apple'))   //true
console.log(arr.includes('banana')   //false
```

### 指数操作符

    在 ES7 中引入指数运算符「**」，用来实现幂运算，功能与 Math.pow 结果相同

```js
let result = 3 ** 3; //27  等同於  Math.pow(3,3)
```

## ES8

### async 函数

-   回覆值是 promise

### await 表達式

这使得代码在该点上等待，直到 Promise 被完成，这时 Promise 的响应被当作返回值，或者被拒绝的响应被作为错误抛出

1. await 放在 async 函數中
2. await 右側的表達式一般為 promise 物件
3. await 返回的是 promise 成功的值
4. await 的 promise 失敗了，就會拋出異常，需要通過 try...catch 捕獲處理

```js
async function fetchProducts() {
    try {
        // 在这一行之后，我们的函数将等待 `fetch()` 调用完成
        // 调用 `fetch()` 将返回一个“响应”或抛出一个错误
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
        );
        if (!response.ok) {
            throw new Error(`HTTP 请求错误：${response.status}`);
        }
        // 在这一行之后，我们的函数将等待 `response.json()` 的调用完成
        // `response.json()` 调用将返回 JSON 对象或抛出一个错误
        const json = await response.json();
        console.log(json[0].name);
    } catch (error) {
        console.error(`无法获取产品列表：${error}`);
    }
}

fetchProducts();
```

### Object.values

也可以搭配 Object.key

1. Object.values()方法返回一个给定对象的所有可枚举属性值的数组

```js
var obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
var my_obj = Object.create(
    {},
    {
        getFoo: {
            value: function () {
                return this.foo;
            },
        },
    }
);
my_obj.foo = "bar";
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values("foo")); // ['f', 'o', 'o']
```

### Object.entries

2. Object.entries()方法返回一个给定对象自身可遍历属性 [key,value] 的数组

```js
const object1 = {
    a: "somestring",
    b: 42,
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"
```

### Object to Map

```js
var obj = { foo: "bar", baz: 42 };
var map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
```

### Object.getOwnPropertyDescriptors

该方法返回指定对象所有自身属性的描述对象

```js
const object1 = {
    property1: 42,
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");

console.log(descriptor1.configurable);
// Expected output: true

console.log(descriptor1.value);
// Expected output: 42
```

物件更多操作可以參考:
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object

## ES9

### 異步迭代

await 可以和 for...of 循環一起使用，以串行的方式運行異步操作

```js
async function process(array) {
    for await (let i of array) {
        // doSomething(i);
    }
}
```

### Promise.finally()

```js
let isLoading = true;

fetch(myRequest)
    .then(function (response) {
        var contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return response.json();
        }
        throw new TypeError("Oops, we haven't got JSON!");
    })
    .then(function (json) {
        /* process your JSON further */
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        isLoading = false;
    });
```

### Rest / Spread 屬性

```js
const values = [1, 2, 3, 5, 6];
console.log(Math.max(...values)); // 6
```

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp

### 正規表達式命名捕获组

ES9 允许命名捕获组使用符号『?<name>』,这样获取捕获结果可读性更强

### 正則表達式反向斷言

ES9 支持反向断言，通过对匹配结果前面的内容进行判断，对匹配进行筛选

### 正则表达式 dotAll 模式

正则表达式中点.匹配除回车外的任何单字符，标记『s』改变这种行为，允许行终止符出现

## ES10

### Object.fromEntries

Object.fromEntries() 方法把键值对列表转换为一个对象

```js
const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }
```

### Array.prototype.flat() 和 Array.flatMap()

扁平化 array / map

1. flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

2. flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为 1 的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些

```js
var arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

```js
const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap((num) => num);

console.log(flattened);
// Expected output: Array [1, 2, 3, 4, 5, 6]
```

### String.trimStart() 和 String.trimEnd()

去除字符串首尾空白字符

-   trimStart() 方法会删除字符串开头的空白字符。trimLeft() 是此方法的别名
-   trimEnd() 方法会删除字符串末尾的空白字符。trimRight() 是这个方法的别名

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

### Symbol.prototype.description

description 是一个只读属性，它会返回 Symbol 对象的可选描述的字符串

```js
Symbol("desc").toString(); // "Symbol(desc)"
Symbol("desc").description; // "desc"
Symbol("").description; // ""
Symbol().description; // undefined

// 内置通用（well-known）symbol
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"
Symbol.iterator.description; // "Symbol.iterator"

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
Symbol.for("foo").description; // "foo"
```

## ES11

### Nullish coalescing Operator(空值处理)

在 js 中，碰到 0、null、undefined，會自動轉型成 false
但有時 0 其實是正常值，只能容錯到 undefined 跟 null

```js
/**
 * user = {
 *    level: 0
 * }
 */
const level = user.level || "查無等級"; // 會變成「查無等級」，而不是期望的0
// 為了解決這問題，必須展開使用 if 簡單式處理
const level =
    user.level !== undefined && user.level !== null ? user.level : "查無等級";

const username = user.level ?? "查無等級"; // 0 。若level值不存在，則變成「查無等級」
```

### String.prototype.matchAll

matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器

```js
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]
```

### Promise.allSettled

Promise.allSettled() 方法以 promise 组成的可迭代对象作为输入，并且返回一个 Promise 实例。当输入的所有 promise 都已敲定时（包括传递空的可迭代类型），返回的 promise 将兑现，并带有描述每个 promsie 结果的对象数组

```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
    results.forEach((result) => console.log(result.status))
);

// Expected output:
// "fulfilled"
// "rejected"
```

### 可选链操作符(?.)

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining

可选链运算符（?.）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 运算符的功能类似于 . 链式运算符，不同之处在于，在引用为空 (nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。

```js
const adventurer = {
    name: "Alice",
    cat: {
        name: "Dinah",
    },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```

### 動態 import 導入

```js
const util = "./util.js";
import(util).then((module) => {
    module.fun1();
    module.fun2();
});

(async () => {
    const util = "./util.js";
    const module = await import(util);
    const fun1 = module.fun1(1);
    const fun2 = module.fun1(2);
})();
```

### globalThis 物件

全局属性 globalThis 包含全局的 this 值，类似于全局对象（global object）
而 ES2020 提供了 globalThis，提供了統一的方式來獲得全局對象

### BigInt

ES5 之前的基本類型有 5 種：String、Number、Boolean、Null、Undefined
ES6 增加：Symbol，6 種
ES10 再增加：BigInt，達到 7 種

BigInt 是第 7 个基本类型，它是一个任意精度的整数。变量可以代表 2⁵³ 不仅是在 9007199254740992 处的最大值。

```js
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt(
    "0b11111111111111111111111111111111111111111111111111111"
);
// ↪ 9007199254740991n
```
