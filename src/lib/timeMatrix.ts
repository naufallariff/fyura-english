import fs from "node:fs";
import path from "node:path";
import {
    TimeMatrixBlueprintSchema,
    type TimeMatrixBlueprint,
} from "@/schemas/timeMatrix";

export function getTimeMatrixBlueprint(): TimeMatrixBlueprint {
    const filePath = path.join(process.cwd(), "content", "time-verb-matrix.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsedJson: unknown = JSON.parse(raw);
    return TimeMatrixBlueprintSchema.parse(parsedJson);
}