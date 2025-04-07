import { AnimatedSection } from "@/components/ui/animated-section";
import { PricingCard } from "@/components/ui/pricing-card";
import { useTranslations } from "next-intl";

interface PricingPlanProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonAction: () => void;
  isPopular?: boolean;
}

const PlanosPrecos = () => {
  const t = useTranslations("PlanosPrecos");

  // Create the pricing plans manually instead of trying to get them directly from translations
  const pricingPlans: PricingPlanProps[] = [
    {
      title: t("pricingPlans.0.title"),
      subtitle: t("pricingPlans.0.subtitle"),
      price: t("pricingPlans.0.price"),
      features: [
        t("pricingPlans.0.features.0"),
        t("pricingPlans.0.features.1"),
        t("pricingPlans.0.features.2"),
      ],
      buttonText: t("pricingPlans.0.buttonText"),
      buttonAction: () => console.log("Free plan selected"),
    },
    {
      title: t("pricingPlans.1.title"),
      subtitle: t("pricingPlans.1.subtitle"),
      price: t("pricingPlans.1.price"),
      features: [
        t("pricingPlans.1.features.0"),
        t("pricingPlans.1.features.1"),
        t("pricingPlans.1.features.2"),
        t("pricingPlans.1.features.3"),
        t("pricingPlans.1.features.4"),
      ],
      buttonText: t("pricingPlans.1.buttonText"),
      buttonAction: () => console.log("Premium plan selected"),
      isPopular: true,
    },
    {
      title: t("pricingPlans.2.title"),
      subtitle: t("pricingPlans.2.subtitle"),
      price: t("pricingPlans.2.price"),
      features: [
        t("pricingPlans.2.features.0"),
        t("pricingPlans.2.features.1"),
        t("pricingPlans.2.features.2"),
        t("pricingPlans.2.features.3"),
      ],
      buttonText: t("pricingPlans.2.buttonText"),
      buttonAction: () => console.log("Business plan selected"),
    },
  ];

  return (
    <section className="py-20 bg-white" id="planos">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            {t("subtitle")}
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
};

export default PlanosPrecos;
