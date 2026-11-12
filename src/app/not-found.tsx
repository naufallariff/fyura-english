import Link from "next/link";
import {
    Compass,
    Home,
    BookOpen,
    MessageCircleHeart,
    MapPinOff,
} from "lucide-react";

export default function NotFoundPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4 sm:p-6">
            <div className="w-full max-w-2xl space-y-6 rounded-3xl border border-slate-200/80 bg-linear-to-br from-white via-sky-50/40 to-indigo-50/60 p-6 text-center shadow-xs sm:p-10">
                {/* Ikon & Badge Status */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-2xs">
                    <MapPinOff className="h-7 w-7" />
                </div>

                <div className="space-y-2">
                    <span className="inline-block rounded-full bg-slate-900 px-3 py-1 font-mono text-xs font-bold text-white">
                        404 • Halaman Tidak Ditemukan
                    </span>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Sepertinya Halaman Ini Belum Tersedia
                    </h1>
                    <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-600">
                        Alamat URL yang kamu tuju mungkin telah dipindahkan, salah ketik,
                        atau masih dalam tahap penyusunan materi. Pilih salah satu ruang
                        belajar di bawah ini untuk melanjutkan sesi belajarmu.
                    </p>
                </div>

                {/* Kartu Pintasan Cepat */}
                <div className="grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
                    <Link
                        href="/"
                        className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 transition-all hover:border-indigo-300 hover:shadow-xs"
                    >
                        <Home className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                        <div>
                            <p className="text-xs font-bold text-slate-900">Command Center</p>
                            <p className="mt-0.5 text-[11px] text-slate-500">
                                Kembali ke beranda utama workspace
                            </p>
                        </div>
                    </Link>

                    <Link
                        href="/time-matrix"
                        className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 transition-all hover:border-indigo-300 hover:shadow-xs"
                    >
                        <Compass className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                        <div>
                            <p className="text-xs font-bold text-slate-900">
                                Waktu & Kata Kerja
                            </p>
                            <p className="mt-0.5 text-[11px] text-slate-500">
                                Panduan Present, Past, Future, To Be & Verb
                            </p>
                        </div>
                    </Link>

                    <Link
                        href="/pragmatics"
                        className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 transition-all hover:border-indigo-300 hover:shadow-xs"
                    >
                        <MessageCircleHeart className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                        <div>
                            <p className="text-xs font-bold text-slate-900">
                                Conversational Pragmatics
                            </p>
                            <p className="mt-0.5 text-[11px] text-slate-500">
                                Kamus salam, pamitan, perkenalan & peribahasa
                            </p>
                        </div>
                    </Link>

                    <Link
                        href="/lexicon"
                        className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 transition-all hover:border-indigo-300 hover:shadow-xs"
                    >
                        <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                        <div>
                            <p className="text-xs font-bold text-slate-900">
                                Thematic Vocabularies
                            </p>
                            <p className="mt-0.5 text-[11px] text-slate-500">
                                Kamus angka, jam, warna & irregular verbs
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}