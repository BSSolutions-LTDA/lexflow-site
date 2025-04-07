"use client";

import { useLocale } from "next-intl";
import ReactCountryFlag from "react-country-flag";
import { setUserLocale } from "@/service/locale";
import { useTransition } from "react";
import { Locale } from "@/i18n/config";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const [, startTransition] = useTransition();

  const changeLocale = (newLocale: Locale) => {
    startTransition(() => {
      setUserLocale(newLocale);
    });
  };

  return (
    <div>
      <button
        onClick={() => changeLocale(locale === "pt-BR" ? "en" : "pt-BR")}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <ReactCountryFlag
          countryCode={locale === "pt-BR" ? "US" : "BR"}
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title={locale === "pt-BR" ? "US" : "BR"}
        />
      </button>
    </div>
  );
}
