import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Simulated data types
interface UserProfile {
  name: string;
  email: string;
  language: string; // e.g., 'Inglês'
  level: string; // e.g., 'Intermediário'
  goal: string; // e.g., 'Trabalho'
  avatarUrl?: string; // Optional avatar
}

interface ChatMessage {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

interface DashboardLayoutProps {
  onLogout: () => void; // Callback for logout
}

// --- Simulated Data ---
const simulatedProfile: UserProfile = {
  name: "Usuário Teste",
  email: "teste@lexiflow.app",
  language: "Inglês", // Should map from ID later
  level: "Intermediário", // Should map from ID later
  goal: "Trabalho", // Should map from ID later
};

const simulatedChatHistory: ChatMessage[] = [
  { id: 1, sender: 'bot', text: 'Olá! Hora da sua prática diária 🚀', timestamp: '10:00' },
  { id: 2, sender: 'bot', text: 'Como se diz "reunião" em inglês?', timestamp: '10:01' },
  { id: 3, sender: 'user', text: 'Meeting', timestamp: '10:02' },
  { id: 4, sender: 'bot', text: '✅ Correto! +10 pontos', timestamp: '10:02' },
  { id: 5, sender: 'bot', text: 'Você está em uma sequência de 3 dias!', timestamp: '10:02' },
  { id: 6, sender: 'bot', text: 'Qual o passado de "go"?', timestamp: '10:05' },
  { id: 7, sender: 'user', text: 'Went', timestamp: '10:06' },
  { id: 8, sender: 'bot', text: '👍 Exato! +10 pontos', timestamp: '10:06' },
];

const simulatedProgress = 65; // Example progress percentage
// --- End Simulated Data ---


export function DashboardLayout({ onLogout }: DashboardLayoutProps) {
  const [profile, setProfile] = useState<UserProfile>(simulatedProfile);
  const [chatHistory] = useState<ChatMessage[]>(simulatedChatHistory);
  const [progress] = useState<number>(simulatedProgress);

  // Handlers for profile changes (simulated)
  const handleLevelChange = (newLevel: string) => {
    setProfile(prev => ({ ...prev, level: newLevel }));
    console.log("Simulating level change to:", newLevel);
  };

  const handleGoalChange = (newGoal: string) => {
    setProfile(prev => ({ ...prev, goal: newGoal }));
    console.log("Simulating goal change to:", newGoal);
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-600">LexiFlow</h1>
        <div className="flex items-center gap-4">
           <Avatar>
            <AvatarImage src={profile.avatarUrl} alt={profile.name} />
            <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <span>Olá, {profile.name.split(' ')[0]}!</span>
          <Button variant="outline" size="sm" onClick={onLogout}>Sair</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Progress & Settings */}
        <div className="md:col-span-1 space-y-6">
          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle>Seu Progresso</CardTitle>
              <CardDescription>Idioma: {profile.language}</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="w-full" />
              <p className="text-center mt-2 text-sm text-gray-600">{progress}% completo</p>
              {/* Add more stats here later: words learned, streak, etc. */}
            </CardContent>
          </Card>

          {/* Settings Card */}
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Aprendizado</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="level-select">Seu Nível</Label>
                 <Select value={profile.level} onValueChange={handleLevelChange}>
                  <SelectTrigger id="level-select">
                    <SelectValue placeholder="Selecione seu nível" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Iniciante">Iniciante</SelectItem>
                    <SelectItem value="Intermediário">Intermediário</SelectItem>
                    <SelectItem value="Avançado">Avançado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
               <div>
                <Label htmlFor="goal-select">Seu Objetivo</Label>
                 <Select value={profile.goal} onValueChange={handleGoalChange}>
                  <SelectTrigger id="goal-select">
                    <SelectValue placeholder="Selecione seu objetivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Viagem">Viagem</SelectItem>
                    <SelectItem value="Trabalho">Trabalho</SelectItem>
                    <SelectItem value="Conversação">Conversação</SelectItem>
                    <SelectItem value="Cultura/Hobbies">Cultura/Hobbies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Add time preference later */}
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Chat History */}
        <div className="md:col-span-2">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Histórico de Conversa (Simulado)</CardTitle>
              <CardDescription>Veja suas últimas interações.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0"> {/* Remove padding here */}
              <ScrollArea className="h-[400px] md:h-[calc(100%-4rem)] p-4"> {/* Add padding here */}
                <div className="space-y-4">
                  {chatHistory.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`p-3 rounded-lg max-w-[75%] shadow-sm ${
                          msg.sender === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-200' : 'text-gray-500'} text-right`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
             {/* Optional: Add input for sending messages if simulating interaction */}
             {/* <CardFooter className="border-t pt-4">
               <Input placeholder="Digite sua resposta..." className="flex-1" />
               <Button className="ml-2">Enviar</Button>
             </CardFooter> */}
          </Card>
        </div>
      </main>
    </div>
  );
}