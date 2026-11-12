// src/content/schemas/lesson.schema.ts
import { z } from "zod";

export const CefrTierSchema = z.enum(["beginner", "intermediate", "proficient"]);

export const ModuleCategorySchema = z.enum([
    "part-of-speech",
    "grammar",
    "conversations",
    "vocabulary",
]);

export const BentoLayoutVariantSchema = z.enum([
    "comparative-split",
    "asymmetric-spotlight",
    "trio-staggered",
    "dialogue-storyboard",
]);

export const BentoSpanSchema = z.enum([
    "full",    // 12 cols
    "wide",    // 8 cols
    "medium",  // 7 cols
    "half",    // 6 cols
    "narrow",  // 5 cols
    "third",   // 4 cols
]);

export const FormulaLineSchema = z.object({
    polarity: z.enum(["positive", "negative", "question"]),
    symbol: z.enum(["(+)", "(-)", "(?)"]),
    pattern: z.string().min(1),
});

export const XRayTokenSchema = z.object({
    word: z.string().min(1),
    role: z.string().min(1),
    nuance: z.string().min(1),
    colorTag: z.enum(["subject", "verb", "nuance", "hack"]),
});

export const ConditionTriadSchema = z.object({
    conditionTitle: z.string().min(1),
    register: z.enum(["Daily Life", "Workplace", "Academic", "Travel"]),
    positive: z.string().min(1),
    negative: z.string().min(1),
    question: z.string().min(1),
    nuanceNote: z.string().min(1),
    xrayTokens: z.array(XRayTokenSchema).min(1),
});

export const SpecialExceptionSchema = z.object({
    title: z.string().min(1),
    explanation: z.string().min(1),
    wrongExample: z.string().min(1),
    correctExample: z.string().min(1),
});

export const LessonTopicSchema = z.object({
    id: z.string().min(1),
    badgeNumber: z.number().int().positive(),
    colSpan: BentoSpanSchema.default("half"),
    tags: z.array(z.string()).min(1),
    title: z.string().min(1),
    subtitle: z.string().min(1),
    explanation: z.string().min(1),
    rationale: z.string().min(1),
    formulas: z.array(FormulaLineSchema).min(1),
    conditionalExamples: z.array(ConditionTriadSchema).min(1),
    specialExceptions: z.array(SpecialExceptionSchema).min(1),
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
    layoutVariant: BentoLayoutVariantSchema.default("comparative-split"),
    order: z.number().int().positive(),
    title: z.string().min(1),
    subtitle: z.string().min(1),
    estimatedMinutes: z.number().int().positive(),
    topics: z.array(LessonTopicSchema).min(1),
    practiceQuiz: z.array(PracticeQuestionSchema).min(1),
});

export type CefrTier = z.infer<typeof CefrTierSchema>;
export type ModuleCategory = z.infer<typeof ModuleCategorySchema>;
export type BentoLayoutVariant = z.infer<typeof BentoLayoutVariantSchema>;
export type BentoSpan = z.infer<typeof BentoSpanSchema>;
export type LessonModule = z.infer<typeof LessonModuleSchema>;
export type LessonTopic = z.infer<typeof LessonTopicSchema>;
export type PracticeQuestion = z.infer<typeof PracticeQuestionSchema>;