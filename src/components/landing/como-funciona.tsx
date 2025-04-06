import { AnimatedSection } from "@/components/ui/animated-section";
import { FeatureCard } from "@/components/ui/feature-card";
import ClockIcon from "@/components/icons/clock-icon";

export default function ComoFunciona() {
  return (
    <section className="py-20 bg-white" id="como-funciona">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Como o LexiFlow funciona
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            icon={

              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon />
              </div>
            }
            title="Receba palavras diariamente"
            description="Você recebe palavras e frases para aprender diretamente no WhatsApp, Telegram ou Discord."
            delay={0.1}
          />

          <FeatureCard
            icon={
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L9 18L21 6"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            }
            title="Responda quando puder"
            description="Sem pressão! Responda às perguntas quando for conveniente para você, direto no chat."
            delay={0.2}
          />

          <FeatureCard
            icon={
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            }
            title="Nossa IA adapta o conteúdo"
            description="A inteligência artificial personaliza o aprendizado conforme seu progresso e dificuldades."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}