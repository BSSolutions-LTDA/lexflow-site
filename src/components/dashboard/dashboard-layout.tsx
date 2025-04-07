"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Book,
  Trophy,
  MessageSquare,
  Settings,
  LogOut,
  User,
  BarChart3,
  Clock,
} from "lucide-react";

// Simulated data types
interface UserProfile {
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

interface ChatMessage {
  id: number;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  platform?: "telegram" | "whatsapp" | "discord" | "web";
}

interface DashboardLayoutProps {
  onLogout: () => void;
  children: React.ReactNode;
}

// --- Simulated Data ---
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

const simulatedChatHistory: ChatMessage[] = [
  {
    id: 1,
    sender: "bot",
    text: "Olá! Hora da sua prática diária 🚀",
    timestamp: "10:00",
    platform: "telegram",
  },
  {
    id: 2,
    sender: "bot",
    text: 'Como se diz "reunião" em inglês?',
    timestamp: "10:01",
    platform: "telegram",
  },
  {
    id: 3,
    sender: "user",
    text: "Meeting",
    timestamp: "10:02",
    platform: "telegram",
  },
  {
    id: 4,
    sender: "bot",
    text: "✅ Correto! +10 pontos",
    timestamp: "10:02",
    platform: "telegram",
  },
  {
    id: 5,
    sender: "bot",
    text: "Você está em uma sequência de 3 dias!",
    timestamp: "10:02",
    platform: "telegram",
  },
  {
    id: 6,
    sender: "bot",
    text: 'Qual o passado de "go"?',
    timestamp: "10:05",
    platform: "telegram",
  },
  {
    id: 7,
    sender: "user",
    text: "Went",
    timestamp: "10:06",
    platform: "telegram",
  },
  {
    id: 8,
    sender: "bot",
    text: "👍 Exato! +10 pontos",
    timestamp: "10:06",
    platform: "telegram",
  },
];

const simulatedProgress = 65;

export function DashboardLayout({ onLogout }: DashboardLayoutProps) {
  const [profile, setProfile] = useState<UserProfile>(simulatedProfile);
  const [chatHistory] = useState<ChatMessage[]>(simulatedChatHistory);
  const [progress] = useState<number>(simulatedProgress);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Handlers for profile changes
  const handleLevelChange = (newLevel: string) => {
    setProfile((prev) => ({ ...prev, level: newLevel }));
    console.log("Level changed to:", newLevel);
  };

  const handleGoalChange = (newGoal: string) => {
    setProfile((prev) => ({ ...prev, goal: newGoal }));
    console.log("Goal changed to:", newGoal);
  };

  // Get platform icon
  const getPlatformIcon = (platform?: string) => {
    switch (platform) {
      case "telegram":
        return "📱";
      case "whatsapp":
        return "📞";
      case "discord":
        return "💬";
      case "web":
        return "🌐";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header with modern gradient */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <Book className="h-8 w-8" />
          <h1 className="text-2xl font-bold">LexiFlow</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center">
            <Badge
              variant="outline"
              className="bg-blue-500/20 text-white border-blue-300 mr-2"
            >
              <Trophy className="h-4 w-4 mr-1" /> {profile.streak} dias
            </Badge>
            <Badge
              variant="outline"
              className="bg-blue-500/20 text-white border-blue-300"
            >
              {profile.totalPoints} pts
            </Badge>
          </div>
          <Avatar className="h-10 w-10 border-2 border-white/50">
            <AvatarImage src={profile.avatarUrl} alt={profile.name} />
            <AvatarFallback className="bg-indigo-800 text-white">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium">
            Olá, {profile.name.split(" ")[0]}!
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={onLogout}
            className="bg-transparent hover:bg-white/20 text-white border-white/30 hover:border-white"
          >
            <LogOut className="h-4 w-4 mr-1" /> Sair
          </Button>
        </div>
      </header>

      {/* Main Content with Tabs */}
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Navigation */}
          <div className="hidden md:block col-span-2 space-y-2">
            <Button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("dashboard")}
            >
              <BarChart3 className="h-5 w-5 mr-2" /> Dashboard
            </Button>
            <Button
              variant={activeTab === "chat" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("chat")}
            >
              <MessageSquare className="h-5 w-5 mr-2" /> Histórico
            </Button>
            <Button
              variant={activeTab === "profile" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("profile")}
            >
              <User className="h-5 w-5 mr-2" /> Perfil
            </Button>
            <Button
              variant={activeTab === "settings" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="h-5 w-5 mr-2" /> Configurações
            </Button>
          </div>

          {/* Mobile Navigation Tabs */}
          <div className="col-span-12 md:hidden mb-4">
            <Tabs
              defaultValue="dashboard"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="w-full grid grid-cols-4">
                <TabsTrigger value="dashboard">
                  <BarChart3 className="h-5 w-5 md:mr-2" />
                  <span className="hidden sm:inline">Dashboard</span>
                </TabsTrigger>
                <TabsTrigger value="chat">
                  <MessageSquare className="h-5 w-5 md:mr-2" />
                  <span className="hidden sm:inline">Histórico</span>
                </TabsTrigger>
                <TabsTrigger value="profile">
                  <User className="h-5 w-5 md:mr-2" />
                  <span className="hidden sm:inline">Perfil</span>
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings className="h-5 w-5 md:mr-2" />
                  <span className="hidden sm:inline">Config</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 md:col-span-10">
            {activeTab === "dashboard" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Progress Card */}
                <Card className="col-span-1 md:col-span-3 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                      Seu Progresso em {profile.language}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Nível: {profile.level}</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-3 bg-gray-100" />
                  </CardContent>
                </Card>

                {/* Stats Cards */}
                <Card className="col-span-1 shadow-sm hover:shadow transition-shadow bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-blue-700">
                      Sequência de dias
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center">
                      <CalendarDays className="h-6 w-6 mr-2 text-blue-600" />
                      <span className="text-3xl font-bold text-blue-700">
                        {profile.streak}
                      </span>
                      <span className="ml-2 text-sm text-blue-600">dias</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-1 shadow-sm hover:shadow transition-shadow bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-purple-700">
                      Palavras aprendidas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center">
                      <Book className="h-6 w-6 mr-2 text-purple-600" />
                      <span className="text-3xl font-bold text-purple-700">
                        {profile.wordsLearned}
                      </span>
                      <span className="ml-2 text-sm text-purple-600">
                        palavras
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-1 shadow-sm hover:shadow transition-shadow bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-amber-700">
                      Pontuação total
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center">
                      <Trophy className="h-6 w-6 mr-2 text-amber-600" />
                      <span className="text-3xl font-bold text-amber-700">
                        {profile.totalPoints}
                      </span>
                      <span className="ml-2 text-sm text-amber-600">
                        pontos
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Review Card */}
                <Card className="col-span-1 md:col-span-3 shadow-sm hover:shadow transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      Próximas Revisões
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center">
                        <div className="bg-blue-600 text-white p-2 rounded-full mr-3">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Revisão Programada</h4>
                          <p className="text-sm text-gray-600">
                            20 palavras para revisar
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-blue-800">
                          Hoje, 18:00
                        </p>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 border-blue-200 text-blue-800"
                        >
                          {getPlatformIcon("telegram")} Telegram
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "chat" && (
              <Card className="shadow-sm h-[calc(100vh-12rem)]">
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
                    Histórico de Conversas
                  </CardTitle>
                  <CardDescription>
                    Suas interações com o LexiFlow Bot
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 overflow-hidden p-0">
                  <ScrollArea className="h-[calc(100vh-16rem)] w-full">
                    <div className="space-y-3 p-4">
                      {chatHistory.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${
                            msg.sender === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`relative p-3 rounded-lg max-w-[75%] ${
                              msg.sender === "user"
                                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-none"
                                : "bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm"
                            }`}
                          >
                            {msg.platform && (
                              <span className="absolute -top-5 left-0 text-xs text-gray-500">
                                {getPlatformIcon(msg.platform)} {msg.platform}
                              </span>
                            )}
                            <p className="text-sm">{msg.text}</p>
                            <p
                              className={`text-xs mt-1 ${
                                msg.sender === "user"
                                  ? "text-blue-100"
                                  : "text-gray-400"
                              } text-right`}
                            >
                              {msg.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter className="border-t p-3 bg-gray-50">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex-1">
                      <Select defaultValue="telegram">
                        <SelectTrigger className="w-full max-w-[180px]">
                          <SelectValue placeholder="Plataforma" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="telegram">📱 Telegram</SelectItem>
                          <SelectItem value="whatsapp">📞 WhatsApp</SelectItem>
                          <SelectItem value="discord">💬 Discord</SelectItem>
                          <SelectItem value="web">🌐 Web</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1 text-center text-sm text-gray-500">
                      7 dias de histórico disponível
                    </div>
                    <div className="flex-1 text-right">
                      <Button size="sm" variant="outline">
                        Exportar
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            )}

            {/* Other Tabs Would Be Implemented Here */}
            {activeTab === "profile" && (
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-blue-600" />
                    Perfil do Usuário
                  </CardTitle>
                  <CardDescription>
                    Gerencie suas informações pessoais
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
                    <Avatar className="h-20 w-20 border-2 border-blue-200">
                      <AvatarImage src={profile.avatarUrl} alt={profile.name} />
                      <AvatarFallback className="bg-indigo-800 text-white text-xl">
                        {profile.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-medium">{profile.name}</h3>
                      <p className="text-gray-500">{profile.email}</p>
                      <div className="mt-2 flex gap-2 justify-center md:justify-start">
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-800"
                        >
                          {profile.language}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-purple-100 text-purple-800"
                        >
                          {profile.level}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        defaultValue={profile.name}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        defaultValue={profile.email}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-end gap-2 border-t pt-4">
                  <Button variant="outline">Cancelar</Button>
                  <Button>Salvar Alterações</Button>
                </CardFooter>
              </Card>
            )}

            {activeTab === "settings" && (
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-blue-600" />
                    Configurações de Aprendizado
                  </CardTitle>
                  <CardDescription>
                    Personalize sua experiência de aprendizado
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label
                          htmlFor="language-select"
                          className="text-sm font-medium"
                        >
                          Idioma
                        </Label>
                        <Select defaultValue={profile.language}>
                          <SelectTrigger
                            id="language-select"
                            className="w-full mt-1"
                          >
                            <SelectValue placeholder="Selecione o idioma" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Inglês">Inglês</SelectItem>
                            <SelectItem value="Espanhol">Espanhol</SelectItem>
                            <SelectItem value="Francês">Francês</SelectItem>
                            <SelectItem value="Alemão">Alemão</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label
                          htmlFor="level-select"
                          className="text-sm font-medium"
                        >
                          Seu Nível
                        </Label>
                        <Select
                          value={profile.level}
                          onValueChange={handleLevelChange}
                        >
                          <SelectTrigger
                            id="level-select"
                            className="w-full mt-1"
                          >
                            <SelectValue placeholder="Selecione seu nível" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Iniciante">Iniciante</SelectItem>
                            <SelectItem value="Intermediário">
                              Intermediário
                            </SelectItem>
                            <SelectItem value="Avançado">Avançado</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label
                          htmlFor="goal-select"
                          className="text-sm font-medium"
                        >
                          Seu Objetivo
                        </Label>
                        <Select
                          value={profile.goal}
                          onValueChange={handleGoalChange}
                        >
                          <SelectTrigger
                            id="goal-select"
                            className="w-full mt-1"
                          >
                            <SelectValue placeholder="Selecione seu objetivo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Viagem">Viagem</SelectItem>
                            <SelectItem value="Trabalho">Trabalho</SelectItem>
                            <SelectItem value="Conversação">
                              Conversação
                            </SelectItem>
                            <SelectItem value="Cultura/Hobbies">
                              Cultura/Hobbies
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label
                          htmlFor="platform-select"
                          className="text-sm font-medium"
                        >
                          Plataforma Preferida
                        </Label>
                        <Select defaultValue="telegram">
                          <SelectTrigger
                            id="platform-select"
                            className="w-full mt-1"
                          >
                            <SelectValue placeholder="Selecione a plataforma" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="telegram">
                              📱 Telegram
                            </SelectItem>
                            <SelectItem value="whatsapp">
                              📞 WhatsApp
                            </SelectItem>
                            <SelectItem value="discord">💬 Discord</SelectItem>
                            <SelectItem value="web">🌐 Web</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label
                          htmlFor="frequency-select"
                          className="text-sm font-medium"
                        >
                          Frequência de Lições
                        </Label>
                        <Select defaultValue="daily">
                          <SelectTrigger
                            id="frequency-select"
                            className="w-full mt-1"
                          >
                            <SelectValue placeholder="Selecione a frequência" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Diariamente</SelectItem>
                            <SelectItem value="weekdays">
                              Apenas dias úteis
                            </SelectItem>
                            <SelectItem value="custom">
                              Personalizado
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label
                          htmlFor="words-per-day"
                          className="text-sm font-medium"
                        >
                          Palavras por dia
                        </Label>
                        <Select defaultValue="20">
                          <SelectTrigger
                            id="words-per-day"
                            className="w-full mt-1"
                          >
                            <SelectValue placeholder="Quantidade de palavras" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10">10 palavras</SelectItem>
                            <SelectItem value="20">20 palavras</SelectItem>
                            <SelectItem value="30">30 palavras</SelectItem>
                            <SelectItem value="50">50 palavras</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-end gap-2 border-t pt-4">
                  <Button variant="outline">Restaurar Padrões</Button>
                  <Button>Salvar Configurações</Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
        <div className="container mx-auto">
          LexiFlow &copy; {new Date().getFullYear()} - Aprenda idiomas sem
          esforço
        </div>
      </footer>
    </div>
  );
}
