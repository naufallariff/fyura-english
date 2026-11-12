"use client";

import { AlertOctagon, RotateCcw } from "lucide-react";

interface GlobalErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
    return (
        <html lang="id">
            <body className="flex min-h-screen items-center justify-center bg-slate-50 p-4 font-sans text-slate-900">
                <div className="w-full max-w-lg space-y-5 rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                        <AlertOctagon className="h-7 w-7" />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-xl font-bold text-slate-900">
                            Sistem Mengalami Gangguan Tak Terduga
                        </h1>
                        <p className="text-sm leading-relaxed text-slate-600">
                            Aplikasi mendeteksi kesalahan pada tata letak utama. Klik tombol di
                            bawah untuk memulihkan tampilan workspace.
                        </p>
                    </div>

                    {error?.digest && (
                        <p className="font-mono text-xs text-slate-400">
                            Kode Referensi: {error.digest}
                        </p>
                    )}

                    <button
                        type="button"
                        onClick={() => reset()}
                        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
                    >
                        <RotateCcw className="h-4 w-4 text-amber-400" />
                        <span>Pulihkan Aplikasi</span>
                    </button>
                </div>
            </body>
        </html>
    );
}