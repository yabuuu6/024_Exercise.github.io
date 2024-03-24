var gambarArray = [
    "drought-1675729_640.jpg",
    "kenapa-awan-mendung-berwarna-hitam-sedangkan-air-hujan-yang-turun-bening.jpg",
    "mengenal-proses-hujan-lengkap-beserta-faktor-yang-memengaruhinya-kln.jpg"
];
var teksArray = [
    "Kemarau adalah periode cuaca kering dan panjang di mana curah hujan sangat rendah atau bahkan tidak ada sama sekali. Selama kemarau, tanah menjadi kering, sungai mengering, dan tumbuhan kesulitan untuk tumbuh. Ini dapat menyebabkan kekeringan, kebakaran hutan, dan kekurangan air yang mempengaruhi pertanian, pemukiman, dan industri. Meskipun kemarau sering dianggap sebagai musim yang sulit, ada juga beberapa aspek positifnya, seperti panen yang baik dalam beberapa ekosistem tertentu. Upaya mitigasi dan adaptasi sering diperlukan untuk mengurangi dampak negatif kemarau pada lingkungan dan kehidupan manusia.",
    "Mendung adalah kondisi cuaca di mana langit tertutup awan sehingga cahaya matahari tidak sepenuhnya terlihat atau bahkan terhalang sepenuhnya. Keadaan mendung ini sering kali menyebabkan penurunan intensitas cahaya dan suhu udara yang lebih rendah daripada saat cuaca cerah. Awan yang menyelimuti langit dapat berupa awan tebal seperti stratus atau awan kumulonimbus yang menandakan adanya potensi hujan.",
    "Musim penghujan adalah periode dalam siklus cuaca di mana curah hujan meningkat secara signifikan dalam jangka waktu tertentu. Musim ini biasanya terjadi ketika suatu wilayah terpapar pada pola angin muson yang membawa uap air dari lautan ke daratan. Ini menyebabkan pembentukan awan dan akhirnya hujan."
];
var index = 0;

function ubahGambar() {
    index = (index + 1) % gambarArray.length;
    var gambar = document.getElementById("gambar");
    gambar.style.opacity = 0; // Set opacity menjadi 0 untuk efek transisi

    setTimeout(function() {
        gambar.src = gambarArray[index];
        document.getElementById("teks").innerText = teksArray[index];
        gambar.style.opacity = 1; // Set opacity kembali menjadi 1 setelah mengubah gambar
    }, 1000); // Waktu tunggu sebelum mengubah gambar (dalam milidetik), disesuaikan sesuai kebutuhan
}
