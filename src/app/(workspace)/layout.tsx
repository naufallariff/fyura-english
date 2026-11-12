"use client";

import { Suspense, useState, useEffect } from "react";
import { FloatingSidebar } from "@/components/layout/FloatingSidebar";
import { TopCommandBar } from "@/components/layout/TopCommandBar";
import { cn } from "@/lib/utils";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default awal tertutup (untuk mencegah error hydration di Next.js)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Jika layar laptop/desktop (>= 1024px), buka sidebar otomatis
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsSidebarOpen(window.innerWidth >= 1024);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-canvas">
      {/* Sidebar Wrapper (Lebar diubah ke w-72 agar lebih tipis) */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 h-screen w-72 shrink-0 overflow-hidden transition-all duration-300 ease-in-out lg:sticky lg:top-0 lg:z-auto",
          isSidebarOpen
            ? "translate-x-0 lg:w-72"
            : "-translate-x-full lg:w-0 lg:translate-x-0"
        )}
      >
        <Suspense
          fallback={
            <aside className="h-full w-72 border-r border-white/80 bg-surface/90" />
          }
        >
          <FloatingSidebar onClose={() => setIsSidebarOpen(false)} />
        </Suspense>
      </div>

      {/* Backdrop Hitam (Hanya muncul di HP saat sidebar terbuka) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/25 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex min-w-0 flex-1 flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
        <TopCommandBar
          isSidebarOpen={isSidebarOpen}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />
        <main className="w-full flex-1">{children}</main>
      </div>
    </div>
  );
}