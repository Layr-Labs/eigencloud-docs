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
            desc="Secure, high-throughput, and decentralized Data Availability."
            link="/eigenda/core-concepts/overview"
          />
          <FigmaCard
            title="EigenLayer"
            desc="Stake ETH & EIGEN. Secure the cloud powering verifiable apps, agents, and services."
            link="/eigenlayer/concepts/eigenlayer-overview"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
