import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const numberFormats: Record<
  string,
  Record<string, Intl.NumberFormatOptions>
> = {
  "ru-RU": {
    currency: {
      style: "currency",
      currency: "USD",
      notation: "standard",
    },
    decimal: {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    percent: {
      style: "percent",
      useGrouping: false,
    },
  },
  "en-US": {
    currency: {
      style: "currency",
      currency: "USD",
      notation: "standard",
    },
    decimal: {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    percent: {
      style: "percent",
      useGrouping: false,
    },
  },
};

const messages = {
  en: {
    translation: {
      welcome: "Welcome",
      price: "{{value, currency}}",
      number: "{{value, decimal}}",
      percentage: "{{value, percent}}",
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать",
      price: "{{value, currency}}",
      number: "{{value, decimal}}",
      percentage: "{{value, percent}}",
    },
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: messages,
  interpolation: {
    escapeValue: false,
    format: (value, format, lng) => {
      const locale = lng || "en-US";

      if (
        typeof value === "number" &&
        format &&
        numberFormats[locale] &&
        numberFormats[locale][format]
      ) {
        return new Intl.NumberFormat(
          locale,
          numberFormats[locale][format] as Intl.NumberFormatOptions
        ).format(value);
      }

      return value;
    },
  },
});

export default i18n;
