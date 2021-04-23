// ARRAY PROBLEMS

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
// slice
function slice (arr, begin, end) {
  if(end === undefined || end > arr.length) {
    end = arr.length;
  }
  let newArr = [];
  for (let i = begin; i < end; i++) {
    newArr.push( arr[i]);
  }
  return newArr;
}
console.log("Slice: ", slice([1,2,3,4,5], 0)); // [1,2]

// countValues

function countValues(arr, num) {
  let counter = 0;
  for (let i =0; i < arr.length; i++) {
    if(arr[i] === num) counter ++;
  }
  return counter;
}

console.log("The number appeared:", countValues([4,1,1,4,2,3,4,4], 1)); // 4

// squareEvenNumbers
function squareEvenNumbers(arr) {
  let squaredNumber = 0;
  for ( let i =0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
    squaredNumber +=  arr[i] * arr[i];
    }
  }
  return squaredNumber;
}
console.log("The sum of squares of even number is:", squareEvenNumbers([1,2,4,8]));

// countNumbers
function countNumbers (arr) {
  let counter = 0;
  for ( let i =0; i < arr.length; i++) {
      if(Number(arr[i])){
        counter++;
      }
  }
  return counter;
}
console.log("The numbers in a string of array are:", countNumbers([32, 67, '55', 'awesome', 'test', '100', '45']));

// Sum of array

function sumArray (arr) {
  let sum = 0;
  for( let i =0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("Sum of array is ", sumArray([2,3,4,5]));


// STRING PROBLEMS
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

// appendToString
function appendToString (str1, str2) {
  return str1 + str2;
}

console.log(appendToString("Hello", " World!")); // "Hello World!"

// prependToString
function prependToString (str1, str2) {
  return str2 + str1;
}
console.log(prependToString(' awesome', 'very' )); // 'veryawesome'

// charAt
function charAt (str, index) {
 for ( let i = 0; i < str.length; i++ ) {
   return str[index];
 }
}
console.log("charAt: ", charAt('awesome', 2)); // 'e'

// string includes a character
function stringIncludes(str, character) {
  for ( let i =0; i < str.length; i++) {
    if(str[i] === character)return true;
  }
  return false;
}
console.log(stringIncludes('awesome', 'e')); // true

// stringIndexOf
function stringIndexOf(word, char) {
  for ( let i = 0; i < word.length; i++) {
    if(word[i] === char) {
      return i;
    }
  }
  return -1;
}
console.log(stringIndexOf('awesome', 's')); // 2

// stringLastIndexOf
function stringLastIndexOf(word, char) {
  for ( let i = word.length - 1; i >= 0; i--) {
    if(word[i] === char) {
      return i;
    }
  }
  return -1;
}

console.log("The last index is: ", stringLastIndexOf('awesome', 'z'));
 
// removeFromString
function removeFromString(str, startIndex, num) {
  
    let arr = str.split('');
    arr.splice(startIndex, num);
    return arr.join('');
  
}
console.log("Remove from string: ", removeFromString('Elie', 2, 2)); // 'El'

// Remove Vowels
function removeVowels(str) {
  let arr = str.split("");
  let newArr = [];
  let vowels = ["a", "e", "i", "o", "u"];
  for(let i = 0; i < arr.length; i++ ){
    if(!(vowels.includes(arr[i]))) {
      newArr.push(arr[i])
    }
  }
return newArr.join("");
}
console.log("New String with Vowels removed:", removeVowels('Hello')); // hll

// OBJECT PROBLEMS
// Find the duplicates
function findTheDuplicate(arr){
  let counter = {}
  for(let i = 0; i < arr.length; i++){
    if(arr[i] in counter){
      counter[arr[i]]++;
     
    } else {
      counter[arr[i]] = 1;
      
    }
  }
  for(let key in counter){
    if(counter[key] >= 2) 
    //console.log(key + " counted: " + counter[key] + " times.")
    console.log("The duplicates are: " + key );
   
  }
    console.log(counter);
}
console.log(findTheDuplicate([2,2,3,3,3,4]));

// Remove Duplicates 
let a = [2,3,4,3,5,4];
let b = [];
// Brute Force Approach

for ( let i = 0; i < a.length; i++) {
  if(b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}
console.log("Unique values/ no duplicates", b);
// complexity is n^2
