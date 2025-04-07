import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface LoginFormProps {
  onLoginSuccess: () => void; // Callback for successful login
  onSwitchToRegister: () => void; // Callback to switch to registration view
}

export function LoginForm({ onLoginSuccess, onSwitchToRegister }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // --- Simulated Login Logic ---
    // In a real app, you'd call an API here.
    // For this POC, let's just check for non-empty fields.
    if (!email || !password) {
      setError('Por favor, preencha e-mail e senha.');
      return;
    }

    // Simulate a successful login
    console.log('Simulating login for:', email);
    onLoginSuccess();
    // --- End Simulated Logic ---
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Acesse sua conta para continuar seu aprendizado.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full">Entrar</Button>
          <Button variant="link" type="button" onClick={onSwitchToRegister} className="text-sm">
            Não tem uma conta? Cadastre-se
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}