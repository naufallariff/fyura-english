"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Compass,
    Zap,
    ChevronDown,
    ChevronRight,
    Sprout,
    Rocket,
    Crown,
    FolderOpen,
    Globe,
    MessageCircleHeart,
    BookOpen,
} from "lucide-react";
import curriculumIndex from "@content/curriculum-index.json";
import { cn } from "@/lib/utils";

const TIER_VISUALS: Record<
    string,
    {
        icon: React.ComponentType<{ className?: string }>;
        badgeBg: string;
        iconBg: string;
        activeBorder: string;
    }
> = {
    beginner: {
        icon: Sprout,
        badgeBg: "bg-emerald-500/15 text-emerald-700",
        iconBg: "bg-emerald-500 text-white",
        activeBorder: "border-emerald-200/80 bg-emerald-50/40",
    },
    intermediate: {
        icon: Rocket,
        badgeBg: "bg-sky-500/15 text-sky-700",
        iconBg: "bg-sky-500 text-white",
        activeBorder: "border-sky-200/80 bg-sky-50/40",
    },
    proficient: {
        icon: Crown,
        badgeBg: "bg-violet-500/15 text-violet-700",
        iconBg: "bg-violet-500 text-white",
        activeBorder: "border-violet-200/80 bg-violet-50/40",
    },
};

const THEMATIC_LAB_LINKS = [
    {
        href: "/learn/conversations/workplace-pragmatics",
        label: "Conversational Pragmatics",
        icon: MessageCircleHeart,
        iconWrapper: "bg-rose-500/15 text-rose-600",
    },
    {
        href: "/learn/vocabulary/situational-lexicon",
        label: "Thematic Lexicon & Idioms",
        icon: Globe,
        iconWrapper: "bg-indigo-500/15 text-indigo-600",
    },
] as const;

export function FloatingSidebar() {
    const pathname = usePathname();

    // Default membuka Beginner (level A2 pengguna saat ini) & Intermediate (target B2)
    const [openTiers, setOpenTiers] = useState<Record<string, boolean>>({
        beginner: true,
        intermediate: true,
        proficient: false,
    });

    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
        "beginner-part-of-speech": true,
        "beginner-grammar": true,
        "intermediate-grammar": true,
    });

    const toggleTier = (tierId: string) =>
        setOpenTiers((prev) => ({ ...prev, [tierId]: !prev[tierId] }));

    const toggleCategory = (key: string) =>
        setOpenCategories((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
        <aside className="flex h-full w-80 flex-col justify-between overflow-y-auto border-r border-white/90 bg-surface/95 px-4 py-5 shadow-(--shadow-soft-sidebar) backdrop-blur-xl">
            <div className="space-y-5">
                {/* Brand Header */}
                <div className="flex items-center justify-between px-1.5">
                    <Link href="/dashboard" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500 via-blue-600 to-indigo-600 text-white shadow-md shadow-sky-500/25">
                            <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                            <h1 className="text-base font-extrabold tracking-tight text-slate-900">
                                Fyura English
                            </h1>
                            <p className="text-[11px] font-medium text-slate-400">
                                CEFR A2 → B2 Workspace
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Core Workspace Navigation */}
                <div className="space-y-1">
                    {/* 1. Dashboard / Command Center */}
                    <Link
                        href="/dashboard"
                        className={cn(
                            "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[13px] font-bold transition-all duration-150",
                            pathname === "/dashboard"
                                ? "border border-white bg-linear-to-r from-sky-500/15 via-indigo-500/10 to-white text-sky-950 shadow-(--shadow-soft-pill)"
                                : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                        )}
                    >
                        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-sky-500 text-white shadow-xs">
                            <LayoutDashboard className="h-3.5 w-3.5" />
                        </span>
                        <span>Command Center</span>
                    </Link>

                    {/* 2. Panduan Waktu & Kata Kerja */}
                    <Link
                        href="/time-matrix"
                        className={cn(
                            "flex items-center justify-between rounded-2xl px-3 py-2.5 text-[13px] font-bold transition-all duration-150",
                            pathname === "/time-matrix"
                                ? "border border-white bg-linear-to-r from-indigo-500/15 via-sky-500/10 to-white text-indigo-950 shadow-sm"
                                : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                        )}
                    >
                        <span className="flex items-center gap-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
                                <Compass className="h-3.5 w-3.5" />
                            </span>
                            <span>Waktu & Kata Kerja</span>
                        </span>
                        <span className="rounded-full bg-indigo-500/15 px-2 py-0.5 text-[10px] font-bold text-indigo-700">
                            Panduan
                        </span>
                    </Link>

                    {/* 3. Practice Arena (Quiz) */}
                    <Link
                        href="/practice/nouns-foundations"
                        className={cn(
                            "flex items-center justify-between rounded-2xl px-3 py-2.5 text-[13px] font-bold transition-all duration-150",
                            pathname.startsWith("/practice")
                                ? "border border-white bg-linear-to-r from-amber-500/15 to-white text-amber-950 shadow-(--shadow-soft-pill)"
                                : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                        )}
                    >
                        <span className="flex items-center gap-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
                                <Zap className="h-3.5 w-3.5" />
                            </span>
                            <span>Practice Arena</span>
                        </span>
                        <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                            Scenarios
                        </span>
                    </Link>
                </div>

                {/* CEFR 3-Tier Accordion Tree */}
                <div className="space-y-2">
                    <p className="px-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                        CEFR Proficiency Curriculum
                    </p>

                    <div className="space-y-2">
                        {curriculumIndex.tiers.map((tier) => {
                            const visual = TIER_VISUALS[tier.id] ?? TIER_VISUALS.beginner!;
                            const TierIcon = visual.icon;
                            const isTierOpen = Boolean(openTiers[tier.id]);

                            return (
                                <div
                                    key={tier.id}
                                    className={cn(
                                        "rounded-2xl border transition-colors",
                                        isTierOpen
                                            ? visual.activeBorder
                                            : "border-white/80 bg-white/60"
                                    )}
                                >
                                    {/* Level 1: Tier Dropdown Header (Beginner / Intermediate / Proficient) */}
                                    <button
                                        type="button"
                                        onClick={() => toggleTier(tier.id)}
                                        className="flex w-full cursor-pointer items-center justify-between px-3 py-2.5 text-left"
                                    >
                                        <span className="flex items-center gap-2.5">
                                            <span
                                                className={cn(
                                                    "flex h-7 w-7 items-center justify-center rounded-xl shadow-xs",
                                                    visual.iconBg
                                                )}
                                            >
                                                <TierIcon className="h-3.5 w-3.5" />
                                            </span>
                                            <span>
                                                <span className="block text-[13px] font-extrabold text-slate-900">
                                                    {tier.label}
                                                </span>
                                                <span className="block text-[10px] font-semibold text-slate-400">
                                                    {tier.cefrBadge}
                                                </span>
                                            </span>
                                        </span>
                                        {isTierOpen ? (
                                            <ChevronDown className="h-4 w-4 text-slate-400" />
                                        ) : (
                                            <ChevronRight className="h-4 w-4 text-slate-400" />
                                        )}
                                    </button>

                                    {/* Level 2: Categories (Part of Speech, Grammar) */}
                                    {isTierOpen && (
                                        <div className="space-y-1.5 px-2.5 pb-2.5">
                                            {tier.categories.map((cat) => {
                                                const catKey = `${tier.id}-${cat.id}`;
                                                const isCatOpen = Boolean(openCategories[catKey]);

                                                return (
                                                    <div key={catKey} className="space-y-1">
                                                        <button
                                                            type="button"
                                                            onClick={() => toggleCategory(catKey)}
                                                            className="flex w-full cursor-pointer items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-white/80"
                                                        >
                                                            <span className="flex items-center gap-2">
                                                                <FolderOpen className="h-3.5 w-3.5 text-slate-400" />
                                                                {cat.label}
                                                            </span>
                                                            {isCatOpen ? (
                                                                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                                                            ) : (
                                                                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                                                            )}
                                                        </button>

                                                        {/* Level 3: Concrete Modules */}
                                                        {isCatOpen && (
                                                            <ul className="ml-3 space-y-0.5 border-l-2 border-slate-200/80 pl-2.5">
                                                                {cat.modules.map((mod) => {
                                                                    const href = `/learn/${cat.id}/${mod.slug}`;
                                                                    const isActive = pathname === href;
                                                                    const isReady = mod.status === "ready";

                                                                    return (
                                                                        <li key={mod.slug}>
                                                                            <Link
                                                                                href={href}
                                                                                className={cn(
                                                                                    "flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs transition-all",
                                                                                    isActive
                                                                                        ? "bg-slate-900 font-bold text-white shadow-xs"
                                                                                        : isReady
                                                                                            ? "font-semibold text-slate-700 hover:bg-white hover:text-slate-950"
                                                                                            : "font-medium text-slate-400 hover:bg-white/60"
                                                                                )}
                                                                            >
                                                                                <span className="truncate">
                                                                                    {mod.title}
                                                                                </span>
                                                                                {isReady && !isActive && (
                                                                                    <span className="ml-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                                                                )}
                                                                            </Link>
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Outside CEFR Tiers: Thematic & Practical Labs */}
                <div className="space-y-1.5">
                    <p className="px-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                        Thematic & Cross-Level Labs
                    </p>
                    <div className="space-y-1">
                        {THEMATIC_LAB_LINKS.map((lab) => {
                            const LabIcon = lab.icon;
                            const isActive = pathname === lab.href;

                            return (
                                <Link
                                    key={lab.href}
                                    href={lab.href}
                                    className={cn(
                                        "flex items-center gap-2.5 rounded-2xl px-3 py-2 text-xs font-semibold transition-all",
                                        isActive
                                            ? "bg-slate-900 font-bold text-white shadow-xs"
                                            : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                                    )}
                                >
                                    <span
                                        className={cn(
                                            "flex h-7 w-7 items-center justify-center rounded-xl",
                                            isActive ? "bg-white/15 text-white" : lab.iconWrapper
                                        )}
                                    >
                                        <LabIcon className="h-3.5 w-3.5" />
                                    </span>
                                    <span>{lab.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Placement Baseline Card */}
            <div className="mt-6 rounded-2xl border border-white bg-linear-to-br from-emerald-50 via-sky-50/70 to-white p-3.5 shadow-(--shadow-soft-card)">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-wider text-emerald-700 uppercase">
                        Placement Baseline
                    </span>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                        CEFR A2 • 58
                    </span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                    Fokus saat ini: menguatkan fondasi <strong>Beginner (A2)</strong> untuk
                    menembus target <strong>Intermediate (B2)</strong>.
                </p>
            </div>
        </aside>
    );
}