"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SectionProgress {
    completedAt: string;
    quizScore?: number;
    personalNote?: string;
}

interface LearningState {
    completedSections: Record<string, SectionProgress>;
    lastVisitedPath: string;
    streakDays: number;
    lastActiveDate: string | null;
    markSectionComplete: (sectionId: string, score?: number) => void;
    savePersonalNote: (sectionId: string, note: string) => void;
    setLastVisitedPath: (path: string) => void;
    exportProgressJson: () => string;
    importProgressJson: (rawJson: string) => boolean;
}

export const useLearningStore = create<LearningState>()(
    persist(
        (set, get) => ({
            completedSections: {},
            lastVisitedPath: "/learn/part-of-speech/bab-01-nouns",
            streakDays: 1,
            lastActiveDate: null,

            markSectionComplete: (sectionId, score) => {
                const today = new Date().toISOString().slice(0, 10);
                const prevDate = get().lastActiveDate;
                const nextStreak =
                    prevDate === today ? get().streakDays : get().streakDays + 1;

                set((state) => ({
                    completedSections: {
                        ...state.completedSections,
                        [sectionId]: {
                            ...state.completedSections[sectionId],
                            completedAt: new Date().toISOString(),
                            ...(score !== undefined ? { quizScore: score } : {}),
                        },
                    },
                    streakDays: nextStreak,
                    lastActiveDate: today,
                }));
            },

            savePersonalNote: (sectionId, note) =>
                set((state) => ({
                    completedSections: {
                        ...state.completedSections,
                        [sectionId]: {
                            completedAt:
                                state.completedSections[sectionId]?.completedAt ??
                                new Date().toISOString(),
                            ...state.completedSections[sectionId],
                            personalNote: note,
                        },
                    },
                })),

            setLastVisitedPath: (path) => set({ lastVisitedPath: path }),

            exportProgressJson: () => {
                const { completedSections, streakDays, lastVisitedPath } = get();
                return JSON.stringify(
                    {
                        exportedAt: new Date().toISOString(),
                        app: "fyura-english",
                        data: { completedSections, streakDays, lastVisitedPath },
                    },
                    null,
                    2
                );
            },

            importProgressJson: (rawJson) => {
                try {
                    const parsed = JSON.parse(rawJson) as {
                        app?: string;
                        data?: {
                            completedSections?: Record<string, SectionProgress>;
                            streakDays?: number;
                            lastVisitedPath?: string;
                        };
                    };
                    if (parsed.app !== "fyura-english" || !parsed.data) return false;
                    set({
                        completedSections: parsed.data.completedSections ?? {},
                        streakDays: parsed.data.streakDays ?? 1,
                        lastVisitedPath:
                            parsed.data.lastVisitedPath ??
                            "/learn/part-of-speech/bab-01-nouns",
                    });
                    return true;
                } catch {
                    return false;
                }
            },
        }),
        {
            name: "fyura-english-progress-v1",
        }
    )
);