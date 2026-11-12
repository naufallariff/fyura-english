// src/app/(workspace)/dashboard/page.tsx
"use client";

import Link from "next/link";
import {
    Brain,
    Flame,
    CheckCircle2,
    Clock,
    ArrowRight,
    Sparkles,
    Play,
    TrendingUp,
    Calendar as CalendarIcon,
} from "lucide-react";
import { useLearningStore } from "@/store/useLearningStore";

const ACTIVE_CURRICULUM = [
    {
        id: "pos-01",
        title: "Bab 1: Nouns — Persepsi Batas & Massa",
        subtitle: "Concrete vs Abstract • Countable vs Uncountable",
        pillar: "part-of-speech",
        slug: "bab-01-nouns",
        stageParam: "foundation",
        stage: "Foundation",
        stageBadge: "bg-emerald-500/12 text-emerald-700",
        barColor: "bg-emerald-500",
        sections: ["concrete-vs-abstract", "countable-vs-uncountable"],
    },
    {
        id: "gram-01",
        title: "Bab 1: Tenses — Peta Psikologi Waktu",
        subtitle: "Present Perfect vs Simple Past • Will vs Going To",
        pillar: "grammar",
        slug: "bab-01-tenses",
        stageParam: "precision",
        stage: "Precision",
        stageBadge: "bg-violet-500/12 text-violet-700",
        barColor: "bg-violet-500",
        sections: ["present-perfect-vs-past", "future-nuance-will-vs-going-to"],
    },
];

const WEEK_DAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
const CALENDAR_DATES = Array.from({ length: 28 }, (_, i) => i + 1);

export default function DashboardPage() {
    const { completedSections, streakDays, lastVisitedPath } = useLearningStore();
    const completedCount = Object.keys(completedSections).length;
    const totalSections = 4;
    const masteryPct = Math.round((completedCount / totalSections) * 100);

    const kpiCards = [
        {
            label: "Sub-Bab Dikuasai",
            value: `${completedCount} / ${totalSections}`,
            delta: "+100% Fokus",
            icon: CheckCircle2,
            iconBg: "bg-sky-500/15 text-sky-600",
            strokeColor: "#0EA5E9",
            sparkPath: "M2 24 C 18 22, 26 10, 44 14 C 60 18, 72 6, 94 4",
        },
        {
            label: "Intuition Mastery",
            value: `${masteryPct}%`,
            delta: "Neural Feel",
            icon: Brain,
            iconBg: "bg-violet-500/15 text-violet-600",
            strokeColor: "#8B5CF6",
            sparkPath: "M2 26 C 20 20, 34 22, 50 12 C 68 4, 80 10, 94 3",
        },
        {
            label: "Learning Streak",
            value: `${streakDays} Hari`,
            delta: "Konsisten",
            icon: Flame,
            iconBg: "bg-amber-500/15 text-amber-600",
            strokeColor: "#F59E0B",
            sparkPath: "M2 22 C 16 14, 32 18, 48 10 C 66 4, 78 12, 94 5",
        },
        {
            label: "Siap Latihan Kasus",
            value: "2 Arena",
            delta: "Real-Life",
            icon: Clock,
            iconBg: "bg-emerald-500/15 text-emerald-600",
            strokeColor: "#10B981",
            sparkPath: "M2 25 C 22 25, 38 14, 54 15 C 70 16, 82 6, 94 4",
        },
    ];

    return (
        <div className="space-y-5 pb-8">
            {/* Row 1: Hero Welcome Banner (Full Width + Floating Isometric Cards) */}
            <section className="relative overflow-hidden rounded-3xl border border-white/95 bg-linear-to-r from-white via-[#F5F8FF] to-[#E6EEFF] p-6 sm:p-8 shadow-(--shadow-soft-card)">
                <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                    <div className="max-w-2xl space-y-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/12 px-3 py-1 text-xs font-bold text-sky-700">
                            <Sparkles className="h-3.5 w-3.5" />
                            Good afternoon, Naufal • Neuro-Cognitive Immersion
                        </span>
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                            Bangun intuisi bahasa, bukan sekadar hafalan rumus.
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            Pahami “rasa” di balik pilihan kata penutur asli,
                            bedah struktur kalimat lewat X-Ray interaktif, dan uji refleks
                            percakapanmu di simulasi situasi nyata.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link
                                href={lastVisitedPath}
                                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform duration-150 active:scale-[0.97] hover:bg-slate-800"
                            >
                                <Play className="h-4 w-4 fill-current" />
                                Lanjutkan Sesi Belajar
                            </Link>
                            <Link
                                href="/practice/bab-01-nouns"
                                className="inline-flex items-center gap-2 rounded-2xl border border-white bg-white/95 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-xs transition-transform duration-150 active:scale-[0.97] hover:bg-white"
                            >
                                Mulai Conditional Quiz
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* 3D-Style Layered Cognitive Cards (Inspirasi Hero Graphic Nexora) */}
                    <div className="hidden items-center gap-3 xl:flex">
                        <div className="space-y-3">
                            <div className="rounded-2xl border border-white bg-white/90 p-4 shadow-lg backdrop-blur-md">
                                <p className="text-[10px] font-bold tracking-wider text-emerald-600 uppercase">
                                    Mental Model #01
                                </p>
                                <p className="mt-0.5 text-xs font-bold text-slate-800">
                                    Unit vs Massa (Nouns)
                                </p>
                            </div>
                            <div className="-translate-x-5 rounded-2xl border border-white bg-linear-to-br from-sky-500 to-indigo-600 p-4 text-white shadow-xl shadow-sky-500/25">
                                <p className="text-[10px] font-bold tracking-wider text-sky-100 uppercase">
                                    Native Instinct
                                </p>
                                <p className="mt-0.5 text-xs font-bold">
                                    “Ive fixed it” vs “Fixed yesterday”
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-white bg-white/85 p-4 text-right shadow-md">
                            <p className="text-xs font-semibold text-slate-500 italic">
                                “Fluency comes from feeling context, not memorizing rules.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Row 2: 4 KPI Mastery Cards */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {kpiCards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <div
                            key={card.label}
                            className="flex items-center justify-between rounded-3xl border border-white/95 bg-white/95 p-5 shadow-(--shadow-soft-card)"
                        >
                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`flex h-8 w-8 items-center justify-center rounded-xl ${card.iconBg}`}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </span>
                                    <span className="text-xs font-semibold text-slate-500">
                                        {card.label}
                                    </span>
                                </div>
                                <p className="text-2xl font-extrabold tracking-tight text-slate-900 tabular-nums">
                                    {card.value}
                                </p>
                                <span className="inline-block text-[11px] font-bold text-emerald-600">
                                    ↑ {card.delta}
                                </span>
                            </div>

                            <svg
                                viewBox="0 0 96 30"
                                className="h-11 w-24 overflow-visible"
                                aria-hidden="true"
                            >
                                <path
                                    d={card.sparkPath}
                                    fill="none"
                                    stroke={card.strokeColor}
                                    strokeWidth="2.75"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    );
                })}
            </section>

            {/* Row 3: Memory Retention Curve (Kiri 2 Kolom) + Conditional Quiz Queue (Kanan 1 Kolom) */}
            <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                <div className="rounded-3xl border border-white/95 bg-white/95 p-6 shadow-(--shadow-soft-card) xl:col-span-2">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <div>
                            <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
                                <TrendingUp className="h-4 w-4 text-sky-600" />
                                Cognitive Retention & Intuition Growth
                            </h3>
                            <p className="text-xs text-slate-500">
                                Perbandingan daya ingat tanpa latihan konteks vs dengan Active Recall
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-semibold">
                            <span className="flex items-center gap-1.5 text-sky-600">
                                <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                                Active Recall
                            </span>
                            <span className="flex items-center gap-1.5 text-violet-600">
                                <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                                Native Intuition
                            </span>
                        </div>
                    </div>

                    {/* Smooth Soft-UI Area & Line Chart */}
                    <div className="relative h-48 w-full pt-2">
                        <svg viewBox="0 0 600 160" className="h-full w-full overflow-visible">
                            <defs>
                                <linearGradient id="skyArea" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.22" />
                                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.0" />
                                </linearGradient>
                            </defs>
                            {/* Horizontal Guide Lines */}
                            {[30, 75, 120].map((y) => (
                                <line
                                    key={y}
                                    x1="0"
                                    y1={y}
                                    x2="600"
                                    y2={y}
                                    stroke="#E2E8F0"
                                    strokeDasharray="4 4"
                                />
                            ))}
                            <path
                                d="M0 130 C 100 115, 180 95, 280 72 C 380 50, 480 35, 600 18 L 600 150 L 0 150 Z"
                                fill="url(#skyArea)"
                            />
                            <path
                                d="M0 130 C 100 115, 180 95, 280 72 C 380 50, 480 35, 600 18"
                                fill="none"
                                stroke="#0EA5E9"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M0 142 C 110 135, 210 110, 310 92 C 420 74, 510 58, 600 42"
                                fill="none"
                                stroke="#8B5CF6"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                            <circle
                                cx="280"
                                cy="72"
                                r="6"
                                fill="#FFFFFF"
                                stroke="#0EA5E9"
                                strokeWidth="3"
                            />
                        </svg>
                    </div>
                </div>

                {/* Conditional Practice Arena Card */}
                <div className="rounded-3xl border border-white/95 bg-white/95 p-6 shadow-(--shadow-soft-card)">
                    <h3 className="text-base font-bold text-slate-900">
                        Situational Recall Queue
                    </h3>
                    <p className="mt-0.5 mb-4 text-xs text-slate-500">
                        Uji intuisi dalam skenario percakapan nyata
                    </p>

                    <div className="space-y-3">
                        <Link
                            href="/practice/bab-01-nouns"
                            className="block rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 transition-transform duration-150 active:scale-[0.98] hover:bg-emerald-50"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-emerald-900">
                                    ● Kantor & Review Desain
                                </span>
                                <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                                    Foundation
                                </span>
                            </div>
                            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                                Menghindari jebakan “advices / informations” saat
                                diskusi dengan rekan kerja.
                            </p>
                        </Link>

                        <Link
                            href="/practice/bab-01-tenses"
                            className="block rounded-2xl border border-violet-100 bg-violet-50/70 p-4 transition-transform duration-150 active:scale-[0.98] hover:bg-violet-50"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-violet-900">
                                    ● Daily Engineering Standup
                                </span>
                                <span className="rounded-full bg-violet-500/15 px-2.5 py-0.5 text-[10px] font-bold text-violet-700">
                                    Precision
                                </span>
                            </div>
                            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                                Melaporkan bug selesai tanpa menabrak aturan penanda waktu.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Row 4: Active Modules Progress (2 Kolom) + Consistency Calendar (1 Kolom) */}
            <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                <div className="rounded-3xl border border-white/95 bg-white/95 p-6 shadow-(--shadow-soft-card) xl:col-span-2">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h3 className="text-base font-bold text-slate-900">
                                Kurikulum Aktif & Kedalaman Intuisi
                            </h3>
                            <p className="text-xs text-slate-500">
                                Klik modul untuk masuk ke Guided Step-by-Step Reader
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {ACTIVE_CURRICULUM.map((mod) => {
                            const done = mod.sections.filter((secId) =>
                                Boolean(completedSections[secId])
                            ).length;
                            const pct = Math.round((done / mod.sections.length) * 100);

                            return (
                                <Link
                                    key={mod.id}
                                    href={`/learn/${mod.pillar}/${mod.slug}?stage=${mod.stageParam}`}
                                    className="flex flex-col justify-between gap-3 rounded-2xl border border-slate-100 bg-surface p-4 transition-all duration-150 active:scale-[0.99] hover:border-sky-200 hover:bg-white sm:flex-row sm:items-center"
                                >
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${mod.stageBadge}`}
                                            >
                                                {mod.stage}
                                            </span>
                                            <span className="text-xs font-medium text-slate-400">
                                                {mod.subtitle}
                                            </span>
                                        </div>
                                        <h4 className="text-sm font-bold text-slate-900">
                                            {mod.title}
                                        </h4>
                                    </div>

                                    <div className="flex items-center gap-3 sm:w-48">
                                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200/80">
                                            <div
                                                className={`h-full rounded-full ${mod.barColor} transition-all duration-300`}
                                                style={{ width: `${pct}%` }}
                                            />
                                        </div>
                                        <span className="w-10 text-right text-xs font-bold text-slate-700 tabular-nums">
                                            {pct}%
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Consistency Calendar Widget (Inspirasi Bottom-Right Calendar Nexora) */}
                <div className="rounded-3xl border border-white/95 bg-white/95 p-6 shadow-(--shadow-soft-card)">
                    <div className="mb-3 flex items-center justify-between">
                        <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
                            <CalendarIcon className="h-4 w-4 text-sky-600" />
                            Consistency Tracker
                        </h3>
                        <span className="text-xs font-bold text-sky-600">Nov 2026</span>
                    </div>

                    <div className="grid grid-cols-7 gap-1.5 text-center text-[11px] font-bold text-slate-400">
                        {WEEK_DAYS.map((d) => (
                            <span key={d} className="py-1">
                                {d}
                            </span>
                        ))}
                        {CALENDAR_DATES.map((date) => {
                            const isToday = date === 12;
                            const isStreak = date >= 9 && date <= 11;
                            return (
                                <span
                                    key={date}
                                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${isToday
                                            ? "bg-sky-600 text-white shadow-md shadow-sky-500/30"
                                            : isStreak
                                                ? "bg-emerald-500/15 text-emerald-700"
                                                : "text-slate-600"
                                        }`}
                                >
                                    {date}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}