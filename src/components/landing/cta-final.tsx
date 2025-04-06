import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedButton } from "@/components/ui/animated-button";

export default function CtaFinal() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para revolucionar seu aprendizado de idiomas?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Junte-se a mais de 10.000 pessoas que já estão aprendendo idiomas
            sem mudar suas rotinas.
          </p>
          <AnimatedButton
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-6 text-lg rounded-full"
          >
            COMEÇAR AGORA
          </AnimatedButton>
          <p className="mt-6 text-sm opacity-80">
            Os primeiros 500 usuários ganham 3 meses de plano Premium grátis!
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}