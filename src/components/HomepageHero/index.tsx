import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function HomepageHero(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <section className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroTitle}>
          <img
            src={`${siteConfig.baseUrl}img/FlexSky_TopPage_Text.png`}
            alt="FlexSky"
            className={styles.heroTitleImage}
          />
        </div>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.heroButton)}
            to="/docs/intro">
            ドキュメントを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
