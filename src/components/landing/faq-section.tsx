import { AnimatedSection } from "@/components/ui/animated-section";
import { FaqItem } from "@/components/ui/faq-item";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const t = useTranslations("FaqSection");

  const faqItems: FaqItemProps[] = [
    {
      question: t("faqItems.0.question"),
      answer: t("faqItems.0.answer"),
    },
    {
      question: t("faqItems.1.question"),
      answer: t("faqItems.1.answer"),
    },
    {
      question: t("faqItems.2.question"),
      answer: t("faqItems.2.answer"),
    },
    {
      question: t("faqItems.3.question"),
      answer: t("faqItems.3.answer"),
    },
    {
      question: t("faqItems.4.question"),
      answer: t("faqItems.4.answer"),
    },
    {
      question: t("faqItems.5.question"),
      answer: t("faqItems.5.answer"),
    },
  ];
  const [openFaqItem, setOpenFaqItem] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t("title")}
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
};

export default FaqSection;
