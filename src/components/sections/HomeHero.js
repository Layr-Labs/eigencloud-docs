import React from 'react';
import FigmaCard from '../FigmaCard';
import styles from './HomeHero.module.css';

function HomeHero() {
  const dotPattern = styles.dotPattern;

  return (
    <section className={dotPattern}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img src="/img/eigencloud-logo.png" alt="EigenCloud Logo" className={styles.logoImg} />
        </div>
        <h1 className={styles.h1}>Build on EigenCloud</h1>
        <div className={styles.subheading}>
          EigenCloud brings blockchain verification to the real world, letting developers build applications, agents, and AVSs that can securely verify any input, data or event using easy to use cloud services with no blockchain expertise needed.
        </div>
        <div className={styles.divider} />
        <div className={styles.learnTitle}>Learn about EigenCloud</div>
        <div className={styles.cardsRow}>
          <FigmaCard
            title="What is EigenLayer"
            desc="The fundamentals of EigenLayer and how it enables shared security"
          />
          <FigmaCard
            title="Data Availability with EigenDA"
            desc="Fast, reliable data availability for high-throughput applications"
          />
          <FigmaCard
            title="An intro to AVSs"
            desc="Unlock fundamentally new possibilities for decentralized coordination"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero; 