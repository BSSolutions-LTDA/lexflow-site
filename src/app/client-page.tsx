'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/ui/animated-button'
import { AnimatedSection } from '@/components/ui/animated-section'
import { FeatureCard } from '@/components/ui/feature-card'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { PricingCard } from '@/components/ui/pricing-card'
import { FaqItem } from '@/components/ui/faq-item'
import { HeroSection } from '@/components/ui/hero-section'
import { Navbar } from '@/components/ui/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function ClientPage() {
  // Estado para os itens de FAQ
  const [openFaqItem, setOpenFaqItem] = useState<number | null>(0);
  
  // Dados para os planos de preço
  const pricingPlans = [
    {
      title: "Gratuito",
      subtitle: "Para experimentar",
      price: "R$ 0",
      features: [
        "Limite de 20 palavras/dia",
        "Acesso a temas básicos",
        "Uma plataforma de mensagens"
      ],
      buttonText: "Começar Grátis",
      buttonAction: () => console.log("Plano gratuito selecionado")
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
        "Conteúdo personalizado por IA"
      ],
      buttonText: "Assinar Agora",
      buttonAction: () => console.log("Plano premium selecionado"),
      isPopular: true
    },
    {
      title: "Empresarial",
      subtitle: "Para escolas e empresas",
      price: "Personalizado",
      features: [
        "Soluções customizadas",
        "Dashboard para professores",
        "Conteúdo específico para indústrias",
        "Suporte dedicado"
      ],
      buttonText: "Fale Conosco",
      buttonAction: () => console.log("Plano empresarial selecionado")
    }
  ];
  
  // Dados para os depoimentos
  const testimonials = [
    {
      name: "Rafael Moreira",
      role: "Estudante de inglês",
      testimonial: "Finalmente estou progredindo no inglês! Já tinha tentado vários apps, mas sempre esquecia de usar. Com o LexiFlow, as palavras chegam direto no meu WhatsApp e eu respondo quando posso."
    },
    {
      name: "Carla Santos",
      role: "Profissional de TI",
      testimonial: "A gamificação me mantém motivada! Adoro ver meus pontos aumentando e subir de nível. Já aprendi mais de 500 palavras em espanhol em apenas 3 meses usando o LexiFlow."
    },
    {
      name: "Pedro Lima",
      role: "Professor",
      testimonial: "Como professor, recomendo o LexiFlow para todos os meus alunos. A repetição espaçada realmente funciona, e o fato de usar o WhatsApp elimina qualquer desculpa para não praticar."
    }
  ];
  
  // Dados para o FAQ
  const faqItems = [
    {
      question: "Como o LexiFlow funciona?",
      answer: "O LexiFlow envia palavras e frases para você aprender diretamente no WhatsApp, Telegram ou Discord. Você responde quando puder, e nossa IA adapta o conteúdo ao seu ritmo de aprendizado."
    },
    {
      question: "Quais idiomas estão disponíveis?",
      answer: "Atualmente oferecemos inglês, espanhol, francês, alemão, italiano e japonês. Estamos constantemente adicionando novos idiomas."
    },
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "Apenas 5 minutos por dia são suficientes para ver resultados. Como as mensagens chegam onde você já está, é fácil encaixar o aprendizado na sua rotina."
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento através do seu painel de controle, sem taxas adicionais."
    },
    {
      question: "O LexiFlow funciona para crianças?",
      answer: "Sim! O LexiFlow é adequado para estudantes de todas as idades. Para crianças menores de 13 anos, recomendamos que os pais supervisionem o uso."
    },
    {
      question: "Como o sistema de repetição espaçada funciona?",
      answer: "O sistema de repetição espaçada apresenta as palavras em intervalos crescentes, baseados no seu desempenho. Palavras que você acerta são mostradas com menos frequência, enquanto palavras difíceis aparecem mais vezes até que você as domine."
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar 
        logo={
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">LexiFlow</span>
          </Link>
        }
        menuItems={[
          { label: "Como Funciona", href: "#como-funciona" },
          { label: "Benefícios", href: "#beneficios" },
          { label: "Planos", href: "#planos" },
          { label: "Depoimentos", href: "#depoimentos" },
          { label: "FAQ", href: "#faq" }
        ]}
        ctaButton={{
          label: "Começar Grátis",
          onClick: () => console.log("CTA clicked")
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title="Aprenda idiomas onde você já está: no WhatsApp!"
        subtitle="O LexiFlow leva o aprendizado até VOCÊ! Receba palavras, frases e exercícios diretamente no seu WhatsApp, Telegram ou Discord e responda quando puder."
        ctaText="COMEÇAR AGORA"
        ctaAction={() => console.log("Hero CTA clicked")}
        illustration={
          <div className="relative w-full h-[500px]">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl"></div>
                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col">
                  <div className="bg-green-500 text-white p-4">
                    <h3 className="font-bold">LexiFlow</h3>
                  </div>
                  <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
                    <div className="bg-white rounded-lg p-3 mb-4 shadow-sm max-w-[80%]">
                      <p className="text-sm">Olá! Hora da sua prática diária 🚀</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 mb-4 shadow-sm max-w-[80%]">
                      <p className="text-sm">Como se diz "reunião" em inglês?</p>
                    </div>
                    <div className="bg-green-100 rounded-lg p-3 mb-4 shadow-sm max-w-[80%] ml-auto">
                      <p className="text-sm">Meeting</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 mb-4 shadow-sm max-w-[80%]">
                      <p className="text-sm">✅ Correto! +10 pontos</p>
                      <p className="text-xs text-gray-500 mt-1">Você está em uma sequência de 3 dias!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* Como Funciona */}
      <section className="py-20 bg-white" id="como-funciona">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Como o LexiFlow funciona</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              icon={
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B82F6" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              }
              title="Receba palavras diariamente"
              description="Você recebe palavras e frases para aprender diretamente no WhatsApp, Telegram ou Discord."
              delay={0.1}
            />
            
            <FeatureCard
              icon={
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12L9 18L21 6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

      {/* Proposta de Valor */}
      <section className="py-20 bg-gray-50" id="beneficios">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Por que o LexiFlow funciona</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-6 border-t-4 border-blue-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Aprendizado Integrado</h3>
                <p className="text-gray-600">Elimina a necessidade de abrir um aplicativo separado para estudar; as revisões chegam diretamente onde você já está.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="p-6 border-t-4 border-purple-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Repetição Espaçada</h3>
                <p className="text-gray-600">Utiliza algoritmos comprovados de aprendizado para maximizar a retenção de conhecimento.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="p-6 border-t-4 border-green-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">IA Personalizada</h3>
                <p className="text-gray-600">Ajusta automaticamente a dificuldade e o conteúdo conforme o progresso do usuário.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="p-6 border-t-4 border-yellow-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Gamificação</h3>
                <p className="text-gray-600">Transforma o estudo em uma experiência divertida e viciante com pontos, níveis e conquistas.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section className="py-20 bg-white" id="planos">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Planos que cabem no seu bolso</h2>
            <p className="text-xl text-center text-gray-600 mb-16">Escolha o plano ideal para o seu aprendizado</p>
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

      {/* Prova Social */}
      <section className="py-20 bg-blue-50" id="depoimentos">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">O que nossos usuários dizem</h2>
            <p className="text-xl text-center text-gray-600 mb-16">Já ajudamos mais de 10.000 pessoas a dominarem novos idiomas</p>
          </AnimatedSection>
          
          <div className="flex justify-center mb-10">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="ml-2 text-lg font-medium">4.8/5</span>
              <span className="ml-2 text-gray-600">(758 avaliações)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                avatar={
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                }
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" id="faq">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFaqItem === index}
                toggleOpen={() => setOpenFaqItem(openFaqItem === index ? null : index)}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para revolucionar seu aprendizado de idiomas?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">Junte-se a mais de 10.000 pessoas que já estão aprendendo idiomas sem mudar suas rotinas.</p>
            <AnimatedButton size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-6 text-lg rounded-full">
              COMEÇAR AGORA
            </AnimatedButton>
            <p className="mt-6 text-sm opacity-80">Os primeiros 500 usuários ganham 3 meses de plano Premium grátis!</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LexiFlow</h3>
              <p className="text-gray-400">Revolucionando o aprendizado de idiomas através dos apps que você já usa.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#planos" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Idiomas</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inglês</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Espanhol</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Francês</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Alemão</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  contato@lexiflow.app
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  (11) 9876-5432
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} LexiFlow. Todos os direitos reservados.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="/termos" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
