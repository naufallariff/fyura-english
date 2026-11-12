// src/app/(workspace)/layout.tsx
import { Suspense } from "react";
import { FloatingSidebar } from "@/components/layout/FloatingSidebar";
import { TopCommandBar } from "@/components/layout/TopCommandBar";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-canvas">
      {/* Sidebar Panel Mentok Kiri Full-Height */}
      <div className="sticky top-0 hidden h-screen shrink-0 lg:block">
        <Suspense
          fallback={
            <aside className="h-full w-72 border-r border-white/80 bg-surface/90" />
          }
        >
          <FloatingSidebar />
        </Suspense>
      </div>

      {/* Main Content Area Mengisi Penuh Sisa Lebar Layar */}
      <div className="flex min-w-0 flex-1 flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
        <TopCommandBar />
        <main className="w-full flex-1">{children}</main>
      </div>
    </div>
  );
}