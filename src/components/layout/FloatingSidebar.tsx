"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    PanelLeftOpen,
    PanelLeftClose,
    ChevronDown,
    LayoutDashboard,
    Compass,
    Swords,
    MessageCircleHeart,
    BookMarked,
    GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingSidebar() {
    const pathname = usePathname();

    // Default SELALU tertutup saat pertama kali dibuka atau setelah refresh
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
        cefr: false,
        labs: false,
    });

    const toggleGroup = (key: string) => {
        setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <>
            {/* Tombol Pembuka Sidebar saat Tertutup */}
            {!isSidebarOpen && (
                <button
                    type="button"
                    onClick={() => setIsSidebarOpen(true)}
                    aria-label="Buka menu navigasi"
                    className="fixed top-4 left-4 z-40 inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-slate-200/90 bg-white/95 px-3.5 py-2.5 text-xs font-bold text-slate-800 shadow-md backdrop-blur-xs transition-all hover:bg-slate-50"
                >
                    <PanelLeftOpen className="h-4 w-4 text-indigo-600" />
                    <span>Menu Belajar</span>
                </button>
            )}

            {/* Backdrop Overlay saat Sidebar Terbuka */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-900/25 backdrop-blur-2xs transition-opacity"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Drawer Sidebar */}
            <aside
                className={cn(
                    "fixed top-3 bottom-3 left-3 z-50 flex w-72 flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/95 p-4 shadow-xl backdrop-blur-md transition-transform duration-200 ease-out",
                    isSidebarOpen ? "translate-x-0" : "translate-x-[-115%]"
                )}
            >
                <div className="space-y-4 overflow-y-auto pr-1">
                    {/* Header Sidebar */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div>
                            <p className="text-sm font-bold text-slate-900">Fyura English</p>
                            <p className="text-[11px] text-slate-500">
                                CEFR A2 → B2 Workspace
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsSidebarOpen(false)}
                            aria-label="Tutup menu navigasi"
                            className="cursor-pointer rounded-xl p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                        >
                            <PanelLeftClose className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Navigasi Utama */}
                    <nav className="space-y-1.5">
                        <Link
                            href="/"
                            onClick={() => setIsSidebarOpen(false)}
                            className={cn(
                                "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[13px] font-bold transition-colors",
                                pathname === "/"
                                    ? "bg-indigo-50 text-indigo-950"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            )}
                        >
                            <LayoutDashboard className="h-4 w-4 text-sky-600" />
                            <span>Command Center</span>
                        </Link>

                        <Link
                            href="/time-matrix"
                            onClick={() => setIsSidebarOpen(false)}
                            className={cn(
                                "flex items-center justify-between rounded-2xl px-3 py-2.5 text-[13px] font-bold transition-colors",
                                pathname === "/time-matrix"
                                    ? "bg-indigo-50 text-indigo-950"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            )}
                        >
                            <span className="flex items-center gap-3">
                                <Compass className="h-4 w-4 text-indigo-600" />
                                <span>Waktu & Kata Kerja</span>
                            </span>
                            <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-bold text-indigo-700">
                                Panduan
                            </span>
                        </Link>

                        <Link
                            href="/practice"
                            onClick={() => setIsSidebarOpen(false)}
                            className={cn(
                                "flex items-center justify-between rounded-2xl px-3 py-2.5 text-[13px] font-bold transition-colors",
                                pathname === "/practice"
                                    ? "bg-amber-50 text-amber-950"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            )}
                        >
                            <span className="flex items-center gap-3">
                                <Swords className="h-4 w-4 text-amber-600" />
                                <span>Practice Arena</span>
                            </span>
                            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                                Scenarios
                            </span>
                        </Link>
                    </nav>

                    {/* Grup Collapsible: Thematic & Cross-Level Labs */}
                    <div className="space-y-1 border-t border-slate-100 pt-3">
                        <button
                            type="button"
                            onClick={() => toggleGroup("labs")}
                            className="flex w-full cursor-pointer items-center justify-between rounded-xl px-2 py-1.5 text-[11px] font-bold tracking-wider text-slate-400 uppercase hover:bg-slate-50"
                        >
                            <span>Thematic & Kamus Besar</span>
                            <ChevronDown
                                className={cn(
                                    "h-3.5 w-3.5 transition-transform",
                                    openGroups.labs && "rotate-180"
                                )}
                            />
                        </button>

                        {openGroups.labs && (
                            <div className="space-y-1 pt-1">
                                <Link
                                    href="/pragmatics"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={cn(
                                        "flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold transition-colors",
                                        pathname === "/pragmatics"
                                            ? "bg-rose-50 text-rose-900"
                                            : "text-slate-600 hover:bg-slate-50"
                                    )}
                                >
                                    <MessageCircleHeart className="h-4 w-4 text-rose-500" />
                                    <span>Conversational Pragmatics</span>
                                </Link>

                                <Link
                                    href="/lexicon"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={cn(
                                        "flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold transition-colors",
                                        pathname === "/lexicon"
                                            ? "bg-violet-50 text-violet-900"
                                            : "text-slate-600 hover:bg-slate-50"
                                    )}
                                >
                                    <BookMarked className="h-4 w-4 text-violet-500" />
                                    <span>Thematic Vocabularies</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Grup Collapsible: CEFR Curriculum */}
                    <div className="space-y-1 border-t border-slate-100 pt-3">
                        <button
                            type="button"
                            onClick={() => toggleGroup("cefr")}
                            className="flex w-full cursor-pointer items-center justify-between rounded-xl px-2 py-1.5 text-[11px] font-bold tracking-wider text-slate-400 uppercase hover:bg-slate-50"
                        >
                            <span>CEFR Proficiency</span>
                            <ChevronDown
                                className={cn(
                                    "h-3.5 w-3.5 transition-transform",
                                    openGroups.cefr && "rotate-180"
                                )}
                            />
                        </button>

                        {openGroups.cefr && (
                            <div className="space-y-1 pt-1 text-xs">
                                <Link
                                    href="/cefr/beginner"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 font-semibold text-slate-600 hover:bg-slate-50"
                                >
                                    <GraduationCap className="h-4 w-4 text-emerald-600" />
                                    <span>Beginner (CEFR A1–A2)</span>
                                </Link>
                                <Link
                                    href="/cefr/intermediate"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 font-semibold text-slate-600 hover:bg-slate-50"
                                >
                                    <GraduationCap className="h-4 w-4 text-sky-600" />
                                    <span>Intermediate (CEFR B1–B2)</span>
                                </Link>
                                <Link
                                    href="/cefr/proficient"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 font-semibold text-slate-600 hover:bg-slate-50"
                                >
                                    <GraduationCap className="h-4 w-4 text-purple-600" />
                                    <span>Proficient (CEFR C1–C2)</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}