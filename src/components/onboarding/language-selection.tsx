import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface LanguageSelectionProps {
  onLanguageSelected: (language: string) => void; // Callback when language is selected
}

const availableLanguages = [
  { id: 'en', name: 'Inglês' },
  { id: 'es', name: 'Espanhol' },
  { id: 'fr', name: 'Francês' },
  { id: 'de', name: 'Alemão' },
  { id: 'it', name: 'Italiano' },
  { id: 'ja', name: 'Japonês' },
];

export function LanguageSelection({ onLanguageSelected }: LanguageSelectionProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedLanguage) {
      console.log('Language selected:', selectedLanguage);
      onLanguageSelected(selectedLanguage);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Configuração Inicial</CardTitle>
        <CardDescription>Qual idioma você gostaria de aprender com o LexiFlow?</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedLanguage ?? undefined}
          onValueChange={setSelectedLanguage}
          className="grid grid-cols-2 gap-4"
        >
          {availableLanguages.map((lang) => (
            <div key={lang.id} className="flex items-center space-x-2 border p-4 rounded-md">
              <RadioGroupItem value={lang.id} id={`lang-${lang.id}`} />
              <Label htmlFor={`lang-${lang.id}`} className="text-lg cursor-pointer flex-1">
                {lang.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button onClick={handleNext} disabled={!selectedLanguage} className="w-full">
          Próximo
        </Button>
      </CardFooter>
    </Card>
  );
}