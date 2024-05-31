let kendaraan = {
  brand: "Honda",
  tipe: "sedan",
  harga: "500",
  hidupkanMesin: function () {
    console.log("mobil nyala ");
  },
  matikanMesin: function () {
    console.log("masin mati");
  },
};

class Kendaraan {
  constructor(brand, tipe, harga) {
    this.brand = brand;
    this.tipe = tipe;
    this.harga = harga;
  }

  hidupkanMesin() {
    console.log("mobil nyala ");
  }
  matikanMesin() {
    console.log("masin mati");
  }
}

// console.log(kendaraan.hidupkanMesin());

// console.log(new Kendaraan("Honda", "sedan", 900));

let lambo = new Kendaraan("lamborgini galardo", "supercar", 1000);
// lambo.hidupkanMesin();
console.log(lambo);
