function slip_gaji(staf, priode, hariKerja, gajiPerHari, jamLembur = 0) {
  let gajian = gajiPerHari * hariKerja;
  let upahLembur = (gajiPerHari / 8) * jamLembur;
  let totalgajian = gajian + upahLembur;

  // console.log(
  //   "Slip Gaji Periode" +
  //     priode +
  //     "\n" +
  //     "Nama Staf" +
  //     staf +
  //     "\n" +
  //     "Gaji:RP " +
  //     gajian.toLocaleString("id-ID") +
  //     "\n" +
  //     "Lembur : Rp" +
  //     upahLembur.toLocaleString("id-ID") +
  //     "\n" +
  //     "Total: Rp " +
  //     totalgajian.toLocaleString("id-ID")

  // );

  console.log(
    `slip gaji periode ${priode} 
    staff : ${staf}  
    gaji : Rp ${gajian}  
    lembur : Rp ${upahLembur}  
    Total : Rp ${totalgajian}`
  );
}

slip_gaji("Donny", "Mei 2024", 20, 150000, 5);
slip_gaji("Andi", "Mei 2024", 20, 150000);
