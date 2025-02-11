// const a = 10;
// var b = "20";
// let message = "Total belanja: "
// var c = a + b;

// console.log(c);
// console.log(x);

// -------------------------------------------------------

// var nilai = [
//   {
//     nama: "Andi",
//     umur: 20,
//     pekerjaan: "Developer"
//   },
//   {
//     nama: "Budi",
//     umur: 25,
//     pekerjaan: "Designer"
//   },
//   {
//     nama: "Caca",
//     umur: 30,
//     pekerjaan: "Manager"
//   }
// ];

// var b = {
//   nama: "Andi",
//   umur: 20,
//   pekerjaan: "Developer",
//   alamat : ["Surabaya", "Jakarta", "Bandung"]
// }

// console.log(nilai[1]);
// console.log(b.nama);
// b.nama = "Budi";
// console.log(b.nama);

// -------------------------------------------------------

// var a = 10;
// var b = 2;

// console.log("Pertambahan : " + (a + b));
// console.log("Pengurangan : " + (a - b));
// console.log("Perkalian : " + (a * b));
// console.log("Pembagian : " + (a / b));
// console.log("Modulus : " + (a % b));
// a++
// console.log(a);
// a--
// console.log(a);

// -------------------------------------------------------

// function luasLingkaran(r) {
//   return 3.14 * r * r;
// }

// function luasSegitiga(a, t) {
//   return 0.5 * a * t;
// }

// function hitungHPP(harga, ppn, pph, diskon, ongkir, member) {
//   var total = harga + (harga * ppn) + (harga * pph) - diskon + ongkir;
//   if (member) {
//     total = total - (total * 0.1);
//   }
//   return total;
// }

// function printNama(nama) {
//   console.log("Halo "+nama);
//   // document.getElementById("text-p").innerHTML = "Halo "+nama;
// }

// function firstPrint() {
//   return "anything";
// }

// console.log(luasLingkaran(7));
// console.log(luasSegitiga(10, 5));

// var hpp = "Total HPP: " + hitungHPP(100000, 0.1, 0.05, 5000, 10000, true);
// console.log(hpp);

// // document.getElementById("text-p").innerHTML = firstPrint(); 

// // printNama("Andi");

// -------------------------------------------------------

// function printAja() {
//   console.log("Halo");
// }

// var printNama = () => {
//   console.log("Halo");
// }

// printNama();
// printAja();

// -------------------------------------------------------

// function hitungHPP() {
//   var harga = 100000;
//   var ppn = 0.1;
//   var pph = 0.05;
//   var diskon = 5000;
//   var ongkir = 10000;
//   var member = true;

//   var total = harga + (harga * ppn) + (harga * pph) - diskon + ongkir;
//   if (member) {
//     total = total - (total * 0.1);
//   }
//   // console.log(total);
//   document.getElementById("text-p").innerHTML = "Total HPP: " + total;
// }

// -------------------------------------------------------

// var a = true;
// var b = false;
// var nilai = 120;

// if (Number.isInteger(nilai)) {
//   if (nilai >= 80) {
//     console.log("Lulus");
//   } else {
//     console.log("Remedial");
//   }

//   // Predikat
//   // A = 100 - 80
//   // B = 79 - 60
//   // C = 59 - 40
//   // D = 39 - 20
//   // E = 19 - 0

//   if (nilai >= 80 && nilai <= 100) {
//     console.log("A");
//   } else if (nilai >= 60 && nilai <= 79) {
//     console.log("B");
//   } else if (nilai >= 40 && nilai <= 59) {
//     console.log("C");
//   } else if (nilai >= 20 && nilai <= 39) {
//     console.log("D");
//   } else if (nilai >= 0 && nilai <= 19) {
//     console.log("E");
//   } else {
//     console.log("Salah input");
//   }
// } else {
//   console.log("Salah input");
//   return;
// }

// // or example
// var a = "Remedial";
// var b = "Remedial";

// if (a == "lulus" || b == "lulus") {
//   console.log("Ada yg Lulus");
// } else {
//   console.log("Remedial semua");
// }

// -------------------------------------------------------

// for (var i = 1.1; i <= 10; i+=0.1) {
//   console.log(parseFloat(i).toFixed(2));
// }

// var nilai = ["andi", "budi", "caca"];
// nilai.forEach(function(item, index) {
//   console.log("index ke-" + index + " adalah " + item);
// });

// var name = "andi";
// console.log(name.repeat(10));

// for (var i = 1; i <= 10; i++) {
//   for (var j = 1; j <= 10; j++) {
//     console.log(i + " x " + j + " = " + i*j);
//   }
// }

// var i = 11;
// while (i <= 10) {
//   console.log(i);
//   i+=2;
// }

// var i = 11;
// do {
//   console.log(i);
//   i+=2;
// } while (i <= 10);