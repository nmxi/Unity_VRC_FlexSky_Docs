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
    const sessionKey = 'flexsky-locale-session';
    const locales = i18n.locales;
    const currentLocale = i18n.currentLocale;
    const defaultLocale = i18n.defaultLocale;
    const basePath = normalizePath(siteConfig.baseUrl);
    const localeBaseUrl = (locale: string) =>
      locale === defaultLocale ? basePath : `${basePath}${locale}/`;
    const isHomePath = normalizePath(window.location.pathname) === basePath;
    const normalizedPathname = normalizePath(window.location.pathname);
    const duplicatedLocale = locales
      .filter((locale) => locale !== defaultLocale)
      .find((locale) => {
        const localePath = `${basePath}${locale}/`;
        const duplicatedPath = `${localePath}${basePath}${locale}/`;
        return normalizedPathname.startsWith(duplicatedPath);
      });

    if (duplicatedLocale) {
      window.location.replace(localeBaseUrl(duplicatedLocale));
      return;
    }

    let storedLocale: string | null = null;
    let hasSession = false;
    try {
      storedLocale = window.localStorage.getItem(storedLocaleKey);
      hasSession = window.sessionStorage.getItem(sessionKey) === '1';
    } catch {
      storedLocale = null;
      hasSession = false;
    }

    const hasValidStoredLocale =
      !!storedLocale && locales.includes(storedLocale);

    if (!hasSession) {
      if (hasValidStoredLocale) {
        try {
          window.sessionStorage.setItem(sessionKey, '1');
        } catch {
          // Ignore storage failures (private mode, etc.)
        }

        if (isHomePath && storedLocale !== currentLocale) {
          window.location.replace(localeBaseUrl(storedLocale));
          return;
        }
      } else {
        const preferredLocale = (navigator.language || '').toLowerCase();
        const matchedLocale = locales.find((locale) =>
          preferredLocale.startsWith(locale.toLowerCase()),
        );
        const initialLocale = matchedLocale ?? defaultLocale;

        try {
          window.localStorage.setItem(storedLocaleKey, initialLocale);
          window.sessionStorage.setItem(sessionKey, '1');
        } catch {
          // Ignore storage failures (private mode, etc.)
        }

        if (isHomePath && initialLocale !== currentLocale) {
          window.location.replace(localeBaseUrl(initialLocale));
          return;
        }
      }
    }

    try {
      window.localStorage.setItem(storedLocaleKey, currentLocale);
      window.sessionStorage.setItem(sessionKey, '1');
    } catch {
      // Ignore storage failures (private mode, etc.)
    }
  }, [
    i18n.currentLocale,
    i18n.defaultLocale,
    i18n.locales,
    siteConfig.baseUrl,
  ]);

  return <>{children}</>;
}
