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
          EigenCloud brings blockchain verification to the real world, letting developers build applications, agents, and services that can securely verify any input, data or event.
        </div>
        <div className={styles.divider} />
        <div className={styles.learnTitle}>Get started building.</div>
        <div className={styles.cardsRow}>
          <FigmaCard
            title="EigenAI"
            desc="Verifiable, deterministic LLM inference."
            link="/eigenai/concepts/eigenai-overview"
          />
          <FigmaCard
            title="EigenCompute"
            desc="Verifiable containerized compute."
            link="/eigencompute/get-started/eigencompute-overview"
          />
          <FigmaCard
            title="DevKit"
            desc="Unified CLI for building EigenLayer AVSs."
            link="/eigenlayer/developers/howto/get-started-with-devkit/start-building-task-based-avs"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
