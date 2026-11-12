"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

interface ErrorBoundaryProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function AppErrorBoundary({ error, reset }: ErrorBoundaryProps) {
    useEffect(() => {
        console.error("Fyura English Route Error:", error);
    }, [error]);

    return (
        <div className="flex min-h-[75vh] items-center justify-center p-4 sm:p-6">
            <div className="w-full max-w-xl space-y-5 rounded-3xl border border-rose-200/80 bg-white p-6 text-center shadow-xs sm:p-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                    <AlertTriangle className="h-7 w-7" />
                </div>

                <div className="space-y-2">
                    <span className="inline-block rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700">
                        Gangguan Sementara pada Halaman
                    </span>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                        Terjadi Kesalahan Saat Memuat Materi
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-600">
                        Jangan khawatir, progres belajarmu tetap aman. Kamu bisa mencoba
                        memuat ulang bagian ini atau kembali ke halaman utama.
                    </p>
                </div>

                {error.message && (
                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-3.5 text-left font-mono text-xs text-slate-600">
                        <span className="font-bold text-slate-800">Detail Teknis: </span>
                        {error.message}
                    </div>
                )}

                <div className="flex flex-col justify-center gap-3 pt-1 sm:flex-row">
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
                    >
                        <RotateCcw className="h-4 w-4 text-amber-400" />
                        <span>Coba Muat Ulang</span>
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                        <Home className="h-4 w-4 text-slate-500" />
                        <span>Kembali ke Beranda</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}