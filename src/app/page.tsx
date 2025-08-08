/* eslint-disable @next/next/no-img-element */
"use client";
import { useTranslations } from "next-intl";
import ComoFunciona from "@/components/landing/como-funciona";
import PropostaDeValor from "@/components/landing/proposta-de-valor";
import ProvaSocial from "@/components/landing/prova-social";
import FaqSection from "@/components/landing/faq-section";
import PlanosPrecos from "@/components/landing/planos-precos";
import CtaFinal from "@/components/landing/cta-final";

import { useState } from "react";
import { HeroSection } from "@/components/ui/hero-section";
import { Navbar } from "@/components/ui/navbar";
import MailIcon from "@/components/icons/mail-icon";
import PhoneIcon from "@/components/icons/phone-icon";
import FacebookIcon from "@/components/icons/facebook-icon";
import InstagramIcon from "@/components/icons/instagram-icon";
import WhatsAppSimulation from "@/components/landing/whatsapp-simulation";

import { LoginForm } from "@/app/(auth)/login/page";
import { LanguageSelection } from "@/components/onboarding/language-selection";
import {
  Questionnaire,
  QuestionnaireAnswers,
} from "@/components/onboarding/questionnaire";
import { TelegramIntegration } from "@/components/onboarding/telegram-integration";
import { RegisterForm } from "./(auth)/register/page";
import { useRouter } from "next/navigation";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";

// Define view types
type View =
  | "landing"
  | "login"
  | "register"
  | "onboarding-language"
  | "onboarding-questionnaire"
  | "onboarding-telegram"
  | "dashboard";

export default function ClientPage() {
  const t = useTranslations();
  const router = useRouter();
  const [view, setView] = useState<View>("landing");

  // --- Navigation and State Handlers ---

  const handleShowLogin = () => setView("login");
  const handleShowRegister = () => setView("register");
  const handleGoToLanding = () => setView("landing");

  const handleLoginSuccess = () => {
    console.log("Login successful, navigating to dashboard.");
    router.push("/dashboard");
  };

  const handleRegisterSuccess = () => {
    console.log("Registration successful, starting onboarding.");
    setView("onboarding-language");
  };

  const handleLanguageSelected = (language: string) => {
    console.log("Language selected:", language);
    setView("onboarding-questionnaire");
  };

  const handleQuestionnaireComplete = (answers: QuestionnaireAnswers) => {
    console.log("Questionnaire complete:", answers);
    setView("onboarding-telegram");
  };

  const handleIntegrationComplete = () => {
    console.log("Onboarding complete, navigating to dashboard.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Changed from main to div to avoid nested main */}
      {/* Navbar */}
      {/* Navbar - Conditionally render parts based on view */}
      <Navbar
        logo={
          // Make logo go to landing page
          <button
            onClick={handleGoToLanding}
            className="flex items-center focus:outline-none"
          >
            <AnimatedSection>
              <img src="/logo.png" alt="Logo" className="mx-auto h-16" />
            </AnimatedSection>
          </button>
        }
        // Only show menu items on landing page
        menuItems={
          view === "landing"
            ? [
                { label: t("Navbar.comoFunciona"), href: "#como-funciona" },
                { label: t("Navbar.beneficios"), href: "#beneficios" },
                { label: t("Navbar.planos"), href: "#planos" },
                { label: t("Navbar.depoimentos"), href: "#depoimentos" },
                { label: t("Navbar.faq"), href: "#faq" },
              ]
            : []
        } // Pass empty array when not on landing
        // Update Navbar buttons based on view
        ctaButton={
          view === "landing"
            ? {
                label: t("Navbar.comecarGratis"),
                onClick: handleShowRegister, // Go to register
              }
            : undefined
        } // Use undefined for optional props
        // Add Login button if on landing page
        secondaryButton={
          view === "landing"
            ? {
                label: t("Navbar.login"),
                onClick: handleShowLogin, // Go to login
              }
            : undefined
        } // Use undefined for optional props
      />
      {/* Hero Section (Only show if view is 'landing') */}
      {view === "landing" && (
        <HeroSection
          title={t("HeroSection.title")}
          subtitle={t("HeroSection.subtitle")}
          ctaText={t("HeroSection.ctaText")}
          ctaAction={handleShowRegister}
          illustration={<WhatsAppSimulation />}
        />
      )}
      {/* Conditional Rendering for Views */}
      <main className="flex-1 flex items-center justify-center py-12 md:py-20 px-4">
        {" "}
        {/* Added padding and centering */}
        {view === "login" && (
          <LoginForm
            onLoginSuccess={handleLoginSuccess}
            onSwitchToRegister={handleShowRegister}
          />
        )}
        {view === "register" && (
          <RegisterForm
            onRegisterSuccess={handleRegisterSuccess}
            onSwitchToLogin={handleShowLogin}
          />
        )}
        {view === "onboarding-language" && (
          <LanguageSelection onLanguageSelected={handleLanguageSelected} />
        )}
        {view === "onboarding-questionnaire" && (
          <Questionnaire
            onQuestionnaireComplete={handleQuestionnaireComplete}
          />
        )}
        {view === "onboarding-telegram" && (
          <TelegramIntegration
            onIntegrationComplete={handleIntegrationComplete}
          />
        )}
      </main>
      {view === "landing" && (
        <>
          {/* Como Funciona */}
          <ComoFunciona />

          {/* Proposta de Valor */}
          <PropostaDeValor />

          {/* Planos e Preços */}
          <PlanosPrecos />

          {/* Prova Social */}
          <ProvaSocial />

          {/* FAQ */}
          <FaqSection />

          {/* CTA Final */}
          <CtaFinal />
        </>
      )}
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LexiFlow</h3>
              <p className="text-gray-400">{t("Footer.description")}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t("Footer.linksRapidos")}</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#como-funciona"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("Navbar.comoFunciona")}
                  </a>
                </li>
                <li>
                  <a
                    href="#beneficios"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("Navbar.beneficios")}
                  </a>
                </li>
                <li>
                  <a
                    href="#planos"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("Navbar.planos")}
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("Navbar.faq")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t("Footer.idiomas")}</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("Footer.ingles")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("Footer.espanhol")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("Footer.frances")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("Footer.alemao")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t("Footer.contato")}</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <MailIcon />
                  contato@lexiflow.app
                </li>
                <li className="flex items-center text-gray-400">
                  <PhoneIcon />
                  (11) 9876-5432
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &amp;copy; {new Date().getFullYear()} LexiFlow.{" "}
              {t("Footer.todosOsDireitosReservados")}
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="/termos" className="hover:text-white transition-colors">
                {t("Footer.termosDeUso")}
              </a>
              <a
                href="/privacidade"
                className="hover:text-white transition-colors"
              >
                {t("Footer.politicaDePrivacidade")}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t("Footer.cookies")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
