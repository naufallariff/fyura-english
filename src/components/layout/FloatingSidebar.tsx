// src/components/layout/FloatingSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Zap,
    Sprout,
    Rocket,
    Briefcase,
    Crown,
    Globe,
    MessageCircleHeart,
    Flame,
    BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
    label: string;
    badge?: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    accentClass: string;
    pillBgClass: string;
}

const WORKSPACE_ITEMS: NavItem[] = [
    {
        label: "Command Center",
        href: "/dashboard",
        icon: LayoutDashboard,
        accentClass: "text-sky-600",
        pillBgClass: "bg-sky-500/12 text-sky-700 shadow-[var(--shadow-soft-pill)]",
    },
    {
        label: "Practice Arena",
        badge: "Quiz",
        href: "/practice/bab-01-nouns",
        icon: Zap,
        accentClass: "text-amber-600",
        pillBgClass: "bg-amber-500/12 text-amber-800",
    },
];

const FLUENCY_PATH_ITEMS: NavItem[] = [
    {
        label: "1. Foundation",
        badge: "A1–A2",
        href: "/learn/part-of-speech/bab-01-nouns?stage=foundation",
        icon: Sprout,
        accentClass: "text-emerald-600",
        pillBgClass: "bg-emerald-500/12 text-emerald-800",
    },
    {
        label: "2. Fluidity",
        badge: "B1–B2",
        href: "/learn/part-of-speech/bab-01-nouns?stage=fluidity",
        icon: Rocket,
        accentClass: "text-sky-600",
        pillBgClass: "bg-sky-500/12 text-sky-800",
    },
    {
        label: "3. Precision",
        badge: "C1",
        href: "/learn/grammar/bab-01-tenses?stage=precision",
        icon: Briefcase,
        accentClass: "text-violet-600",
        pillBgClass: "bg-violet-500/12 text-violet-800",
    },
    {
        label: "4. Native Instinct",
        badge: "C2",
        href: "/learn/grammar/bab-01-tenses?stage=native",
        icon: Crown,
        accentClass: "text-amber-600",
        pillBgClass: "bg-amber-500/12 text-amber-800",
    },
];

const REAL_WORLD_LABS: NavItem[] = [
    {
        label: "Situational Survival",
        href: "/learn/vocabulary/thematic-places",
        icon: Globe,
        accentClass: "text-rose-600",
        pillBgClass: "bg-rose-500/12 text-rose-800",
    },
    {
        label: "Social & Nuance",
        href: "/learn/conversations/greetings",
        icon: MessageCircleHeart,
        accentClass: "text-pink-600",
        pillBgClass: "bg-pink-500/12 text-pink-800",
    },
    {
        label: "Idioms & Hacks",
        href: "/learn/conversations/idioms",
        icon: Flame,
        accentClass: "text-orange-600",
        pillBgClass: "bg-orange-500/12 text-orange-800",
    },
];

export function FloatingSidebar() {
    const pathname = usePathname();

    const renderGroup = (title: string, items: NavItem[]) => (
        <div className="space-y-1.5">
            <p className="px-3 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                {title}
            </p>
            <nav className="space-y-1" aria-label={title}>
                {items.map((item) => {
                    const Icon = item.icon;
                    const baseHref = item.href.split("?")[0] ?? item.href;
                    const isActive = pathname === baseHref;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "group flex items-center justify-between rounded-2xl px-3.5 py-2.5 text-sm font-medium transition-transform duration-150 ease-snappy active:scale-[0.97]",
                                isActive
                                    ? item.pillBgClass
                                    : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                            )}
                        >
                            <span className="flex items-center gap-3">
                                <span
                                    className={cn(
                                        "flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-xs transition-transform duration-150 group-hover:scale-105",
                                        item.accentClass
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                </span>
                                <span>{item.label}</span>
                            </span>
                            {item.badge && (
                                <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-slate-500 shadow-2xs">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );

    return (
        <aside className="flex h-full w-72 shrink-0 flex-col justify-between rounded-3xl border border-white/85 bg-surface/90 p-4 shadow-(--shadow-soft-card) backdrop-blur-xl">
            <div className="space-y-6">
                {/* Brand Header */}
                <div className="flex items-center gap-3 px-2 pt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500 via-indigo-500 to-violet-600 text-white shadow-md shadow-sky-500/20">
                        <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                        <h1 className="text-base font-bold tracking-tight text-slate-900">
                            Fyura English
                        </h1>
                        <p className="text-xs font-medium text-slate-400">
                            Neuro-Cognitive Studio
                        </p>
                    </div>
                </div>

                {/* Navigation Groups */}
                <div className="space-y-5">
                    {renderGroup("Workspace", WORKSPACE_ITEMS)}
                    {renderGroup("Fluency Path", FLUENCY_PATH_ITEMS)}
                    {renderGroup("Real-World Labs", REAL_WORLD_LABS)}
                </div>
            </div>

            {/* Bottom Quick Reference Card (Mirip Upgrade Card di Referensi) */}
            <div className="rounded-2xl border border-white bg-linear-to-br from-sky-50 via-indigo-50/70 to-violet-50 p-3.5 shadow-xs">
                <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white">
                        <BookOpen className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                        Grammar & POS Matrix
                    </span>
                </div>
                <p className="mb-3 text-[11px] leading-relaxed text-slate-500">
                    Akses langsung 25 bab referensi cepat & tabel irregular verbs.
                </p>
                <Link
                    href="/learn/part-of-speech/bab-01-nouns"
                    className="flex w-full items-center justify-center rounded-xl bg-slate-900 py-2 text-xs font-semibold text-white transition-transform duration-150 active:scale-[0.97] hover:bg-slate-800"
                >
                    Buka Indeks Bab →
                </Link>
            </div>
        </aside>
    );
}