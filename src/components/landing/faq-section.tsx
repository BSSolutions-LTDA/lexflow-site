import { AnimatedSection } from "@/components/ui/animated-section";
import { FaqItem } from "@/components/ui/faq-item";
import { useState } from "react";

// Dados para o FAQ
const faqItems = [
  {
    question: "Como o LexiFlow funciona?",
    answer:
      "O LexiFlow envia palavras e frases para você aprender diretamente no WhatsApp, Telegram ou Discord. Você responde quando puder, e nossa IA adapta o conteúdo ao seu ritmo de aprendizado.",
  },
  {
    question: "Quais idiomas estão disponíveis?",
    answer:
      "Atualmente oferecemos inglês, espanhol, francês, alemão, italiano e japonês. Estamos constantemente adicionando novos idiomas.",
  },
  {
    question: "Quanto tempo preciso dedicar por dia?",
    answer:
      "Apenas 5 minutos por dia são suficientes para ver resultados. Como as mensagens chegam onde você já está, é fácil encaixar o aprendizado na sua rotina.",
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer:
      "Sim, você pode cancelar sua assinatura a qualquer momento através do seu painel de controle, sem taxas adicionais.",
  },
  {
    question: "O LexiFlow funciona para crianças?",
    answer:
      "Sim! O LexiFlow é adequado para estudantes de todas as idades. Para crianças menores de 13 anos, recomendamos que os pais supervisionem o uso.",
  },
  {
    question: "Como o sistema de repetição espaçada funciona?",
    answer:
      "O sistema de repetição espaçada apresenta as palavras em intervalos crescentes, baseados no seu desempenho. Palavras que você acerta são mostradas com menos frequência, enquanto palavras difíceis aparecem mais vezes até que você as domine.",
  },
];

export default function FaqSection() {
  const [openFaqItem, setOpenFaqItem] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Perguntas Frequentes
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openFaqItem === index}
              toggleOpen={() =>
                setOpenFaqItem(openFaqItem === index ? null : index)
              }
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}