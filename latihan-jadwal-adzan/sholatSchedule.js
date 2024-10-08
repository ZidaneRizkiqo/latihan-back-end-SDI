const axios = require('axios');


async function getSholatSchedule(cityName) {
    const url = `http://api.aladhan.com/v1/timingsByCity?city=${cityName}&country=Indonesia&method=2`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.code !== 200 || !data.data) {
            console.log(`Error: Nama kota/kabupaten '${cityName}' tidak ditemukan.`);
            return;
        }

        const timings = data.data.timings;
        console.log(`Jadwal sholat untuk kota ${cityName}:`);
        console.log(`Subuh: ${timings.Fajr}`);
        console.log(`Dzuhur: ${timings.Dhuhr}`);
        console.log(`Ashar: ${timings.Asr}`);
        console.log(`Maghrib: ${timings.Maghrib}`);
        console.log(`Isya: ${timings.Isha}`);
    } catch (error) {
        console.log("Error: Tidak dapat mengakses API.");
    }
}


const cityName = process.argv[2];
if (!cityName) {
    console.log("Error: Harap masukkan nama kota/kabupaten.");
    process.exit(1);
}


getSholatSchedule(cityName);
