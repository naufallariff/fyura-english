// src/app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas">
      <div className="rounded-3xl border border-white/90 bg-white/80 px-6 py-4 text-sm font-semibold text-slate-600 shadow-(--shadow-soft-card)">
        Memuat Fyura English Workspace...
      </div>
    </div>
  );
}