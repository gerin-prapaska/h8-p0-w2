// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Exercise 04 : Mengenal penggunaan Conditional (Switch-Case) dalam JavaScript
// ----------------------------------------

// var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

var month = 3, date = "satu", year = 1994

if ((year < 1900 || year > 2200)||typeof year == "string") console.log("Year is not valid")
else if ((month < 1 || month > 12)||typeof month == "string") console.log("Month is not valid")
else if ((date < 1 || date > 31)||typeof date == "string") console.log("Date is not valid!")
else if (((month%2 === 0 && month < 8)||(month%2 === 1 && month > 8)) && date > 30) console.log("Date is not valid")
else if (month === 2 && year%4 === 0 && date > 29) console.log("Date is not valid!")
else if (month === 2 && date > 28) console.log("Date is not valid")
else {
  switch (month) {
    case 1: month= 'Jan'; break;
    case 2: month= 'Feb'; break;
    case 3: month= 'Mar'; break;
    case 4: month= 'Apr'; break;
    case 5: month= 'May'; break;
    case 6: month= 'Jun'; break;
    case 7: month= 'Jul'; break;
    case 8: month= 'Aug'; break;
    case 9: month= 'Sep'; break;
    case 10: month= 'Oct'; break;
    case 11: month= 'Nov'; break;
    case 12: month= 'Dec'; break;
  }
  console.log(month+' '+date+' '+year)
}