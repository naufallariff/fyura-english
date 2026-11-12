// src/components/workspace/XRaySentence.tsx
"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface TokenItem {
    word: string;
    role: string;
    nuance: string;
    colorTag: "subject" | "verb" | "nuance" | "hack";
}

const TAG_STYLES: Record<TokenItem["colorTag"], string> = {
    subject: "bg-sky-500/15 text-sky-800 border-sky-300",
    verb: "bg-pink-500/15 text-pink-800 border-pink-300",
    nuance: "bg-amber-500/15 text-amber-800 border-amber-300",
    hack: "bg-emerald-500/15 text-emerald-800 border-emerald-300",
};

export function XRaySentence({
    sentence,
    contextLabel,
    tokens,
}: {
    sentence: string;
    contextLabel: string;
    tokens: TokenItem[];
}) {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const activeToken = tokens[selectedIndex];

    return (
        <div className="rounded-2xl border border-sky-100 bg-linear-to-br from-[#F8FAFC] to-sky-50/40 p-4 space-y-3">
            <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-sky-700 uppercase">
                    <Sparkles className="h-3.5 w-3.5" />
                    Interactive X-Ray Sentence • {contextLabel}
                </span>
                <span className="text-[11px] text-slate-400">
                    Klik blok warna untuk bedah nuansa
                </span>
            </div>

            <p className="text-base font-semibold leading-relaxed text-slate-900">
                “{sentence}”
            </p>

            <div className="flex flex-wrap gap-2">
                {tokens.map((tok, idx) => (
                    <button
                        key={`${tok.word}-${idx}`}
                        type="button"
                        onClick={() => setSelectedIndex(idx)}
                        className={cn(
                            "rounded-xl border px-3 py-1.5 text-xs font-bold transition-transform duration-150 active:scale-[0.97]",
                            TAG_STYLES[tok.colorTag],
                            selectedIndex === idx && "ring-2 ring-slate-900/20 scale-[1.02]"
                        )}
                    >
                        {tok.word}
                    </button>
                ))}
            </div>

            {activeToken && (
                <div className="rounded-xl border border-white bg-white/95 p-3 shadow-2xs">
                    <p className="text-xs font-bold text-slate-800">
                        {activeToken.word}{" "}
                        <span className="font-medium text-slate-400">
                            — {activeToken.role}
                        </span>
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                        {activeToken.nuance}
                    </p>
                </div>
            )}
        </div>
    );
}