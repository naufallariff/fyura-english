// src/components/quiz/ConditionalQuizEngine.tsx
"use client";

import { useState } from "react";
import {
    CheckCircle2,
    XCircle,
    MapPin,
    UserCheck,
    Target,
    Lightbulb,
    RotateCcw,
} from "lucide-react";
import type { PracticeQuestion } from "@/content/schemas/lesson.schema";
import { useLearningStore } from "@/store/useLearningStore";
import { cn } from "@/lib/utils";

export function ConditionalQuizEngine({
    questions,
    lessonTitle,
}: {
    questions: PracticeQuestion[];
    lessonTitle: string;
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const markSectionComplete = useLearningStore((s) => s.markSectionComplete);

    const current = questions[currentIndex];
    if (!current) return null;

    const chosenOption = current.options.find((o) => o.id === selectedOptionId);
    const isAnswered = Boolean(chosenOption);
    const isCorrect = Boolean(chosenOption?.isCorrect);

    const handleSelect = (optionId: string, correct: boolean) => {
        if (isAnswered) return;
        setSelectedOptionId(optionId);
        if (correct) {
            markSectionComplete(current.topicId, 100);
        }
    };

    return (
        <div className="mx-auto max-w-3xl space-y-5">
            <div className="rounded-3xl border border-white/90 bg-white/90 p-6 sm:p-8 shadow-(--shadow-soft-card) space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                        <p className="text-xs font-bold text-amber-600 uppercase">
                            Conditional Scenario Arena
                        </p>
                        <h2 className="text-lg font-bold text-slate-900">{lessonTitle}</h2>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 tabular-nums">
                        Kasus {currentIndex + 1} / {questions.length}
                    </span>
                </div>

                {/* Context Card */}
                <div className="grid grid-cols-1 gap-3 rounded-2xl bg-surface p-4 sm:grid-cols-3">
                    <div className="space-y-1">
                        <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                            <MapPin className="h-3.5 w-3.5 text-rose-500" /> SITUASI
                        </span>
                        <p className="text-xs font-semibold text-slate-800">
                            {current.scenario.setting}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                            <UserCheck className="h-3.5 w-3.5 text-sky-500" /> LAWAN BICARA
                        </span>
                        <p className="text-xs font-semibold text-slate-800">
                            {current.scenario.interlocutor}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                            <Target className="h-3.5 w-3.5 text-emerald-500" /> TUJUAN
                        </span>
                        <p className="text-xs font-semibold text-slate-800">
                            {current.scenario.intent}
                        </p>
                    </div>
                </div>

                {/* Question */}
                <h3 className="text-base font-bold text-slate-900">
                    {current.question}
                </h3>

                {/* Options */}
                <div className="space-y-2.5">
                    {current.options.map((opt) => {
                        const isThisSelected = selectedOptionId === opt.id;
                        let stateStyle =
                            "border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50/40";

                        if (isAnswered) {
                            if (opt.isCorrect) {
                                stateStyle =
                                    "border-emerald-400 bg-emerald-50/80 text-emerald-950";
                            } else if (isThisSelected) {
                                stateStyle = "border-rose-400 bg-rose-50/80 text-rose-950";
                            } else {
                                stateStyle = "border-slate-100 bg-slate-50/60 opacity-60";
                            }
                        }

                        return (
                            <button
                                key={opt.id}
                                type="button"
                                disabled={isAnswered}
                                onClick={() => handleSelect(opt.id, opt.isCorrect)}
                                className={cn(
                                    "flex w-full items-center justify-between rounded-2xl border p-4 text-left text-sm font-medium transition-all duration-150 active:scale-[0.99]",
                                    stateStyle
                                )}
                            >
                                <span>{opt.text}</span>
                                {isAnswered && opt.isCorrect && (
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                                )}
                                {isAnswered && isThisSelected && !opt.isCorrect && (
                                    <XCircle className="h-5 w-5 shrink-0 text-rose-600" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Deep Neuro-Feedback Card */}
                {isAnswered && (
                    <div className="space-y-3 rounded-2xl border border-indigo-100 bg-linear-to-br from-indigo-50/70 to-sky-50/70 p-5">
                        <p className="text-sm font-bold text-slate-900">
                            {isCorrect
                                ? "🎯 Tepat Sasaran! Intuisi Native-mu Bekerja."
                                : "💡 Hampir! Mari Kalibrasi Rasa Bahasanya:"}
                        </p>
                        <p className="text-xs leading-relaxed text-slate-700">
                            <strong>Mengapa ini paling pas:</strong>{" "}
                            {current.deepExplanation.whyCorrect}
                        </p>
                        <p className="text-xs leading-relaxed text-slate-600">
                            <strong>Kenapa opsi lain kurang alami:</strong>{" "}
                            {current.deepExplanation.whyOthersFail}
                        </p>
                        <div className="flex items-start gap-2 rounded-xl bg-white/90 p-3 text-xs text-emerald-900">
                            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                            <span>
                                <strong>Real-Life Hack:</strong>{" "}
                                {current.deepExplanation.realLifeHack}
                            </span>
                        </div>

                        <div className="flex justify-end pt-2">
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedOptionId(null);
                                    setCurrentIndex((prev) => (prev + 1) % questions.length);
                                }}
                                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-transform active:scale-[0.97]"
                            >
                                <RotateCcw className="h-3.5 w-3.5" />
                                Ulangi / Kasus Berikutnya
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}