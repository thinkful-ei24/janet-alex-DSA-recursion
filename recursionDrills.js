'use strict';
/*
Counting Sheep
Write a recursive function that counts how many sheep jumps over the fence. 
Your program should take a number as an input. That number should be the number of sheep you have. 
The function should display the number along with the message "Another sheep jump over the fence" 
until no more sheep are left.

Input: 3
Output:
3 - Another sheep jump over the fence
2 - Another sheep jump over the fence
1 - Another sheep jump over the fence
*/

// function countingSheep (numOfSheep){
//     if (numOfSheep<1){
//         return;
//     }

//     console.log(`${numOfSheep} - Another sheep jump over the fence `);

//     countingSheep(--numOfSheep);
// }

// countingSheep(3);

/*Array Double
Write a function that takes an array as input which contains an 
unknown set of numbers, and outputs an array with each input value doubled. 
Test your solution by trying a handful of different arrays. For example,

Input: [1, 2, 3]
Output: [2, 4, 6]*/

// function double (arr){
//     if (arr.length < 1){
//         return [];
//     }
//    return  [arr[0]*2, ...double(arr.slice(1))];
// }

// console.log(double([1, 2, 3]));

// function reverseStr(str) {
//   if (str === '') {
//     return '';
//   }
//   const reverseChar = str.charAt(str.length - 1);
//   return reverseChar + reverseStr(str.slice(0, -1));

//   // + reverseStr(str.slice(1));
// }

// console.log(reverseStr('hello'));

// function triangular(n) {
//   if (n === 1) {
//     return 1;
//   }
//   // 1 + 2 = 3
//   // 3 + 3 = 6
//   // 6 + 4 = 10
//   // a + b = c
//   // c +(b+1) = x
//   // const sum = 1 + (n - 1);
//   return triangular(n - 1) + n;
// }

// console.log(triangular(5));


function splitter (str, separator, currentword='', results=[]){

    if (str.length <1 ){
        //if the current word is not empty, add to the results
        return currentword ? [...results, currentword] : results; 
    }

    if (str[0] !==separator){ //if 1st character is not the separator
        //add the first character to currentWord
        //run splitter on the rest of the string
        return splitter(str.slice(1), separator, currentword+str[0], results)
     
    }else {
        //if the 1st character is the separator
        // add current word to the results
        // reset the current word back to '' 
        //call splitter on the rest of the string
       return  splitter(str.slice(1), separator, '', [...results, currentword])

    }
  
}

console.log(splitter('hello there bob', ' '));

// ['hello','there']