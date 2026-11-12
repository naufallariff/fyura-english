import type { Metadata } from "next";
import { getTimeMatrixBlueprint } from "@/lib/timeMatrix";
import { TimeMatrixWorkspace } from "@/components/matrix/TimeMatrixWorkspace";

export const metadata: Metadata = {
    title: "Panduan Waktu & Kata Kerja | Fyura English",
    description:
        "Memahami pembagian waktu Present, Past, Future, penggunaan To Be, perubahan Verb, serta penerapan kalimat bahasa Inggris sehari-hari.",
};

export default async function TimeMatrixPage() {
    const data = await getTimeMatrixBlueprint();
    return <TimeMatrixWorkspace data={data} />;
}