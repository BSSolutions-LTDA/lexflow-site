"use client";

import { useAuth } from "@/hooks/use-auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();

  console.log('🔍 Dashboard Layout Wrapper:', { isAuthenticated, loading });

  // Enquanto carrega, exibe um spinner ou nada
  if (loading) {
    console.log('⏳ Mostrando loading...');
    return <div style={{padding: '20px', background: 'yellow'}}>Carregando AUTH...</div>;
  }

  // Se não estiver autenticado, redireciona para login
  if (!isAuthenticated) {
    console.log('🚫 Não autenticado, redirecionando...');
    redirect("/login");
  }

  console.log('✅ Autenticado, renderizando DashboardLayout...');

  // Renderiza o layout do dashboard com o conteúdo aninhado
  return (
    <DashboardLayout>
      <Suspense fallback={<div style={{padding: '20px', background: 'orange'}}>Carregando conteúdo...</div>}>
        {children}
      </Suspense>
    </DashboardLayout>
  );
}
