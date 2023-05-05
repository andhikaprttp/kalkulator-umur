function hitungUmur() {
			var tanggalLahir = new Date(document.getElementById("tanggal-lahir").value);
			var hariIni = new Date();

			var tahun = hariIni.getFullYear() - tanggalLahir.getFullYear();
			var bulan = hariIni.getMonth() - tanggalLahir.getMonth();
			var hari = hariIni.getDate() - tanggalLahir.getDate();

			if (bulan < 0 || (bulan === 0 && hari < 0)) {
				tahun--;
				bulan += 12;
			}

			document.getElementById("hasil-umur").innerHTML = "Umur Anda adalah " + tahun + " tahun, " + bulan + " bulan, dan " + hari + " hari.";
		}