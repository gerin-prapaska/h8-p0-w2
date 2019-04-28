// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Exercise 13 : Logic Challenge - X dan O
// ----------------------------------------

// Problem

// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, 
// dan false jika tidak.
// Code

function xo(str) {
  // you can only write your code here!
  var x = 0, o = 0
  for (var i = 0 ; i < str.length ; i++){
    if (str[i]==='x') x+=1
    else if (str[i]==='o') o+=1
  }
  if (x===o) return true
  else return false
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true