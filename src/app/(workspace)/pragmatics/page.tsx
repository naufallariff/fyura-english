import type { Metadata } from "next";
import { CONVERSATIONAL_PRAGMATICS_LEDGER } from "@/data/conversationalPragmaticsLedger";
import {
    LedgerDictionaryWorkspace,
    type UniversalLedgerSection,
} from "@/components/dictionary/LedgerDictionaryWorkspace";

export const metadata: Metadata = {
    title: "Conversational Pragmatics & Idioms | Fyura English",
    description:
        "Kamus besar ungkapan percakapan sehari-hari, salam, perpisahan, perkenalan, larangan, dan peribahasa lengkap dengan tata cara, psikologi penutur asli, serta tips penggunaannya.",
};

export default function PragmaticsPage() {
    const sections: UniversalLedgerSection[] =
        CONVERSATIONAL_PRAGMATICS_LEDGER.map((category) => ({
            id: category.id,
            title: category.title,
            subtitle: category.subtitle,
            howToUse: category.etiquetteRules,
            psychologyOverview: category.psychologyOverview,
            tipsAndTricks: category.tipsAndTricks,
            rows: category.entries.map((entry) => ({
                id: entry.id,
                primary: entry.english,
                badge: entry.register,
                indonesian: entry.indonesian,
                usageNote: entry.contextNote,
                psychologyWhy: entry.psychologyWhy,
            })),
        }));

    return (
        <LedgerDictionaryWorkspace
            pageTitle="Conversational Pragmatics, Expressions & Proverbs"
            pageBadge="Kamus Percakapan & Budaya"
            pageDescription="Kumpulan lengkap ungkapan menyapa, berpamitan, memperkenalkan diri, larangan, hingga peribahasa Inggris—dilengkapi tata cara, psikologi penutur asli (why), serta tips and tricks agar tidak terdengar kaku."
            sections={sections}
        />
    );
}