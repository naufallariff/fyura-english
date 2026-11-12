export interface VocabLedgerItem {
  id: string;
  term: string;
  secondary?: string; // misal V2/V3 atau simbol angka
  indonesian: string;
  usageNote: string;
  psychologyWhy: string;
}

export interface ThematicVocabCategory {
  id: string;
  title: string;
  subtitle: string;
  howToUse: string[];
  psychologyWhy: string;
  tipsAndTricks: string[];
  items: VocabLedgerItem[];
}

export const THEMATIC_VOCABULARIES_LEDGER: ThematicVocabCategory[] = [
  {
    id: "cardinal-numbers",
    title: "1. Bilangan Biasa (Cardinal Numbers)",
    subtitle:
      "Angka dasar untuk menghitung jumlah, harga, usia, nomor telepon, dan tahun (Halaman 313).",
    howToUse: [
      "Gunakan tanda hubung (-) untuk angka puluhan gabungan dari 21 hingga 99 (contoh: twenty-one, forty-four).",
      "Untuk ratusan ke atas, bahasa Inggris British memakai 'and' sebelum puluhan terakhir (one hundred and six), sedangkan American sering menghilangkannya (one hundred six).",
      "Dalam bahasa Inggris, tanda koma (,) dipakai sebagai pemisah ribuan (10,000), sedangkan tanda titik (.) dipakai untuk desimal (3.5) — kebalikan dari Indonesia!",
    ],
    psychologyWhy:
      "Sistem angka bahasa Inggris memecah bilangan besar ke dalam kelompok tiga digit (thousand, million, billion). Pemahaman ritme tiga digit ini membuat penutur asli bisa menyebutkan angka jutaan dalam sekejap tanpa menghitung nol satu per satu.",
    tipsAndTricks: [
      "Hati-hati pada ejaan 'forty' (40) — huruf 'u' hilang (bukan 'fourty'), sedangkan 'four' (4) dan 'fourteen' (14) tetap memakai 'u'.",
      "Bedakan penekanan suara antara belasan (-TEEN: thirTEEN, fifTEEN) dan puluhan (-TY: THIRty, FIFty).",
    ],
    items: [
      { id: "cn-0", term: "zero", secondary: "0", indonesian: "nol", usageNote: "Untuk nomor telepon atau suhu sering dibaca 'oh' atau 'zero'.", psychologyWhy: "Menyatakan ketiadaan kuantitas secara presisi." },
      { id: "cn-1", term: "one", secondary: "1", indonesian: "satu", usageNote: "Angka tunggal dasar.", psychologyWhy: "Satuan terkecil untuk benda yang dapat dihitung." },
      { id: "cn-2", term: "two", secondary: "2", indonesian: "dua", usageNote: "Huruf 'w' tidak dibaca (dibaca 'tu:').", psychologyWhy: "Menandai awal bentuk jamak (plural) dalam tata bahasa Inggris." },
      { id: "cn-3", term: "three", secondary: "3", indonesian: "tiga", usageNote: "Awali dengan bunyi 'th' lembut.", psychologyWhy: "Sering dipakai dalam struktur retorika tiga bagian." },
      { id: "cn-4", term: "four", secondary: "4", indonesian: "empat", usageNote: "Memakai huruf 'u'.", psychologyWhy: "Dasar pembentuk fourteen dan forty." },
      { id: "cn-5", term: "five", secondary: "5", indonesian: "lima", usageNote: "Berubah menjadi 'fif-' pada fifteen dan fifty.", psychologyWhy: "Perubahan bunyi vokal mempermudah pelafalan cepat." },
      { id: "cn-6", term: "six", secondary: "6", indonesian: "enam", usageNote: "Konsisten pada sixteen dan sixty.", psychologyWhy: "Pola reguler tanpa perubahan akar kata." },
      { id: "cn-7", term: "seven", secondary: "7", indonesian: "tujuh", usageNote: "Dua suku kata (se-ven).", psychologyWhy: "Dasar pembagian hari dalam seminggu." },
      { id: "cn-8", term: "eight", secondary: "8", indonesian: "delapan", usageNote: "Huruf 'gh' tidak dibaca (dibaca 'eit').", psychologyWhy: "Hanya menambah '-een' dan '-y' tanpa menggandakan huruf 't' (eighteen, eighty)." },
      { id: "cn-9", term: "nine", secondary: "9", indonesian: "sembilan", usageNote: "Tetap 'nineteen' dan 'ninety' (huruf 'e' dipertahankan).", psychologyWhy: "Berbeda dengan 'ninth' yang menghilangkan huruf 'e'." },
      { id: "cn-10", term: "ten", secondary: "10", indonesian: "sepuluh", usageNote: "Basis sistem desimal.", psychologyWhy: "Titik awal pengelompokan puluhan." },
      { id: "cn-11", term: "eleven", secondary: "11", indonesian: "sebelas", usageNote: "Bentuk khusus sebelum masuk pola '-teen'.", psychologyWhy: "Warisan bahasa Inggris kuno ('one left over after ten')." },
      { id: "cn-12", term: "twelve", secondary: "12", indonesian: "dua belas", usageNote: "Bentuk khusus (selusin = a dozen).", psychologyWhy: "Warisan sistem hitung berbasis 12 pada jam dan bulan." },
      { id: "cn-13", term: "thirteen", secondary: "13", indonesian: "tiga belas", usageNote: "Akar kata 'three' berubah menjadi 'thir-'.", psychologyWhy: "Adaptasi fonetik agar mudah diucapkan." },
      { id: "cn-14", term: "fourteen", secondary: "14", indonesian: "empat belas", usageNote: "Memakai 'u'.", psychologyWhy: "Mengikuti akar kata 'four'." },
      { id: "cn-15", term: "fifteen", secondary: "15", indonesian: "lima belas", usageNote: "Akar kata 'five' berubah menjadi 'fif-'.", psychologyWhy: "Menghindari benturan bunyi konsonan 'v' dan 't'." },
      { id: "cn-16", term: "sixteen", secondary: "16", indonesian: "enam belas", usageNote: "Reguler: six + teen.", psychologyWhy: "Pola konsisten." },
      { id: "cn-17", term: "seventeen", secondary: "17", indonesian: "tujuh belas", usageNote: "Reguler: seven + teen.", psychologyWhy: "Pola konsisten." },
      { id: "cn-18", term: "eighteen", secondary: "18", indonesian: "delapan belas", usageNote: "Hanya satu huruf 't'.", psychologyWhy: "Efisiensi ejaan." },
      { id: "cn-19", term: "nineteen", secondary: "19", indonesian: "sembilan belas", usageNote: "Reguler: nine + teen.", psychologyWhy: "Pola konsisten." },
      { id: "cn-20", term: "twenty", secondary: "20", indonesian: "dua puluh", usageNote: "Awal kelompok puluhan (-ty).", psychologyWhy: "Menandai kelipatan dua dari sepuluh." },
      { id: "cn-21", term: "twenty-one", secondary: "21", indonesian: "dua puluh satu", usageNote: "Gunakan tanda hubung (-).", psychologyWhy: "Menyatukan puluhan dan satuan menjadi satu konsep angka." },
      { id: "cn-25", term: "twenty-five", secondary: "25", indonesian: "dua puluh lima", usageNote: "Sering dipakai untuk menyebut seperempat abad/jam.", psychologyWhy: "Kelipatan praktis dalam transaksi dan waktu." },
      { id: "cn-30", term: "thirty", secondary: "30", indonesian: "tiga puluh", usageNote: "Akar 'thir-' + '-ty'.", psychologyWhy: "Jumlah hari standar dalam satu bulan kalender." },
      { id: "cn-32", term: "thirty-two", secondary: "32", indonesian: "tiga puluh dua", usageNote: "Gunakan tanda hubung (-).", psychologyWhy: "Kombinasi puluhan dan satuan." },
      { id: "cn-40", term: "forty", secondary: "40", indonesian: "empat puluh", usageNote: "TANPA huruf 'u' (bukan fourty).", psychologyWhy: "Perubahan ejaan historis mengikuti pelafalan vokal pendek." },
      { id: "cn-44", term: "forty-four", secondary: "44", indonesian: "empat puluh empat", usageNote: "Perhatikan 'forty' tanpa 'u' dan 'four' dengan 'u'.", psychologyWhy: "Contoh klasik perbedaan ejaan puluhan vs satuan." },
      { id: "cn-50", term: "fifty", secondary: "50", indonesian: "lima puluh", usageNote: "Akar 'fif-' + '-ty'.", psychologyWhy: "Setengah dari seratus." },
      { id: "cn-60", term: "sixty", secondary: "60", indonesian: "enam puluh", usageNote: "Reguler: six + ty.", psychologyWhy: "Basis hitungan detik dan menit." },
      { id: "cn-70", term: "seventy", secondary: "70", indonesian: "tujuh puluh", usageNote: "Reguler: seven + ty.", psychologyWhy: "Pola konsisten." },
      { id: "cn-80", term: "eighty", secondary: "80", indonesian: "delapan puluh", usageNote: "Hanya satu huruf 't'.", psychologyWhy: "Efisiensi ejaan." },
      { id: "cn-90", term: "ninety", secondary: "90", indonesian: "sembilan puluh", usageNote: "Huruf 'e' dipertahankan.", psychologyWhy: "Menjaga bunyi vokal panjang 'ai' pada 'nine'." },
      { id: "cn-100", term: "one hundred", secondary: "100", indonesian: "seratus", usageNote: "Bisa juga disebut 'a hundred'.", psychologyWhy: "Tonggak kelipatan tiga digit pertama." },
      { id: "cn-106", term: "one hundred and six", secondary: "106", indonesian: "seratus enam", usageNote: "Kata 'and' menghubungkan ratusan dengan satuan.", psychologyWhy: "Memberi jeda ritmis agar pendengar menangkap angka satuan dengan jelas." },
      { id: "cn-1000", term: "one thousand", secondary: "1,000", indonesian: "seribu", usageNote: "Pemisah ribuan memakai koma (,).", psychologyWhy: "Unit dasar ribuan." },
      { id: "cn-1500", term: "one thousand five hundred", secondary: "1,500", indonesian: "seribu lima ratus", usageNote: "Dalam bahasa lisan sering disebut 'fifteen hundred'.", psychologyWhy: "Penutur asli sering memecah 1.500 menjadi 15 ratusan agar lebih cepat diucapkan." },
      { id: "cn-7707", term: "seven thousand seven hundred and seven", secondary: "7,707", indonesian: "tujuh ribu tujuh ratus tujuh", usageNote: "Struktur lengkap ribuan + ratusan + and + satuan.", psychologyWhy: "Menunjukkan hierarki nilai tempat dari terbesar ke terkecil." },
      { id: "cn-10000", term: "ten thousand", secondary: "10,000", indonesian: "sepuluh ribu", usageNote: "Puluhan ribu.", psychologyWhy: "Dikelompokkan dalam unit 'thousand'." },
      { id: "cn-90000", term: "ninety thousand", secondary: "90,000", indonesian: "sembilan puluh ribu", usageNote: "Puluhan ribu.", psychologyWhy: "Dikelompokkan dalam unit 'thousand'." },
      { id: "cn-100000", term: "one hundred thousand", secondary: "100,000", indonesian: "seratus ribu", usageNote: "Ratusan ribu.", psychologyWhy: "Batas akhir sebelum masuk ke jutaan." },
      { id: "cn-1000000", term: "one million", secondary: "1,000,000", indonesian: "satu juta", usageNote: "Hati-hati: 'million' = juta, 'billion' = miliar.", psychologyWhy: "Sistem skala pendek (short scale) yang dipakai seluruh dunia berbahasa Inggris." },
    ],
  },
  {
    id: "ordinal-numbers",
    title: "2. Bilangan Bertingkat (Ordinal Numbers)",
    subtitle:
      "Angka urutan untuk tanggal, peringkat, lantai gedung, dan abad (Halaman 313–314).",
    howToUse: [
      "Tiga angka pertama memiliki akhiran unik: 1st (first), 2nd (second), 3rd (third). Selebihnya menggunakan akhiran -th (4th, 5th, 11th, 12th, 13th).",
      "Untuk angka puluhan di atas 20, hanya digit terakhir yang diubah menjadi bentuk bertingkat (contoh: 21st = twenty-first, 101st = one hundred first).",
      "Selalu gunakan bilangan bertingkat saat membaca tanggal dalam kalender (contoh: May 1st dibaca 'May the first' atau 'the first of May').",
    ],
    psychologyWhy:
      "Bahasa Inggris memisahkan konsep 'jumlah' (three books = ada 3 buku) dengan 'posisi urutan' (the third book = buku urutan ke-3). Pemisahan bentuk kata ini menghilangkan ambiguitas tanpa perlu selalu menambahkan kata 'ke-' seperti dalam bahasa Indonesia.",
    tipsAndTricks: [
      "Jebakan klasik: 11, 12, dan 13 berakhiran -th (11th eleventh, 12th twelfth, 13th thirteenth) — BUKAN 11st atau 12nd! Akhiran -st, -nd, -rd baru muncul lagi di 21st, 22nd, 23rd.",
      "Perhatikan perubahan ejaan: fifth (bukan fiveth), eighth (satu 't'), ninth (tanpa 'e'), twelfth ('ve' berubah jadi 'f').",
    ],
    items: [
      { id: "on-1", term: "first", secondary: "1st", indonesian: "pertama / kesatu", usageNote: "Untuk peringkat, tanggal 1, dan lantai dasar (US).", psychologyWhy: "Bentuk khusus yang menegaskan posisi paling awal." },
      { id: "on-2", term: "second", secondary: "2nd", indonesian: "kedua", usageNote: "Juga bermakna 'detik' dalam konteks waktu.", psychologyWhy: "Berasal dari kata Latin 'secundus' (yang mengikuti pertama)." },
      { id: "on-3", term: "third", secondary: "3rd", indonesian: "ketiga", usageNote: "Akhiran -rd.", psychologyWhy: "Perubahan bunyi dari 'three' menjadi 'third'." },
      { id: "on-4", term: "fourth", secondary: "4th", indonesian: "keempat", usageNote: "Akhiran -th.", psychologyWhy: "Mulai masuk pola reguler -th." },
      { id: "on-5", term: "fifth", secondary: "5th", indonesian: "kelima", usageNote: "Huruf 've' pada five berubah menjadi 'f'.", psychologyWhy: "Menyesuaikan pelafalan agar tidak berat di lidah." },
      { id: "on-6", term: "sixth", secondary: "6th", indonesian: "keenam", usageNote: "Reguler: six + th.", psychologyWhy: "Pola konsisten." },
      { id: "on-7", term: "seventh", secondary: "7th", indonesian: "ketujuh", usageNote: "Reguler: seven + th.", psychologyWhy: "Pola konsisten." },
      { id: "on-8", term: "eighth", secondary: "8th", indonesian: "kedelapan", usageNote: "Hanya menambah huruf 'h' karena sudah berakhiran 't'.", psychologyWhy: "Menghindari huruf 't' ganda." },
      { id: "on-9", term: "ninth", secondary: "9th", indonesian: "kesembilan", usageNote: "Huruf 'e' pada nine dihilangkan.", psychologyWhy: "Pengecualian ejaan standar." },
      { id: "on-10", term: "tenth", secondary: "10th", indonesian: "kesepuluh", usageNote: "Reguler: ten + th.", psychologyWhy: "Pola konsisten." },
      { id: "on-11", term: "eleventh", secondary: "11th", indonesian: "kesebelas", usageNote: "Memakai -th (bukan 11st).", psychologyWhy: "Kelompok belasan mengikuti pola -th secara seragam." },
      { id: "on-12", term: "twelfth", secondary: "12th", indonesian: "kedua belas", usageNote: "Huruf 've' pada twelve berubah menjadi 'f'.", psychologyWhy: "Konsistensi perubahan fonetik seperti 'fifth'." },
      { id: "on-13", term: "thirteenth", secondary: "13th", indonesian: "ketiga belas", usageNote: "Memakai -th.", psychologyWhy: "Kelompok belasan memakai -th." },
      { id: "on-20", term: "twentieth", secondary: "20th", indonesian: "kedua puluh", usageNote: "Huruf 'y' pada twenty berubah menjadi 'ie' + th.", psychologyWhy: "Aturan baku semua kelipatan puluhan (-ty → -tieth)." },
      { id: "on-21", term: "twenty-first", secondary: "21st", indonesian: "kedua puluh satu", usageNote: "Digit terakhir kembali memakai -st.", psychologyWhy: "Hanya satuan akhir yang menentukan akhiran urutan." },
      { id: "on-22", term: "twenty-second", secondary: "22nd", indonesian: "kedua puluh dua", usageNote: "Digit terakhir memakai -nd.", psychologyWhy: "Mengikuti pola satuan akhir." },
      { id: "on-23", term: "twenty-third", secondary: "23rd", indonesian: "kedua puluh tiga", usageNote: "Digit terakhir memakai -rd.", psychologyWhy: "Mengikuti pola satuan akhir." },
      { id: "on-30", term: "thirtieth", secondary: "30th", indonesian: "ketiga puluh", usageNote: "twenty/thirty: -y berubah menjadi -ieth.", psychologyWhy: "Pola seragam kelipatan sepuluh." },
      { id: "on-100", term: "hundredth", secondary: "100th", indonesian: "keseratus", usageNote: "Seratus ditambah -th.", psychologyWhy: "Menandai posisi ke-100 atau pecahan seperseratus." },
      { id: "on-101", term: "one hundred first / one hundred third", secondary: "101st / 103rd", indonesian: "keseratus satu / keseratus tiga", usageNote: "Hanya satuan akhir yang berbentuk bertingkat.", psychologyWhy: "Efisiensi struktur angka panjang." },
      { id: "on-1000", term: "a thousandth", secondary: "1000th", indonesian: "keseribu", usageNote: "Seribu ditambah -th.", psychologyWhy: "Menandai urutan ke-1.000." },
    ],
  },
  {
    id: "time-and-day",
    title: "3. Waktu, Cara Membaca Jam & Bagian Hari (Time & Parts of the Day)",
    subtitle:
      "Kosakata satuan waktu, cara membaca jarum jam gaya British/klasik, dan pembagian 24 jam dalam budaya Barat (Halaman 314–315).",
    howToUse: [
      "Gunakan 'o'clock' HANYA untuk jam tepat tanpa menit (contoh: 05.00 = five o'clock).",
      "Untuk menit 01–30, gunakan 'past' (lewat): sebutkan menitnya dulu baru jamnya (05.15 = a quarter past five).",
      "Untuk menit 31–59, gunakan 'to' (kurang menuju jam berikutnya): (05.45 = a quarter to six / jam enam kurang seperempat).",
      "Dalam gaya modern/digital (jadwal kereta, pesawat, rapat), kamu juga bisa membaca angka langsung dari kiri ke kanan (05.15 = five fifteen, 05.45 = five forty-five).",
    ],
    psychologyWhy:
      "Cara membaca jam tradisional Barat membagi lingkaran jam menjadi dua belahan: 30 menit pertama berorientasi ke jam yang baru saja lewat ('past'), sedangkan 30 menit kedua berorientasi ke jam tujuan berikutnya ('to'). Selain itu, orang Barat membagi 24 jam ke dalam nuansa cahaya langit (dawn, morning, noon, afternoon, dusk, evening, midnight) sehingga sapaan dan janji temu sangat terikat pada fase cahaya hari.",
    tipsAndTricks: [
      "Perhatian khusus untuk orang Indonesia: 'Half past six' (06.30) artinya JAM ENAM LEWAT SETENGAH (06.30), BUKAN setengah enam (05.30)! Jangan sampai salah jadwal karena terpengaruh terjemahan bahasa Indonesia.",
      "Gunakan preposisi yang tepat: 'at' untuk titik jam (at 5 o'clock, at noon, at midnight), dan 'in the' untuk rentang waktu (in the morning, in the afternoon, in the evening).",
    ],
    items: [
      { id: "tm-1", term: "Hour / One hour", secondary: "Satuan", indonesian: "Jam / Satu jam", usageNote: "Huruf 'h' tidak dibaca (dibaca 'auer'), sehingga memakai artikel 'an hour'.", psychologyWhy: "Unit dasar pengukuran durasi aktivitas kerja dan perjalanan." },
      { id: "tm-2", term: "Minute / One minute", secondary: "Satuan", indonesian: "Menit / Satu menit", usageNote: "60 detik.", psychologyWhy: "Presisi jadwal rapat dan transportasi." },
      { id: "tm-3", term: "Second / One second", secondary: "Satuan", indonesian: "Detik / Satu detik", usageNote: "Dalam percakapan 'Just a second' berarti 'Tunggu sebentar'.", psychologyWhy: "Unit waktu terkecil dalam percakapan sehari-hari." },
      { id: "tm-4", term: "Five o'clock", secondary: "05.00", indonesian: "Jam lima tepat / pukul lima", usageNote: "'o'clock' berasal dari 'of the clock'.", psychologyWhy: "Menegaskan ketepatan waktu penuh tanpa selisih menit." },
      { id: "tm-5", term: "Five past ten / Ten past five", secondary: "05.10", indonesian: "Jam lima lewat sepuluh", usageNote: "Standar baku: sebut menit dulu ('Ten past five') atau gaya digital ('Five ten').", psychologyWhy: "Mengukur jarak menit setelah jam utama." },
      { id: "tm-6", term: "A quarter past six / Six fifteen", secondary: "06.15", indonesian: "Jam enam lewat seperempat", usageNote: "15 menit = a quarter (seperempat lingkaran jam).", psychologyWhy: "Visualisasi lingkaran jam dibagi 4 bagian sama besar." },
      { id: "tm-7", term: "Half past six / Six thirty", secondary: "06.30", indonesian: "Jam enam lewat tiga puluh (setengah tujuh)", usageNote: "INGAT: 'Half past six' = 06.30, bukan 05.30.", psychologyWhy: "Artinya setengah jam telah melewati pukul enam." },
      { id: "tm-8", term: "A quarter to six / Five forty-five", secondary: "05.45", indonesian: "Jam enam kurang seperempat", usageNote: "15 menit menuju pukul enam.", psychologyWhy: "Fokus berpindah ke jam berikutnya yang segera tiba." },
      { id: "tm-9", term: "Ten to six / Five fifty", secondary: "05.50", indonesian: "Jam enam kurang sepuluh", usageNote: "10 menit menuju pukul enam.", psychologyWhy: "Memberi sinyal urgensi menjelang pergantian jam." },
      { id: "tm-10", term: "The wee hours", secondary: "00.00–04.00", indonesian: "Dini hari (lewat tengah malam)", usageNote: "Waktu saat hampir semua orang tertidur lelap.", psychologyWhy: "Kata 'wee' (kecil) merujuk pada angka jam yang masih kecil (1, 2, 3 pagi)." },
      { id: "tm-11", term: "Dawn", secondary: "±04.30–06.00", indonesian: "Subuh / Fajar", usageNote: "Saat cahaya matahari pertama kali muncul di ufuk timur.", psychologyWhy: "Simbol awal hari dan harapan baru." },
      { id: "tm-12", term: "Early morning", secondary: "06.00–09.00", indonesian: "Pagi hari sekali", usageNote: "Waktu berangkat kerja atau olahraga pagi.", psychologyWhy: "Membedakan pagi buta dengan menjelang siang." },
      { id: "tm-13", term: "Morning", secondary: "06.00–12.00", indonesian: "Pagi", usageNote: "Seluruh rentang waktu sebelum tengah hari.", psychologyWhy: "Periode produktivitas awal hari." },
      { id: "tm-14", term: "Noon / Midday", secondary: "12.00", indonesian: "Tengah hari (pukul 12 siang)", usageNote: "Gunakan preposisi 'at noon'.", psychologyWhy: "Titik pemisah antara AM (Ante Meridiem) dan PM (Post Meridiem)." },
      { id: "tm-15", term: "Afternoon", secondary: "12.00–17.00", indonesian: "Siang hingga sore", usageNote: "Secara harfiah berarti 'setelah tengah hari' (after noon).", psychologyWhy: "Fase kedua aktivitas harian sebelum matahari terbenam." },
      { id: "tm-16", term: "Dusk", secondary: "±17.30–18.30", indonesian: "Senja / Petang", usageNote: "Saat matahari terbenam dan langit mulai gelap.", psychologyWhy: "Lawan kata dari 'dawn' (fajar)." },
      { id: "tm-17", term: "Evening", secondary: "17.00–21.00", indonesian: "Sore menjelang malam / Malam awal", usageNote: "Waktu makan malam, bersantai, dan berkumpul bersama keluarga.", psychologyWhy: "Dalam budaya Barat, 'evening' adalah waktu sosial aktif di malam hari, sedangkan 'night' adalah waktu tidur." },
      { id: "tm-18", term: "Midnight", secondary: "00.00 / 24.00", indonesian: "Tengah malam", usageNote: "Gunakan preposisi 'at midnight'.", psychologyWhy: "Titik pergantian hari kalender." },
    ],
  },
  {
    id: "colors-and-shades",
    title: "4. Warna & Nuansa (Colors & Shades)",
    subtitle:
      "Kosakata warna dasar, logam mulia, dan tingkat kecerahan warna dari halaman 315.",
    howToUse: [
      "Letakkan kata warna SEBELUM kata benda yang dijelaskan (contoh: 'a dark brown table', 'a light blue shirt').",
      "Gunakan kata sifat 'dark' untuk warna tua/gelap (dark brown, dark blue) dan 'light' untuk warna muda/terang (light green, light grey).",
    ],
    psychologyWhy:
      "Dalam bahasa Inggris, warna sering membawa makna idiomatik emosional: 'feeling blue' (merasa sedih), 'green with envy' (sangat iri), 'in the red' (merugi secara finansial), dan 'golden opportunity' (kesempatan emas).",
    tipsAndTricks: [
      "Perbedaan ejaan US vs UK: 'Gray' (Amerika) dan 'Grey' (Inggris/Persemakmuran) — keduanya benar dan memiliki arti yang sama (abu-abu).",
    ],
    items: [
      { id: "cl-1", term: "Red", secondary: "Warna Dasar", indonesian: "Merah", usageNote: "Warna energi, peringatan, atau keberanian.", psychologyWhy: "Menarik perhatian visual paling cepat." },
      { id: "cl-2", term: "Blue", secondary: "Warna Dasar", indonesian: "Biru", usageNote: "Dalam idiom 'feel blue' berarti sedih/melankolis.", psychologyWhy: "Melambangkan ketenangan langit dan laut." },
      { id: "cl-3", term: "Yellow", secondary: "Warna Dasar", indonesian: "Kuning", usageNote: "Warna cerah dan optimisme.", psychologyWhy: "Diasosiasikan dengan sinar matahari." },
      { id: "cl-4", term: "Green", secondary: "Warna Sekunder", indonesian: "Hijau", usageNote: "Juga dipakai untuk isu lingkungan ('go green') dan pemula ('greenhorn').", psychologyWhy: "Simbol alam, pertumbuhan, dan kesegaran." },
      { id: "cl-5", term: "Orange", secondary: "Warna Sekunder", indonesian: "Oranye / Jingga", usageNote: "Merujuk pada warna sekaligus buah jeruk.", psychologyWhy: "Perpaduan hangat antara merah dan kuning." },
      { id: "cl-6", term: "Purple", secondary: "Warna Sekunder", indonesian: "Ungu", usageNote: "Secara historis diasosiasikan dengan bangsawan.", psychologyWhy: "Pigmen langka di masa lampau." },
      { id: "cl-7", term: "Brown / Dark brown", secondary: "Netral", indonesian: "Cokelat / Cokelat tua", usageNote: "Warna tanah dan kayu.", psychologyWhy: "Memberi kesan hangat, alami, dan stabil." },
      { id: "cl-8", term: "White", secondary: "Netral", indonesian: "Putih", usageNote: "Simbol kebersihan dan kesederhanaan.", psychologyWhy: "Memantulkan seluruh spektrum cahaya." },
      { id: "cl-9", term: "Black", secondary: "Netral", indonesian: "Hitam", usageNote: "Dalam keuangan 'in the black' berarti mencetak laba.", psychologyWhy: "Kesan formal, elegan, dan tegas." },
      { id: "cl-10", term: "Grey / Gray", secondary: "Netral", indonesian: "Abu-abu", usageNote: "'Grey area' berarti area abu-abu / aturan yang belum jelas.", psychologyWhy: "Perpaduan hitam dan putih sebagai simbol netralitas." },
      { id: "cl-11", term: "Pink", secondary: "Nuansa", indonesian: "Merah muda", usageNote: "'In the pink' berarti dalam kondisi kesehatan prima.", psychologyWhy: "Lembut dan ramah." },
      { id: "cl-12", term: "Gold", secondary: "Logam", indonesian: "Warna emas", usageNote: "Bisa menjadi kata benda (logam emas) maupun kata sifat warna.", psychologyWhy: "Simbol nilai tertinggi dan prestasi." },
      { id: "cl-13", term: "Silver", secondary: "Logam", indonesian: "Warna perak", usageNote: "Warna logam berkilau keabu-abuan.", psychologyWhy: "Kesan modern dan presisi." },
      { id: "cl-14", term: "Dark color / Light color", secondary: "Keterangan", indonesian: "Warna tua (gelap) / Warna muda (terang)", usageNote: "Tambahkan di depan nama warna apa pun untuk mengatur nuansanya.", psychologyWhy: "Memungkinkan deskripsi visual spesifik tanpa menghafal ratusan nama pigmen." },
    ],
  },
  {
    id: "irregular-verbs-book",
    title: "5. Kamus Kata Kerja Tidak Beraturan (Irregular Verbs Ledger A–G)",
    subtitle:
      "Transkripsi lengkap tabel V1 – V2 – V3 beserta arti dari halaman 390–391 buku referensi.",
    howToUse: [
      "Gunakan kolom V1 untuk rutinitas Present dan setelah kata bantu modal (will, can, must, should) atau did/didn't.",
      "Gunakan kolom V2 HANYA untuk kalimat positif Simple Past (kejadian lampau yang sudah selesai).",
      "Gunakan kolom V3 setelah have/has/had (Perfect) atau setelah To Be untuk membentuk kalimat pasif (Passive Voice).",
    ],
    psychologyWhy:
      "Kata kerja tidak beraturan adalah kosakata inti yang paling tua dan paling sering diucapkan dalam bahasa Inggris. Karena frekuensi pakainya sangat tinggi sejak ribuan tahun lalu, penutur asli mempertahankan perubahan bunyi vokalnya sebagai penanda waktu yang cepat dikenali telinga.",
    tipsAndTricks: [
      "Perhatikan kata yang punya dua bentuk sah di buku: 'Burn → burnt / burned', 'Dream → dreamed / dreamt', 'Get → got / gotten' (gotten umum di US, got di UK).",
    ],
    items: [
      { id: "iv-1", term: "Arise → Arose → Arisen", secondary: "V1-V2-V3", indonesian: "Terbit, muncul, timbul", usageNote: "Contoh: A new problem arose yesterday.", psychologyWhy: "Sering dipakai untuk masalah atau peluang yang muncul tiba-tiba." },
      { id: "iv-2", term: "Be (am, is, are) → Was, were → Been", secondary: "V1-V2-V3", indonesian: "Adalah, berada, menjadi", usageNote: "Kata kerja paling fundamental dalam bahasa Inggris.", psychologyWhy: "Menghubungkan subjek dengan sifat, profesi, dan lokasi lintas waktu." },
      { id: "iv-3", term: "Beat → Beat → Beaten", secondary: "V1-V2-V3", indonesian: "Memukul, mengalahkan", usageNote: "V1 dan V2 sama persis; V3 ditambah -en.", psychologyWhy: "Sering dipakai dalam olahraga dan kompetisi." },
      { id: "iv-4", term: "Become → Became → Become", secondary: "V1-V2-V3", indonesian: "Menjadi", usageNote: "Pola A-B-A: V3 kembali sama seperti V1.", psychologyWhy: "Menyatakan perubahan status atau profesi." },
      { id: "iv-5", term: "Begin → Began → Begun", secondary: "V1-V2-V3", indonesian: "Mulai", usageNote: "Pola vokal I - A - U.", psychologyWhy: "Menandai titik awal sebuah proses." },
      { id: "iv-6", term: "Behold → Beheld → Beheld", secondary: "V1-V2-V3", indonesian: "Melihat, memandang", usageNote: "Pola A-B-B; bernuansa sastra atau formal.", psychologyWhy: "Menekankan kekaguman saat memandang sesuatu." },
      { id: "iv-7", term: "Bend → Bent → Bent", secondary: "V1-V2-V3", indonesian: "Membengkokkan, menekuk", usageNote: "Akhiran -d berubah menjadi -t pada V2 dan V3.", psychologyWhy: "Perubahan bunyi konsonan akhir yang ringkas." },
      { id: "iv-8", term: "Bet → Bet / Betted → Bet / Betted", secondary: "V1-V2-V3", indonesian: "Bertaruh", usageNote: "Dalam percakapan sehari-hari bentuk 'bet - bet - bet' paling umum.", psychologyWhy: "Pola A-A-A yang praktis." },
      { id: "iv-9", term: "Bid → Bade, bid → Bidden, bid", secondary: "V1-V2-V3", indonesian: "Menawar, meminta", usageNote: "Dalam lelang harga biasanya memakai 'bid - bid - bid'.", psychologyWhy: "Konteks transaksi dan penawaran." },
      { id: "iv-10", term: "Bind → Bound → Bound", secondary: "V1-V2-V3", indonesian: "Mengikat", usageNote: "Pola A-B-B (seperti find - found - found).", psychologyWhy: "Perubahan vokal internal khas kata kerja Jermanik." },
      { id: "iv-11", term: "Bite → Bit → Bitten", secondary: "V1-V2-V3", indonesian: "Menggigit", usageNote: "V3 menggandakan huruf 't' (bitten).", psychologyWhy: "Menjaga pelafalan vokal pendek pada V3." },
      { id: "iv-12", term: "Bleed → Bled → Bled", secondary: "V1-V2-V3", indonesian: "Berdarah", usageNote: "Vokal ganda 'ee' memendek menjadi satu 'e'.", psychologyWhy: "Pola A-B-B (mirip feed - fed - fed)." },
      { id: "iv-13", term: "Blow → Blew → Blown", secondary: "V1-V2-V3", indonesian: "Meniup, mengembus", usageNote: "Pola -ow → -ew → -own (mirip know, grow, throw).", psychologyWhy: "Rima bunyi memudahkan penghafalan berkelompok." },
      { id: "iv-14", term: "Break → Broke → Broken", secondary: "V1-V2-V3", indonesian: "Memecahkan, mematahkan, rusak", usageNote: "Pola A-B-C dengan akhiran -en pada V3.", psychologyWhy: "Salah satu kata kerja paling sering dipakai sehari-hari." },
      { id: "iv-15", term: "Bring → Brought → Brought", secondary: "V1-V2-V3", indonesian: "Membawa (ke arah pembicara)", usageNote: "Hati-hati ejaan: 'brought' memakai huruf 'r' (bedakan dengan 'bought' = membeli).", psychologyWhy: "Menunjukkan arah pergerakan mendekati pembicara." },
      { id: "iv-16", term: "Build → Built → Built", secondary: "V1-V2-V3", indonesian: "Membangun", usageNote: "Huruf 'd' berubah menjadi 't'.", psychologyWhy: "Pola A-B-B yang tegas." },
      { id: "iv-17", term: "Burn → Burnt / Burned → Burnt / Burned", secondary: "V1-V2-V3", indonesian: "Membakar", usageNote: "'Burnt' lebih umum di UK, 'burned' lebih umum di US.", psychologyWhy: "Transisi historis dari bentuk tidak beraturan ke beraturan." },
      { id: "iv-18", term: "Buy → Bought → Bought", secondary: "V1-V2-V3", indonesian: "Membeli", usageNote: "Tanpa huruf 'r' (dibaca 'bot').", psychologyWhy: "Kata kerja transaksi inti." },
      { id: "iv-19", term: "Cast → Cast → Cast", secondary: "V1-V2-V3", indonesian: "Melempar, memilih pemeran", usageNote: "Pola A-A-A tetap sama.", psychologyWhy: "Kata kerja berakhiran -t tidak menambah -ed." },
      { id: "iv-20", term: "Catch → Caught → Caught", secondary: "V1-V2-V3", indonesian: "Menangkap", usageNote: "Berima dengan 'taught' (teach - taught - taught).", psychologyWhy: "Pola A-B-B dengan akhiran -aught." },
      { id: "iv-21", term: "Choose → Chose → Chosen", secondary: "V1-V2-V3", indonesian: "Memilih", usageNote: "Perhatikan: V1 'choose' (dua 'o'), V2 'chose' (satu 'o').", psychologyWhy: "Pembedaan jumlah huruf 'o' membedakan Present dan Past." },
      { id: "iv-22", term: "Come → Came → Come", secondary: "V1-V2-V3", indonesian: "Datang", usageNote: "Pola A-B-A: V3 kembali ke 'come'.", psychologyWhy: "Lawan arah dari 'go'." },
      { id: "iv-23", term: "Cost → Cost → Cost", secondary: "V1-V2-V3", indonesian: "Berharga, memakan biaya", usageNote: "Pola A-A-A (contoh: It cost $50 yesterday).", psychologyWhy: "Tetap sama di semua waktu." },
      { id: "iv-24", term: "Cut → Cut → Cut", secondary: "V1-V2-V3", indonesian: "Memotong", usageNote: "Pola A-A-A.", psychologyWhy: "Tetap sama di semua waktu." },
      { id: "iv-25", term: "Dig → Dug → Dug", secondary: "V1-V2-V3", indonesian: "Menggali", usageNote: "Pola A-B-B.", psychologyWhy: "Perubahan vokal i → u." },
      { id: "iv-26", term: "Do → Did → Done", secondary: "V1-V2-V3", indonesian: "Melakukan, mengerjakan", usageNote: "Berfungsi ganda sebagai kata kerja utama maupun kata bantu kalimat negatif/tanya.", psychologyWhy: "Tulang punggung tata bahasa kalimat aksi bahasa Inggris." },
      { id: "iv-27", term: "Draw → Drew → Drawn", secondary: "V1-V2-V3", indonesian: "Menggambar, menarik", usageNote: "Pola -aw → -ew → -awn.", psychologyWhy: "Rima serupa dengan kelompok -ow/-ew/-own." },
      { id: "iv-28", term: "Dream → Dreamed / Dreamt → Dreamed / Dreamt", secondary: "V1-V2-V3", indonesian: "Bermimpi", usageNote: "Keduanya baku.", psychologyWhy: "Fleksibilitas dialek UK dan US." },
      { id: "iv-29", term: "Drink → Drank → Drunk", secondary: "V1-V2-V3", indonesian: "Minum", usageNote: "Pola I - A - U.", psychologyWhy: "Perubahan vokal berurutan yang ikonik." },
      { id: "iv-30", term: "Drive → Drove → Driven", secondary: "V1-V2-V3", indonesian: "Mengemudi, mendorong", usageNote: "Pola A-B-C dengan akhiran -en.", psychologyWhy: "Mirip dengan pola write - wrote - written." },
      { id: "iv-31", term: "Eat → Ate → Eaten", secondary: "V1-V2-V3", indonesian: "Makan", usageNote: "Pola A-B-C.", psychologyWhy: "Kata kerja kebutuhan dasar sehari-hari." },
      { id: "iv-32", term: "Fall → Fell → Fallen", secondary: "V1-V2-V3", indonesian: "Jatuh", usageNote: "Bedakan dengan 'feel - felt - felt' (merasa)!", psychologyWhy: "Jangan tertukar ejaan 'fell' (jatuh, V2) dengan 'feel' (merasa, V1)." },
      { id: "iv-33", term: "Feed → Fed → Fed", secondary: "V1-V2-V3", indonesian: "Memberi makan", usageNote: "Pola A-B-B.", psychologyWhy: "Memendekkan vokal 'ee' menjadi 'e'." },
      { id: "iv-34", term: "Feel → Felt → Felt", secondary: "V1-V2-V3", indonesian: "Merasa", usageNote: "Pola A-B-B.", psychologyWhy: "Kata kerja keadaan emosional dan indra." },
      { id: "iv-35", term: "Fight → Fought → Fought", secondary: "V1-V2-V3", indonesian: "Berkelahi, berjuang", usageNote: "Pola A-B-B (-ought).", psychologyWhy: "Berima dengan bought, brought, thought." },
      { id: "iv-36", term: "Find → Found → Found", secondary: "V1-V2-V3", indonesian: "Menemukan", usageNote: "Hati-hati: 'Found' juga merupakan V1 untuk arti 'mendirikan' (founded).", psychologyWhy: "Konteks kalimat menentukan apakah berarti 'menemukan' atau 'mendirikan'." },
      { id: "iv-37", term: "Fly → Flew → Flown", secondary: "V1-V2-V3", indonesian: "Terbang", usageNote: "Pola -y → -ew → -own.", psychologyWhy: "Digunakan untuk burung maupun perjalanan pesawat." },
      { id: "iv-38", term: "Forbid → Forbade → Forbidden", secondary: "V1-V2-V3", indonesian: "Melarang", usageNote: "V3 menggandakan huruf 'd' (forbidden).", psychologyWhy: "Sering muncul pada rambu larangan resmi." },
      { id: "iv-39", term: "Forget → Forgot → Forgotten", secondary: "V1-V2-V3", indonesian: "Lupa / Melupakan", usageNote: "Mengikuti pola kata induknya: get - got - gotten.", psychologyWhy: "Kata kerja turunan selalu mewarisi pola kata induknya." },
      { id: "iv-40", term: "Forgive → Forgave → Forgiven", secondary: "V1-V2-V3", indonesian: "Memaafkan", usageNote: "Mengikuti pola kata induknya: give - gave - given.", psychologyWhy: "Kata kerja turunan mewarisi pola kata induknya." },
      { id: "iv-41", term: "Freeze → Froze → Frozen", secondary: "V1-V2-V3", indonesian: "Membeku", usageNote: "Pola A-B-C (-en).", psychologyWhy: "Perubahan suhu dan keadaan benda." },
      { id: "iv-42", term: "Get → Got → Got / Gotten", secondary: "V1-V2-V3", indonesian: "Memperoleh, mendapatkan, menjadi", usageNote: "Kata kerja paling fleksibel dalam percakapan sehari-hari.", psychologyWhy: "Sering menggantikan 'receive', 'buy', 'arrive', dan 'become' dalam bahasa lisan." },
      { id: "iv-43", term: "Give → Gave → Given", secondary: "V1-V2-V3", indonesian: "Memberi", usageNote: "Pola A-B-C (-en).", psychologyWhy: "Lawan interaksi dari 'take' dan 'receive'." },
      { id: "iv-44", term: "Go → Went → Gone", secondary: "V1-V2-V3", indonesian: "Pergi", usageNote: "V2 'went' berasal dari kata kerja kuno 'wend'.", psychologyWhy: "Salah satu contoh suppletion (penggabungan dua akar kata berbeda dalam satu paradigma)." },
    ],
  },
];