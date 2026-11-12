// src/app/(workspace)/learn/[pillar]/[slug]/page.tsx
import { Suspense } from "react";
import Link from "next/link";
import { Zap, Clock, Sparkles } from "lucide-react";
import {
    getAllLessons,
    getLessonBySlug,
} from "@/content/loader/curriculum.loader";
import { GuidedLessonViewer } from "@/components/workspace/GuidedLessonViewer";

export async function generateStaticParams() {
    const lessons = await getAllLessons();
    return lessons.map((lesson) => ({
        pillar: lesson.category,
        slug: lesson.slug,
    }));
}

async function LessonLoader({
    params,
}: {
    params: Promise<{ pillar: string; slug: string }>;
}) {
    const { pillar, slug } = await params;
    const lesson = await getLessonBySlug(pillar, slug);

    if (!lesson) {
        return (
            <div className="rounded-3xl border border-white/95 bg-white/95 p-8 text-center shadow-(--shadow-soft-card) space-y-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-800">
                    <Sparkles className="h-3.5 w-3.5" /> Module Blueprint Scheduled
                </span>
                <h2 className="text-xl font-extrabold text-slate-900">
                    Modul “{slug}” Siap Diisi Konten JSON
                </h2>
                <p className="mx-auto max-w-lg text-sm text-slate-600">
                    Struktur cabang kurikulum sudah terdaftar. Tambahkan file{" "}
                    <code className="rounded bg-surface px-1.5 py-0.5 text-xs font-bold">
                        content/modules/{pillar}/{slug}.json
                    </code>{" "}
                    untuk mengaktifkan modul ini.
                </p>
                <div className="pt-2">
                    <Link
                        href="/learn/part-of-speech/nouns-foundations"
                        className="inline-flex items-center rounded-2xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white"
                    >
                        Kembali ke Modul Aktif (Nouns & Countability) →
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-5 pb-10">
            {/* Lesson Header Card */}
            <div className="rounded-3xl border border-white/95 bg-white/95 p-6 sm:p-8 shadow-(--shadow-soft-card)">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-800 uppercase">
                                {lesson.tier} • {lesson.category}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                                <Clock className="h-3.5 w-3.5" /> {lesson.estimatedMinutes} mins
                            </span>
                        </div>
                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                            {lesson.title}
                        </h1>
                        <p className="max-w-3xl text-sm font-medium text-slate-500">
                            {lesson.subtitle}
                        </p>
                    </div>

                    <Link
                        href={`/practice/${lesson.slug}`}
                        className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-sky-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/20 transition-transform duration-150 active:scale-[0.97]"
                    >
                        <Zap className="h-4 w-4 fill-current" />
                        Practice in Scenario Arena
                    </Link>
                </div>
            </div>

            {/* 6-Stage Structured Lesson Blueprint */}
            <GuidedLessonViewer lesson={lesson} />
        </div>
    );
}

export default function LessonStudyPage({
    params,
}: {
    params: Promise<{ pillar: string; slug: string }>;
}) {
    return (
        <Suspense
            fallback={
                <div className="space-y-5">
                    <div className="h-36 animate-pulse rounded-3xl border border-white bg-white/80" />
                    <div className="h-96 animate-pulse rounded-3xl border border-white bg-white/80" />
                </div>
            }
        >
            <LessonLoader params={params} />
        </Suspense>
    );
}