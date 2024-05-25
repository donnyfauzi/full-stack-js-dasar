// function kotak(panjang) {
//   let hasil = "";
//   for (let i = 0; i < panjang; i++) {
//     for (let j = 0; j < panjang; j++) {
//       hasil += "* ";
//     }
//     hasil += "\n";
//   }
//   return hasil;
// }
// console.log(kotak(10));

// //segitiga siku
// function segitiga1(panjang) {
//   let hasil = "";
//   for (let i = 0; i < panjang; i++) {
//     for (let j = 0; j <= i; j++) {
//       hasil += "* ";
//     }
//     hasil += "\n";
//   }
//   return hasil;
// }
// console.log(segitiga1(10));

// function segitiga2(panjang) {
//   let hasil = "";
//   for (let i = 0; i < panjang; i++) {
//     for (let j = panjang; j > i; j--) {
//       hasil += "* ";
//     }
//     hasil += "\n";
//   }
//   return hasil;
// }
// console.log(segitiga2(10));

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let k = 0; k < i; k++) {
    string += "d";
  }
  string += "\n";
}
console.log(string);
