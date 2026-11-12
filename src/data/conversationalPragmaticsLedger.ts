export interface PragmaticEntry {
  id: string;
  english: string;
  indonesian: string;
  register: "Casual" | "Neutral" | "Formal" | "Proverb";
  contextNote: string;
  psychologyWhy: string;
}

export interface PragmaticCategory {
  id: string;
  title: string;
  subtitle: string;
  etiquetteRules: string[];
  psychologyOverview: string;
  tipsAndTricks: string[];
  entries: PragmaticEntry[];
}

export const CONVERSATIONAL_PRAGMATICS_LEDGER: PragmaticCategory[] = [
  {
    id: "greetings",
    title: "1. Greetings & Answering Greetings (Menyapa & Menjawab Sapaan)",
    subtitle:
      "Koleksi lengkap ungkapan menyapa dari suasana santai, profesional, hingga reuni lama tidak berjumpa.",
    etiquetteRules: [
      "Gunakan sapaan berbasis waktu (Good morning / afternoon / evening) untuk situasi profesional, rapat, atau menyapa orang yang lebih tua.",
      "Gunakan 'Good night' HANYA saat berpisah di malam hari atau hendak tidur—bukan sebagai sapaan pembuka saat baru bertemu.",
      "Saat ditanya 'How are you?', budaya Barat mengharapkan jawaban positif singkat diikuti pertanyaan balik ('...and you?').",
    ],
    psychologyOverview:
      "Bagi penutur bahasa Inggris, sapaan seperti 'How are you?' atau 'What's up?' bukan pertanyaan medis yang menuntut curhat panjang, melainkan sinyal sosial (social lubricant) untuk menunjukkan bahwa kamu ramah, terbuka, dan mengakui kehadiran lawan bicara.",
    tipsAndTricks: [
      "Bedakan 'How do you do?' (sapaan sangat formal saat pertama kali berkenalan, dijawab dengan 'How do you do?' lagi) dengan 'How are you doing?' (menanyakan kabar).",
      "Untuk teman dekat yang sudah lama tidak bertemu, ganti 'Long time no see' yang kasual dengan 'It's been ages since we last met' agar terdengar lebih ekspresif.",
    ],
    entries: [
      { id: "gr-1", english: "Hi.", indonesian: "Hai.", register: "Casual", contextNote: "Sapaan paling universal untuk teman sebaya atau rekan dekat.", psychologyWhy: "Singkat dan hangat untuk membuka ruang obrolan tanpa tekanan formalitas." },
      { id: "gr-2", english: "Hello.", indonesian: "Halo.", register: "Neutral", contextNote: "Aman dipakai di situasi santai maupun profesional.", psychologyWhy: "Menjaga kesopanan netral saat belum tahu seberapa akrab lawan bicara." },
      { id: "gr-3", english: "What's up?", indonesian: "Apa kabar? / Lagi sibuk apa?", register: "Casual", contextNote: "Sangat akrab; sering dijawab 'Not much' atau 'All good'.", psychologyWhy: "Bukan bertanya kondisi fisik, melainkan mengecek aktivitas terkini secara santai." },
      { id: "gr-4", english: "Good morning.", indonesian: "Selamat pagi.", register: "Formal", contextNote: "Dipakai dari bangun tidur hingga pukul 12.00 siang.", psychologyWhy: "Menetapkan nada positif dan profesional di awal hari kerja." },
      { id: "gr-5", english: "Good afternoon.", indonesian: "Selamat siang / sore.", register: "Formal", contextNote: "Dipakai dari pukul 12.00 hingga sekitar pukul 17.00.", psychologyWhy: "Menunjukkan kesadaran situasi formal di jam operasional." },
      { id: "gr-6", english: "Good evening.", indonesian: "Selamat malam (sapaan datang).", register: "Formal", contextNote: "Dipakai mulai pukul 17.00/18.00 saat baru bertemu atau membuka acara.", psychologyWhy: "Membedakan sapaan kedatangan (Good evening) dengan salam perpisahan (Good night)." },
      { id: "gr-7", english: "Alright, mate?", indonesian: "Kamu baik, teman?", register: "Casual", contextNote: "Khas Inggris (UK/Australia) untuk menyapa teman akrab.", psychologyWhy: "Kata 'mate' membangun rasa solidaritas setara secara instan." },
      { id: "gr-8", english: "Good to see you.", indonesian: "Senang bertemu denganmu.", register: "Neutral", contextNote: "Dipakai saat bertemu kenalan di acara atau kantor.", psychologyWhy: "Memberi validasi emosional bahwa kehadiran lawan bicara dihargai." },
      { id: "gr-9", english: "How's it going?", indonesian: "Bagaimana keadaanmu / progresmu?", register: "Casual", contextNote: "Lebih alami daripada 'How are you?' dalam percakapan harian.", psychologyWhy: "Fokus pada kelancaran hidup dan keseharian lawan bicara." },
      { id: "gr-10", english: "How are you today?", indonesian: "Bagaimana kabarmu hari ini?", register: "Neutral", contextNote: "Sering dipakai staf layanan, guru, atau rekan kerja.", psychologyWhy: "Membatasi konteks ke hari ini sehingga mudah dijawab ringan." },
      { id: "gr-11", english: "How is everything?", indonesian: "Bagaimana keadaan semuanya?", register: "Neutral", contextNote: "Menanyakan kabar pekerjaan, keluarga, dan kesibukan sekaligus.", psychologyWhy: "Membuka pintu jika lawan bicara ingin berbagi kabar terbaru." },
      { id: "gr-12", english: "How's everything going?", indonesian: "Bagaimana keadaan semuanya berjalan?", register: "Casual", contextNote: "Cocok untuk menanyakan kabar proyek atau rutinitas.", psychologyWhy: "Menunjukkan ketertarikan pada perkembangan hidup teman." },
      { id: "gr-13", english: "How are you keeping now?", indonesian: "Bagaimana kabarmu sekarang?", register: "Neutral", contextNote: "Dipakai setelah sempat lama tidak berkomunikasi.", psychologyWhy: "Menyiratkan perhatian tulus terhadap kondisi kesehatan atau situasi terkini." },
      { id: "gr-14", english: "It has been a long time.", indonesian: "Lama tidak jumpa.", register: "Neutral", contextNote: "Kalimat pembuka reuni yang rapi dan sopan.", psychologyWhy: "Menjembatani jeda waktu pertemuan agar suasana kembali cair." },
      { id: "gr-15", english: "It's been too long.", indonesian: "Sudah terlalu lama tidak berjumpa.", register: "Casual", contextNote: "Menekankan bahwa kalian seharusnya bertemu lebih sering.", psychologyWhy: "Mengekspresikan kerinduan sosial secara hangat." },
      { id: "gr-16", english: "How long has it been?", indonesian: "Sudah berapa lama kita tidak berjumpa?", register: "Casual", contextNote: "Memancing obrolan nostalgia tentang pertemuan terakhir.", psychologyWhy: "Mengajak lawan bicara mengingat momen bersama di masa lalu." },
      { id: "gr-17", english: "I'm so happy to see you again.", indonesian: "Sangat senang bisa bertemu denganmu lagi.", register: "Neutral", contextNote: "Ungkapan antusias saat bertemu sahabat atau mentor.", psychologyWhy: "Menyampaikan kehangatan emosional secara eksplisit." },
      { id: "gr-18", english: "Long time no see.", indonesian: "Lama tidak bertemu.", register: "Casual", contextNote: "Idiom populer yang sangat ringkas untuk teman dekat.", psychologyWhy: "Efisiensi bahasa lisan yang langsung dipahami sebagai sapaan akrab." },
      { id: "gr-19", english: "It's been such a long time.", indonesian: "Sudah lama sekali tidak bertemu.", register: "Neutral", contextNote: "Versi lebih lengkap dan halus dari 'Long time no see'.", psychologyWhy: "Kata 'such' menambah penekanan emosional pada lamanya waktu." },
      { id: "gr-20", english: "How come I never see you?", indonesian: "Betapa kita tidak pernah bertemu? (Kok jarang kelihatan?)", register: "Casual", contextNote: "Ungkapan candaan akrab saat berpapasan dengan tetangga/teman.", psychologyWhy: "Nada bercanda mengurangi rasa canggung karena lama tak berkabar." },
      { id: "gr-21", english: "It's been ages since we last met.", indonesian: "Rasanya sudah berabad-abad sejak kita terakhir bertemu.", register: "Casual", contextNote: "Hiperbola alami penutur asli untuk sahabat lama.", psychologyWhy: "Melebih-lebihkan waktu ('ages') menandakan kedekatan persahabatan." },
      { id: "gr-22", english: "Fine, thanks.", indonesian: "Baik, terima kasih.", register: "Neutral", contextNote: "Jawaban standar singkat.", psychologyWhy: "Menjawab sopan tanpa memperpanjang basa-basi." },
      { id: "gr-23", english: "I'm fine, thanks.", indonesian: "Saya baik-baik saja, terima kasih.", register: "Neutral", contextNote: "Jawaban klasik yang aman di segala situasi.", psychologyWhy: "Memberi sinyal bahwa kondisi stabil dan siap masuk ke topik inti." },
      { id: "gr-24", english: "Fine thanks. And you?", indonesian: "Saya baik, terima kasih. Dan kamu?", register: "Neutral", contextNote: "Etika percakapan dua arah yang paling dianjurkan.", psychologyWhy: "Mengembalikan bola percakapan sebagai bentuk timbal balik sosial." },
      { id: "gr-25", english: "Doing well. And how have you been?", indonesian: "Baik. Dan bagaimana kabarmu selama ini?", register: "Neutral", contextNote: "Terlihat lebih fasih dan natural dibanding sekadar 'I'm fine'.", psychologyWhy: "Menggunakan Present Perfect ('have been') untuk menanyakan kabar sejak terakhir bertemu." },
      { id: "gr-26", english: "Not bad. And you? How are you?", indonesian: "Tidak buruk (lumayan baik). Dan kamu? Apa kabar?", register: "Casual", contextNote: "Sangat umum dipakai penutur asli untuk kesan rendah hati.", psychologyWhy: "Budaya Inggris/Amerika sering menghindari pamer berlebihan dengan memakai litotes ('not bad')." },
      { id: "gr-27", english: "Just fine, thanks.", indonesian: "Baik-baik saja, terima kasih.", register: "Neutral", contextNote: "Menjawab dengan tenang dan sopan.", psychologyWhy: "Menunjukkan situasi terkendali tanpa drama." },
      { id: "gr-28", english: "Very well, thanks.", indonesian: "Baik-baik saja (sangat baik), terima kasih.", register: "Formal", contextNote: "Cocok dipakai di lingkungan kerja atau dengan atasan.", psychologyWhy: "Kata 'well' secara tata bahasa lebih tepat untuk kondisi kesehatan/keadaan." },
      { id: "gr-29", english: "Pretty well, thanks.", indonesian: "Cukup baik, terima kasih.", register: "Casual", contextNote: "Santai dan ramah.", psychologyWhy: "Kata 'pretty' berfungsi melembutkan nada agar terdengar membumi." },
      { id: "gr-30", english: "I'm pretty well, thanks.", indonesian: "Saya baik-baik saja, terima kasih.", register: "Neutral", contextNote: "Jawaban lengkap yang ramah dan alami.", psychologyWhy: "Keseimbangan antara kesopanan dan keakraban." },
    ],
  },
  {
    id: "parting",
    title: "2. Parting & Responding to Parting (Berpamitan & Menjawab Pamitan)",
    subtitle:
      "Cara mengakhiri percakapan dengan elegan, memberi alasan pergi secara halus, serta mendoakan lawan bicara.",
    etiquetteRules: [
      "Jangan langsung menghilang atau menutup obrolan secara mendadak; berikan sinyal transisi seperti 'I have to go now' atau 'It's getting late'.",
      "Sertakan harapan bertemu lagi ('See you soon', 'See you next time') untuk menjaga hubungan baik.",
      "Saat menjawab pamitan orang lain, berikan doa atau harapan positif ('Have a safe journey!', 'Take care!').",
    ],
    psychologyOverview:
      "Dalam komunikasi Barat, cara mengakhiri percakapan sama pentingnya dengan cara memulainya. Pamitan yang terburu-buru tanpa alasan sopan dianggap dingin, sehingga penutur asli memakai frasa penyangga ('I'm sorry, I have to go') dan doa singkat agar perpisahan terasa hangat.",
    tipsAndTricks: [
      "Gunakan 'Have a good one!' sebagai kalimat pamitan serba guna di kasir, kantor, maupun chat.",
      "'So long' dan 'Cheerio' terdengar klasik/khas Inggris; untuk sehari-hari 'See you later' atau 'Take care' jauh lebih umum.",
    ],
    entries: [
      { id: "pt-1", english: "Good bye.", indonesian: "Selamat tinggal.", register: "Neutral", contextNote: "Salam perpisahan standar di semua situasi.", psychologyWhy: "Penanda penutup interaksi yang jelas dan sopan." },
      { id: "pt-2", english: "Bye-bye.", indonesian: "Selamat tinggal / Dadah.", register: "Casual", contextNote: "Lebih ringan dan akrab, sering disertai lambaian tangan.", psychologyWhy: "Pengulangan bunyi menciptakan kesan ramah dan tidak kaku." },
      { id: "pt-3", english: "Cheerio.", indonesian: "Selamat tinggal (khas British).", register: "Casual", contextNote: "Ungkapan ceria khas Inggris saat berpisah.", psychologyWhy: "Berasal dari kata 'cheer' untuk meninggalkan suasana hati yang gembira." },
      { id: "pt-4", english: "So long.", indonesian: "Sampai bertemu lagi.", register: "Casual", contextNote: "Dipakai saat berpisah untuk waktu yang agak lama.", psychologyWhy: "Mengurangi kesan berat dari perpisahan panjang." },
      { id: "pt-5", english: "Good night.", indonesian: "Selamat tidur / Selamat malam (berpisah).", register: "Neutral", contextNote: "Dipakai saat mengakhiri pertemuan di malam hari.", psychologyWhy: "Menutup aktivitas hari itu dan mendoakan istirahat yang baik." },
      { id: "pt-6", english: "See you later.", indonesian: "Sampai berjumpa lagi nanti.", register: "Casual", contextNote: "Paling sering dipakai meski belum pasti kapan bertemu lagi.", psychologyWhy: "Menjaga pintu interaksi tetap terbuka di masa depan." },
      { id: "pt-7", english: "It's getting late.", indonesian: "Sudah mulai larut malam.", register: "Neutral", contextNote: "Alasan halus untuk mulai berpamitan pulang.", psychologyWhy: "Menyalahkan waktu ('getting late') agar lawan bicara tidak merasa diusir atau ditinggalkan." },
      { id: "pt-8", english: "See you next time.", indonesian: "Sampai jumpa lain waktu.", register: "Neutral", contextNote: "Cocok untuk rekan kelas, komunitas, atau klien.", psychologyWhy: "Menegaskan niat untuk melanjutkan koneksi di kesempatan berikutnya." },
      { id: "pt-9", english: "See you tomorrow.", indonesian: "Sampai berjumpa besok.", register: "Neutral", contextNote: "Dipakai untuk rekan kerja atau teman sekolah.", psychologyWhy: "Memberi kepastian jadwal pertemuan berikutnya." },
      { id: "pt-10", english: "See you this afternoon.", indonesian: "Sampai berjumpa siang/sore ini.", register: "Neutral", contextNote: "Dipakai saat berpisah di pagi hari dan akan bertemu lagi sorenya.", psychologyWhy: "Mengonfirmasi komitmen pertemuan di hari yang sama." },
      { id: "pt-11", english: "See you this evening.", indonesian: "Sampai berjumpa malam ini.", register: "Neutral", contextNote: "Dipakai saat ada janji makan malam atau rapat malam.", psychologyWhy: "Mengingatkan agenda bersama secara ramah." },
      { id: "pt-12", english: "See you tonight.", indonesian: "Sampai berjumpa nanti malam.", register: "Casual", contextNote: "Lebih akrab dibanding 'this evening'.", psychologyWhy: "Menciptakan antusiasme menjelang pertemuan malam." },
      { id: "pt-13", english: "See you on Saturday.", indonesian: "Sampai berjumpa pada hari Sabtu.", register: "Neutral", contextNote: "Bisa diganti nama hari apa pun sesuai jadwal.", psychologyWhy: "Mengunci janji temu agar kedua pihak sama-sama ingat." },
      { id: "pt-14", english: "I have to go now.", indonesian: "Saya harus pergi sekarang.", register: "Neutral", contextNote: "Pernyataan tegas namun sopan untuk mengakhiri obrolan.", psychologyWhy: "Menunjukkan adanya tanggung jawab lain tanpa terdengar kasar." },
      { id: "pt-15", english: "Nice meeting you, Ailin.", indonesian: "Senang berkenalan/bertemu dengan Anda, Ailin.", register: "Neutral", contextNote: "Menyebut nama lawan bicara membuat perpisahan terasa personal.", psychologyWhy: "Orang sangat suka mendengar namanya disebut; ini memperkuat ingatan positif." },
      { id: "pt-16", english: "I am sorry, I have to go.", indonesian: "Maaf, saya harus pergi.", register: "Formal", contextNote: "Sangat sopan saat harus meninggalkan diskusi lebih awal.", psychologyWhy: "Kata 'I am sorry' meredam rasa kecewa lawan bicara." },
      { id: "pt-17", english: "I must say goodbye.", indonesian: "Saya harus mengucapkan selamat tinggal.", register: "Formal", contextNote: "Dipakai di acara formal atau pidato perpisahan.", psychologyWhy: "Memberi penutup yang terhormat pada sebuah pertemuan." },
      { id: "pt-18", english: "Good luck! / Best lucky for you!", indonesian: "Semoga sukses! / Semoga kamu beruntung!", register: "Neutral", contextNote: "Catatan: Bentuk yang benar secara gramatikal adalah 'Best of luck to you!' atau 'Good luck!'.", psychologyWhy: "Memberi dukungan moral sebelum lawan bicara menghadapi tantangan." },
      { id: "pt-19", english: "Till we meet again.", indonesian: "Sampai berjumpa lagi.", register: "Neutral", contextNote: "Sedikit puitis, cocok untuk perpisahan perjalanan jauh.", psychologyWhy: "Menekankan harapan reuni di masa depan." },
      { id: "pt-20", english: "All the best!", indonesian: "Semoga berhasil / Doa terbaik untukmu!", register: "Neutral", contextNote: "Sangat populer di penutup email maupun perpisahan kerja.", psychologyWhy: "Merangkum seluruh harapan baik dalam tiga kata singkat." },
      { id: "pt-21", english: "Take care! / Be careful!", indonesian: "Hati-hati di jalan / Jaga diri!", register: "Neutral", contextNote: "'Take care' = jaga diri secara umum; 'Be careful' = waspada terhadap bahaya spesifik.", psychologyWhy: "Menunjukkan kepedulian atas keselamatan lawan bicara." },
      { id: "pt-22", english: "Have a safe journey!", indonesian: "Selamat jalan (semoga perjalanan aman)!", register: "Neutral", contextNote: "Dipakai saat mengantar teman atau tamu bepergian.", psychologyWhy: "Mendoakan kelancaran perjalanan secara tulus." },
      { id: "pt-23", english: "Have a good time. / Enjoy your day!", indonesian: "Selamat bersenang-senang. / Nikmati harimu!", register: "Casual", contextNote: "Dipakai saat teman hendak berlibur atau menjalani hari.", psychologyWhy: "Mendorong energi positif pada aktivitas lawan bicara." },
      { id: "pt-24", english: "Thank you so much for coming.", indonesian: "Terima kasih banyak atas kedatangannya.", register: "Formal", contextNote: "Ucapan tuan rumah kepada tamu yang hendak pulang.", psychologyWhy: "Menghargai waktu dan usaha tamu yang sudah hadir." },
      { id: "pt-25", english: "Please come again soon.", indonesian: "Datanglah kembali dalam waktu dekat ini.", register: "Neutral", contextNote: "Sangat umum diucapkan tuan rumah maupun pemilik usaha.", psychologyWhy: "Membuat tamu merasa selalu diterima." },
      { id: "pt-26", english: "Please give my regards to your parents.", indonesian: "Sampaikan salam hangat saya kepada orang tuamu.", register: "Formal", contextNote: "Titip salam sopan untuk keluarga atau kolega.", psychologyWhy: "Memperluas kehangatan sosial hingga ke lingkaran keluarga lawan bicara." },
    ],
  },
  {
    id: "introduction",
    title: "3. Introducing Yourself & Others (Memperkenalkan Diri & Orang Lain)",
    subtitle:
      "Frasa perkenalan dari suasana kasual hingga forum bisnis, termasuk cara meminta lawan bicara berbicara lebih pelan.",
    etiquetteRules: [
      "Mulai perkenalan formal dengan frasa izin halus seperti 'May I introduce myself?' atau 'Allow me to introduce...'.",
      "Gunakan 'How do you do?' hanya pada pertemuan pertama yang sangat resmi; untuk situasi sehari-hari gunakan 'Nice to meet you'.",
      "Saat memperkenalkan dua orang, sebutkan nama orang yang lebih senior atau tamu kehormatan terlebih dahulu.",
    ],
    psychologyOverview:
      "Perkenalan dalam budaya berbahasa Inggris berfungsi membangun kejelasan identitas dan rasa aman sosial. Menyebutkan nama panggilan ('You can call me...') segera menurunkan ketegangan dan mempercepat keakraban.",
    tipsAndTricks: [
      "Jika belum pernah bertemu sebelumnya, gunakan 'Nice to meet you'. Jika sudah pernah bertemu sebelumnya, gunakan 'Nice to see you again' (jangan tertukar!).",
      "Jika lawan bicara berbicara terlalu cepat, gunakan 'I'm sorry, can you speak more slowly?'—penutur asli sangat menghargai kejujuran ini.",
    ],
    entries: [
      { id: "in-1", english: "May I introduce myself?", indonesian: "Bolehkah saya memperkenalkan diri?", register: "Formal", contextNote: "Pembuka sangat sopan di rapat, wawancara, atau seminar.", psychologyWhy: "Meminta izin terlebih dahulu menunjukkan rasa hormat terhadap waktu audiens." },
      { id: "in-2", english: "Let me introduce myself.", indonesian: "Izinkan saya memperkenalkan diri.", register: "Neutral", contextNote: "Lugas dan percaya diri untuk presentasi maupun perkenalan kelompok.", psychologyWhy: "Mengambil inisiatif komunikasi secara profesional." },
      { id: "in-3", english: "I am Naufal. / I'm Aldrich Fahrezi.", indonesian: "Saya Naufal. / Saya Aldrich Fahrezi.", register: "Neutral", contextNote: "Cara paling langsung menyebutkan nama lengkap atau panggilan.", psychologyWhy: "Kejelasan identitas menjadi fondasi percakapan." },
      { id: "in-4", english: "How do you spell your name?", indonesian: "Bagaimana kamu mengeja namamu?", register: "Neutral", contextNote: "Penting saat mencatat nama di resepsionis, formulir, atau telepon.", psychologyWhy: "Menghindari kesalahan penulisan nama sebagai bentuk penghargaan identitas." },
      { id: "in-5", english: "Nice to meet you. / It's good to meet you.", indonesian: "Senang bertemu denganmu.", register: "Neutral", contextNote: "Ucapan standar setelah berjabat tangan atau bertukar nama.", psychologyWhy: "Menciptakan kesan pertama yang ramah dan terbuka." },
      { id: "in-6", english: "Nice to meet you too.", indonesian: "Senang juga bertemu denganmu.", register: "Neutral", contextNote: "Balasan wajib saat seseorang berkata 'Nice to meet you'.", psychologyWhy: "Menyambut kehangatan lawan bicara dengan tingkat keramahan yang setara." },
      { id: "in-7", english: "How do you do?", indonesian: "Apa kabar? (Salam perkenalan resmi)", register: "Formal", contextNote: "Bukan pertanyaan kabar biasa; dibalas dengan 'How do you do?'.", psychologyWhy: "Protokol kesopanan klasik pada perkenalan formal." },
      { id: "in-8", english: "I'm glad for this meeting.", indonesian: "Saya senang dengan perjumpaan ini.", register: "Formal", contextNote: "Cocok untuk pertemuan bisnis atau kolaborasi proyek.", psychologyWhy: "Menegaskan nilai positif dari pertemuan tersebut." },
      { id: "in-9", english: "What is your name?", indonesian: "Siapa namamu?", register: "Neutral", contextNote: "Untuk lebih halus di situasi formal, gunakan 'May I know your name?'.", psychologyWhy: "Pertanyaan langsung untuk memulai pengenalan dua arah." },
      { id: "in-10", english: "I'm sorry, can you speak more slowly?", indonesian: "Maaf, bisakah Anda berbicara lebih pelan?", register: "Neutral", contextNote: "Kalimat penyelamat saat berbicara dengan native speaker yang berbicara cepat.", psychologyWhy: "Diawali 'I'm sorry' agar terdengar sopan dan tidak menyalahkan lawan bicara." },
      { id: "in-11", english: "May I introduce...? / Allow me to introduce...", indonesian: "Bolehkah saya memperkenalkan...? / Izinkan saya memperkenalkan...", register: "Formal", contextNote: "Digunakan saat memperkenalkan rekan kerja, atasan, atau anggota keluarga.", psychologyWhy: "Menjadi jembatan kepercayaan antara dua orang yang belum saling kenal." },
      { id: "in-12", english: "I'd like to meet... / I'd like to introduce...", indonesian: "Saya ingin berkenalan dengan... / Saya ingin memperkenalkan...", register: "Neutral", contextNote: "Sopan dan alami di acara jejaring (networking).", psychologyWhy: "Menggunakan 'would like' ('d like) jauh lebih halus daripada 'want'." },
      { id: "in-13", english: "This is...", indonesian: "Ini adalah...", register: "Casual", contextNote: "Cara paling ringkas memperkenalkan teman (contoh: 'This is my friend, Raka').", psychologyWhy: "Praktis dan langsung mencairkan suasana santai." },
      { id: "in-14", english: "You can call me...", indonesian: "Anda dapat memanggil saya...", register: "Neutral", contextNote: "Memberi tahu nama panggilan akrab setelah menyebutkan nama lengkap.", psychologyWhy: "Mengurangi jarak formalitas agar lawan bicara nyaman memanggil." },
      { id: "in-15", english: "Have you met Willy?", indonesian: "Apakah kamu pernah bertemu Willy?", register: "Casual", contextNote: "Cara alami mengecek apakah dua teman sudah saling kenal.", psychologyWhy: "Mencegah kecanggungan memperkenalkan dua orang yang ternyata sudah kenal." },
      { id: "in-16", english: "I don't think you've ever met...", indonesian: "Saya kira kalian belum pernah berjumpa...", register: "Neutral", contextNote: "Pembuka halus sebelum memperkenalkan dua kenalan baru.", psychologyWhy: "Memberi konteks sebelum kedua pihak berjabat tangan." },
    ],
  },
  {
    id: "prohibitions",
    title: "4. Everyday Prohibitions & Imperatives (Larangan & Nasihat Singkat)",
    subtitle:
      "Pola kalimat larangan memakai 'Don't + Verb 1' dan 'Don't be + Kata Sifat' dari halaman 312 buku.",
    etiquetteRules: [
      "Gunakan 'Don't + Verb 1' jika melarang sebuah tindakan/kata kerja (contoh: 'Don't give up', 'Don't park here').",
      "WAJIB tambahkan 'be' ('Don't be + Kata Sifat') jika melarang suatu sifat atau perasaan (contoh: 'Don't be jealous', 'Don't be careless').",
      "Untuk nada yang lebih sopan atau perintah kerja, tambahkan 'Please' di depan ('Please don't be late').",
    ],
    psychologyOverview:
      "Bahasa Inggris membedakan secara tegas antara melarang aksi ('Don't do X') dan melarang kondisi mental/sifat ('Don't be X'). Kesalahan umum pelajar Indonesia adalah menghilangkan 'be' menjadi 'Don't jealous' atau 'Don't late' karena menerjemahkan langsung dari 'Jangan cemburu'.",
    tipsAndTricks: [
      "Rumus anti-salah: Jika setelah kata 'Jangan' adalah kata sifat (malas, sedih, kasar, ceroboh, putus asa), selalu kunci dengan 'Don't be + Adjective'.",
    ],
    entries: [
      { id: "pr-1", english: "Don't deceive me.", indonesian: "Jangan menipuku.", register: "Neutral", contextNote: "Pola Don't + Verb 1 (deceive = menipu).", psychologyWhy: "Menegaskan batasan kejujuran secara langsung." },
      { id: "pr-2", english: "Don't give up.", indonesian: "Jangan menyerah.", register: "Casual", contextNote: "Pola Don't + Phrasal Verb (give up = menyerah).", psychologyWhy: "Dorongan emosional singkat untuk menjaga ketahanan mental." },
      { id: "pr-3", english: "Don't be jealous.", indonesian: "Jangan cemburu.", register: "Casual", contextNote: "Pola Don't be + Adjective (jealous = cemburu).", psychologyWhy: "Menggunakan 'be' karena 'jealous' adalah kondisi perasaan, bukan aksi." },
      { id: "pr-4", english: "Don't park here.", indonesian: "Jangan parkir di sini.", register: "Neutral", contextNote: "Pola Don't + Verb 1 (park = memarkir).", psychologyWhy: "Instruksi aturan ruang publik yang ringkas dan jelas." },
      { id: "pr-5", english: "Don't be careless.", indonesian: "Jangan ceroboh / sembrono.", register: "Neutral", contextNote: "Pola Don't be + Adjective (careless = ceroboh).", psychologyWhy: "Mengingatkan ketelitian sebelum melakukan pekerjaan berisiko." },
      { id: "pr-6", english: "Don't be so rude.", indonesian: "Jangan terlalu kasar / kurang ajar.", register: "Neutral", contextNote: "Pola Don't be so + Adjective (rude = kasar/tidak sopan).", psychologyWhy: "Menegur pelanggaran norma kesopanan secara tegas." },
      { id: "pr-7", english: "Don't be desperate.", indonesian: "Jangan putus asa.", register: "Neutral", contextNote: "Pola Don't be + Adjective (desperate = putus asa).", psychologyWhy: "Menenangkan lawan bicara agar tetap berpikir jernih saat tertekan." },
    ],
  },
  {
    id: "proverbs",
    title: "5. English Proverbs & Wisdom (Peribahasa & Filosofi Hidup)",
    subtitle:
      "Kumpulan lengkap peribahasa populer dari halaman 395, 398, dan 399 beserta makna psikologis dan konteks penggunaannya.",
    etiquetteRules: [
      "Peribahasa digunakan untuk menyampaikan nasihat, kritik halus, atau kesimpulan bijak tanpa terkesan menggurui secara pribadi.",
      "Gunakan bentuk baku peribahasa secara utuh—jangan mengubah tata bahasanya meskipun beberapa memakai gaya bahasa klasik.",
    ],
    psychologyOverview:
      "Dalam budaya Barat, peribahasa berfungsi sebagai 'otoritas kebijaksanaan kolektif'. Saat seseorang berkata 'Haste makes waste' atau 'Practice makes perfect', ia menyandarkan nasihatnya pada kebenaran umum sehingga lawan bicara lebih mudah menerimanya tanpa merasa diserang secara personal.",
    tipsAndTricks: [
      "Hafalkan 5–7 peribahasa paling sering muncul dalam esai IELTS/TOEFL dan percakapan kerja: 'Actions speak louder than words', 'Better late than never', 'Honesty is the best policy', 'If it ain't broke, don't fix it', dan 'Knowledge is power'.",
    ],
    entries: [
      { id: "pv-1", english: "A friend in need is a friend indeed.", indonesian: "Teman sejati adalah orang yang ada saat kita membutuhkan.", register: "Proverb", contextNote: "Menguji ketulusan persahabatan di masa sulit.", psychologyWhy: "Membedakan teman bersenang-senang dengan sahabat yang setia dalam krisis." },
      { id: "pv-2", english: "A penny saved is a penny earned.", indonesian: "Uang yang dihemat sama nilainya dengan uang yang dihasilkan.", register: "Proverb", contextNote: "Prinsip literasi keuangan dan hidup hemat.", psychologyWhy: "Mengubah pola pikir bahwa menahan pengeluaran sama produktifnya dengan mencari penghasilan." },
      { id: "pv-3", english: "An apple a day keeps the doctor away.", indonesian: "Kebiasaan sehat setiap hari menjauhkan kita dari penyakit.", register: "Proverb", contextNote: "Nasihat menjaga pola makan dan pencegahan penyakit.", psychologyWhy: "Menekankan kekuatan kebiasaan kecil yang konsisten daripada pengobatan mahal." },
      { id: "pv-4", english: "A good example is the best sermon.", indonesian: "Teladan nyata adalah nasihat terbaik.", register: "Proverb", contextNote: "Kepemimpinan dan pendidikan karakter.", psychologyWhy: "Manusia meniru tindakan nyata jauh lebih cepat daripada sekadar ceramah." },
      { id: "pv-5", english: "All start is difficult.", indonesian: "Setiap permulaan memang sulit.", register: "Proverb", contextNote: "Menghibur orang yang baru belajar keahlian baru.", psychologyWhy: "Menormalisasi rasa canggung di tahap awal agar pemula tidak cepat menyerah." },
      { id: "pv-6", english: "A man is known by the companion he keeps.", indonesian: "Seseorang dikenali karakternya dari lingkaran pertemanannya.", register: "Proverb", contextNote: "Pentingnya memilih lingkungan pergaulan yang positif.", psychologyWhy: "Lingkungan sosial membentuk standar perilaku dan cara berpikir seseorang." },
      { id: "pv-7", english: "A pot cannot call a kettle black.", indonesian: "Jangan menghina kekurangan orang lain jika diri sendiri memiliki kekurangan yang sama.", register: "Proverb", contextNote: "Kritik terhadap kemunafikan.", psychologyWhy: "Mengajak introspeksi diri sebelum menghakimi kesalahan orang lain." },
      { id: "pv-8", english: "A tree is known by its fruit.", indonesian: "Seseorang dinilai dari hasil tindakan dan karyanya.", register: "Proverb", contextNote: "Evaluasi integritas dan kompetensi.", psychologyWhy: "Kualitas sejati selalu terlihat dari dampak nyata yang dihasilkan." },
      { id: "pv-9", english: "Bending without breaking.", indonesian: "Lentur tanpa patah (mengalah bukan berarti kalah).", register: "Proverb", contextNote: "Strategi negosiasi dan ketahanan menghadapi krisis.", psychologyWhy: "Fleksibilitas mental menyelamatkan seseorang dari kehancuran akibat ego kaku." },
      { id: "pv-10", english: "Genius is one percent inspiration, ninety-nine percent perspiration.", indonesian: "Kejeniusan adalah 1% inspirasi dan 99% kerja keras.", register: "Proverb", contextNote: "Kutipan terkenal Thomas Alva Edison tentang etos kerja.", psychologyWhy: "Melawan mitos bakat instan dengan menekankan disiplin eksekusi." },
      { id: "pv-11", english: "Gardens are not made by sitting in the shade.", indonesian: "Hasil luar biasa tidak tercipta dengan hanya duduk santai di tempat teduh.", register: "Proverb", contextNote: "Motivasi untuk segera bertindak.", psychologyWhy: "Visualisasi konkret bahwa hasil membutuhkan keringat dan tindakan." },
      { id: "pv-12", english: "God helps those who help themselves.", indonesian: "Tuhan menolong orang yang mau berusaha menolong dirinya sendiri.", register: "Proverb", contextNote: "Keseimbangan antara doa dan ikhtiar maksimal.", psychologyWhy: "Mendorong tanggung jawab pribadi atas perubahan hidup." },
      { id: "pv-13", english: "Great oaks grow from little acorns.", indonesian: "Pohon ek raksasa tumbuh dari biji kecil (hal besar dimulai dari langkah kecil).", register: "Proverb", contextNote: "Membangun proyek, bisnis, atau keahlian dari nol.", psychologyWhy: "Menghargai proses pertumbuhan bertahap." },
      { id: "pv-14", english: "Health is above wealth. / Health is better than wealth.", indonesian: "Kesehatan jauh lebih berharga daripada kekayaan.", register: "Proverb", contextNote: "Pengingat menjaga keseimbangan kerja dan istirahat.", psychologyWhy: "Kekayaan kehilangan maknanya tanpa tubuh dan pikiran yang sehat." },
      { id: "pv-15", english: "Honesty is the best policy.", indonesian: "Kejujuran adalah kebijakan/strategi terbaik.", register: "Proverb", contextNote: "Etika bisnis, akademik, dan hubungan personal.", psychologyWhy: "Kepercayaan jangka panjang jauh lebih menguntungkan daripada keuntungan sesaat." },
      { id: "pv-16", english: "He who can, believes he can.", indonesian: "Orang yang percaya dirinya mampu, maka ia akan mampu melakukannya.", register: "Proverb", contextNote: "Self-efficacy dan kepercayaan diri.", psychologyWhy: "Keyakinan mental menentukan keberanian mengambil tindakan." },
      { id: "pv-17", english: "Half a loaf is better than none.", indonesian: "Mendapat setengah lebih baik daripada tidak sama sekali.", register: "Proverb", contextNote: "Rasa syukur dan kompromi realistis.", psychologyWhy: "Mencegah perfeksionisme yang membuat seseorang menolak peluang baik." },
      { id: "pv-18", english: "Haste makes waste.", indonesian: "Tergesa-gesa hanya menimbulkan kesalahan dan pemborosan.", register: "Proverb", contextNote: "Peringatan saat mengerjakan tugas penting secara terburu-buru.", psychologyWhy: "Kecepatan tanpa ketelitian justru memaksa kita mengulang pekerjaan dari awal." },
      { id: "pv-19", english: "Home is where the heart is.", indonesian: "Rumah sejati adalah tempat di mana orang-orang yang kita cintai berada.", register: "Proverb", contextNote: "Makna keluarga dan rasa memiliki.", psychologyWhy: "Rumah didefinisikan oleh ikatan emosional, bukan sekadar bangunan fisik." },
      { id: "pv-20", english: "However long the night, the dawn will break.", indonesian: "Sepanjang apa pun malam, fajar pasti akan menyingsing.", register: "Proverb", contextNote: "Harapan di tengah masa sulit.", psychologyWhy: "Mengingatkan bahwa setiap krisis bersifat sementara." },
      { id: "pv-21", english: "If at first you don't succeed, try, try again.", indonesian: "Jika pertama kali gagal, teruslah mencoba lagi.", register: "Proverb", contextNote: "Ketekunan dalam belajar dan eksperimen.", psychologyWhy: "Memandang kegagalan sebagai umpan balik, bukan akhir perjalanan." },
      { id: "pv-22", english: "If it ain't broke, don't fix it.", indonesian: "Jika sesuatu sudah berjalan baik dan tidak rusak, jangan diutak-atik.", register: "Proverb", contextNote: "Sangat populer di dunia rekayasa perangkat lunak dan manajemen.", psychologyWhy: "Mencegah perubahan yang tidak perlu yang justru memicu masalah baru." },
      { id: "pv-23", english: "It's no use crying over spilt milk.", indonesian: "Tidak ada gunanya menangisi susu yang sudah tumpah.", register: "Proverb", contextNote: "Menerima kesalahan masa lalu dan fokus pada solusi ke depan.", psychologyWhy: "Energi mental lebih baik dipakai memperbaiki masa depan daripada menyesali masa lalu." },
      { id: "pv-24", english: "Empty can makes the most noise.", indonesian: "Tong kosong nyaring bunyinya.", register: "Proverb", contextNote: "Orang yang sedikit ilmunya sering kali paling banyak bicara.", psychologyWhy: "Kebijaksanaan sejati cenderung tenang dan tidak perlu pamer." },
      { id: "pv-25", english: "If you chase two rabbits, you will not catch either one.", indonesian: "Jika mengejar dua kelinci sekaligus, kamu tidak akan menangkap satu pun.", register: "Proverb", contextNote: "Pentingnya fokus pada satu prioritas utama.", psychologyWhy: "Terlalu banyak target bersamaan memecah konsentrasi dan tenaga." },
      { id: "pv-26", english: "Ignorance is bliss.", indonesian: "Ketidaktahuan terkadang membawa ketenangan.", register: "Proverb", contextNote: "Digunakan saat tidak mengetahui detail buruk justru membuat pikiran tenang.", psychologyWhy: "Informasi berlebihan tentang hal di luar kendali hanya memicu kecemasan." },
      { id: "pv-27", english: "In the land of the blind, the one-eyed man is king.", indonesian: "Di negeri orang buta, orang bermata satu menjadi raja.", register: "Proverb", contextNote: "Keunggulan relatif di lingkungan yang minim keahlian.", psychologyWhy: "Sedikit pengetahuan sudah sangat bernilai di tempat yang belum menguasainya." },
      { id: "pv-28", english: "Knowledge is power.", indonesian: "Pengetahuan adalah kekuatan.", register: "Proverb", contextNote: "Motivasi pendidikan dan literasi.", psychologyWhy: "Informasi dan pemahaman memberi kendali untuk mengambil keputusan tepat." },
      { id: "pv-29", english: "Kill the goose that lays the golden egg.", indonesian: "Membunuh angsa yang bertelur emas (menghancurkan sumber penghasilan jangka panjang demi keserakahan sesaat).", register: "Proverb", contextNote: "Peringatan manajemen aset dan keberlanjutan.", psychologyWhy: "Keserakahan jangka pendek sering merusak fondasi kesuksesan masa depan." },
      { id: "pv-30", english: "Life is no bed of roses.", indonesian: "Hidup ini bukanlah hamparan bunga mawar (tidak selalu mudah).", register: "Proverb", contextNote: "Realisme menghadapi tantangan hidup.", psychologyWhy: "Kesiapan mental menerima kesulitan membuat seseorang lebih tangguh." },
    ],
  },
];