// src/components/workspace/GuidedLessonViewer.tsx
"use client";

import { useState } from "react";
import {
    Brain,
    Sparkles,
    FunctionSquare,
    Compass,
    Layers,
    AlertTriangle,
    Lightbulb,
    CheckCircle2,
    XCircle,
    Check,
} from "lucide-react";
import type { LessonModule } from "@/content/schemas/lesson.schema";
import { XRaySentence } from "@/components/workspace/XRaySentence";
import { useLearningStore } from "@/store/useLearningStore";
import { cn } from "@/lib/utils";

const FORMULA_BADGES: Record<
    "positive" | "negative" | "question",
    { badge: string; border: string }
> = {
    positive: {
        badge: "bg-emerald-500/15 text-emerald-800",
        border: "border-emerald-200/80 bg-emerald-50/40",
    },
    negative: {
        badge: "bg-rose-500/15 text-rose-800",
        border: "border-rose-200/80 bg-rose-50/40",
    },
    question: {
        badge: "bg-sky-500/15 text-sky-800",
        border: "border-sky-200/80 bg-sky-50/40",
    },
};

export function GuidedLessonViewer({ lesson }: { lesson: LessonModule }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const { completedSections, markSectionComplete } = useLearningStore();

    const topic = lesson.topics[activeIndex] ?? lesson.topics[0];
    if (!topic) return null;

    const isCompleted = Boolean(completedSections[topic.id]);

    return (
        <div className="space-y-5">
            {/* Topic Selector Bar */}
            <div className="flex flex-wrap items-center gap-2 rounded-3xl border border-white/95 bg-white/85 p-3 shadow-(--shadow-soft-card)">
                {lesson.topics.map((item, idx) => {
                    const done = Boolean(completedSections[item.id]);
                    const selected = idx === activeIndex;
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setActiveIndex(idx)}
                            className={cn(
                                "flex items-center gap-2.5 rounded-2xl px-4 py-2.5 text-xs font-bold transition-all duration-150",
                                selected
                                    ? "bg-slate-900 text-white shadow-md"
                                    : "bg-surface text-slate-600 hover:bg-white hover:text-slate-900"
                            )}
                        >
                            <span
                                className={cn(
                                    "flex h-5 w-5 items-center justify-center rounded-full text-[11px]",
                                    done
                                        ? "bg-emerald-500 text-white"
                                        : selected
                                            ? "bg-white/20 text-white"
                                            : "bg-slate-200 text-slate-700"
                                )}
                            >
                                {done ? <Check className="h-3 w-3" /> : idx + 1}
                            </span>
                            <span>{item.title}</span>
                        </button>
                    );
                })}
            </div>

            {/* Main Structured Lesson Blueprint */}
            <article className="space-y-8 rounded-3xl border border-white/95 bg-white/95 p-6 sm:p-8 shadow-(--shadow-soft-card)">
                {/* Topic Header (International Standard Title & Subtitle) */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                            {topic.title}
                        </h2>
                        <p className="text-sm font-medium text-slate-500">{topic.subtitle}</p>
                    </div>

                    <button
                        type="button"
                        onClick={() => markSectionComplete(topic.id)}
                        className={cn(
                            "inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition-transform duration-150 active:scale-[0.97]",
                            isCompleted
                                ? "bg-emerald-500/15 text-emerald-800"
                                : "bg-sky-600 text-white shadow-md shadow-sky-500/20 hover:bg-sky-500"
                        )}
                    >
                        <CheckCircle2 className="h-4 w-4" />
                        {isCompleted ? "Mastered ✓" : "Mark Topic Mastered"}
                    </button>
                </div>

                {/* STAGE 1: Penjelasan Mudah & Mental Model */}
                <section className="space-y-3">
                    <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-sky-600 text-xs font-extrabold text-white">
                            1
                        </span>
                        <h3 className="text-base font-extrabold text-slate-900">
                            Penjelasan Konsep & Gambaran Visual
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="rounded-2xl border border-slate-100 bg-surface p-5 space-y-2">
                            <p className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase">
                                <Brain className="h-4 w-4 text-sky-600" /> Penjelasan Sederhana
                            </p>
                            <p className="text-sm leading-relaxed text-slate-700">
                                {topic.explanation.summary}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-5 space-y-2">
                            <p className="flex items-center gap-1.5 text-xs font-bold text-violet-800 uppercase">
                                <Sparkles className="h-4 w-4" /> Analogi Mental Model
                            </p>
                            <p className="text-sm leading-relaxed text-slate-700">
                                {topic.explanation.mentalModel}
                            </p>
                        </div>
                    </div>
                </section>

                {/* STAGE 2: Formula (+, -, ?) */}
                <section className="space-y-3">
                    <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-xs font-extrabold text-white">
                            2
                        </span>
                        <h3 className="flex items-center gap-2 text-base font-extrabold text-slate-900">
                            <FunctionSquare className="h-4 w-4 text-indigo-600" />
                            Sentence Formulas (Positive, Negative, Question)
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
                        {topic.formulas.map((f) => {
                            const style = FORMULA_BADGES[f.type];
                            return (
                                <div
                                    key={f.type}
                                    className={cn(
                                        "flex flex-col justify-between rounded-2xl border p-4 space-y-3",
                                        style.border
                                    )}
                                >
                                    <div className="space-y-2">
                                        <span
                                            className={cn(
                                                "inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold",
                                                style.badge
                                            )}
                                        >
                                            {f.label}
                                        </span>
                                        <code className="block rounded-xl bg-white/95 p-2.5 text-xs font-bold text-slate-800 shadow-2xs">
                                            {f.formula}
                                        </code>
                                    </div>
                                    <div className="border-t border-slate-200/60 pt-2.5">
                                        <p className="text-xs font-bold text-slate-900">
                                            “{f.example}”
                                        </p>
                                        <p className="mt-0.5 text-[11px] text-slate-500">
                                            {f.translation}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* STAGE 3: Kenapa & Alasannya */}
                <section className="space-y-3">
                    <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-600 text-xs font-extrabold text-white">
                            3
                        </span>
                        <h3 className="flex items-center gap-2 text-base font-extrabold text-slate-900">
                            <Compass className="h-4 w-4 text-emerald-600" />
                            Kenapa & Alasannya (Logika Penutur Asli)
                        </h3>
                    </div>

                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 space-y-2.5">
                        <p className="text-sm leading-relaxed text-slate-800">
                            <strong>Logika Struktur:</strong> {topic.rationale.coreLogic}
                        </p>
                        <p className="text-sm leading-relaxed text-slate-700">
                            <strong>Cara Pandang Native:</strong>{" "}
                            {topic.rationale.nativePerspective}
                        </p>
                    </div>
                </section>

                {/* STAGE 4: Contoh-Contoh di Banyak Kondisi + X-Ray */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-500 text-xs font-extrabold text-white">
                            4
                        </span>
                        <h3 className="flex items-center gap-2 text-base font-extrabold text-slate-900">
                            <Layers className="h-4 w-4 text-amber-600" />
                            Contoh dalam Berbagai Kondisi & Bedah X-Ray
                        </h3>
                    </div>

                    <div className="space-y-4">
                        {topic.conditionalExamples.map((ex, idx) => (
                            <div
                                key={idx}
                                className="space-y-3 rounded-2xl border border-slate-100 bg-surface p-5"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <span className="text-xs font-extrabold text-slate-800">
                                        {ex.conditionLabel}
                                    </span>
                                    <span className="rounded-full bg-sky-500/12 px-2.5 py-0.5 text-[11px] font-bold text-sky-700">
                                        {ex.register}
                                    </span>
                                </div>

                                <p className="text-xs text-slate-600">
                                    Arti: <em>{ex.indonesianMeaning}</em> — {ex.contextNote}
                                </p>

                                <XRaySentence
                                    sentence={ex.sentence}
                                    contextLabel={ex.register}
                                    tokens={ex.xrayTokens}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* STAGE 5: Kondisi Spesial & Pengecualian */}
                <section className="space-y-3">
                    <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-rose-600 text-xs font-extrabold text-white">
                            5
                        </span>
                        <h3 className="flex items-center gap-2 text-base font-extrabold text-slate-900">
                            <AlertTriangle className="h-4 w-4 text-rose-600" />
                            Kondisi Spesial & Pengecualian
                        </h3>
                    </div>

                    <div className="space-y-3">
                        {topic.specialExceptions.map((exc, idx) => (
                            <div
                                key={idx}
                                className="space-y-3 rounded-2xl border border-rose-100 bg-rose-50/40 p-5"
                            >
                                <h4 className="text-sm font-extrabold text-slate-900">
                                    {exc.title}
                                </h4>
                                <p className="text-xs leading-relaxed text-slate-700">
                                    {exc.ruleDetail}
                                </p>
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <div className="rounded-xl border border-rose-200 bg-white/90 p-3 text-xs text-rose-900">
                                        <span className="mb-1 flex items-center gap-1 font-bold text-rose-700">
                                            <XCircle className="h-3.5 w-3.5" /> Kurang Tepat:
                                        </span>
                                        {exc.wrongExample}
                                    </div>
                                    <div className="rounded-xl border border-emerald-200 bg-white/90 p-3 text-xs text-emerald-900">
                                        <span className="mb-1 flex items-center gap-1 font-bold text-emerald-700">
                                            <CheckCircle2 className="h-3.5 w-3.5" /> Tepat & Alami:
                                        </span>
                                        {exc.correctExample}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* STAGE 6: Tips & Tricks */}
                <section className="rounded-2xl border border-amber-200/80 bg-linear-to-r from-amber-50/80 to-orange-50/40 p-5 space-y-2.5">
                    <p className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-amber-800 uppercase">
                        <Lightbulb className="h-4 w-4 text-amber-600" />
                        Tahap 6 • Tips & Tricks Praktis
                    </p>
                    <ul className="space-y-1.5 text-sm leading-relaxed text-slate-700">
                        {topic.tipsAndTricks.map((tip, idx) => (
                            <li key={idx}>• {tip}</li>
                        ))}
                    </ul>
                </section>
            </article>
        </div>
    );
}