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
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/hooks/use-profile";

export default function ProfilePage() {
  const { profile, updateProfile } = useProfile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementação do envio do formulário
    console.log("Perfil atualizado");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Perfil do Usuário</h1>

      <Card className="shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="h-5 w-5 mr-2 text-blue-600" />
            Perfil do Usuário
          </CardTitle>
          <CardDescription>Gerencie suas informações pessoais</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
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
                  onChange={(e) => updateProfile({ name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  defaultValue={profile.email}
                  className="mt-1"
                  onChange={(e) => updateProfile({ email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="bio">Biografia</Label>
              <textarea
                id="bio"
                className="w-full mt-1 p-2 border rounded-md min-h-[100px]"
                placeholder="Conte um pouco sobre você e seus objetivos de aprendizado..."
              />
            </div>

            <div>
              <Label>Notificações</Label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="email-notifications"
                    className="mr-2 h-4 w-4"
                    defaultChecked
                  />
                  <Label
                    htmlFor="email-notifications"
                    className="cursor-pointer"
                  >
                    Receber notificações por email
                  </Label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="platform-notifications"
                    className="mr-2 h-4 w-4"
                    defaultChecked
                  />
                  <Label
                    htmlFor="platform-notifications"
                    className="cursor-pointer"
                  >
                    Receber notificações na plataforma
                  </Label>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-end gap-2 border-t pt-4">
            <Button variant="outline" type="reset">
              Cancelar
            </Button>
            <Button type="submit">Salvar Alterações</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
