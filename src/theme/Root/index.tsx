import React, {type ReactNode, useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type RootProps = {
  children: ReactNode;
};

function normalizePath(pathname: string): string {
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export default function Root({children}: RootProps): JSX.Element {
  const {i18n, siteConfig} = useDocusaurusContext();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedLocaleKey = 'flexsky-locale';
    const locales = i18n.locales;
    const currentLocale = i18n.currentLocale;
    const defaultLocale = i18n.defaultLocale;
    const basePath = normalizePath(siteConfig.baseUrl);
    const localeBaseUrl = (locale: string) =>
      locale === defaultLocale ? basePath : `${basePath}${locale}/`;

    let storedLocale: string | null = null;
    try {
      storedLocale = window.localStorage.getItem(storedLocaleKey);
    } catch {
      storedLocale = null;
    }

    const hasValidStoredLocale =
      !!storedLocale && locales.includes(storedLocale);

    if (!hasValidStoredLocale) {
      const preferredLocales = (navigator.languages || [navigator.language])
        .filter(Boolean)
        .map((lang) => lang.toLowerCase());
      const matchedLocale = locales.find((locale) =>
        preferredLocales.some((lang) => lang.startsWith(locale.toLowerCase())),
      );
      const initialLocale = matchedLocale ?? defaultLocale;

      try {
        window.localStorage.setItem(storedLocaleKey, initialLocale);
      } catch {
        // Ignore storage failures (private mode, etc.)
      }

      const isHome = normalizePath(window.location.pathname) === basePath;
      if (isHome && initialLocale !== currentLocale) {
        window.location.replace(localeBaseUrl(initialLocale));
      }

      return;
    }

    if (storedLocale !== currentLocale) {
      try {
        window.localStorage.setItem(storedLocaleKey, currentLocale);
      } catch {
        // Ignore storage failures (private mode, etc.)
      }
    }
  }, [
    i18n.currentLocale,
    i18n.defaultLocale,
    i18n.locales,
    siteConfig.baseUrl,
  ]);

  return <>{children}</>;
}
