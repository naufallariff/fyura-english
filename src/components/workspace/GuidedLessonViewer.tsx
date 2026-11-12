// src/components/workspace/GuidedLessonViewer.tsx
"use client";

import { useState } from "react";
import {
    BookOpen,
    Terminal,
    Layers,
    AlertCircle,
    Sparkles,
    CheckCircle2,
    XCircle,
    Check,
    Compass,
} from "lucide-react";
import type {
    BentoSpan,
    LessonModule,
} from "@/content/schemas/lesson.schema";
import { XRaySentence } from "@/components/workspace/XRaySentence";
import { useLearningStore } from "@/store/useLearningStore";
import { useIsMounted } from "@/hooks/useIsMounted";
import { cn } from "@/lib/utils";

const SPAN_CLASSES: Record<BentoSpan, string> = {
    full: "col-span-12",
    wide: "col-span-12 xl:col-span-8",
    medium: "col-span-12 xl:col-span-7",
    half: "col-span-12 xl:col-span-6",
    narrow: "col-span-12 xl:col-span-5",
    third: "col-span-12 md:col-span-6 xl:col-span-4",
};

const FORMULA_SYMBOL_STYLE: Record<"(+)" | "(-)" | "(?)", string> = {
    "(+)": "text-emerald-400",
    "(-)": "text-amber-300",
    "(?)": "text-sky-300",
};

const POLARITY_PILL_STYLE: Record<"(+)" | "(-)" | "(?)", string> = {
    "(+)": "bg-emerald-500/12 text-emerald-700",
    "(-)": "bg-rose-500/12 text-rose-700",
    "(?)": "bg-sky-500/12 text-sky-700",
};

export function GuidedLessonViewer({ lesson }: { lesson: LessonModule }) {
    const mounted = useIsMounted();
    const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
    const { completedSections, markSectionComplete } = useLearningStore();

    const activeTopic =
        lesson.topics[selectedTopicIndex] ?? lesson.topics[0];

    return (
        <div className="space-y-7">
            {/* Primary Asymmetric Bento Canvas */}
            <section className="grid grid-cols-12 gap-5 items-stretch">
                {lesson.topics.map((topic, index) => {
                    const isMastered = mounted && Boolean(completedSections[topic.id]);
                    const isSelected = selectedTopicIndex === index;
                    const isCompact = topic.colSpan === "third";

                    return (
                        <article
                            key={topic.id}
                            onClick={() => setSelectedTopicIndex(index)}
                            className={cn(
                                SPAN_CLASSES[topic.colSpan],
                                "group relative flex cursor-pointer flex-col justify-between rounded-[28px] border bg-white/95 p-6 sm:p-7 shadow-(--shadow-soft-card) transition-all duration-150 ease-out active:scale-[0.992]",
                                isSelected
                                    ? "border-slate-900/15 ring-2 ring-sky-500/25"
                                    : "border-white hover:border-slate-200/80"
                            )}
                        >
                            <div className="space-y-5">
                                {/* Header: Clean Tags + Optical Heading + Index Badge */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-1.5">
                                        <div className="flex flex-wrap items-center gap-1.5">
                                            {topic.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-slate-600"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-xl font-bold tracking-[-0.015em] text-slate-900 leading-snug">
                                            {topic.title}
                                        </h2>
                                        <p className="text-xs font-medium text-slate-400">
                                            {topic.subtitle}
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            markSectionComplete(topic.id);
                                        }}
                                        aria-label={`Mark ${topic.title} as mastered`}
                                        className={cn(
                                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl text-xs font-bold tabular-nums transition-transform duration-100 ease-out active:scale-95",
                                            isMastered
                                                ? "bg-emerald-600 text-white shadow-xs"
                                                : "bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white"
                                        )}
                                    >
                                        {isMastered ? (
                                            <Check className="h-4 w-4" />
                                        ) : (
                                            topic.badgeNumber
                                        )}
                                    </button>
                                </div>

                                {/* Block 1: Explanation & Rationale */}
                                <div className="space-y-2 border-t border-slate-100 pt-4">
                                    <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                                        <BookOpen className="h-3.5 w-3.5 text-slate-400" />
                                        <span>Explanation & Rationale</span>
                                    </div>
                                    <p className="text-[13.5px] leading-relaxed text-slate-700">
                                        {topic.explanation}
                                    </p>
                                    <p className="text-[12.5px] leading-relaxed text-slate-500">
                                        {topic.rationale}
                                    </p>
                                </div>

                                {/* Block 2: Formula Structure (+/-/?) */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                                        <Terminal className="h-3.5 w-3.5 text-slate-400" />
                                        <span>Formula Structure</span>
                                    </div>
                                    <div className="space-y-2 rounded-2xl bg-[#0B1F1D] p-4 font-mono text-xs text-slate-100">
                                        {topic.formulas.map((f) => (
                                            <div
                                                key={f.polarity}
                                                className="flex items-start gap-2.5 leading-relaxed"
                                            >
                                                <span
                                                    className={cn(
                                                        "shrink-0 font-bold",
                                                        FORMULA_SYMBOL_STYLE[f.symbol]
                                                    )}
                                                >
                                                    {f.symbol}
                                                </span>
                                                <span className="wrap-break-word">{f.pattern}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Block 3: Conditional Examples (+/-/?) */}
                                <div className="space-y-2.5">
                                    <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                                        <Layers className="h-3.5 w-3.5 text-slate-400" />
                                        <span>Conditional Examples</span>
                                    </div>

                                    <div
                                        className={cn(
                                            "grid gap-3",
                                            topic.colSpan === "full"
                                                ? "grid-cols-1 lg:grid-cols-2"
                                                : "grid-cols-1"
                                        )}
                                    >
                                        {topic.conditionalExamples.map((cond, cIdx) => (
                                            <div
                                                key={cIdx}
                                                className="space-y-2.5 rounded-2xl bg-surface/90 p-4 ring-1 ring-slate-200/50"
                                            >
                                                <div className="flex items-center justify-between gap-2">
                                                    <span className="text-[11px] font-bold tracking-wide text-slate-700 uppercase">
                                                        {cond.conditionTitle}
                                                    </span>
                                                    <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-slate-500">
                                                        {cond.register}
                                                    </span>
                                                </div>

                                                <div className="space-y-1.5 text-[13px]">
                                                    <div className="flex items-start gap-2">
                                                        <span
                                                            className={cn(
                                                                "mt-0.5 shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] font-bold",
                                                                POLARITY_PILL_STYLE["(+)"]
                                                            )}
                                                        >
                                                            (+)
                                                        </span>
                                                        <p className="font-medium text-slate-800">
                                                            {cond.positive}
                                                        </p>
                                                    </div>

                                                    <div className="flex items-start gap-2">
                                                        <span
                                                            className={cn(
                                                                "mt-0.5 shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] font-bold",
                                                                POLARITY_PILL_STYLE["(-)"]
                                                            )}
                                                        >
                                                            (-)
                                                        </span>
                                                        <p className="text-slate-600">{cond.negative}</p>
                                                    </div>

                                                    <div className="flex items-start gap-2">
                                                        <span
                                                            className={cn(
                                                                "mt-0.5 shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] font-bold",
                                                                POLARITY_PILL_STYLE["(?)"]
                                                            )}
                                                        >
                                                            (?)
                                                        </span>
                                                        <p className="text-slate-600">{cond.question}</p>
                                                    </div>
                                                </div>

                                                {!isCompact && (
                                                    <p className="border-t border-slate-200/60 pt-2 text-[11.5px] leading-relaxed text-slate-500">
                                                        <span className="font-semibold text-slate-700">
                                                            Nuance:
                                                        </span>{" "}
                                                        {cond.nuanceNote}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Subtle Interactive Footer Cue */}
                            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] font-medium text-slate-400">
                                <span>
                                    {isSelected
                                        ? "Active in Deep-Dive Inspector below"
                                        : "Click card to inspect X-Ray & Exceptions"}
                                </span>
                                <span className="font-semibold text-slate-600 group-hover:text-sky-600">
                                    {isMastered ? "Completed" : "Inspect →"}
                                </span>
                            </div>
                        </article>
                    );
                })}
            </section>

            {/* Secondary Bento Deep-Dive Dock (X-Ray + Exceptions + Tips & Tricks) */}
            {activeTopic && (
                <section className="grid grid-cols-12 gap-5">
                    {/* X-Ray Sentence Breakdown (5 cols) */}
                    <div className="col-span-12 lg:col-span-5 rounded-[28px] border border-white bg-white/95 p-6 shadow-(--shadow-soft-card) space-y-3.5">
                        <div className="flex items-center justify-between gap-2">
                            <h3 className="flex items-center gap-2 text-sm font-bold tracking-tight text-slate-900">
                                <Sparkles className="h-4 w-4 text-sky-600" />
                                <span>Sentence X-Ray</span>
                            </h3>
                            <span className="truncate rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                                {activeTopic.title}
                            </span>
                        </div>

                        {activeTopic.conditionalExamples[0] && (
                            <XRaySentence
                                sentence={activeTopic.conditionalExamples[0].positive}
                                contextLabel={activeTopic.conditionalExamples[0].register}
                                tokens={activeTopic.conditionalExamples[0].xrayTokens}
                            />
                        )}
                    </div>

                    {/* Special Exceptions & Contrasts (4 cols) */}
                    <div className="col-span-12 lg:col-span-4 rounded-[28px] border border-white bg-white/95 p-6 shadow-(--shadow-soft-card) space-y-3.5">
                        <h3 className="flex items-center gap-2 text-sm font-bold tracking-tight text-slate-900">
                            <AlertCircle className="h-4 w-4 text-rose-500" />
                            <span>Special Exceptions</span>
                        </h3>

                        <div className="space-y-3">
                            {activeTopic.specialExceptions.map((exc, idx) => (
                                <div
                                    key={idx}
                                    className="space-y-2.5 rounded-2xl bg-surface/90 p-4 ring-1 ring-slate-200/50"
                                >
                                    <p className="text-xs font-bold text-slate-900">{exc.title}</p>
                                    <p className="text-xs leading-relaxed text-slate-600">
                                        {exc.explanation}
                                    </p>
                                    <div className="space-y-1.5 text-xs">
                                        <div className="flex items-start gap-2 rounded-xl bg-white p-2.5 text-rose-800">
                                            <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-500" />
                                            <span>{exc.wrongExample}</span>
                                        </div>
                                        <div className="flex items-start gap-2 rounded-xl bg-white p-2.5 text-emerald-800">
                                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                                            <span>{exc.correctExample}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Practical Tips & Tricks (3 cols) */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col justify-between rounded-[28px] border border-white bg-white/95 p-6 shadow-(--shadow-soft-card) space-y-4">
                        <div className="space-y-3">
                            <h3 className="flex items-center gap-2 text-sm font-bold tracking-tight text-slate-900">
                                <Compass className="h-4 w-4 text-amber-500" />
                                <span>Tips & Tricks</span>
                            </h3>
                            <ul className="space-y-2 text-xs leading-relaxed text-slate-600">
                                {activeTopic.tipsAndTricks.map((tip, idx) => (
                                    <li
                                        key={idx}
                                        className="rounded-2xl bg-surface/90 p-3.5 ring-1 ring-slate-200/50"
                                    >
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            type="button"
                            onClick={() => markSectionComplete(activeTopic.id)}
                            className={cn(
                                "w-full rounded-2xl py-2.5 text-xs font-bold transition-all duration-100 ease-out active:scale-[0.98]",
                                mounted && completedSections[activeTopic.id]
                                    ? "bg-emerald-600 text-white"
                                    : "bg-slate-900 text-white hover:bg-slate-800"
                            )}
                        >
                            {mounted && completedSections[activeTopic.id]
                                ? "Mastered"
                                : "Mark Topic Mastered"}
                        </button>
                    </div>
                </section>
            )}
        </div>
    );
}