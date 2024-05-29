function cetak_slip_gaji(staff, periode, gajian, upahLembur, totalgajian) {
  console.log(
    `slip gaji periode ${periode} 
        staff : ${staff}  
        gaji : Rp ${gajian}  
        lembur : Rp ${upahLembur}  
        Total : Rp ${totalgajian}`
  );
}
function proses_perhitungan_gaji(
  staff,
  periode,
  hariKerja,
  gajiPerHari,
  jamLembur = 0
) {
  var gajian = gajiPerHari * hariKerja;
  var upahLembur = (gajiPerHari / 8) * jamLembur;
  var totalgajian = gajian + upahLembur;
  cetak_slip_gaji(staff, periode, gajian, upahLembur, totalgajian);
}

proses_perhitungan_gaji("Donny", "Mei 2024", 20, 150000, 5);
