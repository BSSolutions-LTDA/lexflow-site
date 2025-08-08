"use client";

import React, { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useProfile } from "@/hooks/use-profile";
import { useAuth } from "@/hooks/use-auth";
import {
  Bell,
  Menu,
  User,
  Home,
  BookOpen,
  MessageSquare,
  Settings,
  LogOut
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { profile } = useProfile();
  const { logout } = useAuth();

  console.log('DashboardLayout renderizado', { pathname, profile });

  // Se não tiver profile ainda, mostrar loading simples
  if (!profile) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f0f0f0'
      }}>
        <div style={{ textAlign: 'center', padding: '20px', background: 'white', borderRadius: '8px' }}>
          <h2>Carregando perfil...</h2>
        </div>
      </div>
    );
  }

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home, current: pathname === '/dashboard', key: 'h' },
    { name: 'Learn', href: '/learn', icon: BookOpen, current: pathname === '/learn', key: 'l' },
    { name: 'Chat', href: '/chat-history', icon: MessageSquare, current: pathname === '/chat-history', key: 'c' },
    { name: 'Profile', href: '/profile', icon: User, current: pathname === '/profile', key: 'p' },
  ];

  // Atalhos de teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Não ativar atalhos se estiver digitando em um input
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        return;
      }

      switch (event.key.toLowerCase()) {
        case 'h':
          router.push('/dashboard');
          break;
        case 'l':
          router.push('/learn');
          break;
        case 'c':
          router.push('/chat-history');
          break;
        case 'p':
          router.push('/profile');
          break;
        case 's':
          if (event.metaKey || event.ctrlKey) {
            event.preventDefault();
            router.push('/settings');
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #faf5ff 100%)' }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo e título */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>L</span>
              </div>
              <div>
                <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', margin: 0 }}>LexiFlow</h1>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Aprenda idiomas</p>
              </div>
            </div>

            {/* Ações do header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Notificações */}
              <button style={{
                position: 'relative',
                padding: '12px',
                borderRadius: '12px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer'
              }}>
                <Bell size={22} color="#4b5563" />
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: 'linear-gradient(45deg, #ef4444, #ec4899)',
                  color: 'white',
                  fontSize: '12px',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '500',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                  3
                </span>
              </button>

              {/* Avatar do usuário */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(249, 250, 251, 0.8)',
                borderRadius: '12px',
                padding: '8px 12px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #dbeafe, #e0e7ff)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid white',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}>
                  <span style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '14px' }}>
                    {profile?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                </div>
                <div style={{ display: window.innerWidth > 640 ? 'block' : 'none' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                    {profile?.name?.split(' ')[0] || 'Usuário'}
                  </p>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Online</p>
                </div>
              </div>

              {/* Menu */}
              <button
                onClick={logout}
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  color: '#4b5563'
                }}
                title="Sair"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main style={{ paddingBottom: '80px' }}>
        <div style={{ padding: '24px 16px' }}>
          {/* DEBUG: Confirmar que o layout está sendo usado */}
          <div style={{
            background: '#dcfce7',
            border: '1px solid #4ade80',
            color: '#166534',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '16px'
          }}>
            <strong>✅ LAYOUT FUNCIONANDO!</strong> Header e Footer devem estar visíveis.
            <br />
            <small>Pathname: {pathname} | User: {profile?.name || 'Carregando...'}</small>
          </div>
          {children}
        </div>
      </main>

      {/* Footer com navegação */}
      <footer style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(229, 231, 235, 0.5)',
        zIndex: 40,
        boxShadow: '0 -1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ padding: '12px 16px' }}>
          {/* Navegação principal */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => router.push(item.href)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: 'none',
                    background: item.current
                      ? 'linear-gradient(to top, #dbeafe, rgba(219, 234, 254, 0.5))'
                      : 'transparent',
                    color: item.current ? '#2563eb' : '#4b5563',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: item.current ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
                  }}
                >
                  <Icon size={22} strokeWidth={item.current ? 2.5 : 2} />
                  <span style={{ fontSize: '12px', fontWeight: '500' }}>{item.name}</span>
                  {item.current && (
                    <div style={{
                      width: '4px',
                      height: '4px',
                      background: '#2563eb',
                      borderRadius: '50%',
                      marginTop: '4px'
                    }}></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Atalhos de teclado */}
          <div style={{
            marginTop: '12px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(243, 244, 246, 0.8)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px'
            }}>
              {navigation.map((item) => (
                <div key={item.key} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  color: '#6b7280'
                }}>
                  <kbd style={{
                    padding: '4px 8px',
                    background: 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #d1d5db'
                  }}>
                    {item.key.toUpperCase()}
                  </kbd>
                  <span style={{ fontWeight: '500' }}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
