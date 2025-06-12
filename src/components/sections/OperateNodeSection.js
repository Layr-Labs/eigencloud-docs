import React, { useRef, useEffect, useState } from 'react';
import SectionHeader from '../SectionHeader';
import InteractiveCard from '../InteractiveCard';
import styles from './OperateNodeSection.module.css';

function OperateNodeSection() {
 

  const cardData = [
    {
      title: 'Install and Register Operator Node',
      desc: 'Review Operator requirements checklist, and install and register Operator Node.',
      image: '/img/Operator1.png',
      url: 'products/eigenlayer/operators/howto/operator-installation'
    },
    {
      title: 'Set Up Operator Key Management',
      desc: 'Implement key management solutions from simple (ECDSA key rotation) to complex (upstream smart contract permissioning schemes).',
      image: '/img/Operator2.png',
      url: 'products/eigenlayer/operators/howto/operator-installation#create-and-list-keys'
    },
    {
      title: 'Set Rewards Split',
      desc: 'Set fee rates per AVS, providing economic flexibility and attracting diverse participation.',
      image: '/img/Operator3.png',
      url: 'products/eigenlayer/operators/howto/configurerewards/set-rewards-split'
    },
    {
      title: 'Claim Rewards',
      desc: 'Batch claim rewards in a single transaction to increase gas efficiency.',
      image: '/img/Operator4.png',
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
          <div className={styles.codeArea} style={cardGridHeight ? { height: cardGridHeight } : {}}>
            <div className={styles.codeBlock} style={cardGridHeight ? { height: '100%' } : {}}>
              {lastHovered === -1 ? (
                <div
                  className={styles.codeContent}
                  dangerouslySetInnerHTML={{ __html: codeBlocks[0] }}
                />
              ) : (
                <div
                  className={styles.codeContent}
                  dangerouslySetInnerHTML={{ __html: cardData[lastHovered].code ? cardData[lastHovered].code.replace(/\n/g, '<br/>') : '' }}
                />
              )}
              <button
                className={styles.copyButton}
                onClick={() => {
                  const html = lastHovered !== -1 
                    ? cardData[lastHovered].code
                    : codeBlocks[0];
                  const plain = htmlToPlainText(html);
                  navigator.clipboard.writeText(plain);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1200);
                }}
              >
                <img src="/img/copy-icon.png" alt="Copy" className={styles.copyIcon} />
                {copied ? 'Copied!' : 'Copy Snippet'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OperateNodeSection;
