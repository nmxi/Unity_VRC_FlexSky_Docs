import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HomepageHero from '@site/src/components/HomepageHero';
import Features from '@site/src/components/Features';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();
  const localeText = {
    en: {
      docsLabel: 'Documentation',
      boothLabel: 'BOOTH',
      pageTitle: `${siteConfig.title} - Shader for Various Skies`,
      pageDescription:
        'FlexSky is a shader that lets you easily refine sky and lighting in VRChat worlds.',
    },
    ja: {
      docsLabel: 'ドキュメント',
      boothLabel: 'BOOTH',
      pageTitle: `${siteConfig.title} - 様々な空を表現するためのShader`,
      pageDescription:
        'FlexSkyは、VRChatワールドの空と光の表現を簡単に整えられるShaderです。',
    },
    ko: {
      docsLabel: '문서',
      boothLabel: 'BOOTH',
      pageTitle: `${siteConfig.title} - 다양한 하늘을 표현하기 위한 셰이더`,
      pageDescription:
        'FlexSky는 VRChat 월드의 하늘과 조명 표현을 쉽게 정리할 수 있는 셰이더입니다.',
    },
  } as const;
  const text =
    localeText[i18n.currentLocale as keyof typeof localeText] ??
    localeText.en;

  return (
    <Layout
      title={text.pageTitle}
      description={text.pageDescription}>
      <Head>
        <meta property="og:image" content={`${siteConfig.url}${siteConfig.baseUrl}img/FlexSky-thumbnail.png`} />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteConfig.url}${siteConfig.baseUrl}img/FlexSky-thumbnail.png`} />
        <meta name="twitter:title" content={text.pageTitle} />
        <meta name="twitter:description" content={text.pageDescription} />
      </Head>
      <main className={styles.main}>
        <HomepageHero docsLabel={text.docsLabel} boothLabel={text.boothLabel} />
      </main>
    </Layout>
  );
}
