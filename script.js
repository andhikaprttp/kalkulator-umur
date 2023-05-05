function hitungUmur() {
  let tanggalLahir = new Date(document.getElementById("tanggal-lahir").value);
  let hariIni = new Date();

  let tahun = hariIni.getFullYear() - tanggalLahir.getFullYear();
  let bulan = hariIni.getMonth() - tanggalLahir.getMonth();
  let hari = hariIni.getDate() - tanggalLahir.getDate();

  if (bulan < 0 || (bulan === 0 && hari < 0)) {
    tahun--;
    bulan += 12;
  }

  document.getElementById("hasil-umur").innerHTML =
    "Umur Anda adalah " +
    tahun +
    " tahun, " +
    bulan +
    " bulan, dan " +
    hari +
    " hari.";
}
