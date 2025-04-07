"use client";

import React from "react";
import { Book, LogOut, Trophy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/hooks/use-profile";
import { useAuth } from "@/hooks/use-auth";

export default function Header() {
  const { profile } = useProfile();
  const { logout } = useAuth();

  return (
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
              .map((n: any) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <span className="font-medium">Olá, {profile.name.split(" ")[0]}!</span>
        <Button
          variant="outline"
          size="sm"
          onClick={logout}
          className="bg-transparent hover:bg-white/20 text-white border-white/30 hover:border-white"
        >
          <LogOut className="h-4 w-4 mr-1" /> Sair
        </Button>
      </div>
    </header>
  );
}
