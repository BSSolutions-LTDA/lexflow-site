import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LexiFlow | Aprenda idiomas pelo WhatsApp, Telegram e Discord',
  description: 'LexiFlow é uma plataforma inovadora que combina repetição espaçada com WhatsApp, Telegram e Discord para aprendizado de idiomas. Aprenda em apenas 5 minutos por dia.',
  keywords: 'aprendizado de idiomas, repetição espaçada, WhatsApp, Telegram, Discord, anki, memorização, estudo de idiomas, inglês, espanhol, francês',
  openGraph: {
    title: 'LexiFlow | Aprenda idiomas pelo WhatsApp, Telegram e Discord',
    description: 'Aprenda idiomas onde você já está: no WhatsApp! Receba palavras e frases personalizadas. IA adaptativa. Resultados em 5 min/dia.',
    url: 'https://lexiflow.app',
    siteName: 'LexiFlow',
    locale: 'pt_BR',
    type: 'website',
  },
}

export { default } from './client-page';
