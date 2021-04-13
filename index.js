// Problem 1 : Reverse an array
function reverseArr (arr) {
  let newArr = [];
  for (let i = arr.length -1; i >=0; i--){
    newArr.push(arr[i]);
  }
  return newArr; 
}
console.log("Reverse array: ", reverseArr([2, 3, 4]));

// Largest integer in the array
function maxNum (arr) {
  let maxNumber = arr[0];
  for ( let i = 0; i < arr.length; i ++) {
    if ( arr[i] > maxNumber) {  
        maxNumber = arr[i];
    }
      
  }
return maxNumber;
}
console.log("Max number is ", maxNum([2,3,4,5]));

// Sum of array

function sumArray (arr) {
  let sum = 0;
  for( let i =0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("Sum of array is ", sumArray([2,3,4,5]));
// Problem 2 : Reverse a string

function reverseStr (str) {
  let newStr = "";
  newStr = str.split("").reverse().join("");
  return newStr;

}
console.log("Reverse a string using array ", reverseStr("Hello")); 

// Without using any methods

function reverseAStr(str) {
let newStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
} 
return newStr;
}
console.log("Reverse a string Without using any methods ",  reverseAStr("Hello world")); 

// This solution I came across through LinkedIn using Spread 
function reverseStrWithSpread (str) {
  let newStr = [...str].reverse().join("");
  return newStr;
}
console.log(reverseStrWithSpread("Hello Javascript!"));

// Problem 3 - Repeat a string 
function repeatStr (str, num) {
  let newStr = "";
  for ( let i = 0; i < num; i ++) {
    newStr += str;
  }
  return newStr;
}
console.log("Repeat string: " , repeatStr("Jojo ", 4));