import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HomepageHero from '@site/src/components/HomepageHero';
import Features from '@site/src/components/Features';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isJa = i18n.currentLocale === 'ja';
  const docsLabel = isJa ? 'ドキュメント' : 'Documentation';
  const boothLabel = isJa ? 'BOOTH' : 'BOOTH';

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const autoPickKey = 'flexsky-locale-autopick';
    const isDefaultLocale = i18n.currentLocale === i18n.defaultLocale;
    const isJaPreferred = (navigator.languages || [navigator.language])
      .filter(Boolean)
      .some((lang) => lang.toLowerCase().startsWith('ja'));

    let alreadyPicked = false;
    try {
      alreadyPicked = window.localStorage.getItem(autoPickKey) === '1';
    } catch {
      alreadyPicked = false;
    }

    if (!alreadyPicked && isDefaultLocale && isJaPreferred) {
      const target = `${siteConfig.baseUrl}ja/`;
      if (!window.location.pathname.includes('/ja/')) {
        window.location.replace(target);
      }
    }

    try {
      window.localStorage.setItem(autoPickKey, '1');
    } catch {
      // Ignore storage failures (private mode, etc.)
    }
  }, [i18n.currentLocale, i18n.defaultLocale, siteConfig.baseUrl]);

  return (
    <Layout
      title={`${siteConfig.title} - VRChat向け空のShader`}
      description="FlexSkyは、VRChatワールドの空と光の表現を簡単に整えられるShaderです。">
      <Head>
        <meta property="og:image" content={`${siteConfig.url}${siteConfig.baseUrl}img/FlexSky-thumbnail.png`} />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteConfig.url}${siteConfig.baseUrl}img/FlexSky-thumbnail.png`} />
        <meta name="twitter:title" content={`${siteConfig.title} - VRChat向け空のShader`} />
        <meta name="twitter:description" content="FlexSkyは、VRChatワールドの空と光の表現を簡単に整えられるShaderです。" />
      </Head>
      <main className={styles.main}>
        <HomepageHero docsLabel={docsLabel} boothLabel={boothLabel} />
      </main>
    </Layout>
  );
}
