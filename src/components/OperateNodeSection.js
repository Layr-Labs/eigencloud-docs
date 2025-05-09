import React from 'react';
import SectionHeader from './SectionHeader';
import InteractiveCard from './InteractiveCard';
import styles from './OperateNodeSection.module.css';

function OperateNodeSection() {
  const codeBlocks = [
    `<span style="color:#275F8C">{</span>
<span style="color:#275F8C">"name": "AVS",</span>
<span style="color:#275F8C">"website": "https.your-avs-site.xyz/",</span>
<span style="color:#275F8C">"description": "A description about your AVS",</span>
<span style="color:#275F8C">"logo": "http://github.com/logo.png",</span>
<span style="color:#275F8C">"twitter": "https://twitter.com/your-avs",</span>
<span style="color:#275F8C">}</span><br/><br/>
<span style="color:#211569">function</span> <span style="color:#209254">updateAVSMetadataURI</span>(<br/>&nbsp;&nbsp;<span style="color:#5333B4">address avs, </span><br/>&nbsp;&nbsp;<span style="color:#5333B4">string calldata metadataURI</span><br/>)<br/><br/><span style="color:#211569">function</span> <span style="color:#209254">createOperatorSets</span>(<br/>&nbsp;&nbsp;<span style="color:#5333B4">address avs,</span><br/>&nbsp;&nbsp;<span style="color:#5333B4">CreateSetParams[] calldata params</span><br/>)`,
    `eigenlayer operator keys create --key-type ecdsa [keyname]
eigenlayer operator keys create --key-type bls [keyname]`,
    `eigenlayer operator get-rewards-split
eigenlayer operator set-rewards-split`,
    `./bin/eigenlayer rewards show \
  --network mainnet \
  --earner-address <earner-address> \
  --claim-type unclaimed`
  ];

  const cardData = [
    {
      title: 'Install and Register Operator Node',
      desc: 'Review Operator requirements checklist, and install and register Operator Node.',
      code: codeBlocks[0],
    },
    {
      title: 'Set up Operator Key Management',
      desc: 'User Access Management (UAM) enables Operators to implement key management solutions from simple (ECDSA key rotation) to complex (upstream smart contract permissioning schemes).',
      code: codeBlocks[1],
    },
    {
      title: 'Set Rewards Split',
      desc: 'Operators can set their own fee rates per AVS, providing economic flexibility and attracting diverse participation.',
      code: codeBlocks[2],
    },
    {
      title: 'Claim Rewards',
      desc: 'Batch claim rewards in a single transaction to increase gas efficiency.',
      code: codeBlocks[3],
    },
  ];

  const [hovered, setHovered] = React.useState(-1);
  const [lastHovered, setLastHovered] = React.useState(-1);
  const [copied, setCopied] = React.useState(false);

  const handleMouseEnter = (idx) => {
    setHovered(idx);
    setLastHovered(idx);
  };
  
  const handleMouseLeave = () => {
    setHovered(-1);
  };

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
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
          <div className={styles.codeArea}>
            <div className={styles.codeBlock}>
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
                  const codeToCopy = lastHovered !== -1 
                    ? cardData[lastHovered].code
                    : codeBlocks[0];
                  navigator.clipboard.writeText(codeToCopy);
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