import React from 'react';
import SectionHeader from '../SectionHeader';
import InteractiveCard from '../InteractiveCard';
import styles from './BuildApplicationSection.module.css';

function BuildApplicationSection() {
  const cardData = [
    {
      title: 'Explore apps on EigenCloud',
      desc: `Discover a growing library of applications built with verifiable trust at their core. From decentralized contests to secure audio streaming, see what's possible on EigenCloud.`,
      image: '/img/landing/build-app-1.png',
      url: 'https://docs.eigenlayer.xyz/build-app'
    },
    {
      title: 'MegaPhone',
      desc: `Fork the repo to launch your own audio streaming on MegaPhone — a fully verifiable, decentralized audio broadcast platform` ,
      image: '/img/landing/build-app-2.png',
      url: 'https://docs.eigenlayer.xyz/build-app'
    },
    {
      title: 'EigenCourt',
      desc: `Run trustless Twitter contests with EigenCourt. Fork the repo and easily set up provably fair giveaways and promotions for your community.`,
      image: '/img/landing/build-app-3.png',
      url: 'https://docs.eigenlayer.xyz/build-app'
    },
  ];
  const [hovered, setHovered] = React.useState(0);
  const [lastHovered, setLastHovered] = React.useState(0);

  const cardGridRef = React.useRef(null);
  const [imageAreaHeight, setImageAreaHeight] = React.useState(0);
  React.useEffect(() => {
    if (cardGridRef.current) {
      const gridHeight = cardGridRef.current.offsetHeight;
      const cards = cardGridRef.current.querySelectorAll(`.${styles.card}`);
      let lastCardMargin = 0;
      if (cards.length > 0) {
        const lastCard = cards[cards.length - 1];
        const style = window.getComputedStyle(lastCard);
        lastCardMargin = parseFloat(style.marginBottom || 0);
      }
      setImageAreaHeight(gridHeight + lastCardMargin);
    }
  }, [cardData, hovered]);

  const handleMouseEnter = (idx) => {
    setHovered(idx);
    setLastHovered(idx);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader 
          icon="/img/build-app-icon.png"
          iconBg="#18623a"
          title="Build an Application"
          description="Leverage Ethereum's security for offchain verification."
        />
        <div className={styles.row}>
          <div className={styles.cardGrid} ref={cardGridRef}>
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
          <div className={styles.imageArea} style={{ height: imageAreaHeight ? `${imageAreaHeight}px` : undefined }}>
            <img src={cardData[lastHovered].image} alt={cardData[lastHovered].title} className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildApplicationSection;
