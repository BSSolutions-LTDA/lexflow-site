"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Settings } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProfile } from "@/hooks/use-profile";

export default function SettingsPage() {
  const { profile, updateProfile } = useProfile();

  // Handlers para mudanças no perfil
  const handleLevelChange = (newLevel: string) => {
    updateProfile({ level: newLevel });
    console.log("Level changed to:", newLevel);
  };

  const handleGoalChange = (newGoal: string) => {
    updateProfile({ goal: newGoal });
    console.log("Goal changed to:", newGoal);
  };

  const handleLanguageChange = (newLanguage: string) => {
    updateProfile({ language: newLanguage });
    console.log("Language changed to:", newLanguage);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Configurações</h1>

      <Card className="shadow-sm bg-white">
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
                <Select
                  value={profile.language}
                  onValueChange={handleLanguageChange}
                >
                  <SelectTrigger
                    id="language-select"
                    className="w-full mt-1 bg-white"
                  >
                    <SelectValue placeholder="Selecione o idioma" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Inglês">Inglês</SelectItem>
                    <SelectItem value="Espanhol">Espanhol</SelectItem>
                    <SelectItem value="Francês">Francês</SelectItem>
                    <SelectItem value="Alemão">Alemão</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="level-select" className="text-sm font-medium">
                  Seu Nível
                </Label>
                <Select value={profile.level} onValueChange={handleLevelChange}>
                  <SelectTrigger id="level-select" className="w-full mt-1">
                    <SelectValue placeholder="Selecione seu nível" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Iniciante">Iniciante</SelectItem>
                    <SelectItem value="Intermediário">Intermediário</SelectItem>
                    <SelectItem value="Avançado">Avançado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="goal-select" className="text-sm font-medium">
                  Seu Objetivo
                </Label>
                <Select value={profile.goal} onValueChange={handleGoalChange}>
                  <SelectTrigger id="goal-select" className="w-full mt-1">
                    <SelectValue placeholder="Selecione seu objetivo" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Viagem">Viagem</SelectItem>
                    <SelectItem value="Trabalho">Trabalho</SelectItem>
                    <SelectItem value="Conversação">Conversação</SelectItem>
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
                  <SelectTrigger id="platform-select" className="w-full mt-1">
                    <SelectValue placeholder="Selecione a plataforma" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="telegram">📱 Telegram</SelectItem>
                    <SelectItem value="whatsapp">📞 WhatsApp</SelectItem>
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
                  <SelectTrigger id="frequency-select" className="w-full mt-1">
                    <SelectValue placeholder="Selecione a frequência" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="daily">Diariamente</SelectItem>
                    <SelectItem value="weekdays">Apenas dias úteis</SelectItem>
                    <SelectItem value="custom">Personalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="words-per-day" className="text-sm font-medium">
                  Palavras por dia
                </Label>
                <Select defaultValue="20">
                  <SelectTrigger id="words-per-day" className="w-full mt-1">
                    <SelectValue placeholder="Quantidade de palavras" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="10">10 palavras</SelectItem>
                    <SelectItem value="20">20 palavras</SelectItem>
                    <SelectItem value="30">30 palavras</SelectItem>
                    <SelectItem value="50">50 palavras</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-lg font-medium mb-3">
              Configurações Avançadas
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Modo Noturno</Label>
                  <p className="text-sm text-gray-500">
                    Alterne entre tema claro e escuro
                  </p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input
                    type="checkbox"
                    id="theme-toggle"
                    className="opacity-0 absolute block w-6 h-6 rounded-full appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor="theme-toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Sons de Notificação</Label>
                  <p className="text-sm text-gray-500">
                    Ativar sons para notificações do sistema
                  </p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input
                    type="checkbox"
                    id="sound-toggle"
                    className="opacity-0 absolute block w-6 h-6 rounded-full appearance-none cursor-pointer"
                    defaultChecked
                  />
                  <label
                    htmlFor="sound-toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </div>

              <div>
                <Label className="font-medium">Exportar Dados</Label>
                <p className="text-sm text-gray-500 mb-2">
                  Baixe seus dados de aprendizado
                </p>
                <Button variant="outline" size="sm">
                  Exportar Histórico
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2 border-t pt-4">
          <Button variant="outline">Restaurar Padrões</Button>
          <Button>Salvar Configurações</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
