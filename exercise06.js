// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Exercise 06 : Berlatih Perulangan di JavaScript
// ----------------------------------------

// var flag = true
// var increase = true

// 1. Melakukan Looping Menggunakan While
// ----------------------------------------

var num = 0

console.log("LOOPING PERTAMA")
while (num < 20) num+=2, console.log(num + " - I love coding")


console.log("LOOPING KEDUA")
while (num > 0) console.log(num + " - I love coding"), num-=2

// 2. Melakukan Looping Menggunakan For
// ----------------------------------------

// console.log(num)

for (num; num < 22; num ++) {
  if (num < 1) console.log("LOOPING PERTAMA")
  else if (num > 20) {
    console.log("LOOPING KEDUA")
    for (var j = num-1; j > 0; j--) console.log(j + " - I will become fullstack developer")
  }
  else console.log(num + " - I will become fullstack developer")
}

// 3. Angka Ganjil dan Genap
// ----------------------------------------

for (var i = 1 ; i <= 100 ; i ++){
  if (i%2==0) console.log (i + " - GENAP")
    else console.log(i + " - GANJIL")
}

for (var i = 1 ; i <= 100 ; i +=2) if(i%3==0) console.log(i + " KELIPATAN 3")
for (var i = 1 ; i <= 100 ; i +=5) if(i%6==0) console.log(i + " KELIPATAN 6")
for (var i = 1 ; i <= 100 ; i +=9) if(i%10==0) console.log(i + " KELIPATAN 10")