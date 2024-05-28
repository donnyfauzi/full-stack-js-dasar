// var motor = [
//   ["Nmax", "Aerox", "Mio"], //field/column 0
//   ["PCX", "Vario", "Beat"], //field/column 1
//   ["gsx", "nex", "smash"], //field/column 2
// ];

// console.log(motor[0]);
// console.log(motor[1][1]); -->

let murid = [
  [1, "vincent", 2.5],
  [2, "udin", 3.3],
  [3, "doni", 3.8],
  [4, "ari", 2.5],
  [5, "ami", 3.1],
  [6, "andi", 3.2],
];

// var vincent_no = murid[0][0] + ". ";
// var vincent_nama = murid[0][1] + ",";
// var vincent_ipk = " ipk = " + murid[0][2];
// var vincent_status = murid[0][2] >= 3.0 ? " lulus" : " gagal";

// console.log(vincent_no + vincent_nama + vincent_ipk + vincent_status);

// var udin_no = murid[1][0] + ". ";
// var udin_nama = murid[1][1] + ",";
// var udin_ipk = "ipk = " + murid[1][2];
// var udin_status = murid[1][2] >= 3.0 ? " lulus" : " gagal";

// console.log(udin_no + udin_nama + udin_ipk + udin_status);

for (let i = 0; i < murid.length; i++) {
  let no = murid[i][0] + ". ";
  let nama = murid[i][1] + ", ";
  let ipk = "IPK = " + murid[i][2];
  let status = murid[i][2] >= 3.0 ? " lulus" : " gagal"; // if sederhana untuk sebaris

  console.log(no + nama + ipk + status);
}
