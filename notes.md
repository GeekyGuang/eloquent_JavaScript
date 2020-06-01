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

