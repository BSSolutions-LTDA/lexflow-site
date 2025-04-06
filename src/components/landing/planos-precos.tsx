import { AnimatedSection } from "@/components/ui/animated-section";
import { PricingCard } from "@/components/ui/pricing-card";

// Dados para os planos de preço
const pricingPlans = [
  {
    title: "Gratuito",
    subtitle: "Para experimentar",
    price: "R$ 0",
    features: [
      "Limite de 20 palavras/dia",
      "Acesso a temas básicos",
      "Uma plataforma de mensagens",
    ],
    buttonText: "Começar Grátis",
    buttonAction: () => console.log("Plano gratuito selecionado"),
  },
  {
    title: "Premium",
    subtitle: "Para aprendizado sério",
    price: "R$ 29,90/mês",
    features: [
      "Palavras/frases ilimitadas",
      "Todos os temas disponíveis",
      "Todas as plataformas de mensagens",
      "Análises avançadas",
      "Conteúdo personalizado por IA",
    ],
    buttonText: "Assinar Agora",
    buttonAction: () => console.log("Plano premium selecionado"),
    isPopular: true,
  },
  {
    title: "Empresarial",
    subtitle: "Para escolas e empresas",
    price: "Personalizado",
    features: [
      "Soluções customizadas",
      "Dashboard para professores",
      "Conteúdo específico para indústrias",
      "Suporte dedicado",
    ],
    buttonText: "Fale Conosco",
    buttonAction: () => console.log("Plano empresarial selecionado"),
  },
];

export default function PlanosPrecos() {
  return (
    <section className="py-20 bg-white" id="planos">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Escolha o plano ideal para o seu aprendizado
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              subtitle={plan.subtitle}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonAction={plan.buttonAction}
              isPopular={plan.isPopular}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}