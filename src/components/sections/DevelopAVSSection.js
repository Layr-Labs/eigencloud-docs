import React from 'react';
import SectionHeader from '../SectionHeader';
import InteractiveCard from '../InteractiveCard';
import styles from './DevelopAVSSection.module.css';

function DevelopAVSSection() {
  

  const cardData = [
    {
      title: 'Implement Onchain Components',
      desc: 'Implement core AVS functionality in the AVS contracts',
      image: '/img/AVS1.png',
      url: 'products/eigenlayer/developers/howto/get-started/implement-minimum-onchain-components'
    },
    {
      title: 'Implement Custom Slashing Logic',
      desc: 'Enable service providers to make commitments with slashing as enforcement mechanism.',
      image: '/img/AVS2.png',
      url: '/products/eigenlayer/developers/howto/build/slashing/implement-slashing'
    },
    {
      title: 'Distribute Rewards to Stakers and Operators',
      desc: 'Implement performance-based rewards and set variable fee splits.',
      image: '/img/AVS3.png',
      url: 'products/eigenlayer/developers/howto/build/submit-rewards-submissions'
    },
  ];

  const [hovered, setHovered] = React.useState(0);
  const [lastHovered, setLastHovered] = React.useState(0);
  const [copied, setCopied] = React.useState(false);

  const handleMouseEnter = (idx) => {
    setHovered(idx);
    setLastHovered(idx);
  };

  // Helper: Convert HTML code block to plain text with indentation and trailing newline
  function htmlToPlainText(html) {
    // Remove all span tags and keep inner text
    let text = html
      .replace(/<span[^>]*>/g, '')
      .replace(/<br\s*\/>/g, '\n')
      .replace(/<\/span>/g, '')
      .replace(/&nbsp;/g, ' ');
    // Ensure trailing newline
    if (!text.endsWith('\n')) text += '\n';
    return text;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader 
          icon="/img/avs-icon.png"
          iconBg="#6B3A23"
          title="Develop an AVS"
          description="Leverage Ethereum's security for offchain verification."
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
          <div className={styles.codeArea}>
            <div className={styles.codeBlock}>
              {lastHovered === -1
                ? (
                  <div
                    className={styles.codeContent}
                    dangerouslySetInnerHTML={{ __html: codeBlocks[0].code }}
                  />
                )
                : (
                  <div
                    className={styles.codeContent}
                    dangerouslySetInnerHTML={{ __html: cardData[lastHovered].code ? cardData[lastHovered].code.replace(/\n/g, '<br/>') : '' }}
                  />
                )}
              <button
                className={styles.copyButton}
                onClick={() => {
                  const html = lastHovered === -1
                    ? codeBlocks[0].code
                    : cardData[lastHovered].code;
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

export default DevelopAVSSection;
