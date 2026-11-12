import { z } from "zod";

export const TimeDimensionIdSchema = z.enum([
    "present",
    "past",
    "future",
    "past-future",
]);

export const AspectIdSchema = z.enum([
    "simple",
    "continuous",
    "perfect",
    "perfect-continuous",
]);

export const AspectPhilosophySchema = z.object({
    id: AspectIdSchema,
    code: z.string(),
    title: z.string(),
    badge: z.string(),
    timelineVisual: z.string(),
    description: z.string(),
    focus: z.string(),
    verbSignature: z.string(),
});

export const ToBeRoleCardSchema = z.object({
    id: z.string(),
    badge: z.string(),
    title: z.string(),
    description: z.string(),
    example: z.string(),
    highlights: z.array(z.string()),
});

export const ToBeMatrixRowSchema = z.object({
    aspectId: AspectIdSchema,
    aspectLabel: z.string(),
    aspectSub: z.string(),
    present: z.object({ formula: z.string(), example: z.string() }),
    past: z.object({ formula: z.string(), example: z.string() }),
    future: z.object({ formula: z.string(), example: z.string() }),
    pastFuture: z.object({ formula: z.string(), example: z.string() }),
});

export const AuxiliaryLawSchema = z.object({
    id: z.string(),
    title: z.string(),
    subtitle: z.string(),
    explanation: z.string(),
    formulaDemo: z.string(),
});

export const VerbAnatomyCardSchema = z.object({
    code: z.string(),
    label: z.string(),
    finiteness: z.string(),
    title: z.string(),
    reason: z.string(),
    goldenRule: z.string(),
    pronunciationOrSpelling: z.string(),
});

export const VerbTrapSchema = z.object({
    number: z.string(),
    title: z.string(),
    explanation: z.string(),
    contrastExample: z.string(),
});

export const IrregularVerbItemSchema = z.object({
    v1: z.string(),
    v2: z.string(),
    v3: z.string(),
    ving: z.string(),
    meaning: z.string(),
    pattern: z.enum(["A-B-C", "A-B-B", "I-A-U", "A-A-A", "A-B-A"]),
});

export const TenseScenarioExampleSchema = z.object({
    condition: z.string(),
    pos: z.string(),
    neg: z.string(),
    ask: z.string(),
    note: z.string(),
});

export const TenseCoordinateCardSchema = z.object({
    id: z.string(),
    aspectNumber: z.enum(["01", "02", "03", "04"]),
    name: z.string(),
    time: TimeDimensionIdSchema,
    timeLabel: z.string(),
    aspect: AspectIdSchema,
    aspectLabel: z.string(),
    timelineGeometry: z.string(),
    signalWords: z.array(z.string()),
    reason: z.string(),
    formulas: z.object({
        pos: z.string(),
        neg: z.string(),
        ask: z.string(),
        nominalPos: z.string().optional(),
    }),
    examples: z.array(TenseScenarioExampleSchema).min(1),
});

export const PlotTwistItemSchema = z.object({
    number: z.string(),
    title: z.string(),
    subtitle: z.string(),
    explanation: z.string(),
    wrongExample: z.string().optional(),
    correctExample: z.string(),
    nuanceNote: z.string(),
});

export const CognitiveTrickSchema = z.object({
    number: z.string(),
    title: z.string(),
    tag: z.string(),
    description: z.string(),
    actionableSteps: z.array(z.string()),
    takeaway: z.string(),
});

export const MatrixQuizItemSchema = z.object({
    id: z.string(),
    categoryTag: z.string(),
    situation: z.string(),
    question: z.string(),
    options: z
        .array(
            z.object({
                id: z.string(),
                text: z.string(),
                isCorrect: z.boolean(),
                explanation: z.string(),
            })
        )
        .min(3),
});

export const TimeMatrixBlueprintSchema = z.object({
    meta: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        axisTimeTitle: z.string(),
        axisTimeDesc: z.string(),
        axisAspectTitle: z.string(),
        axisAspectDesc: z.string(),
    }),
    aspects: z.array(AspectPhilosophySchema).length(4),
    toBeSystem: z.object({
        roles: z.array(ToBeRoleCardSchema).length(3),
        auxiliaryLaws: z.array(AuxiliaryLawSchema).min(2),
        matrixRows: z.array(ToBeMatrixRowSchema).length(4),
    }),
    verbAnatomy: z.object({
        forms: z.array(VerbAnatomyCardSchema).length(4),
        traps: z.array(VerbTrapSchema).min(4),
        ablautPatterns: z.array(
            z.object({
                code: z.string(),
                title: z.string(),
                rule: z.string(),
                samples: z.string(),
            })
        ),
        irregularVerbs: z.array(IrregularVerbItemSchema).min(40),
    }),
    tenseCoordinates: z.array(TenseCoordinateCardSchema).length(16),
    plotTwists: z.array(PlotTwistItemSchema).min(6),
    cognitivePsychology: z.array(CognitiveTrickSchema).length(4),
    quiz: z.array(MatrixQuizItemSchema).min(5),
});

export type TimeMatrixBlueprint = z.infer<typeof TimeMatrixBlueprintSchema>;
export type TenseCoordinateCard = z.infer<typeof TenseCoordinateCardSchema>;
export type TimeDimensionId = z.infer<typeof TimeDimensionIdSchema>;
export type AspectId = z.infer<typeof AspectIdSchema>;