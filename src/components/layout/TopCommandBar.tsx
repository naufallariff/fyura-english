"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
    Search,
    X,
    Download,
    Upload,
    Sparkles,
    CheckCircle2,
} from "lucide-react";
import { useLearningStore } from "@/store/useLearningStore";
import { useIsMounted } from "@/hooks/useIsMounted";
import curriculumIndex from "@content/curriculum-index.json";

interface SearchableTopic {
    title: string;
    category: string;
    slug: string;
    tier: string;
}

const ALL_SEARCHABLE_MODULES: SearchableTopic[] = [
    ...curriculumIndex.tiers.flatMap((tier) =>
        tier.categories.flatMap((cat) =>
            cat.modules.map((mod) => ({
                title: mod.title,
                category: cat.id,
                slug: mod.slug,
                tier: tier.label,
            }))
        )
    ),
    ...curriculumIndex.thematicLabs.map((lab) => ({
        title: lab.label,
        category: lab.id,
        slug: lab.slug,
        tier: "Thematic Lab",
    })),
];

export function TopCommandBar() {
    const router = useRouter();
    const mounted = useIsMounted();
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [toastMsg, setToastMsg] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const { streakDays, exportProgressJson, importProgressJson } =
        useLearningStore();

    const normalizedQuery = query.trim().toLowerCase();
    const filtered = ALL_SEARCHABLE_MODULES.filter(
        (t) =>
            t.title.toLowerCase().includes(normalizedQuery) ||
            t.tier.toLowerCase().includes(normalizedQuery) ||
            t.category.toLowerCase().includes(normalizedQuery)
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
        e.target.value = "";
    };

    return (
        <header className="relative z-20 flex flex-wrap items-center justify-between gap-4">
            {/* Search Pill */}
            <div className="relative w-full max-w-md">
                <div className="flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/85 px-4 py-2.5 shadow-(--shadow-soft-card) backdrop-blur-md transition-colors focus-within:border-sky-300 focus-within:bg-white">
                    <Search className="h-4 w-4 shrink-0 text-slate-400" />
                    <input
                        type="text"
                        value={query}
                        onFocus={() => setIsOpen(true)}
                        onBlur={() => setTimeout(() => setIsOpen(false), 180)}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setIsOpen(true);
                        }}
                        placeholder="Search topics, tiers, or situations..."
                        className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    />
                    {query && (
                        <button
                            type="button"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                setQuery("");
                            }}
                            aria-label="Clear search"
                            className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                        >
                            <X className="h-3.5 w-3.5" />
                        </button>
                    )}
                </div>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-2 max-h-72 w-full overflow-y-auto rounded-2xl border border-white bg-white/95 p-2 shadow-xl backdrop-blur-xl">
                        {filtered.length === 0 ? (
                            <p className="px-3 py-3 text-center text-xs text-slate-400">
                                No matching modules found for “{query}”.
                            </p>
                        ) : (
                            filtered.map((item) => (
                                <button
                                    key={`${item.category}-${item.slug}`}
                                    type="button"
                                    onMouseDown={() => {
                                        setIsOpen(false);
                                        router.push(`/learn/${item.category}/${item.slug}`);
                                    }}
                                    className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-xs transition-colors hover:bg-sky-50"
                                >
                                    <span className="truncate font-medium text-slate-800">
                                        {item.title}
                                    </span>
                                    <span className="shrink-0 rounded-full bg-sky-100 px-2.5 py-0.5 text-[10px] font-semibold text-sky-700">
                                        {item.tier}
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
                    <span className="tabular-nums">
                        {mounted ? streakDays : 1} Days Streak
                    </span>
                </div>

                <button
                    type="button"
                    onClick={handleExport}
                    title="Export Progress JSON"
                    className="flex items-center gap-1.5 rounded-2xl border border-white/90 bg-white/85 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-(--shadow-soft-card) transition-transform duration-150 hover:bg-white active:scale-[0.97]"
                >
                    <Download className="h-3.5 w-3.5 text-sky-600" />
                    <span className="hidden sm:inline">Backup</span>
                </button>

                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    title="Restore Progress JSON"
                    className="flex items-center gap-1.5 rounded-2xl border border-white/90 bg-white/85 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-(--shadow-soft-card) transition-transform duration-150 hover:bg-white active:scale-[0.97]"
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