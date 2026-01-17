import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HomepageHero from '@site/src/components/HomepageHero';
import Features from '@site/src/components/Features';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isJa = i18n.currentLocale === 'ja';
  const isKo = i18n.currentLocale === 'ko';
  const docsLabel = isJa ? 'ドキュメント' : isKo ? '문서' : 'Documentation';
  const boothLabel = 'BOOTH';
  const pageTitle = isJa
    ? `${siteConfig.title} - VRChat向け空のShader`
    : isKo
      ? `${siteConfig.title} - VRChat용 하늘 셰이더`
      : `${siteConfig.title} - Sky Shader for VRChat`;
  const pageDescription = isJa
    ? 'FlexSkyは、VRChatワールドの空と光の表現を簡単に整えられるShaderです。'
    : isKo
      ? 'FlexSky는 VRChat 월드의 하늘과 조명 표현을 쉽게 정리할 수 있는 셰이더입니다.'
      : 'FlexSky is a shader that lets you easily refine sky and lighting in VRChat worlds.';

  return (
    <Layout
      title={pageTitle}
      description={pageDescription}>
      <Head>
        <meta property="og:image" content={`${siteConfig.url}${siteConfig.baseUrl}img/FlexSky-thumbnail.png`} />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteConfig.url}${siteConfig.baseUrl}img/FlexSky-thumbnail.png`} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      <main className={styles.main}>
        <HomepageHero docsLabel={docsLabel} boothLabel={boothLabel} />
      </main>
    </Layout>
  );
}
