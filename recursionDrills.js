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