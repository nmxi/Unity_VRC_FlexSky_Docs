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
  const docsLabel = isJa ? 'ドキュメント' : 'Documentation';
  const boothLabel = isJa ? 'BOOTH' : 'BOOTH';

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
