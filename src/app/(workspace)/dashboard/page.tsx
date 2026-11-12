// src/app/(workspace)/dashboard/page.tsx
import Link from "next/link";
import {
    ArrowRight,
    Compass,
    Layers,
    Target,
    Zap,
    CheckCircle2,
} from "lucide-react";
import { getAllLessons } from "@/content/loader/curriculum.loader";

export default async function DashboardPage() {
    const lessons = await getAllLessons();

    return (
        <div className="space-y-6 pb-10">
            {/* Asymmetric Hero Bento Row (8 cols + 4 cols) */}
            <section className="grid grid-cols-12 gap-5">
                {/* Left Hero Card (8 cols) */}
                <div className="col-span-12 lg:col-span-8 flex flex-col justify-between rounded-[28px] border border-white bg-white/95 p-7 sm:p-8 shadow-(--shadow-soft-card) space-y-6">
                    <div className="space-y-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/12 px-3 py-1 text-[11px] font-bold tracking-wide text-sky-700 uppercase">
                            <Compass className="h-3.5 w-3.5" />
                            <span>Personalized Learning Roadmap</span>
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-[-0.02em] text-slate-900">
                            Bridge Your English from CEFR A2 to B2
                        </h1>
                        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
                            Kuasai pola kalimat positif, negatif, dan interogatif dalam situasi
                            kerja maupun percakapan sehari-hari melalui struktur Bento yang
                            terukur.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href="/learn/part-of-speech/nouns-foundations"
                            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-xs font-bold text-white transition-transform duration-100 ease-out active:scale-[0.98] hover:bg-slate-800"
                        >
                            <span>Continue Foundation Module</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>

                        <Link
                            href="/practice/nouns-foundations"
                            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 transition-transform duration-100 ease-out active:scale-[0.98] hover:bg-surface"
                        >
                            <Zap className="h-3.5 w-3.5 text-amber-500" />
                            <span>Enter Scenario Arena</span>
                        </Link>
                    </div>
                </div>

                {/* Right Placement Diagnostic Card (4 cols) */}
                <div className="col-span-12 lg:col-span-4 flex flex-col justify-between rounded-[28px] border border-white bg-white/95 p-7 shadow-(--shadow-soft-card) space-y-5">
                    <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                            Placement Diagnostic
                        </span>
                        <span className="rounded-full bg-emerald-500/12 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                            Verified Baseline
                        </span>
                    </div>

                    <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-extrabold tracking-tight text-slate-900 tabular-nums">
                            58
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                            / 100 • CEFR A2 (Basic)
                        </span>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-[11px] font-semibold text-slate-500">
                            <span>Current: A2</span>
                            <span>Target: B2 (Independent)</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full w-[42%] rounded-full bg-linear-to-r from-emerald-500 to-sky-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Active Curriculum Modules Grid */}
            <section className="space-y-3.5">
                <div className="flex items-center justify-between px-1">
                    <h2 className="flex items-center gap-2 text-sm font-bold tracking-tight text-slate-900">
                        <Layers className="h-4 w-4 text-slate-400" />
                        <span>Active Study Modules</span>
                    </h2>
                    <span className="text-xs font-medium text-slate-400 tabular-nums">
                        {lessons.length} modules available
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {lessons.map((lesson) => (
                        <Link
                            key={lesson.id}
                            href={`/learn/${lesson.category}/${lesson.slug}`}
                            className="group flex flex-col justify-between rounded-[28px] border border-white bg-white/95 p-6 shadow-(--shadow-soft-card) transition-all duration-150 ease-out active:scale-[0.99] hover:border-sky-200 space-y-4"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-600 uppercase">
                                        {lesson.tier} • {lesson.category}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                        <span>Ready</span>
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-sky-700">
                                    {lesson.title}
                                </h3>
                                <p className="text-xs leading-relaxed text-slate-500">
                                    {lesson.subtitle}
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-600">
                                <span className="inline-flex items-center gap-1.5">
                                    <Target className="h-3.5 w-3.5 text-slate-400" />
                                    <span>{lesson.topics.length} core concepts</span>
                                </span>
                                <span className="text-sky-600 group-hover:translate-x-0.5 transition-transform">
                                    Open Module →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}