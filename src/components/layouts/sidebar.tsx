"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, MessageSquare, User, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {
  activeTab: string;
}

export default function Sidebar({ activeTab }: SidebarProps) {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col space-y-2 bg-white shadow-sm p-4 rounded-lg">
        <Button
          variant={activeTab === "dashboard" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => navigateTo("/dashboard")}
        >
          <BarChart3 className="h-5 w-5 mr-2" /> Dashboard
        </Button>
        <Button
          variant={activeTab === "chat" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => navigateTo("/dashboard/chat")}
        >
          <MessageSquare className="h-5 w-5 mr-2" /> Histórico
        </Button>
        <Button
          variant={activeTab === "profile" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => navigateTo("/dashboard/profile")}
        >
          <User className="h-5 w-5 mr-2" /> Perfil
        </Button>
        <Button
          variant={activeTab === "settings" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => navigateTo("/dashboard/settings")}
        >
          <Settings className="h-5 w-5 mr-2" /> Configurações
        </Button>
      </div>

      {/* Mobile Navigation Tabs */}
      <div className="md:hidden col-span-12 mb-4">
        <Tabs
          value={activeTab}
          onValueChange={(value) => {
            switch (value) {
              case "dashboard":
                navigateTo("/dashboard");
                break;
              case "chat":
                navigateTo("/dashboard/chat");
                break;
              case "profile":
                navigateTo("/dashboard/profile");
                break;
              case "settings":
                navigateTo("/dashboard/settings");
                break;
            }
          }}
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
    </>
  );
}
