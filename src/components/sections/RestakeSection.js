import React from 'react';
import SectionHeader from '../SectionHeader';
import InteractiveCard from '../InteractiveCard';
import styles from './RestakeSection.module.css';

function RestakeSection() {
  const cardData = [
    {
      title: 'Restake ETH and Delegate to an Operator',
      desc: 'Using the EigenLayer app.',
      image: '/img/landing/restake-1.png',
      url: 'products/eigenlayer/restakers/concepts/overview'
    },
    {
      title: 'Native vs Liquid Restaking and how to participate',
      desc: 'EigenLayer enables native and liquid restaking.',
      image: '/img/landing/restake-2.png',
      url: 'products/eigenlayer/restakers/concepts/overview#restaking-methods'
    },
    {
      title: 'Claim Rewards using the EigenLayer app',
      desc: 'Easily claim Rewards in the web app.',
      image: '/img/landing/restake-3.png',
      url: 'products/eigenlayer/restakers/restaking-guides/claim-rewards-app'
    },
  ];
  const [hovered, setHovered] = React.useState(0);
  const [lastHovered, setLastHovered] = React.useState(0);

  const handleMouseEnter = (idx) => {
    setHovered(idx);
    setLastHovered(idx);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader 
          icon="/img/restake-icon.png"
          iconBg="#876626"
          title="Restake"
          description="Secure EigenCloud with restaked ETH and other assets — earn rewards as you go."
        />
        <div className={styles.row}>
          <div className={styles.cardGrid}>
            {cardData.map((card, idx) => (
              <InteractiveCard
                key={card.title}
                title={card.title}
                desc={card.desc}
                isActive={hovered === idx}
                onMouseEnter={() => handleMouseEnter(idx)}
                to={card.url}
              />
            ))}
          </div>
          <div className={styles.imageArea}>
            <img src={cardData[lastHovered].image} alt={cardData[lastHovered].title} className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestakeSection;
