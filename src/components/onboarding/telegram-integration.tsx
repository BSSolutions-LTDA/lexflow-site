import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link'; // Use Link for internal navigation if needed, 'a' for external

interface TelegramIntegrationProps {
  onIntegrationComplete: () => void; // Callback when user proceeds
}

export function TelegramIntegration({ onIntegrationComplete }: TelegramIntegrationProps) {

  const handleComplete = () => {
    console.log('User proceeding after Telegram instructions.');
    onIntegrationComplete();
  };

  // Simulate a Telegram bot link
  const telegramBotLink = "https://t.me/YourLexiFlowBot"; // Replace with actual link later

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Conecte-se ao Telegram</CardTitle>
        <CardDescription>Receba suas lições diretamente no Telegram.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 text-center">
        <p>Para começar a aprender, conecte sua conta ao nosso bot no Telegram:</p>

        {/* Placeholder for QR Code */}
        <div className="flex justify-center my-6">
          <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
            [Simulação QR Code]
            {/* In a real app, you'd use a library like 'qrcode.react' or an Image component */}
            {/* <Image src="/path/to/qr-code.png" alt="QR Code Telegram" width={192} height={192} /> */}
          </div>
        </div>

        <p>Ou clique no link abaixo para iniciar uma conversa:</p>

        <Button asChild variant="link" className="text-lg">
          <a href={telegramBotLink} target="_blank" rel="noopener noreferrer">
            Iniciar Conversa com LexiFlow Bot
          </a>
        </Button>

        <p className="text-sm text-gray-600">Após iniciar a conversa com o bot, clique em "Concluir".</p>

      </CardContent>
      <CardFooter>
        <Button onClick={handleComplete} className="w-full">
          Concluir Configuração
        </Button>
      </CardFooter>
    </Card>
  );
}