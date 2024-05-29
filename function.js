//membuat function
function ucapan_selamat() {
  console.log("halo world");
}

ucapan_selamat();

function halo(nama, alamat = "", pekerjaan) {
  if (alamat) {
    console.log(
      "halo nama saya" +
        nama +
        " profesi saya" +
        pekerjaan +
        " alamat saya" +
        alamat
    );
  } else {
    console.log("halo, nama saya" + nama + "profesi saya " + pekerjaan);
  }
}

halo(" donny", null, "programer");
