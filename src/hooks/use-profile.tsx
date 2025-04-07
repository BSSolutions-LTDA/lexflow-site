"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { useRouter } from "next/navigation";

// Tipos
export interface UserProfile {
  name: string;
  email: string;
  language: string;
  level: string;
  goal: string;
  streak: number;
  wordsLearned: number;
  totalPoints: number;
  avatarUrl?: string;
}

// Dados simulados
const simulatedProfile: UserProfile = {
  name: "Usuário Teste",
  email: "teste@lexiflow.app",
  language: "Inglês",
  level: "Intermediário",
  goal: "Trabalho",
  streak: 7,
  wordsLearned: 123,
  totalPoints: 950,
};

// Context para autenticação
type AuthContextType = {
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: true,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulando verificação de autenticação
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // Simulando login
    setLoading(true);
    try {
      // Em produção: chamar API de autenticação
      localStorage.setItem("token", "simulated-token");
      setIsAuthenticated(true);
      router.push("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// Context para perfil do usuário
type ProfileContextType = {
  profile: UserProfile;
  updateProfile: (data: Partial<UserProfile>) => void;
};

const ProfileContext = createContext<ProfileContextType>({
  profile: simulatedProfile,
  updateProfile: () => {},
});

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(simulatedProfile);

  const updateProfile = (data: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...data }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
