// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Exercise 07 : Perulangan - Play with Asterisks
// ----------------------------------------

// 1. Menyusun Barisan Bintang
// ----------------------------------------

function makeStar1(num){
  var stars = ''
  for (var i = num ; i > 0 ; i--) stars+='*'+'/n'
  return stars
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping
// ----------------------------------------

function makeStar2(num){
  var stars ='',temp
  for (var i = num ; i > 0 ; i--) {
    temp = ''
    for (var j = num ; j > 0 ; j--) {
      temp+='*'
    }
    stars+= temp + '/n'
  }
  return stars
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// ----------------------------------------


function makeStar3(num) {
  var temp=''
  for (var i = 1 ; i < num +1 ; i++) {
    for (var j = 0 ; j < i ; j++){
    temp +='*'
    }
    temp+='\n'
  }
  return temp
}

console.log(makeStar3(5))