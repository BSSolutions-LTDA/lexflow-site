"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Tipos
interface ChatMessage {
  id: number;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  platform?: "telegram" | "whatsapp" | "discord" | "web";
}

// Dados simulados
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

export default function ChatPage() {
  const [chatHistory] = useState<ChatMessage[]>(simulatedChatHistory);

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
      <h1 className="text-2xl font-bold">Histórico de Conversas</h1>

      <Card className="shadow-sm h-[calc(100vh-12rem)] bg-white">
        <CardHeader className="pb-2 border-b">
          <CardTitle className="flex items-center">
            <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
            Histórico de Conversas
          </CardTitle>
          <CardDescription>Suas interações com o LexiFlow Bot</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0">
          <ScrollArea className="h-[calc(100vh-16rem)] w-full">
            <div className="space-y-3 p-4">
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
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
    </div>
  );
}
