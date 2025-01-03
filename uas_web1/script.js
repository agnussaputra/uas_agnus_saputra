document.addEventListener("DOMContentLoaded", function () {
    const formTransaksi = document.getElementById("formTransaksi");

    formTransaksi.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah pengiriman form default

        // Ambil elemen input
        const namaBarang = document.getElementById("namaBarang");
        const kategori = document.getElementById("kategori");
        const jumlah = document.getElementById("jumlah");

        // Ambil elemen untuk pesan kesalahan
        const errorNamaBarang = document.getElementById("errorNamaBarang");
        const errorKategori = document.getElementById("errorKategori");
        const errorJumlah = document.getElementById("errorJumlah");

        // Reset pesan kesalahan
        errorNamaBarang.style.display = "none";
        errorKategori.style.display = "none";
        errorJumlah.style.display = "none";

        let isValid = true; // Flag untuk mengecek apakah validasi berhasil

        // Validasi Nama Buku
        if (namaBarang.value.trim() === "") {
            errorNamaBarang.textContent = "Nama buku harus diisi!";
            errorNamaBarang.style.display = "block";
            isValid = false;
        }

        // Validasi Kategori
        if (kategori.value === "") {
            errorKategori.textContent = "Pilih kategori buku!";
            errorKategori.style.display = "block";
            isValid = false;
        }

        // Validasi Jumlah
        if (jumlah.value.trim() === "" || jumlah.value <= 0) {
            errorJumlah.textContent = "Jumlah harus lebih dari 0!";
            errorJumlah.style.display = "block";
            isValid = false;
        }

        // Jika validasi lolos, tambahkan data ke tabel
        if (isValid) {
            const tabel = document.getElementById("daftarTransaksi");
            const row = tabel.insertRow();
            row.innerHTML = `<td>${namaBarang.value}</td><td>${kategori.value}</td><td>${jumlah.value}</td>`;

            // Reset form
            formTransaksi.reset();
        }
    });

    // Menangani form login
    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Validasi Login
            if (username === "admin" && password === "admin123") {
                alert("Login berhasil! Selamat datang, " + username);
                window.location.href = "index.html"; // Arahkan ke halaman beranda setelah login
            } else {
                alert("Username atau password salah!");
            }

            // Reset form login
            formLogin.reset();
        });
    }
});
