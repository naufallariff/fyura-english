import type { Metadata } from "next";
import { THEMATIC_VOCABULARIES_LEDGER } from "@/data/thematicVocabulariesLedger";
import {
    LedgerDictionaryWorkspace,
    type UniversalLedgerSection,
} from "@/components/dictionary/LedgerDictionaryWorkspace";

export const metadata: Metadata = {
    title: "Thematic Vocabularies & Irregular Verbs | Fyura English",
    description:
        "Kamus besar kosakata tematik bahasa Inggris: bilangan biasa, bilangan bertingkat, waktu dan cara membaca jam, warna, serta daftar kata kerja tidak beraturan lengkap.",
};

export default function LexiconPage() {
    const sections: UniversalLedgerSection[] = THEMATIC_VOCABULARIES_LEDGER.map(
        (category) => ({
            id: category.id,
            title: category.title,
            subtitle: category.subtitle,
            howToUse: category.howToUse,
            psychologyOverview: category.psychologyWhy,
            tipsAndTricks: category.tipsAndTricks,
            rows: category.items.map((item) => ({
                id: item.id,
                primary: item.term,
                badge: item.secondary,
                indonesian: item.indonesian,
                usageNote: item.usageNote,
                psychologyWhy: item.psychologyWhy,
            })),
        })
    );

    return (
        <LedgerDictionaryWorkspace
            pageTitle="Thematic Vocabularies & Irregular Verbs Ledger"
            pageBadge="Kamus Besar Tematik"
            pageDescription="Referensi lengkap kosakata tematik sehari-hari—mulai dari sistem angka, cara membaca jam, pembagian waktu, warna, hingga kamus kata kerja tidak beraturan beserta logika penggunaannya."
            sections={sections}
        />
    );
}