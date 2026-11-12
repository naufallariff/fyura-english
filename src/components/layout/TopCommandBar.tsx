// src/components/layout/TopCommandBar.tsx
"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
    Search,
    Download,
    Upload,
    Sparkles,
    CheckCircle2,
} from "lucide-react";
import { useLearningStore } from "@/store/useLearningStore";

interface SearchableTopic {
    title: string;
    pillar: string;
    slug: string;
    stage: string;
}

const QUICK_TOPICS: SearchableTopic[] = [
    {
        title: "Bab 1: Nouns — Concrete, Abstract, Countable & Uncountable",
        pillar: "part-of-speech",
        slug: "bab-01-nouns",
        stage: "Foundation",
    },
    {
        title: "Bab 1: Tenses — Present Perfect vs Simple Past & Will vs Going To",
        pillar: "grammar",
        slug: "bab-01-tenses",
        stage: "Precision",
    },
];

export function TopCommandBar() {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [toastMsg, setToastMsg] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const { streakDays, exportProgressJson, importProgressJson } =
        useLearningStore();

    const filtered = QUICK_TOPICS.filter((t) =>
        t.title.toLowerCase().includes(query.toLowerCase())
    );

    const showToast = (msg: string) => {
        setToastMsg(msg);
        setTimeout(() => setToastMsg(null), 2600);
    };

    const handleExport = () => {
        const data = exportProgressJson();
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `fyura-english-backup-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast("Backup progres JSON berhasil diunduh");
    };

    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            const ok = importProgressJson(String(reader.result ?? ""));
            showToast(
                ok ? "Progres berhasil dipulihkan!" : "Format file JSON tidak valid"
            );
        };
        reader.readAsText(file);
    };

    return (
        <header className="relative z-20 flex flex-wrap items-center justify-between gap-4">
            {/* Search Pill (Inspirasi Top Search Bar di Referensi) */}
            <div className="relative w-full max-w-md">
                <div className="flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/85 px-4 py-2.5 shadow-(--shadow-soft-card) backdrop-blur-md">
                    <Search className="h-4 w-4 text-slate-400" />
                    <input
                        type="text"
                        value={query}
                        onFocus={() => setIsOpen(true)}
                        onBlur={() => setTimeout(() => setIsOpen(false), 180)}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setIsOpen(true);
                        }}
                        placeholder="Cari materi, rumus, atau situasi..."
                        className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    />
                    <kbd className="rounded-lg bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                        ⌘K
                    </kbd>
                </div>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-full rounded-2xl border border-white bg-white/95 p-2 shadow-xl backdrop-blur-xl">
                        {filtered.length === 0 ? (
                            <p className="px-3 py-2 text-xs text-slate-400">
                                Topik tidak ditemukan.
                            </p>
                        ) : (
                            filtered.map((item) => (
                                <button
                                    key={item.slug}
                                    type="button"
                                    onMouseDown={() =>
                                        router.push(`/learn/${item.pillar}/${item.slug}`)
                                    }
                                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs transition-colors hover:bg-sky-50"
                                >
                                    <span className="font-medium text-slate-800">
                                        {item.title}
                                    </span>
                                    <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold text-sky-700">
                                        {item.stage}
                                    </span>
                                </button>
                            ))
                        )}
                    </div>
                )}
            </div>

            {/* Right Action Pills: Streak + Local JSON Backup */}
            <div className="flex items-center gap-2.5">
                {toastMsg && (
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {toastMsg}
                    </span>
                )}

                <div className="flex items-center gap-1.5 rounded-2xl border border-white/90 bg-white/85 px-3.5 py-2 text-xs font-semibold text-amber-700 shadow-(--shadow-soft-card)">
                    <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                    <span className="tabular-nums">{streakDays} Hari Streak</span>
                </div>

                <button
                    type="button"
                    onClick={handleExport}
                    title="Export Progres ke JSON"
                    className="flex items-center gap-1.5 rounded-2xl border border-white/90 bg-white/85 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-(--shadow-soft-card) transition-transform duration-150 active:scale-[0.97] hover:bg-white"
                >
                    <Download className="h-3.5 w-3.5 text-sky-600" />
                    <span className="hidden sm:inline">Backup</span>
                </button>

                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    title="Restore Progres dari JSON"
                    className="flex items-center gap-1.5 rounded-2xl border border-white/90 bg-white/85 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-(--shadow-soft-card) transition-transform duration-150 active:scale-[0.97] hover:bg-white"
                >
                    <Upload className="h-3.5 w-3.5 text-violet-600" />
                    <span className="hidden sm:inline">Restore</span>
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="application/json"
                    onChange={handleImport}
                    className="hidden"
                />
            </div>
        </header>
    );
}