import React from 'react';
import styles from './styles.module.css';
import ClickableImage from '@site/src/components/ClickableImage';

type FlowStep = {
  alt: string;
  src: string;
};

const flowSteps: FlowStep[] = [
  {
    alt: 'プリセットを選ぶイメージ',
    src: 'feature-step-1.png',
  },
  {
    alt: '空の色味を調整するイメージ',
    src: 'feature-step-2.png',
  },
  {
    alt: 'ワールドで仕上がりを確認するイメージ',
    src: 'feature-step-3.png',
  },
];

export default function Features(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>主要機能</h2>
          <p className={styles.sectionSubtitle}>
            既存のワールドに、柔らかな空の雰囲気とライティングのまとまりを素早く追加できます。
          </p>
        </div>
        <div className={styles.flowCard}>
          <ol className={styles.flowList}>
            {flowSteps.map((step, index) => (
              <li key={step.alt} className={styles.flowItem}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <div className={styles.stepImage}>
                  <ClickableImage
                    src={`/img/${step.src}`}
                    alt={step.alt}
                    imageClassName={styles.flowImage}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
