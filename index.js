// Problem 1 : Reverse an array
function reverseArr (arr) {
  let newArr = [];
  for (let i = arr.length -1; i >=0; i--){
    newArr.push(arr[i]);
  }
  return newArr; 
}
console.log(reverseArr([2, 3, 4]));

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
function repeatStr (Str) {

}
console.log(repeatStr("Jojo"));