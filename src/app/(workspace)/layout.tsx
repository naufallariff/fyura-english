"use client";

import { Suspense, useState } from "react";
import { FloatingSidebar } from "@/components/layout/FloatingSidebar";
import { TopCommandBar } from "@/components/layout/TopCommandBar";
import { cn } from "@/lib/utils";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default: Sidebar terbuka
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen w-full bg-canvas">
      {/* Sidebar Wrapper: Lebar berubah sesuai state, overflow-hidden agar isinya tidak meluber saat ditutup */}
      <div
        className={cn(
          "sticky top-0 hidden h-screen shrink-0 transition-all duration-300 ease-in-out lg:block overflow-hidden",
          isSidebarOpen ? "w-80" : "w-0"
        )}
      >
        <Suspense
          fallback={
            <aside className="h-full w-80 border-r border-white/80 bg-surface/90" />
          }
        >
          <FloatingSidebar onClose={() => setIsSidebarOpen(false)} />
        </Suspense>
      </div>

      {/* Main Content Area */}
      <div className="flex min-w-0 flex-1 flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
        {/* Kita oper state dan fungsi untuk membuka sidebar ke TopCommandBar */}
        <TopCommandBar
          isSidebarOpen={isSidebarOpen}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />
        <main className="w-full flex-1">{children}</main>
      </div>
    </div>
  );
}