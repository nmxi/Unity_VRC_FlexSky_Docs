import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type UseCaseItem = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const UseCaseList: UseCaseItem[] = [
  {
    title: 'イベントワールド',
    description: '時間帯の切り替えや雲量の調整で、演出に合わせた空を演出できます。',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="14" width="18" height="6" rx="1" opacity="0.3"/>
        <circle cx="7" cy="10" r="2"/>
        <circle cx="12" cy="10" r="2"/>
        <circle cx="17" cy="10" r="2"/>
        <path d="M12 3v4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'ロールプレイワールド',
    description: '物語や季節に合わせた空の色味で、世界観の一体感を高めます。',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="10" width="8" height="10" rx="1" opacity="0.8"/>
        <rect x="13" y="10" width="8" height="10" rx="1" opacity="0.8"/>
        <rect x="8" y="3" width="8" height="7" rx="1" opacity="0.5"/>
        <path d="M6 15h2m8 0h2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'ゲームワールド',
    description: '視認性に合わせた明るさや霧の調整で、遊びやすさを調整します。',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 4v6l-4 4 4 4v6h10v-6l4-4-4-4V4z" opacity="0.3"/>
        <circle cx="9" cy="12" r="2"/>
        <circle cx="15" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    title: '写真・撮影スポット',
    description: '空のグラデーションと光量を調整し、撮影に適した雰囲気を作れます。',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="8" width="18" height="12" rx="1" opacity="0.3"/>
        <rect x="7" y="11" width="10" height="6" rx="0.5" opacity="0.5"/>
        <circle cx="12" cy="5" r="2"/>
      </svg>
    ),
  },
];

function UseCase({title, description, icon}: UseCaseItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className={styles.useCaseCard}>
        <div className={styles.useCaseIcon}>{icon}</div>
        <div className={styles.useCaseContent}>
          <h3 className={styles.useCaseTitle}>{title}</h3>
          <p className={styles.useCaseDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function UseCases(): JSX.Element {
  return (
    <section className={styles.useCases}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>使用例</h2>
          <p className={styles.sectionSubtitle}>
            さまざまなワールドで空の印象を簡単に整えられます
          </p>
        </div>
        <div className="row">
          {UseCaseList.map((props, idx) => (
            <UseCase key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
