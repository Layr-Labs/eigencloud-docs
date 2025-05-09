import React from 'react';
import SectionHeader from './SectionHeader';
import InteractiveCard from './InteractiveCard';
import styles from './DevelopAVSSection.module.css';

function DevelopAVSSection() {
  const codeBlocks = [
    {
      code: `<span style=\"color:#275F8C\">{<br/>  \"name\": \"AVS\",<br/>  \"website\": \"https.your-avs-site.xyz/\",<br/>  \"description\": \"A description about your AVS\",<br/>  \"logo\": \"http://github.com/logo.png\",<br/>  \"twitter\": \"https://twitter.com/your-avs\",<br/>}</span><br/><br/><span style=\"color:#211569\">function</span> <span style=\"color:#209254\">updateAVSMetadataURI</span>(<br/>  <span style=\"color:#5333B4\">address avs, <br/>  string calldata metadataURI</span><br/>)<br/><br/><span style=\"color:#211569\">function</span> <span style=\"color:#209254\">createOperatorSets</span>(<br/>  <span style=\"color:#5333B4\">address avs,<br/>  CreateSetParams[] calldata params</span><br/>)`
    },
    {
      code: `<span style=\"color:#211569\">function</span> <span style=\"color:#209254\">slashOperator</span>(<br/>  <span style=\"color:#5333B4\">address avs,<br/>  SlashingParams calldata params</span><br/>) <span style=\"color:#211569\">external</span>;<br/><br/><span style=\"color:#211569\">if</span> (malicousEvent == <span style=\"color:#211569\">true</span>){<br/>  <span style=\"color:#5333B4\">slasherContract</span>.<span style=\"color:#209254\">slashOperator</span>(avs, params);<br/>}`
    },
    {
      code: `<span style=\"color:#275F8C\">{<br/>  \"name\": \"AVS\",<br/>  \"website\": \"https.your-avs-site.xyz/\",<br/>  \"description\": \"A description about your AVS\",<br/>  \"logo\": \"http://github.com/logo.png\",<br/>  \"twitter\": \"https://twitter.com/your-avs\",<br/>}</span><br/><br/><span style=\"color:#211569\">function</span> <span style=\"color:#209254\">updateAVSMetadataURI</span>(<br/>  <span style=\"color:#5333B4\">address avs, <br/>  string calldata metadataURI</span><br/>)<br/><br/><span style=\"color:#211569\">function</span> <span style=\"color:#209254\">createOperatorSets</span>(<br/>  <span style=\"color:#5333B4\">address avs,<br/>  CreateSetParams[] calldata params</span><br/>)`
    }
  ];

  const cardData = [
    {
      title: 'Implement Onchain Components',
      desc: 'Implement core AVS functionality in the AVS contracts',
      code: codeBlocks[0].code,
    },
    {
      title: 'Implement Custom Slashing Logic',
      desc: 'Enable service providers to make commitments with slashing as enforcement mechanism.',
      code: codeBlocks[1].code,
    },
    {
      title: 'Distribute Rewards to Stakers and Operators',
      desc: 'Implement performance-based rewards and set variable fee splits.',
      code: codeBlocks[2].code,
    },
  ];

  const [hovered, setHovered] = React.useState(-1);
  const [lastHovered, setLastHovered] = React.useState(-1);

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
                onMouseLeave={handleMouseLeave}
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
                  navigator.clipboard.writeText(`{\n    \"name\": \"AVS\",\n    \"website\": \"https://your-avs-site.xyz/\",\n    \"description\": \"A description about your AVS\",\n    \"logo\": \"http://github.com/logo.png\",\n    \"twitter\": \"https://twitter.com/your-avs\",\n}\n\nfunction updateAVSMetadataURI(\n    address avs, \n    string calldata metadataURI\n)\n\nfunction createOperatorSets(\n    address avs,\n    CreateSetParams[] calldata params\n)`);
                }}
              >
                <img src="/img/copy-icon.png" alt="Copy" className={styles.copyIcon} />
                Copy Snippet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevelopAVSSection; 