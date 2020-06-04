/******** exercise 1 *********
 *    实现range()和sum()函数  *
 * **************************/
 
let range = function(start, end, step = start < end ? 1 : -1) { // step可选参数
    let arr = [];
    if (step < 0) {
      for (let i = start; i >= end; i += step) arr.push(i);  // push插入数组最后
    } else {
      for (let i = start; i <= end; i += step) arr.push(i);
    }
    return arr;
  }
  
  let sum = function(arr) {
    let total = 0;
    for (let i of arr) {
      total += i;
    }
    return total;
  }

  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55


  /********************************
   *           习题2              *
   *        实现reverse()函数      *
   ********************************/

// 返回一个新数组
  function reverseArray(array) {
    let arrB = [];
    for (let i = array.length -1; i >= 0; i--) {
      arrB.push(array.pop())
    }
    return arrB;
  }
  
// 直接修改原数组
  function reverseArrayInPlace(array) {
    let temp;
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      temp = array[i];
      array[i] = array[array.length - i - 1];
      array[array.length - i - 1] = temp;
    }
  }  // 直接修改了原数组，不需要return
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]

  /*************************************
   *                 习题3
   *************************************/

// 数组转链表
  function arrayToList(array) {
    let list = null;
    for (let i = array.length -1; i >= 0; i--) {
      list = {value: array[i], rest: list}
    }
    return list;
  }

// 链表转数组
  function listToArray(list) {
    let array = [];
    while(list) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
  }

  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, num) {
    if (!list) return undefined;
    else if (num == 0) return list.value;
    else return nth(list.rest, num - 1);
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20

  