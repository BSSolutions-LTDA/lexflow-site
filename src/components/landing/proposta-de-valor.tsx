import { AnimatedSection } from "@/components/ui/animated-section";
import { useTranslations } from "next-intl";

const PropostaDeValor = () => {
  const t = useTranslations("PropostaDeValor");

  return (
    <section className="py-20 bg-gray-50" id="beneficios">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="p-6 border-t-4 border-blue-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">
                {t("integratedLearningTitle")}
              </h3>
              <p className="text-gray-600">
                {t("integratedLearningDescription")}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="p-6 border-t-4 border-purple-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">
                {t("spacedRepetitionTitle")}
              </h3>
              <p className="text-gray-600">
                {t("spacedRepetitionDescription")}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="p-6 border-t-4 border-green-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">
                {t("aiPersonalizadaTitle")}
              </h3>
              <p className="text-gray-600">{t("aiPersonalizadaDescription")}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="p-6 border-t-4 border-yellow-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">
                {t("gamificationTitle")}
              </h3>
              <p className="text-gray-600">{t("gamificationDescription")}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default PropostaDeValor;
