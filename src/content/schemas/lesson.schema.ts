// src/content/schemas/lesson.schema.ts
import { z } from "zod";

export const FluencyStageSchema = z.enum([
    "foundation", // Beginner
    "fluidity",   // Intermediate
    "precision",  // Professional
    "native",     // Fluent
]);

export const ModulePillarSchema = z.enum([
    "part-of-speech",
    "grammar",
    "conversations",
    "vocabulary",
]);

export const XRayTokenSchema = z.object({
    word: z.string().min(1),
    role: z.string().min(1),
    nuance: z.string().min(1),
    colorTag: z.enum(["subject", "verb", "nuance", "hack"]),
});

export const ConditionalRuleSchema = z.object({
    condition: z.string().min(1),
    pattern: z.string().min(1),
    nativeExample: z.string().min(1),
    indonesianTrap: z.string().min(1),
    psychologicalTip: z.string().min(1),
});

export const LessonSectionSchema = z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    stage: FluencyStageSchema,
    situations: z.array(z.string()).min(1),
    neuroHook: z.object({
        coreFeeling: z.string().min(1),
        mentalImage: z.string().min(1),
    }),
    conditionalRules: z.array(ConditionalRuleSchema).min(1),
    xraySentences: z.array(
        z.object({
            sentence: z.string().min(1),
            contextLabel: z.string().min(1),
            tokens: z.array(XRayTokenSchema).min(1),
        })
    ),
    tipsAndTricks: z.array(z.string()).min(1),
});

export const PracticeQuestionSchema = z.object({
    id: z.string().min(1),
    sectionId: z.string().min(1),
    scenario: z.object({
        setting: z.string().min(1),
        interlocutor: z.string().min(1),
        intent: z.string().min(1),
    }),
    question: z.string().min(1),
    options: z
        .array(
            z.object({
                id: z.string().min(1),
                text: z.string().min(1),
                isCorrect: z.boolean(),
            })
        )
        .min(2),
    deepExplanation: z.object({
        whyCorrect: z.string().min(1),
        whyOthersFail: z.string().min(1),
        realLifeHack: z.string().min(1),
    }),
});

export const LessonModuleSchema = z.object({
    id: z.string().min(1),
    slug: z.string().min(1),
    pillar: ModulePillarSchema,
    chapterNumber: z.number().int().positive(),
    title: z.string().min(1),
    subtitle: z.string().min(1),
    primaryStage: FluencyStageSchema,
    estimatedMinutes: z.number().int().positive(),
    sections: z.array(LessonSectionSchema).min(1),
    practiceQuiz: z.array(PracticeQuestionSchema).min(1),
});

export type FluencyStage = z.infer<typeof FluencyStageSchema>;
export type ModulePillar = z.infer<typeof ModulePillarSchema>;
export type LessonModule = z.infer<typeof LessonModuleSchema>;
export type LessonSection = z.infer<typeof LessonSectionSchema>;
export type PracticeQuestion = z.infer<typeof PracticeQuestionSchema>;