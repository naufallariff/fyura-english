// src/app/(workspace)/practice/[slug]/page.tsx
import { Suspense } from "react";
import { notFound } from "next/navigation";
import {
    findLessonAcrossCategories,
    getAllLessons,
} from "@/content/loader/curriculum.loader";
import { ConditionalQuizEngine } from "@/components/quiz/ConditionalQuizEngine";

export async function generateStaticParams() {
    const lessons = await getAllLessons();
    return lessons.map((lesson) => ({
        slug: lesson.slug,
    }));
}

async function PracticeLoader({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const lesson = await findLessonAcrossCategories(slug);

    if (!lesson) {
        notFound();
    }

    return (
        <ConditionalQuizEngine
            questions={lesson.practiceQuiz}
            lessonTitle={lesson.title}
        />
    );
}

export default function PracticeArenaPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    return (
        <div className="py-2">
            <Suspense
                fallback={
                    <div className="mx-auto h-96 max-w-3xl animate-pulse rounded-3xl border border-white bg-white/80" />
                }
            >
                <PracticeLoader params={params} />
            </Suspense>
        </div>
    );
}