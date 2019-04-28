// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Exercise 03 : Mengenal penggunaan Conditional if-else dalam JavaScript
// ----------------------------------------

// // Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"

// //Output untuk Input nama = 'Mikael' dan peran = ''
// "Halo Mikael, Pilih peranmu untuk memulai game!"

// //Output untuk Input nama = 'Nina' dan peran 'Ksatria'
// "Selamat datang di Dunia Proxytia, Nina"
// "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

// //Output untuk Input nama = 'Danu' dan peran 'Tabib'
// "Selamat datang di Dunia Proxytia, Danu"
// "Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

// //Output untuk Input nama = 'Zero' dan peran 'Penyihir'
// "Selamat datang di Dunia Proxytia, Zero"
// "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"

var name = ""
var role = "Ksatria"

if (!name) console.log("Nama harus diisi!")
else if (!role) console.log("Halo "+name+", Pilih peranmu untuk memulai game!")
else if (role=="Ksatria") {
  console.log("Selamat datang di Dunia Proxytia, "+name)
  console.log("Halo Ksatria "+name+", kamu dapat menyerang dengan senjatamu!")
}
else if (role=="Tabib") {
  console.log("Selamat datang di Dunia Proxytia, "+name)
  console.log("Halo Tabib"+name+", kamu akan membantu temanmu yang terluka.")
}
else if (role=="Penyihir") {
  console.log("Selamat datang di Dunia Proxytia, "+name)
  console.log("Halo Penyihir"+name+", ciptakan keajaiban yang membantu kemenanganmu!")
}
else {
  console.log ("Halo "+name+", Peran yang kamu pilih untuk saat ini belum tersedia.")
  console.log ("Silahkan pilih peran: Ksatria/Tabib/Penyihir")
}
