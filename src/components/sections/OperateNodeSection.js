import React, { useRef, useEffect, useState } from 'react';
import SectionHeader from '../SectionHeader';
import InteractiveCard from '../InteractiveCard';
import styles from './OperateNodeSection.module.css';

function OperateNodeSection() {
 

  const cardData = [
    {
      title: 'Install and Register Operator Node',
      desc: 'Review Operator requirements checklist, and install and register Operator Node.',
      image: '/img/landing/Operator1.svg',
      url: 'products/eigenlayer/operators/howto/operator-installation'
    },
    {
      title: 'Set Up Operator Key Management',
      desc: 'Implement key management solutions from simple (ECDSA key rotation) to complex (upstream smart contract permissioning schemes).',
      image: '/img/landing/Operator2.svg',
      url: 'products/eigenlayer/operators/howto/operator-installation#create-and-list-keys'
    },
    {
      title: 'Set Rewards Split',
      desc: 'Set fee rates per AVS, providing economic flexibility and attracting diverse participation.',
      image: '/img/landing/Operator3.svg',
      url: 'products/eigenlayer/operators/howto/configurerewards/set-rewards-split'
    },
    {
      title: 'Claim Rewards',
      desc: 'Batch claim rewards in a single transaction to increase gas efficiency.',
      image: '/img/landing/Operator4.png',
      url: 'products/eigenlayer/operators/howto/claimrewards/batch-claim-rewards'
    },
  ];

  const [hovered, setHovered] = React.useState(0);
  const [lastHovered, setLastHovered] = React.useState(0);
  const [copied, setCopied] = React.useState(false);

  const cardGridRef = useRef(null);
  const [cardGridHeight, setCardGridHeight] = useState(undefined);

  useEffect(() => {
    function updateHeight() {
      if (cardGridRef.current) {
        setCardGridHeight(cardGridRef.current.offsetHeight);
      }
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleMouseEnter = (idx) => {
    setHovered(idx);
    setLastHovered(idx);
  };

  // Helper: Convert HTML code block to plain text with indentation and trailing newline
  function htmlToPlainText(html) {
    let text = html
      .replace(/<span[^>]*>/g, '')
      .replace(/<br\s*\/>/g, '\n')
      .replace(/<\/span>/g, '')
      .replace(/&nbsp;/g, ' ');
    if (!text.endsWith('\n')) text += '\n';
    return text;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader 
          icon="/img/operator-node-icon.png"
          iconBg="#412c7e"
          title="Operate a Node"
          description="EigenLayer enables experienced node operators and validator service providers to maximize yield by unlocking new revenue streams through restaking"
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

export default OperateNodeSection;
