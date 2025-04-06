import { AnimatedSection } from "@/components/ui/animated-section";

export default function PropostaDeValor() {
  return (
    <section className="py-20 bg-gray-50" id="beneficios">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Por que o LexiFlow funciona
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="p-6 border-t-4 border-blue-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">
                Aprendizado Integrado
              </h3>
              <p className="text-gray-600">
                Elimina a necessidade de abrir um aplicativo separado para
                estudar; as revisões chegam diretamente onde você já está.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="p-6 border-t-4 border-purple-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Repetição Espaçada</h3>
              <p className="text-gray-600">
                Utiliza algoritmos comprovados de aprendizado para maximizar a
                retenção de conhecimento.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="p-6 border-t-4 border-green-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">IA Personalizada</h3>
              <p className="text-gray-600">
                Ajusta automaticamente a dificuldade e o conteúdo conforme o
                progresso do usuário.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="p-6 border-t-4 border-yellow-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Gamificação</h3>
              <p className="text-gray-600">
                Transforma o estudo em uma experiência divertida e viciante
                com pontos, níveis e conquistas.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}