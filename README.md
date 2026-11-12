# 🧠 Fyura English — Neuro-Cognitive Language Workspace

**Fyura English** adalah *interactive learning & conditional practice workspace* untuk menguasai bahasa Inggris bukan lewat hafalan rumus yang kaku, melainkan melalui **intuisi psikologis, mental model neurosains, dan simulasi situasi kehidupan nyata**.

## ✨ Keunggulan Utama

- **Hybrid Dual-Axis Curriculum:** Materi disusun dalam 4 tingkatan rasa bahasa (*Foundation → Fluidity → Precision → Native Instinct*) sekaligus akses cepat lintas tema (*Real-World Labs* & *Grammar Matrix*).
- **Interactive X-Ray Sentences:** Bedah struktur kalimat kata demi kata untuk memahami nuansa emosi, penekanan, dan jebakan penutur bahasa Indonesia.
- **Conditional Scenario Quiz:** Latihan berbasis konteks sosial nyata (lokasi, lawan bicara, tingkat formalitas) dengan *deep neuro-feedback* instan.
- **Zero-Database Static Engine:** Seluruh kurikulum disimpan dalam file `.json` tervalidasi **Zod**, dikompilasi statis oleh **Next.js App Router** untuk kecepatan maksimal di Vercel, dengan progres belajar tersimpan di `localStorage` (+ fitur *Export/Import JSON Backup*).

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router) & React
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS v4 (`@theme` semantic tokens)
- **Validation & State:** Zod + Zustand (`localStorage` persistence)
- **Motion & Icons:** Motion + Lucide React

## 🚀 Menjalankan Secara Lokal

```bash
# Install dependencies
pnpm install

# Jalankan server development
pnpm dev

# Jalankan pengecekan kualitas kode sebelum commit
pnpm lint && npx tsc --noEmit && pnpm build

```

## 🌿 Alur Kerja Git Branch

* `main` — Production branch (terhubung ke domain utama Vercel).
* `develop` — Staging / integration branch untuk preview fitur & konten.
* `feat/*` — Pengembangan fitur UI & komponen interaktif.
* `content/*` — Penambahan atau pembaruan materi JSON & kuis.