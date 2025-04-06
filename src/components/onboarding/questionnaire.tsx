import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface QuestionnaireProps {
  onQuestionnaireComplete: (answers: QuestionnaireAnswers) => void; // Callback with answers
}

export interface QuestionnaireAnswers {
  level: string;
  time: string;
  goal: string;
}

const levels = [
  { id: 'beginner', name: 'Iniciante' },
  { id: 'intermediate', name: 'Intermediário' },
  { id: 'advanced', name: 'Avançado' },
];

const times = [
  { id: '5min', name: '5 minutos' },
  { id: '15min', name: '15 minutos' },
  { id: '30min+', name: '30 minutos ou mais' },
];

const goals = [
  { id: 'travel', name: 'Viagem' },
  { id: 'work', name: 'Trabalho' },
  { id: 'conversation', name: 'Conversação' },
  { id: 'culture', name: 'Cultura/Hobbies' },
];

export function Questionnaire({ onQuestionnaireComplete }: QuestionnaireProps) {
  const [level, setLevel] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);

  const isComplete = level && time && goal;

  const handleNext = () => {
    if (isComplete) {
      const answers: QuestionnaireAnswers = { level, time, goal };
      console.log('Questionnaire answers:', answers);
      onQuestionnaireComplete(answers);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Conte-nos mais sobre você</CardTitle>
        <CardDescription>Isso nos ajuda a personalizar sua experiência.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Level */}
        <div>
          <Label className="text-base font-medium mb-3 block">Qual seu nível atual no idioma?</Label>
          <RadioGroup value={level ?? undefined} onValueChange={setLevel} className="grid grid-cols-3 gap-4">
            {levels.map((l) => (
              <div key={l.id} className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value={l.id} id={`level-${l.id}`} />
                <Label htmlFor={`level-${l.id}`} className="cursor-pointer flex-1">{l.name}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Time */}
        <div>
          <Label className="text-base font-medium mb-3 block">Quanto tempo você pode dedicar por dia?</Label>
          <RadioGroup value={time ?? undefined} onValueChange={setTime} className="grid grid-cols-3 gap-4">
            {times.map((t) => (
              <div key={t.id} className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value={t.id} id={`time-${t.id}`} />
                <Label htmlFor={`time-${t.id}`} className="cursor-pointer flex-1">{t.name}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Goal */}
        <div>
          <Label className="text-base font-medium mb-3 block">Qual seu principal objetivo?</Label>
          <RadioGroup value={goal ?? undefined} onValueChange={setGoal} className="grid grid-cols-2 gap-4">
            {goals.map((g) => (
              <div key={g.id} className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value={g.id} id={`goal-${g.id}`} />
                <Label htmlFor={`goal-${g.id}`} className="cursor-pointer flex-1">{g.name}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleNext} disabled={!isComplete} className="w-full">
          Próximo
        </Button>
      </CardFooter>
    </Card>
  );
}