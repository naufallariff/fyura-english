// src/content/loader/curriculum.loader.ts
import fs from "node:fs/promises";
import path from "node:path";
import {
    LessonModuleSchema,
    type LessonModule,
    type ModuleCategory,
} from "@/content/schemas/lesson.schema";

const CONTENT_ROOT = path.join(process.cwd(), "content", "modules");

const CATEGORIES: ModuleCategory[] = [
    "part-of-speech",
    "grammar",
    "conversations",
    "vocabulary",
];

export async function getAllLessons(): Promise<LessonModule[]> {
    "use cache";
    const lessons: LessonModule[] = [];

    for (const category of CATEGORIES) {
        const dir = path.join(CONTENT_ROOT, category);
        try {
            const files = await fs.readdir(dir);
            for (const file of files) {
                if (!file.endsWith(".json")) continue;
                const raw = await fs.readFile(path.join(dir, file), "utf-8");
                if (!raw.trim()) continue;
                const parsed = LessonModuleSchema.parse(JSON.parse(raw));
                lessons.push(parsed);
            }
        } catch {
            continue;
        }
    }

    return lessons.sort((a, b) => a.order - b.order);
}

export async function getLessonBySlug(
    category: string,
    slug: string
): Promise<LessonModule | null> {
    "use cache";
    const filePath = path.join(CONTENT_ROOT, category, `${slug}.json`);
    try {
        const raw = await fs.readFile(filePath, "utf-8");
        if (!raw.trim()) return null;
        return LessonModuleSchema.parse(JSON.parse(raw));
    } catch {
        return null;
    }
}

export async function findLessonAcrossCategories(
    slug: string
): Promise<LessonModule | null> {
    "use cache";
    const all = await getAllLessons();
    return all.find((item) => item.slug === slug) ?? null;
}