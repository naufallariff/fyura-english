"use client";

import { useState, useMemo } from "react";
import {
    Search,
    BookOpen,
    Brain,
    Sparkles,
    CheckCircle2,
    Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface UniversalLedgerRow {
    id: string;
    primary: string;
    badge?: string;
    indonesian: string;
    usageNote: string;
    psychologyWhy: string;
}

export interface UniversalLedgerSection {
    id: string;
    title: string;
    subtitle: string;
    howToUse: string[];
    psychologyOverview: string;
    tipsAndTricks: string[];
    rows: UniversalLedgerRow[];
}

interface LedgerDictionaryWorkspaceProps {
    pageTitle: string;
    pageBadge: string;
    pageDescription: string;
    sections: UniversalLedgerSection[];
}

export function LedgerDictionaryWorkspace({
    pageTitle,
    pageBadge,
    pageDescription,
    sections,
}: LedgerDictionaryWorkspaceProps) {
    const [activeCategoryId, setActiveCategoryId] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");

    const totalEntries = useMemo(
        () => sections.reduce((acc, s) => acc + s.rows.length, 0),
        [sections]
    );

    const filteredSections = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        return sections
            .filter((sec) => activeCategoryId === "all" || sec.id === activeCategoryId)
            .map((sec) => ({
                ...sec,
                rows: sec.rows.filter(
                    (r) =>
                        !q ||
                        r.primary.toLowerCase().includes(q) ||
                        r.indonesian.toLowerCase().includes(q) ||
                        r.usageNote.toLowerCase().includes(q) ||
                        r.psychologyWhy.toLowerCase().includes(q)
                ),
            }))
            .filter((sec) => sec.rows.length > 0);
    }, [sections, activeCategoryId, searchQuery]);

    return (
        <div className="space-y-8 pb-14">
            {/* Header & Pencarian Kamus Besar */}
            <section className="rounded-3xl border border-slate-200/80 bg-linear-to-br from-white via-slate-50 to-indigo-50/50 p-6 shadow-xs sm:p-8">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div className="max-w-3xl space-y-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                            <BookOpen className="h-3.5 w-3.5" />
                            {pageBadge} • {totalEntries} Entri Kamus
                        </span>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            {pageTitle}
                        </h1>
                        <p className="text-sm leading-relaxed text-slate-600">
                            {pageDescription}
                        </p>
                    </div>

                    <div className="relative w-full lg:w-80">
                        <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari frasa, kosakata, atau arti..."
                            className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 pr-4 pl-10 text-xs font-medium text-slate-800 shadow-2xs focus:border-indigo-400 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Tab Filter Kategori */}
                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-200/70 pt-4">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                        <Filter className="h-3.5 w-3.5" />
                        Kategori:
                    </span>
                    <button
                        type="button"
                        onClick={() => setActiveCategoryId("all")}
                        className={cn(
                            "cursor-pointer rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors",
                            activeCategoryId === "all"
                                ? "bg-slate-900 text-white"
                                : "bg-white text-slate-600 hover:bg-slate-100"
                        )}
                    >
                        Semua Kategori ({totalEntries})
                    </button>
                    {sections.map((sec) => (
                        <button
                            key={sec.id}
                            type="button"
                            onClick={() => setActiveCategoryId(sec.id)}
                            className={cn(
                                "cursor-pointer rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors",
                                activeCategoryId === sec.id
                                    ? "bg-slate-900 text-white"
                                    : "bg-white text-slate-600 hover:bg-slate-100"
                            )}
                        >
                            {sec.title.replace(/^\d+\.\s*/, "")} ({sec.rows.length})
                        </button>
                    ))}
                </div>
            </section>

            {/* Daftar Section Kamus Besar */}
            {filteredSections.map((sec) => (
                <section
                    key={sec.id}
                    className="space-y-5 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-8"
                >
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900">
                            {sec.title}
                        </h2>
                        <p className="text-sm text-slate-600">{sec.subtitle}</p>
                    </div>

                    {/* 3 Pilar Pemahaman: Tata Cara, Psikologi (Why), Tips & Tricks */}
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <div className="space-y-2 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-xs">
                            <p className="flex items-center gap-1.5 font-bold text-slate-900">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                Tata Cara Penggunaan
                            </p>
                            <ul className="list-disc space-y-1.5 pl-4 leading-relaxed text-slate-700">
                                {sec.howToUse.map((rule) => (
                                    <li key={rule}>{rule}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-2 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 text-xs">
                            <p className="flex items-center gap-1.5 font-bold text-indigo-950">
                                <Brain className="h-4 w-4 text-indigo-600" />
                                Psikologi Penutur Asli (Why)
                            </p>
                            <p className="leading-relaxed text-slate-700">
                                {sec.psychologyOverview}
                            </p>
                        </div>

                        <div className="space-y-2 rounded-2xl border border-amber-200/80 bg-amber-50/50 p-4 text-xs">
                            <p className="flex items-center gap-1.5 font-bold text-amber-950">
                                <Sparkles className="h-4 w-4 text-amber-600" />
                                Tips & Tricks Anti-Salah
                            </p>
                            <ul className="list-disc space-y-1.5 pl-4 leading-relaxed text-amber-950/90">
                                {sec.tipsAndTricks.map((tip) => (
                                    <li key={tip}>{tip}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Full Ledger Table */}
                    <div className="overflow-hidden rounded-2xl border border-slate-200">
                        <div className="max-h-130 overflow-x-auto">
                            <table className="w-full min-w-205 border-collapse text-left text-xs">
                                <thead className="sticky top-0 bg-slate-900 text-[11px] text-white uppercase">
                                    <tr>
                                        <th className="px-4 py-3">Ungkapan / Kosakata Inggris</th>
                                        <th className="px-4 py-3 text-sky-300">Arti & Makna</th>
                                        <th className="px-4 py-3 text-emerald-300">
                                            Tata Cara & Konteks
                                        </th>
                                        <th className="px-4 py-3 text-amber-300">
                                            Kenapa Begini (Psikologi)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {sec.rows.map((row) => (
                                        <tr
                                            key={row.id}
                                            className="align-top transition-colors hover:bg-slate-50/90"
                                        >
                                            <td className="w-64 px-4 py-3">
                                                <p className="font-bold text-slate-900">{row.primary}</p>
                                                {row.badge && (
                                                    <span className="mt-1 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                                                        {row.badge}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="w-56 px-4 py-3 font-medium text-slate-800">
                                                {row.indonesian}
                                            </td>
                                            <td className="px-4 py-3 leading-relaxed text-slate-600">
                                                {row.usageNote}
                                            </td>
                                            <td className="px-4 py-3 leading-relaxed text-slate-600">
                                                {row.psychologyWhy}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}