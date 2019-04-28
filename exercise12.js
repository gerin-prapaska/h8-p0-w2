// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Exercise 12 : Logic Challenge - Konversi Menit
// ----------------------------------------

// Problem

// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan 
// ukuran waktu dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit 
// tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".
// Code

function konversiMenit(menit) {
  // you can only write your code here!
  var jam, temp
  if (menit < 60){
    if (menit > 9) return "0:"+menit
    else return "0:0"+menit
  } else {
    jam = Math.floor(menit/60)
    temp = menit%60
    menit = temp
    if (menit > 9) return jam+":"+menit
    else return jam+":0"+menit
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00