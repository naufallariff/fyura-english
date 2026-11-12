"use client";

import { useState, useMemo } from "react";
import {
    Clock,
    Layers,
    Anchor,
    BookOpen,
    MessageSquare,
    Globe2,
    Lightbulb,
    CheckCircle2,
    XCircle,
    HelpCircle,
    Search,
    Sparkles,
    Brain,
    AlertTriangle,
    Zap,
    X,
    ArrowRight,
} from "lucide-react";
import type {
    TimeMatrixBlueprint,
    TimeDimensionId,
} from "@/schemas/timeMatrix";
import { cn } from "@/lib/utils";

interface TimeMatrixWorkspaceProps {
    data: TimeMatrixBlueprint;
}

const TIME_DIMENSIONS: {
    id: TimeDimensionId;
    name: string;
    indonesian: string;
    accentBorder: string;
    accentBadge: string;
    accentDot: string;
    summary: string;
    dailyExample: string;
}[] = [
        {
            id: "present",
            name: "Present",
            indonesian: "Masa Kini & Kenyataan Saat Ini",
            accentBorder: "border-emerald-200",
            accentBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
            accentDot: "bg-emerald-500",
            summary:
                "Digunakan untuk sesuatu yang berlaku sekarang, kebiasaan yang berulang dari dulu sampai hari ini, atau fakta umum yang selalu benar.",
            dailyExample:
                "I drink coffee every morning. (Rutinitas yang masih berjalan)",
        },
        {
            id: "past",
            name: "Past",
            indonesian: "Masa Lampau yang Sudah Selesai",
            accentBorder: "border-sky-200",
            accentBadge: "bg-sky-50 text-sky-700 border-sky-200",
            accentDot: "bg-sky-500",
            summary:
                "Digunakan untuk kejadian yang sudah benar-benar berakhir di titik waktu lampau dan tidak lagi terhubung dengan detik sekarang.",
            dailyExample:
                "I drank coffee two hours ago. (Kejadian sudah selesai tadi)",
        },
        {
            id: "future",
            name: "Future",
            indonesian: "Masa Depan, Rencana & Prediksi",
            accentBorder: "border-amber-200",
            accentBadge: "bg-amber-50 text-amber-800 border-amber-200",
            accentDot: "bg-amber-500",
            summary:
                "Digunakan untuk niat, keputusan spontan, jadwal mendatang, atau perkiraan tentang apa yang akan terjadi setelah saat ini.",
            dailyExample:
                "I will call you tonight. (Rencana setelah momen sekarang)",
        },
        {
            id: "past-future",
            name: "Past Future",
            indonesian: "Rencana Masa Lalu & Pengandaian",
            accentBorder: "border-violet-200",
            accentBadge: "bg-violet-50 text-violet-700 border-violet-200",
            accentDot: "bg-violet-500",
            summary:
                "Digunakan saat bercerita tentang rencana yang dulu sempat dibuat di masa lalu, atau untuk menyampaikan kalimat pengandaian dan permintaan sopan.",
            dailyExample:
                "I thought it would rain yesterday. (Prediksi dari sudut pandang kemarin)",
        },
    ];

const ASPECT_CONCEPTS: {
    id: string;
    name: string;
    tagline: string;
    coreMeaning: string;
    visualAnalogy: string;
    signaturePattern: string;
}[] = [
        {
            id: "simple",
            name: "Simple",
            tagline: "Fakta Utuh & Satu Titik Kejadian",
            coreMeaning:
                "Melihat suatu peristiwa secara utuh tanpa menyoroti prosesnya. Fokusnya hanya pada apakah kejadian itu terjadi, merupakan kebiasaan, atau fakta.",
            visualAnalogy:
                "Seperti foto jepretan tunggal: jelas siapa melakukan apa.",
            signaturePattern: "V1 / V2 / will + V1 (Nominal: To Be)",
        },
        {
            id: "continuous",
            name: "Continuous",
            tagline: "Sedang Berlangsung & Dinamis",
            coreMeaning:
                "Menyoroti aktivitas yang tengah bergerak di tengah proses pada titik waktu tertentu—sudah dimulai, tetapi belum selesai saat dibicarakan.",
            visualAnalogy:
                "Seperti video yang sedang diputar: kamu berada di tengah-tengah aksinya.",
            signaturePattern: "To Be + V-ing",
        },
        {
            id: "perfect",
            name: "Perfect",
            tagline: "Sudah Tuntas & Dampaknya Terasa",
            coreMeaning:
                "Menghubungkan dua titik waktu. Kejadiannya sudah selesai sebelum titik acuan, dan hasil atau pengalamannya masih relevan pada saat acuan itu.",
            visualAnalogy:
                "Seperti tanda centang selesai yang efeknya masih kamu bawa sekarang.",
            signaturePattern: "Have / Has / Had + V3",
        },
        {
            id: "perfect-continuous",
            name: "Perfect Continuous",
            tagline: "Sudah Mulai Sejak Tadi & Masih Berjalan",
            coreMeaning:
                "Menggabungkan durasi dan proses aktif: sesuatu sudah dimulai sejak waktu sebelumnya dan sampai titik acuan masih terus berlangsung.",
            visualAnalogy:
                "Seperti stopwatch yang sudah menyala sejak tadi dan angkanya masih terus berjalan.",
            signaturePattern: "Have / Has / Had + been + V-ing",
        },
    ];

const TO_BE_TIME_TABLE = [
    {
        time: "Present (Saat Ini)",
        subjects: "I → am | He, She, It → is | You, We, They → are",
        positive: "S + am / is / are + Kata Sifat / Benda / Lokasi",
        negative: "S + am / is / are + not + Kata Sifat / Benda / Lokasi",
        question: "Am / Is / Are + S + Kata Sifat / Benda / Lokasi?",
        examplePos: "She is a software engineer at a startup.",
        exampleNeg: "She is not tired after the meeting.",
        exampleAsk: "Is she ready for the presentation?",
    },
    {
        time: "Past (Lampau)",
        subjects: "I, He, She, It → was | You, We, They → were",
        positive: "S + was / were + Kata Sifat / Benda / Lokasi",
        negative: "S + was / were + not + Kata Sifat / Benda / Lokasi",
        question: "Was / Were + S + Kata Sifat / Benda / Lokasi?",
        examplePos: "They were at the office yesterday afternoon.",
        exampleNeg: "The server was not stable last night.",
        exampleAsk: "Were you busy when I called?",
    },
    {
        time: "Future (Akan Datang)",
        subjects: "Semua Subjek → will be",
        positive: "S + will be + Kata Sifat / Benda / Lokasi",
        negative: "S + will not (won't) be + Kata Sifat / Benda / Lokasi",
        question: "Will + S + be + Kata Sifat / Benda / Lokasi?",
        examplePos: "Everything will be clear tomorrow morning.",
        exampleNeg: "The room will not be available until noon.",
        exampleAsk: "Will you be at home tonight?",
    },
    {
        time: "Perfect (Sudah Berstatus)",
        subjects:
            "I, You, We, They → have been | He, She, It → has been (Past: had been)",
        positive: "S + have / has / had + been + Kata Sifat / Lokasi",
        negative: "S + have / has / had + not + been + Kata Sifat / Lokasi",
        question: "Have / Has / Had + S + been + Kata Sifat / Lokasi?",
        examplePos: "I have been awake since five in the morning.",
        exampleNeg: "He has not been here all week.",
        exampleAsk: "Have you ever been to Bandung?",
    },
];

const TO_BE_CONDITIONS = [
    {
        condition: "Kondisi 1: Menjelaskan Sifat, Perasaan, atau Keadaan",
        explanation:
            "Dalam bahasa Indonesia kita langsung berkata 'Saya lapar' tanpa kata kerja. Dalam bahasa Inggris, kalimat wajib punya kata kerja penyangga, sehingga To Be hadir menghubungkan subjek dengan kata sifat.",
        pos: "I am confident about the interview.",
        neg: "I am not nervous anymore.",
        ask: "Are you sure about this decision?",
    },
    {
        condition: "Kondisi 2: Menjelaskan Identitas, Profesi, atau Status",
        explanation:
            "Dipakai saat memperkenalkan siapa seseorang atau apa fungsi suatu benda.",
        pos: "My brother is a civil engineer.",
        neg: "That file is not the final version.",
        ask: "Is he the team lead for this project?",
    },
    {
        condition: "Kondisi 3: Menjelaskan Lokasi atau Posisi",
        explanation:
            "Dipakai untuk menyatakan keberadaan seseorang atau sesuatu di tempat tertentu pada waktu tertentu.",
        pos: "The keys were on the kitchen table.",
        neg: "We were not in Jakarta last month.",
        ask: "Where are your teammates right now?",
    },
    {
        condition: "Kondisi 4: Menemani Aktivitas Sedang Berlangsung (V-ing)",
        explanation:
            "To Be berubah fungsi menjadi kata bantu agar kata kerja berakhiran -ing bisa menunjukkan waktu kejadian.",
        pos: "She is reviewing the contract right now.",
        neg: "They are not working on weekends.",
        ask: "What were you doing at 9 PM?",
    },
];

const VERB_FORMS_OVERVIEW = [
    {
        form: "Verb 1 (Base Form)",
        role: "Bentuk Dasar & Kebiasaan Masa Kini",
        timeSignal:
            "Menunjukkan waktu Present (atau mengikuti modal seperti will / can / must).",
        rule: "Untuk subjek He, She, It pada kalimat positif Simple Present, tambahkan akhiran -s atau -es.",
        example: "We work together. / She works from home.",
    },
    {
        form: "Verb 2 (Past Form)",
        role: "Kejadian Selesai di Masa Lampau",
        timeSignal:
            "Eksklusif hanya dipakai pada kalimat positif Simple Past. Begitu muncul 'did' atau 'didn't', kata kerja kembali ke V1.",
        rule: "Kata kerja beraturan ditambah -ed, sedangkan kata kerja tidak beraturan berubah bentuk (go → went).",
        example: "They arrived early. / Did they arrive early?",
    },
    {
        form: "Verb 3 (Past Participle)",
        role: "Status Tuntas (Perfect) & Kalimat Pasif",
        timeSignal:
            "Tidak bisa berdiri sendiri menunjukkan waktu; wajib didahului have/has/had (Perfect) atau To Be (Pasif).",
        rule: "Kata kerja beraturan sama dengan V2 (-ed), sedangkan kata kerja tidak beraturan memiliki bentuk khas (write → written).",
        example: "I have finished the report. / The report was written by Arif.",
    },
    {
        form: "Verb-ing (Present Participle)",
        role: "Aktivitas yang Sedang Bergerak",
        timeSignal:
            "Menunjukkan sifat proses yang sedang berlangsung; penentu waktunya ada pada To Be di depannya.",
        rule: "Tambahkan -ing pada bentuk dasar (read → reading, write → writing, run → running).",
        example: "She is reading now. / She was reading when I arrived.",
    },
];

const SOUND_PATTERNS = [
    {
        pattern: "Pola A - A - A (Bentuk Tetap Sama)",
        explanation:
            "Kata kerja yang biasanya berakhiran huruf -t atau -d sehingga pengucapannya tidak berubah dari V1, V2, sampai V3.",
        examples:
            "cut - cut - cut, put - put - put, cost - cost - cost, read - read - read (bunyi berubah menjadi 'red')",
    },
    {
        pattern: "Pola A - B - B (V2 dan V3 Kembar)",
        explanation:
            "Kelompok terbesar dalam bahasa Inggris. Cukup ingat satu perubahan untuk V2, maka V3 otomatis sama persis.",
        examples:
            "buy - bought - bought, bring - brought - brought, feel - felt - felt, keep - kept - kept, make - made - made",
    },
    {
        pattern: "Pola I - A - U (Perubahan Vokal Berurutan)",
        explanation:
            "Vokal di tengah kata bergeser secara teratur mengikuti bunyi i → a → u.",
        examples:
            "drink - drank - drunk, sing - sang - sung, swim - swam - swum, begin - began - begun, ring - rang - rung",
    },
    {
        pattern: "Pola A - B - C dengan Akhiran -en / -n",
        explanation:
            "V1, V2, dan V3 memiliki tiga bentuk berbeda, dengan ciri khas V3 sering berakhiran bunyi -en atau -n.",
        examples:
            "write - wrote - written, speak - spoke - spoken, break - broke - broken, take - took - taken, see - saw - seen",
    },
    {
        pattern: "Pola A - B - A (V3 Kembali ke Bentuk Awal)",
        explanation:
            "Hanya V2 yang berubah, sementara V3 kembali persis sama seperti bentuk V1.",
        examples:
            "come - came - come, become - became - become, run - ran - run",
    },
];

function cleanText(text: string): string {
    return text
        .replace(/^\d+\.\s*/, "")
        .replace(/\s*\(\+\s*\/\s*-\s*\/\s*\?\)/g, "")
        .replace(/\s*\(01\s*[–-]\s*04\)/g, "")
        .trim();
}

export function TimeMatrixWorkspace({ data }: TimeMatrixWorkspaceProps) {
    const [selectedTimeFilter, setSelectedTimeFilter] = useState<
        "all" | TimeDimensionId
    >("present");
    const [verbSearch, setVerbSearch] = useState("");
    const [verbPatternFilter, setVerbPatternFilter] = useState("all");
    const [quizOpen, setQuizOpen] = useState(false);
    const [quizIndex, setQuizIndex] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

    const visibleSentences = useMemo(() => {
        if (selectedTimeFilter === "all") return data.tenseCoordinates;
        return data.tenseCoordinates.filter((t) => t.time === selectedTimeFilter);
    }, [data.tenseCoordinates, selectedTimeFilter]);

    const filteredBeginnerVerbs = useMemo(() => {
        const q = verbSearch.trim().toLowerCase();
        return data.verbAnatomy.irregularVerbs.filter((v) => {
            const matchPattern =
                verbPatternFilter === "all" || v.pattern === verbPatternFilter;
            const matchQuery =
                !q ||
                v.v1.toLowerCase().includes(q) ||
                v.v2.toLowerCase().includes(q) ||
                v.v3.toLowerCase().includes(q) ||
                v.meaning.toLowerCase().includes(q);
            return matchPattern && matchQuery;
        });
    }, [data.verbAnatomy.irregularVerbs, verbSearch, verbPatternFilter]);

    const currentQuiz = data.quiz[quizIndex];
    const chosenOption = currentQuiz?.options.find(
        (o) => o.id === selectedOptionId
    );

    return (
        <div className="space-y-8 pb-14">

            {/* ==================== SECTION 1: JUDUL, PENJELASAN & TUJUAN ==================== */}
            <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-linear-to-br from-white via-sky-50/50 to-indigo-50/70 p-6 shadow-xs sm:p-8">
                {/* Dekorasi Cahaya Halus di Latar Belakang */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-indigo-200/20 blur-3xl" />

                <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
                    {/* Kolom Kiri: Judul & Tujuan */}
                    <div className="space-y-3 lg:col-span-7">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 shadow-2xs">
                            <Clock className="h-3.5 w-3.5" />
                            Panduan Logika Waktu & Kata Kerja Bahasa Inggris
                        </span>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Memahami Waktu, To Be, dan Kata Kerja dalam Bahasa Inggris
                        </h1>
                        <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                            Dalam bahasa Indonesia, kata kerja tidak pernah berubah bentuk
                            meskipun waktunya berganti—kita cukup menambahkan kata{" "}
                            <strong className="font-semibold text-slate-800">
                                kemarin, sedang, sudah,
                            </strong>{" "}
                            atau{" "}
                            <strong className="font-semibold text-slate-800">akan</strong>.
                            Sebaliknya, dalam bahasa Inggris, informasi waktu ditanamkan
                            langsung ke dalam{" "}
                            <strong className="font-semibold text-slate-800">
                                kata bantu (To Be / Auxiliary)
                            </strong>{" "}
                            dan{" "}
                            <strong className="font-semibold text-slate-800">
                                perubahan bentuk kata kerja (Verb)
                            </strong>
                            .
                        </p>
                        <div className="rounded-2xl border border-slate-200/80 bg-white/85 p-4 text-xs leading-relaxed text-slate-700 backdrop-blur-xs sm:text-sm">
                            <strong className="font-semibold text-slate-900">
                                Tujuan Halaman Ini:
                            </strong>{" "}
                            Membantu kamu memahami sistem waktu bahasa Inggris secara utuh
                            dari fondasi paling dasar—mulai dari pembagian waktu, sifat
                            kejadian, cara kerja <em>To Be</em>, pola perubahan <em>Verb</em>,
                            hingga menyusun kalimat alami dalam percakapan sehari-hari tanpa
                            menghafal rumus secara kaku.
                        </div>
                    </div>

                    {/* Kolom Kanan: Kartu Kompas Belajar & Tombol Latihan */}
                    <div className="flex flex-col justify-between space-y-4 rounded-2xl border border-white bg-white/80 p-5 shadow-xs backdrop-blur-xs lg:col-span-5">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                                    Peta Alur Materi
                                </span>
                                <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-700">
                                    6 Tahap Berurutan
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2.5 text-xs">
                                <div className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3">
                                    <p className="font-bold text-slate-900">1. Dimensi & Sifat</p>
                                    <p className="mt-0.5 text-[11px] text-slate-600">
                                        Present, Past, Future & 4 Sifat Aksi
                                    </p>
                                </div>
                                <div className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3">
                                    <p className="font-bold text-slate-900">2. Fondasi To Be</p>
                                    <p className="mt-0.5 text-[11px] text-slate-600">
                                        Penopang sifat, profesi & lokasi
                                    </p>
                                </div>
                                <div className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3">
                                    <p className="font-bold text-slate-900">3. Anatomi Verb</p>
                                    <p className="mt-0.5 text-[11px] text-slate-600">
                                        V1–V-ing & pola bunyi tidak beraturan
                                    </p>
                                </div>
                                <div className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3">
                                    <p className="font-bold text-slate-900">4. Kalimat Nyata</p>
                                    <p className="mt-0.5 text-[11px] text-slate-600">
                                        Logika psikologi & contoh harian
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                setQuizIndex(0);
                                setSelectedOptionId(null);
                                setQuizOpen(true);
                            }}
                            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-slate-800"
                        >
                            <Zap className="h-4 w-4 text-amber-400" />
                            <span>Mulai Latihan Studi Kasus</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* ==================== SECTION 2: APA ITU PRESENT, PAST, FUTURE & PAST FUTURE ==================== */}
            <section className="space-y-4">
                <div className="space-y-1">
                    <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                        Bagian 1 • Dimensi Waktu Utama
                    </p>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900">
                        Apa Itu Present, Past, dan Future?
                    </h2>
                    <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
                        Sebelum memikirkan rumus kalimat, tentukan dulu di mana posisi waktu
                        ceritamu berada: apakah berlaku sekarang, sudah lewat, masih di
                        masa depan, atau rencana yang pernah dibuat di masa lalu.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {TIME_DIMENSIONS.map((dim) => (
                        <article
                            key={dim.id}
                            className={cn(
                                "flex flex-col justify-between space-y-4 rounded-2xl border bg-white p-5 shadow-xs",
                                dim.accentBorder
                            )}
                        >
                            <div className="space-y-2.5">
                                <span
                                    className={cn(
                                        "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-0.5 text-xs font-semibold",
                                        dim.accentBadge
                                    )}
                                >
                                    <span
                                        className={cn("h-1.5 w-1.5 rounded-full", dim.accentDot)}
                                    />
                                    {dim.name}
                                </span>
                                <h3 className="text-base font-bold text-slate-900">
                                    {dim.indonesian}
                                </h3>
                                <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                                    {dim.summary}
                                </p>
                            </div>
                            <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-700">
                                <span className="block text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                                    Contoh Gambaran
                                </span>
                                <p className="mt-1 font-medium text-slate-900">
                                    {dim.dailyExample}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ==================== SECTION 3: SIMPLE, CONTINUOUS, PERFECT & PERFECT CONTINUOUS ==================== */}
            <section className="space-y-4">
                <div className="space-y-1">
                    <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                        Bagian 2 • Sifat Kejadian (Aspek)
                    </p>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900">
                        Apa Itu Simple, Continuous, Perfect, dan Perfect Continuous?
                    </h2>
                    <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
                        Di setiap waktu (Present, Past, maupun Future), sebuah kejadian bisa
                        memiliki empat sifat yang berbeda. Memahami keempat sifat ini jauh
                        lebih penting daripada menghafal enam belas nama tenses secara
                        terpisah.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {ASPECT_CONCEPTS.map((asp) => (
                        <article
                            key={asp.id}
                            className="flex flex-col justify-between space-y-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs"
                        >
                            <div className="space-y-2.5">
                                <div className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-800">
                                    <Layers className="h-3.5 w-3.5 text-slate-500" />
                                    {asp.name}
                                </div>
                                <h3 className="text-base font-bold text-slate-900">
                                    {asp.tagline}
                                </h3>
                                <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                                    {asp.coreMeaning}
                                </p>
                            </div>

                            <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
                                <p className="leading-relaxed text-slate-600">
                                    <strong className="font-semibold text-slate-800">
                                        Analogi:{" "}
                                    </strong>
                                    {asp.visualAnalogy}
                                </p>
                                <div className="rounded-lg bg-slate-900 px-3 py-2 font-mono text-[11px] text-slate-100">
                                    {asp.signaturePattern}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ==================== SECTION 4: MEMAHAMI TO BE & KATA BANTU LEBIH DULU ==================== */}
            <section className="space-y-5 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-8">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        <Anchor className="h-3.5 w-3.5" />
                        Bagian 3 • Fondasi Kalimat
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                        Memahami To Be: Mengapa Harus Dikuasai Sebelum Masuk ke Tenses?
                    </h2>
                    <p className="max-w-4xl text-sm leading-relaxed text-slate-600">
                        Dalam bahasa Inggris,{" "}
                        <strong className="font-semibold text-slate-800">
                            setiap kalimat lengkap wajib memiliki kata kerja (verb)
                        </strong>
                        . Masalahnya, ketika kita ingin bercerita tentang perasaan, sifat,
                        profesi, atau lokasi (seperti{" "}
                        <em>“Dia ramah”</em> atau{" "}
                        <em>“Mereka di kantor kemarin”</em>), tidak ada kata
                        kerja aksi di dalamnya. Di sinilah{" "}
                        <strong className="font-semibold text-slate-800">To Be</strong>{" "}
                        berperan sebagai penopang kalimat sekaligus penunjuk waktu.
                    </p>
                </div>

                {/* Pembagian Waktu To Be & Formula Positif / Negatif / Question */}
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                    <div className="border-b border-slate-200 bg-slate-50 px-5 py-3.5">
                        <h3 className="text-sm font-bold text-slate-900">
                            Pembagian Waktu To Be dan Formula Kalimat (Positif, Negatif,
                            Question)
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-230 border-collapse text-left text-xs">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-900 text-[11px] font-semibold text-white uppercase">
                                    <th className="px-4 py-3">Waktu & Pasangan Subjek</th>
                                    <th className="px-4 py-3 text-emerald-300">
                                        Kalimat Positif
                                    </th>
                                    <th className="px-4 py-3 text-rose-300">Kalimat Negatif</th>
                                    <th className="px-4 py-3 text-sky-300">
                                        Kalimat Question (Tanya)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {TO_BE_TIME_TABLE.map((row) => (
                                    <tr key={row.time} className="align-top hover:bg-slate-50/70">
                                        <td className="w-64 border-r border-slate-200 bg-slate-50/60 px-4 py-3.5">
                                            <p className="font-bold text-slate-900">{row.time}</p>
                                            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                                                {row.subjects}
                                            </p>
                                        </td>
                                        <td className="border-r border-slate-200 px-4 py-3.5">
                                            <code className="block font-semibold text-emerald-700">
                                                {row.positive}
                                            </code>
                                            <p className="mt-1.5 text-slate-700">{row.examplePos}</p>
                                        </td>
                                        <td className="border-r border-slate-200 px-4 py-3.5">
                                            <code className="block font-semibold text-rose-700">
                                                {row.negative}
                                            </code>
                                            <p className="mt-1.5 text-slate-700">{row.exampleNeg}</p>
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <code className="block font-semibold text-sky-700">
                                                {row.question}
                                            </code>
                                            <p className="mt-1.5 text-slate-700">{row.exampleAsk}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Berbagai Kondisi Penggunaan To Be */}
                <div className="space-y-3">
                    <h3 className="text-base font-bold text-slate-900">
                        Empat Kondisi Sehari-hari Menggunakan To Be
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {TO_BE_CONDITIONS.map((item) => (
                            <div
                                key={item.condition}
                                className="space-y-2.5 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4"
                            >
                                <h4 className="text-sm font-bold text-slate-900">
                                    {item.condition}
                                </h4>
                                <p className="text-xs leading-relaxed text-slate-600">
                                    {item.explanation}
                                </p>
                                <div className="space-y-1 rounded-xl border border-slate-200/70 bg-white p-3 text-xs">
                                    <p className="flex items-start gap-2 text-slate-900">
                                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                                        <span>{item.pos}</span>
                                    </p>
                                    <p className="flex items-start gap-2 text-slate-700">
                                        <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-600" />
                                        <span>{item.neg}</span>
                                    </p>
                                    <p className="flex items-start gap-2 text-slate-700">
                                        <HelpCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600" />
                                        <span>{item.ask}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tips Praktis To Be */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4 text-xs leading-relaxed text-amber-950">
                        <p className="flex items-center gap-1.5 font-bold">
                            <AlertTriangle className="h-4 w-4 text-amber-600" />
                            Kesalahan Paling Sering: Mencampur To Be dengan Verb 1
                        </p>
                        <p className="mt-1">
                            Hindari kalimat seperti <em>“I am agree”</em> atau{" "}
                            <em>“She is work here”</em>. Jika sudah ada kata kerja
                            aksi murni (<em>agree, work, go</em>), jangan pasang{" "}
                            <em>am/is/are</em> di depannya—kecuali kata kerjanya berubah
                            menjadi <strong>V-ing</strong> (sedang berlangsung) atau{" "}
                            <strong>V3</strong> (kalimat pasif).
                        </p>
                    </div>
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 text-xs leading-relaxed text-emerald-950">
                        <p className="flex items-center gap-1.5 font-bold">
                            <Lightbulb className="h-4 w-4 text-emerald-600" />
                            Trik Cepat Membuat Kalimat Negatif dan Tanya
                        </p>
                        <p className="mt-1">
                            Kalimat yang memakai <em>To Be</em> tidak membutuhkan kata bantu{" "}
                            <em>do / does / did</em>. Untuk menyangkal, cukup tambahkan{" "}
                            <strong>not</strong> tepat di belakang <em>To Be</em>. Untuk
                            bertanya, cukup pindahkan <em>To Be</em> ke paling depan sebelum
                            subjek.
                        </p>
                    </div>
                </div>
            </section>

            {/* ==================== SECTION 5: MEMAHAMI VERB & KATA KERJA TIDAK BERATURAN ==================== */}
            <section className="space-y-5 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-8">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                        <BookOpen className="h-3.5 w-3.5" />
                        Bagian 4 • Kata Kerja & Perubahan Waktu
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                        Memahami Verb (Kata Kerja): Cara Melihat Waktu dari Perubahan Kata
                    </h2>
                    <p className="max-w-4xl text-sm leading-relaxed text-slate-600">
                        <strong className="font-semibold text-slate-800">Verb</strong>{" "}
                        adalah kata yang menyatakan tindakan (<em>run, write, build</em>)
                        maupun keadaan mental (<em>know, believe, understand</em>). Orang
                        Inggris mengenali kapan sebuah peristiwa terjadi dengan melihat{" "}
                        <strong className="font-semibold text-slate-800">
                            bentuk kata kerja
                        </strong>{" "}
                        yang digunakan di dalam kalimat.
                    </p>
                </div>

                {/* 4 Bentuk Kata Kerja */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {VERB_FORMS_OVERVIEW.map((vf) => (
                        <article
                            key={vf.form}
                            className="flex flex-col justify-between space-y-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4"
                        >
                            <div className="space-y-2">
                                <span className="inline-block rounded-lg bg-slate-900 px-2.5 py-1 font-mono text-xs font-bold text-white">
                                    {vf.form}
                                </span>
                                <h3 className="text-sm font-bold text-slate-900">{vf.role}</h3>
                                <p className="text-xs leading-relaxed text-slate-600">
                                    {vf.timeSignal}
                                </p>
                            </div>
                            <div className="space-y-2 border-t border-slate-200/80 pt-2.5 text-xs">
                                <p className="text-slate-700">{vf.rule}</p>
                                <p className="rounded-lg bg-white p-2 font-medium text-slate-900">
                                    {vf.example}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Penjelasan Regular vs Irregular + Cara Mengetahui Bentuknya */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="space-y-2.5 rounded-2xl border border-slate-200/80 p-5">
                        <h3 className="text-base font-bold text-slate-900">
                            Mengapa Ada Kata Kerja Beraturan dan Tidak Beraturan?
                        </h3>
                        <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                            Kata kerja bahasa Inggris terbagi dua berdasarkan riwayat
                            perkembangan bahasanya:
                        </p>
                        <ul className="space-y-2 text-xs leading-relaxed text-slate-700 sm:text-[13px]">
                            <li>
                                <strong className="font-semibold text-slate-900">
                                    1. Regular Verbs (Beraturan):
                                </strong>{" "}
                                Mencakup lebih dari 95% kosakata bahasa Inggris, termasuk kata
                                kerja baru di era modern (seperti{" "}
                                <em>updated, downloaded, googled</em>). Bentuk lampau (V2) dan
                                tuntasnya (V3) cukup ditambah akhiran <strong>-ed</strong>.
                            </li>
                            <li>
                                <strong className="font-semibold text-slate-900">
                                    2. Irregular Verbs (Tidak Beraturan):
                                </strong>{" "}
                                Merupakan kata kerja tua warisan bahasa Inggris kuno yang paling
                                sering dipakai dalam kehidupan sehari-hari (seperti{" "}
                                <em>go, eat, take, see, make, come</em>). Karena dipakai setiap
                                hari selama berabad-abad, pelafalannya mempertahankan
                                perubahan vokal internal daripada memakai akhiran <em>-ed</em>.
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-2.5 rounded-2xl border border-slate-200/80 p-5">
                        <h3 className="text-base font-bold text-slate-900">
                            Bagaimana Cara Mengetahui Jika Kata Kerja Tidak Beraturan?
                        </h3>
                        <ul className="space-y-2 text-xs leading-relaxed text-slate-700 sm:text-[13px]">
                            <li>
                                <strong className="font-semibold text-slate-900">
                                    1. Cek apakah kata itu kata dasar sehari-hari:
                                </strong>{" "}
                                Hampir semua kata kerja tidak beraturan adalah kata kerja pendek
                                satu suku kata yang menggambarkan aktivitas dasar manusia
                                (makan, minum, tidur, pergi, memberi, mengambil, menulis,
                                berbicara).
                            </li>
                            <li>
                                <strong className="font-semibold text-slate-900">
                                    2. Kelompokkan berdasarkan pola bunyi, bukan urutan abjad:
                                </strong>{" "}
                                Otak manusia jauh lebih cepat mengingat rima bunyi (seperti{" "}
                                <em>sing - sang - sung</em> dan <em>drink - drank - drunk</em>)
                                dibanding menghafal daftar panjang dari huruf A sampai Z.
                            </li>
                            <li>
                                <strong className="font-semibold text-slate-900">
                                    3. Kata kerja turunan mengikuti kata induknya:
                                </strong>{" "}
                                Jika kamu tahu <em>take → took → taken</em>, maka otomatis kamu
                                tahu <em>mistake → mistook → mistaken</em> dan{" "}
                                <em>undertake → undertook → undertaken</em>.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 5 Pola Bunyi Irregular Verbs */}
                <div className="space-y-3">
                    <h3 className="text-base font-bold text-slate-900">
                        Lima Pola Bunyi Kata Kerja Tidak Beraturan
                    </h3>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {SOUND_PATTERNS.map((sp) => (
                            <div
                                key={sp.pattern}
                                className="space-y-1.5 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 text-xs"
                            >
                                <p className="font-bold text-slate-900">{sp.pattern}</p>
                                <p className="leading-relaxed text-slate-600">
                                    {sp.explanation}
                                </p>
                                <p className="pt-1 font-mono text-[11px] font-semibold text-slate-800">
                                    {sp.examples}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tabel Kata Kerja Tidak Beraturan Wajib Hafal untuk Pemula */}
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                    <div className="flex flex-col justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center">
                        <div>
                            <h3 className="text-sm font-bold text-slate-900">
                                Daftar Kata Kerja Tidak Beraturan Wajib Hafal untuk Pemula
                            </h3>
                            <p className="text-xs text-slate-500">
                                Lima puluh kata kerja frekuensi tertinggi yang muncul setiap
                                hari dalam percakapan dan tulisan.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="relative">
                                <Search className="absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    value={verbSearch}
                                    onChange={(e) => setVerbSearch(e.target.value)}
                                    placeholder="Cari kata kerja atau arti..."
                                    className="w-52 rounded-xl border border-slate-200 bg-white py-1.5 pr-3 pl-8 text-xs focus:border-slate-400 focus:outline-none"
                                />
                            </div>
                            <select
                                value={verbPatternFilter}
                                onChange={(e) => setVerbPatternFilter(e.target.value)}
                                aria-label="Filter pola perubahan kata kerja"
                                className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 focus:outline-none"
                            >
                                <option value="all">Semua Pola</option>
                                <option value="A-B-C">Pola A-B-C</option>
                                <option value="A-B-B">Pola A-B-B</option>
                                <option value="I-A-U">Pola I-A-U</option>
                                <option value="A-A-A">Pola A-A-A</option>
                                <option value="A-B-A">Pola A-B-A</option>
                            </select>
                        </div>
                    </div>

                    <div className="max-h-105 overflow-x-auto">
                        <table className="w-full min-w-195 border-collapse text-left text-xs">
                            <thead className="sticky top-0 bg-slate-900 text-[11px] text-white uppercase">
                                <tr>
                                    <th className="px-4 py-3">Verb 1 (Dasar)</th>
                                    <th className="px-4 py-3 text-sky-300">Verb 2 (Lampau)</th>
                                    <th className="px-4 py-3 text-amber-300">
                                        Verb 3 (Participle)
                                    </th>
                                    <th className="px-4 py-3 text-violet-300">Verb-ing</th>
                                    <th className="px-4 py-3">Arti Bahasa Indonesia</th>
                                    <th className="px-4 py-3">Pola Bunyi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {filteredBeginnerVerbs.map((v) => (
                                    <tr key={v.v1} className="hover:bg-slate-50">
                                        <td className="px-4 py-2.5 font-mono font-bold text-slate-900">
                                            {v.v1}
                                        </td>
                                        <td className="px-4 py-2.5 font-mono font-semibold text-sky-700">
                                            {v.v2}
                                        </td>
                                        <td className="px-4 py-2.5 font-mono font-semibold text-amber-700">
                                            {v.v3}
                                        </td>
                                        <td className="px-4 py-2.5 font-mono text-violet-700">
                                            {v.ving}
                                        </td>
                                        <td className="px-4 py-2.5 text-slate-700">{v.meaning}</td>
                                        <td className="px-4 py-2.5 font-mono text-[11px] font-semibold text-slate-500">
                                            {v.pattern}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ==================== SECTION 6: PENERAPAN DALAM KALIMAT LENGKAP ==================== */}
            <section className="space-y-5">
                <div className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs lg:flex-row lg:items-end">
                    <div className="space-y-1.5">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                            <MessageSquare className="h-3.5 w-3.5" />
                            Bagian 5 • Penerapan Kalimat Lengkap
                        </div>
                        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                            Membangun Kalimat: Simple Present, Present Continuous, dan
                            Seterusnya
                        </h2>
                        <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
                            Setelah memahami <em>To Be</em> dan bentuk <em>Verb</em>, sekarang
                            kita gabungkan keduanya ke dalam kalimat nyata. Pilih dimensi
                            waktu di bawah ini untuk mempelajari logika psikologi sehari-hari,
                            formula kalimat, contoh, serta tips di setiap bentuknya.
                        </p>
                    </div>

                    {/* Filter Dimensi Waktu */}
                    <div className="flex flex-wrap items-center gap-1.5">
                        {(
                            [
                                { id: "present", label: "Present" },
                                { id: "past", label: "Past" },
                                { id: "future", label: "Future" },
                                { id: "past-future", label: "Past Future" },
                                { id: "all", label: "Tampilkan Semua (16)" },
                            ] as const
                        ).map((tab) => {
                            const isActive = selectedTimeFilter === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setSelectedTimeFilter(tab.id)}
                                    className={cn(
                                        "cursor-pointer rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors",
                                        isActive
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                                    )}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Grid 2 Kolom Besar yang Nyaman Dibaca Mendalam */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {visibleSentences.map((item) => {
                        const title = cleanText(item.name);
                        const aspectName = cleanText(item.aspectLabel);

                        return (
                            <article
                                key={item.id}
                                className="flex flex-col justify-between space-y-5 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs"
                            >
                                <div className="space-y-4">
                                    {/* Header Kartu */}
                                    <div className="space-y-1.5">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                                                {item.timeLabel}
                                            </span>
                                            <span className="rounded-md bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
                                                Sifat: {aspectName}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                            {title}
                                        </h3>
                                    </div>

                                    {/* Logika Psikologi Sehari-hari */}
                                    <div className="space-y-1.5 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
                                        <p className="flex items-center gap-1.5 text-xs font-bold text-indigo-900">
                                            <Brain className="h-4 w-4 text-indigo-600" />
                                            Logika Psikologi Sehari-hari
                                        </p>
                                        <p className="text-xs leading-relaxed text-slate-700 sm:text-[13px]">
                                            {item.reason}
                                        </p>
                                    </div>

                                    {/* Formula Struktur Kalimat */}
                                    <div className="space-y-1.5">
                                        <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                                            Formula Kalimat
                                        </p>
                                        <div className="space-y-1.5 rounded-2xl bg-slate-900 p-4 font-mono text-xs text-slate-100">
                                            <div>
                                                <span className="font-semibold text-emerald-400">
                                                    Positif:{" "}
                                                </span>
                                                <span>{item.formulas.pos}</span>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-rose-400">
                                                    Negatif:{" "}
                                                </span>
                                                <span>{item.formulas.neg}</span>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-sky-400">
                                                    Question:{" "}
                                                </span>
                                                <span>{item.formulas.ask}</span>
                                            </div>
                                            {item.formulas.nominalPos && (
                                                <div className="border-t border-white/10 pt-1.5 text-amber-200">
                                                    <span className="font-semibold text-amber-400">
                                                        Dengan To Be:{" "}
                                                    </span>
                                                    <span>{item.formulas.nominalPos}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Contoh Berbagai Situasi */}
                                    <div className="space-y-2">
                                        <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                                            Contoh Situasi Sehari-hari
                                        </p>
                                        <div className="space-y-2.5">
                                            {item.examples.map((ex) => (
                                                <div
                                                    key={ex.condition}
                                                    className="space-y-1.5 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-3.5 text-xs"
                                                >
                                                    <p className="font-bold text-slate-800">
                                                        {cleanText(ex.condition)}
                                                    </p>
                                                    <div className="space-y-1 leading-relaxed">
                                                        <p className="font-medium text-slate-900">
                                                            <span className="mr-1.5 font-semibold text-emerald-700">
                                                                Positif:
                                                            </span>
                                                            {ex.pos}
                                                        </p>
                                                        <p className="text-slate-700">
                                                            <span className="mr-1.5 font-semibold text-rose-700">
                                                                Negatif:
                                                            </span>
                                                            {ex.neg}
                                                        </p>
                                                        <p className="text-slate-700">
                                                            <span className="mr-1.5 font-semibold text-sky-700">
                                                                Question:
                                                            </span>
                                                            {ex.ask}
                                                        </p>
                                                    </div>
                                                    <p className="pt-1 text-[11px] leading-relaxed text-slate-500">
                                                        <strong className="font-semibold text-slate-700">
                                                            Catatan Makna:
                                                        </strong>{" "}
                                                        {ex.note}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Insight, Time Markers & Tips and Trick */}
                                <div className="space-y-2 rounded-2xl border border-amber-200/80 bg-amber-50/50 p-4 text-xs">
                                    <p className="flex items-center gap-1.5 font-bold text-amber-950">
                                        <Sparkles className="h-4 w-4 text-amber-600" />
                                        Insight dan Tips and Trick
                                    </p>
                                    <p className="leading-relaxed text-amber-950/90">
                                        Gunakan penanda waktu seperti{" "}
                                        <span className="font-semibold">
                                            {item.signalWords.join(", ")}
                                        </span>{" "}
                                        untuk mengunci konteks kalimat secara otomatis tanpa perlu
                                        menerjemahkan rumus kata demi kata dari bahasa Indonesia.
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* ==================== SECTION 7: CARA ORANG BARAT MEMANDANG WAKTU & RANGKUMAN ==================== */}
            <section className="space-y-5 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-8">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                        <Globe2 className="h-3.5 w-3.5" />
                        Bagian 6 • Pola Pikir Penutur Asli & Rangkuman
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                        Bagaimana Orang Barat Memandang Waktu dan Rangkuman Seluruh Materi
                    </h2>
                    <p className="max-w-4xl text-sm leading-relaxed text-slate-600">
                        Mengapa struktur bahasa Inggris begitu ketat soal waktu? Karena
                        dalam budaya berbahasa Inggris, waktu dipandang sebagai{" "}
                        <strong className="font-semibold text-slate-800">
                            garis lurus (linear) yang terukur presisi
                        </strong>
                        . Setiap kali seseorang mengucapkan satu kalimat, pendengar langsung
                        tahu posisi kejadian itu relatif terhadap detik pembicaraan.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="space-y-2 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 text-xs leading-relaxed">
                        <h3 className="text-sm font-bold text-slate-900">
                            1. Batas Tegas Antara Masa Lalu dan Sekarang
                        </h3>
                        <p className="text-slate-600">
                            Bagi penutur asli, kejadian lima menit lalu yang sudah selesai
                            tetap masuk wilayah <strong>Past (V2)</strong>, sedangkan kejadian
                            yang efeknya masih menempel sampai detik ini masuk wilayah{" "}
                            <strong>Present Perfect (have/has + V3)</strong>. Itulah sebabnya
                            mereka selalu membedakan <em>“I lost my key”</em>{" "}
                            (hilang kemarin, mungkin sudah ketemu) dengan{" "}
                            <em>“I have lost my key”</em> (kuncinya hilang dan
                            sampai detik ini saya masih terkunci di luar).
                        </p>
                    </div>

                    <div className="space-y-2 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 text-xs leading-relaxed">
                        <h3 className="text-sm font-bold text-slate-900">
                            2. Membedakan Fakta Rutin vs Sedang Terjadi
                        </h3>
                        <p className="text-slate-600">
                            Dalam bahasa Indonesia, kalimat{" "}
                            <em>“Dia kerja di bank”</em> dan{" "}
                            <em>“Dia lagi kerja”</em> memakai kata dasar yang
                            sama. Dalam bahasa Inggris, identitas permanen memakai{" "}
                            <strong>Simple (V1)</strong>, sementara aksi yang sedang
                            berlangsung tepat saat mata memandang wajib memakai{" "}
                            <strong>Continuous (To Be + V-ing)</strong>.
                        </p>
                    </div>

                    <div className="space-y-2 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 text-xs leading-relaxed">
                        <h3 className="text-sm font-bold text-slate-900">
                            3. Kata Bantu adalah Kemudi Waktu
                        </h3>
                        <p className="text-slate-600">
                            Saat kalimat berubah menjadi negatif atau pertanyaan, beban
                            penunjuk waktu pindah ke kata bantu di depan (
                            <em>do/does, did, am/is/are, was/were, have/has, will</em>),
                            sehingga kata kerja utamanya kembali bersih. Cukup kuasai posisi
                            kata bantu ini, maka kamu bisa membentuk kalimat positif,
                            negatif, dan tanya dengan lancar.
                        </p>
                    </div>
                </div>

                {/* Rangkuman Akhir 4 Langkah Praktis */}
                <div className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white sm:p-6">
                    <h3 className="text-base font-bold">
                        Rangkuman Inti: Empat Langkah Menyusun Kalimat Bahasa Inggris
                    </h3>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-1 rounded-xl bg-white/5 p-3.5 text-xs">
                            <p className="font-bold text-emerald-300">
                                Langkah 1 • Tentukan Waktunya
                            </p>
                            <p className="leading-relaxed text-slate-300">
                                Pilih apakah kejadian ini berlaku sekarang (Present), sudah
                                lewat (Past), akan datang (Future), atau rencana masa lalu
                                (Past Future).
                            </p>
                        </div>
                        <div className="space-y-1 rounded-xl bg-white/5 p-3.5 text-xs">
                            <p className="font-bold text-sky-300">
                                Langkah 2 • Tentukan Sifatnya
                            </p>
                            <p className="leading-relaxed text-slate-300">
                                Tanyakan pada dirimu: ini fakta umum (Simple), sedang berjalan
                                (Continuous), sudah tuntas (Perfect), atau berdurasi (Perfect
                                Continuous)?
                            </p>
                        </div>
                        <div className="space-y-1 rounded-xl bg-white/5 p-3.5 text-xs">
                            <p className="font-bold text-amber-300">
                                Langkah 3 • Cek Ada Aksi atau Tidak
                            </p>
                            <p className="leading-relaxed text-slate-300">
                                Jika tidak ada kata kerja aksi (hanya sifat, profesi, atau
                                lokasi), gunakan <strong>To Be</strong> sesuai waktunya.
                            </p>
                        </div>
                        <div className="space-y-1 rounded-xl bg-white/5 p-3.5 text-xs">
                            <p className="font-bold text-violet-300">
                                Langkah 4 • Sesuaikan Jenis Kalimat
                            </p>
                            <p className="leading-relaxed text-slate-300">
                                Gunakan bentuk positif untuk pernyataan, sisipkan{" "}
                                <strong>not</strong> setelah kata bantu untuk negatif, dan
                                geser kata bantu ke depan subjek untuk bertanya.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== MODAL LATIHAN STUDI KASUS ==================== */}
            {quizOpen && currentQuiz && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-xs"
                    onClick={() => setQuizOpen(false)}
                >
                    <div
                        className="w-full max-w-2xl space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-7"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                            <div>
                                <p className="text-xs font-semibold text-slate-400">
                                    {cleanText(currentQuiz.categoryTag)} • Soal {quizIndex + 1}{" "}
                                    dari {data.quiz.length}
                                </p>
                                <h3 className="mt-0.5 text-lg font-bold text-slate-900">
                                    Latihan Memilih Waktu dan Bentuk Kata Kerja
                                </h3>
                            </div>
                            <button
                                type="button"
                                onClick={() => setQuizOpen(false)}
                                aria-label="Tutup latihan"
                                className="cursor-pointer rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
                            <p className="text-sm leading-relaxed text-slate-700">
                                {currentQuiz.situation}
                            </p>
                        </div>

                        <p className="text-sm font-bold text-slate-900">
                            {currentQuiz.question}
                        </p>

                        <div className="space-y-2">
                            {currentQuiz.options.map((opt) => {
                                const isChosen = selectedOptionId === opt.id;
                                return (
                                    <button
                                        key={opt.id}
                                        type="button"
                                        onClick={() => setSelectedOptionId(opt.id)}
                                        className={cn(
                                            "w-full cursor-pointer rounded-xl border p-3.5 text-left text-sm transition-colors",
                                            isChosen
                                                ? opt.isCorrect
                                                    ? "border-emerald-500 bg-emerald-50 font-semibold text-emerald-950"
                                                    : "border-rose-500 bg-rose-50 font-semibold text-rose-950"
                                                : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                        )}
                                    >
                                        {opt.text}
                                    </button>
                                );
                            })}
                        </div>

                        {chosenOption && (
                            <div
                                className={cn(
                                    "rounded-xl border p-3.5 text-xs leading-relaxed sm:text-sm",
                                    chosenOption.isCorrect
                                        ? "border-emerald-200 bg-emerald-50 text-emerald-950"
                                        : "border-rose-200 bg-rose-50 text-rose-950"
                                )}
                            >
                                <strong>
                                    {chosenOption.isCorrect ? "Tepat:" : "Penjelasan:"}
                                </strong>{" "}
                                {chosenOption.explanation}
                            </div>
                        )}

                        <div className="flex justify-end pt-1">
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedOptionId(null);
                                    setQuizIndex((prev) => (prev + 1) % data.quiz.length);
                                }}
                                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
                            >
                                <span>Soal Berikutnya</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}