// var mahasiswa = {
//   nama: "Donny Fayzi",
//   ipk: 3.25,
//   StatusLulus: function () {
//     if (this.ipk >= 3) {
//       console.log("Lulus");
//     } else {
//       console.log("Gagal");
//     }
//   },
// };

// mahasiswa.StatusLulus();

// var mahasiswa = {
//   nama: "Donny Fauzi",
//   ipk: 3.25,
//   StatusLulus: function () {
//     if (this.ipk >= 3) {
//       return "Lulus";
//     } else {
//       return "Gagal";
//     }
//   },
//   cetakRapor: function () {
//     console.log(
//       `Rapor ${this.nama}
//          IPK: ${this.ipk}
//             Status Lulus: ${this.StatusLulus()}`
//     );
//   },
// };

// mahasiswa.cetakRapor();

let caca = {
  nama: "Caca",
  berat: 45,
  tinggi: 155,
  hobi: ["nonton", "makan", "minum", "rebahan"],
  sebutkanHobi: function () {
    let semuaHobi = "";
    for (let i = 0; i < this.hobi.length; i++) {
      semuaHobi = semuaHobi + (i + 1) + ". " + this.hobi[i];
    }
    // console.log(`hobi ${this.nama}: \n` + semuaHobi);
    console.log(
      `Hobby ${this.nama}:\n` + `1. ${this.hobi[0]}\n` + `2. ${this.hobi[1]}`
    );
  },
};

caca.sebutkanHobi();

// var peserta = "doni";
// peserta += "satu";
// peserta += "dua";
// peserta += "tiga";

// peserta += "\n";

// console.log(peserta);
