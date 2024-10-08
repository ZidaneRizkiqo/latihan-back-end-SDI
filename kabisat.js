function cekTahunKabisat(tahun) {
    if (tahun % 4 === 0 && tahun % 100 !== 0) {
        return `${tahun} adalah tahun kabisat.`;
    } else {
        return `${tahun} bukan tahun kabisat.`;
    }
}

// Deklarasi variabel thn
let thn = 1996;

// Memeriksa apakah thn adalah tahun kabisat
console.log(cekTahunKabisat(thn)); // Output: 1996 adalah tahun kabisat.