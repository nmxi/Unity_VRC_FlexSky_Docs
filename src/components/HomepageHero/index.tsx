import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

type HomepageHeroProps = {
  docsLabel: string;
  boothLabel: string;
};

export default function HomepageHero({docsLabel, boothLabel}: HomepageHeroProps): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <section className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroTitle}>
          <picture>
            <source
              media="(max-width: 996px)"
              srcSet={`${siteConfig.baseUrl}img/FlexSky_TopPage_Text_Mobile.png`}
            />
            <img
              src={`${siteConfig.baseUrl}img/FlexSky_TopPage_Text.png`}
              alt="FlexSky"
              className={styles.heroTitleImage}
            />
          </picture>
        </div>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.heroButton)}
            to="/docs/intro">
            {docsLabel}
          </Link>
          <Link
            className={clsx('button button--primary button--lg', styles.heroButton)}
            href="https://nmxi.booth.pm/"
            target="_blank"
            rel="noopener noreferrer">
            {boothLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
