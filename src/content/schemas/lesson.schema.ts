// src/content/schemas/lesson.schema.ts
import { z } from "zod";

export const CefrTierSchema = z.enum(["beginner", "intermediate", "proficient"]);

export const ModuleCategorySchema = z.enum([
    "part-of-speech",
    "grammar",
    "conversations",
    "vocabulary",
]);

export const FormulaPatternSchema = z.object({
    type: z.enum(["positive", "negative", "question"]),
    label: z.string().min(1),
    formula: z.string().min(1),
    example: z.string().min(1),
    translation: z.string().min(1),
});

export const XRayTokenSchema = z.object({
    word: z.string().min(1),
    role: z.string().min(1),
    nuance: z.string().min(1),
    colorTag: z.enum(["subject", "verb", "nuance", "hack"]),
});

export const ConditionalExampleSchema = z.object({
    conditionLabel: z.string().min(1),
    register: z.enum(["Daily Life", "Workplace", "Academic", "Casual"]),
    sentence: z.string().min(1),
    indonesianMeaning: z.string().min(1),
    contextNote: z.string().min(1),
    xrayTokens: z.array(XRayTokenSchema).min(1),
});

export const SpecialExceptionSchema = z.object({
    title: z.string().min(1),
    ruleDetail: z.string().min(1),
    wrongExample: z.string().min(1),
    correctExample: z.string().min(1),
});

export const LessonTopicSchema = z.object({
    id: z.string().min(1),
    title: z.string().min(1), // Standar Internasional (English Linguistic Naming)
    subtitle: z.string().min(1), // Standar Internasional
    // 1. Penjelasan Mudah & Mental Model
    explanation: z.object({
        summary: z.string().min(1),
        mentalModel: z.string().min(1),
    }),
    // 2. Formula (+, -, ?)
    formulas: z.array(FormulaPatternSchema).min(1),
    // 3. Kenapa & Alasannya
    rationale: z.object({
        coreLogic: z.string().min(1),
        nativePerspective: z.string().min(1),
    }),
    // 4. Contoh di Banyak Kondisi + X-Ray
    conditionalExamples: z.array(ConditionalExampleSchema).min(1),
    // 5. Kondisi Spesial & Pengecualian
    specialExceptions: z.array(SpecialExceptionSchema).min(1),
    // 6. Tips & Tricks
    tipsAndTricks: z.array(z.string().min(1)).min(1),
});

export const PracticeQuestionSchema = z.object({
    id: z.string().min(1),
    topicId: z.string().min(1),
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
    tier: CefrTierSchema,
    category: ModuleCategorySchema,
    order: z.number().int().positive(),
    title: z.string().min(1), // e.g., "Nouns: Countability, Mass Perception & Determiners"
    subtitle: z.string().min(1), // e.g., "CEFR A1–A2 • Core Foundations of Nominal Structures"
    estimatedMinutes: z.number().int().positive(),
    topics: z.array(LessonTopicSchema).min(1),
    practiceQuiz: z.array(PracticeQuestionSchema).min(1),
});

export type CefrTier = z.infer<typeof CefrTierSchema>;
export type ModuleCategory = z.infer<typeof ModuleCategorySchema>;
export type LessonModule = z.infer<typeof LessonModuleSchema>;
export type LessonTopic = z.infer<typeof LessonTopicSchema>;
export type PracticeQuestion = z.infer<typeof PracticeQuestionSchema>;