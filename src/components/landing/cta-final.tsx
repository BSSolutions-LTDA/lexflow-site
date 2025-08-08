import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedButton } from "@/components/ui/animated-button";
import { useTranslations } from "next-intl";

export default function CtaFinal() {
  const t = useTranslations("CtaFinal");
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">{t("description")}</p>
          <AnimatedButton
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-6 text-lg rounded-full"
          >
            {t("button")}
          </AnimatedButton>
          <p className="mt-6 text-sm opacity-80">{t("premiumOffer")}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
