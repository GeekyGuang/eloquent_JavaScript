> It is up to you to make the necessary effort. When you are struggling to follow the book, do not jump to any conclusions about your own capabilities. You are fine—you just need to keep at it. Take a break, reread some material, and make sure you read and understand the example programs and exercises. Learning is hard work, but everything you learn is yours and will make subsequent learning easier.

> 'When action grows unprofitable, gather information; when information grows unprofitable, sleep.'——Ursula K. Le Guin, The Left Hand of Darkness

> A sense of what a good program looks like is developed in practice, not learned from a list of rules.

> A good programming language helps the programmer by allowing them to talk about the actions that the computer has to perform on a higher level. It helps omit details, provides convenient building blocks (such as while and console.log), allows you to define your own building blocks (such as sum and range), and makes those blocks easy to compose.

>  In practice, the terms ECMAScript and JavaScript can be used interchangeably—they are two names for the same language.

> monospaced font

> JavaScript uses a fixed number of bits, 64 of them, to store a single number value.

```javascript
alert(`half of 100 is ${100 / 2}`)  // half of 100 is 50
```

-  typeof  // unary operator 一元运算符 
```javascript
// Not all operators are symbols. Some are written as words. One example is the typeof operator, which produces a string value naming the type of the value you give it.
// binary operator 二元运算符

console.log(typeof 4.5)  // number
console.log(typeof 'x')  // string

```

- Boolean
```javascript
true
false
```

- comaprison
```javascript
> // is greater than
< // is less than
<= // is less than or equal to 
>= // is greater than or equal to
== // is equal to
!= // is not equal to 

console.log(NaN == NaN) // false
```

- logical operators
```javascript
&& // and
|| // or
! // not
```

- conditional operator(ternary operator)
```javascript
console.log(true ? 1 : 2)  // 1
```

- two empty values
```javascript
// an accident of JavaScript's design
null
undefined
```

- automatic type conversion
```javascript
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
console.log(null == undefined);
// → true
console.log(null == 0);
// → false


// When you do not want any type conversions to happen, there are two additional operators: === and !==. 
```

- short-circuiting of operators
```javascript
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
```

### chapter 2

> A fragment of code that produces a value is called an expression.
> If an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence. A program is a list of statements.

- bindings  
```javascript
// let var const

let one = 1, two = 2;
console.log(one + two);

// You should imagine bindings as tentacles, rather than boxes. They do not contain values; they grasp them—two bindings can refer to the same value. 

// var (short for “variable”), is the way bindings were declared in pre-2015 JavaScript. 

// const stands for constant. It defines a constant binding, which points at the same value for as long as it lives.
```

- function
```javascript
prompt(argument);
// The prompt function isn’t used much in modern web programming, mostly because you have no control over the way the resulting dialog looks, but can be helpful in toy programs and experiments.
```

- control flow
```javascript
// The braces({ and })  can be used to group any number of statements into a single statement, called a block.

!''  // true, all strings except "" convert to true


if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}
// indenting, I like to use two spaces for every open block
```

- exercise chapter3
```javascript
/**************     打印三角形   ****************/
let message='';
for(let j=1; j<8; j++){
  for (let i=0; i<j; i++) {
     message = message + "#";
  }
  console.log(message);
  message = "";
}
/*
#
##
###
####
#####
######
#######
*/
// better way
for (let line "#"; line.length < 8; line += "#")
  console.log(line);

/* divisible by 3 or 5 */
for (let i = 1; i <= 100; i++) {
  if (i%3 == 0 && i%5 == 0) {
    console.log("FizzBuzz");
  } else if (i%3 == 0) {
    console.log("Fizz");
  } else if (i%5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// better way
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

/*********** chessboard *************/
function chessBoard(size){
  let shape = "";
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if ((x + y) % 2 == 0) {
        shape += " ";
      } else {
        shape += "#";
      }
    }
    shape += "\n";
  }
  console.log(shape);
}

chessBoard(8);
```
- define a function
```javascript
// method one
const square = function(x) {
    return x * x;
};


// method two
function square(x) {
    return x * x;
} // no semicolon

// arrow function
const square1 = (x, y) => {return x * y;};
const square2 = x => x * x;
const horn = () => {
    console.log("Toot");
};


// default argument value
function minus(a, b) {
  if (b === undefined) return -a;  // if b is not given, it's undefined
  else return a - b;
}

function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
```

- var, let ,const
```javascript
// Bindings declared with let and const are in fact local to the block that they are declared in
// In pre-2015 JavaScript, only functions created new scopes, var
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40

// The exception is when multiple bindings have the same name—in that case, code can see only the innermost one.
const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10
```

- 闭包 closure
```javascript
function wrapValue(n) {
  let local = n;
  return () => local;  // 返回一个function
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());


function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);  // 创建环境
console.log(twice(5));
```
```javascript
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);   // '${expression}'
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
```


```javascript
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

/************************************************/
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
```
-- data structure

```javascript
// array is written as a list of values between square brackets, separated by commas.

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[2 -1]);


/*  property  */
// Almost all JavaScript values have properties. The exceptions are null and undefined. 
null.length;
// → TypeError: null has no properties
value.x // x是property的名字
value[x]  // x的值是property的名字

array.length
array["length"]

/* method */
// Properties that contain functions are generally called methods
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

array.push("hello");  // 最后插入
array.pop()  // 最后弹出

/**** object ****/
// Values of the type object are arbitrary collections of properties. 
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
  "touched tree": "Touched a tree"  // 无效的binding name要加引号
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false



let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left; // delete property
console.log(anObject.left);// → undefined
console.log("left" in anObject);// → false // 判断是否存在，property name要加引号
console.log("right" in anObject);// → true

// Object.keys()函数获取property数组
console.log(Object.keys(anObject));  // ["right"]


// Object.assign(objA, objB) 将B的property拷贝给A
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}


// Arrays are a kind of specialized object
typeof [] // "object"
```

```javascript
let a = "helllo", b = "world";
let objA = {a, b}; // property name = binding name
console.log(objA);

// {a: "helllo", b: "world"}
```

```javascript
function remove(array, index) {
  return array.slice(0, index)  // slice切片
    .concat(array.slice(index + 1));  // 拼数组
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

array.unshift("hello") // 数组前插入
array.shift() // 弹出第一个元素
array.indexOf(2)
array.lastIndexOf(3)


```


- string
```javascript
let s = "hello"
s.indexOf("l")
s.trim()   // 去掉两边空格


let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

console.log("LA".repeat(3));
// → LALALA

function max(...numbers) {  // 接受多个参数
  let result = -Infinity;
  for (let number of numbers) {  // 遍历数组
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
```

- Math
```javascript
Math.max()
Math.min()
Math.sqrt()  // square root

Math.sin()
Math.cos()
Math.tan()
Math.PI

Math.random() // 0 - 1 小数
Math.floor()
Math.round()
Math.ceil()
Math.abs()  // absolute
```

- JSON
```javascript
let string = JSON.stringify({squirrel: false,
                             events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]
```