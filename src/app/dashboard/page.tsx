"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  CalendarDays,
  Book,
  Trophy,
  Clock,
  MessageSquare,
} from "lucide-react";
import { useProfile } from "@/hooks/use-profile";

export default function DashboardPage() {
  const { profile } = useProfile();
  const progress = 65; // Exemplo de progresso fixo, poderia vir de uma API

  // Helper para ícone de plataforma
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
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Progress Card */}
        <Card className="col-span-1 md:col-span-3 shadow-sm bg-white">
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
              <span className="ml-2 text-sm text-purple-600">palavras</span>
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
              <span className="ml-2 text-sm text-amber-600">pontos</span>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Review Card */}
        <Card className="col-span-1 md:col-span-3 shadow-sm hover:shadow transition-shadow bg-white">
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
                <p className="text-sm font-medium text-blue-800">Hoje, 18:00</p>
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
    </div>
  );
}
