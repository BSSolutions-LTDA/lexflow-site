"use client";

import { useAuth } from "@/hooks/use-auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();

  // Enquanto carrega, exibe um spinner ou nada
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Se não estiver autenticado, redireciona para login
  if (!isAuthenticated) {
    redirect("/login");
  }

  // Renderiza o layout do dashboard com o conteúdo aninhado
  return (
    <DashboardLayout>
      <Suspense fallback={<div>Carregando conteúdo...</div>}>
        {children}
      </Suspense>
    </DashboardLayout>
  );
}
