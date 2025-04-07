"use client";

import React, { ReactNode } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  // Determina qual tab está ativa com base no pathname
  const getActiveTab = () => {
    if (pathname.includes("/dashboard/chat")) return "chat";
    if (pathname.includes("/dashboard/profile")) return "profile";
    if (pathname.includes("/dashboard/settings")) return "settings";
    return "dashboard";
  };

  const activeTab = getActiveTab();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar - apenas para desktop */}
          <div className="hidden md:block col-span-2">
            <Sidebar activeTab={activeTab} />
          </div>

          {/* Conteúdo principal */}
          <div className="col-span-12 md:col-span-10">{children}</div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
