import React from 'react';
import FigmaCard from '../FigmaCard';
import styles from './HomeHero.module.css';

function HomeHero() {
  const dotPattern = styles.dotPattern;

  return (
    <section className={dotPattern}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Build on EigenCloud</h1>
        <div className={styles.subheading}>
          EigenCloud brings blockchain verification to the real world, letting developers build applications, agents, and services that can securely verify any input, data or event.
        </div>
        <div className={styles.divider} />
        <div className={styles.learnTitle}>Get started building.</div>
        <div className={styles.cardsRow}>
          <FigmaCard
            title="EigenCompute"
            desc="Verifiable containerized compute."
            link="/eigencompute/get-started/eigencompute-overview"
          />
          <FigmaCard
            title="EigenDA"
            desc="High-throughput data availability for rollups and applications."
            link="/eigenda/core-concepts/overview"
          />
          <FigmaCard
            title="AgentKit"
            desc="Build and deploy sovereign agents with verifiable execution."
            link="/agentkit/get-started/agentkit-overview"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
