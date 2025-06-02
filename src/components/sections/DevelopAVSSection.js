import React from 'react';
import SectionHeader from '../SectionHeader';
import InteractiveCard from '../InteractiveCard';
import styles from './DevelopAVSSection.module.css';

function DevelopAVSSection() {
  const codeBlocks = [
    {
      code: `<span style=\"color:#275F8C\">{</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#275F8C\">\"name\": \"AVS\",</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#275F8C\">\"website\": \"https.your-avs-site.xyz/\",</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#275F8C\">\"description\": \"A description about your AVS\",</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#275F8C\">\"logo\": \"http://github.com/logo.png\",</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#275F8C\">\"twitter\": \"https://twitter.com/your-avs\",</span><br/><span style=\"color:#275F8C\">}</span><br/><br/><span style=\"color:#211569\">function</span> <span style=\"color:#209254\">updateAVSMetadataURI</span>(<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#5333B4\">address avs, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#5333B4\">string calldata metadataURI</span><br/>)<br/><br/><span style=\"color:#211569\">function</span> <span style=\"color:#209254\">createOperatorSets</span>(<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#5333B4\">address avs,</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#5333B4\">CreateSetParams[] calldata params</span><br/>)`
    },
    {
      code: `<span style=\"color:#211569\">function</span> <span style=\"color:#209254\">slashOperator</span>(<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#5333B4\">address avs,<br/>&nbsp;&nbsp;&nbsp;&nbsp;SlashingParams calldata params</span><br/>) <span style=\"color:#211569\">external</span>;<br/><br/><span style=\"color:#211569\">if</span> (malicousEvent == <span style=\"color:#211569\">true</span>){<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#5333B4\">slasherContract</span>.<span style=\"color:#209254\">slashOperator</span>(avs, params);<br/>}`
    },
    {
      code: `<span style=\"color:#275F8C\">{</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#275F8C\">\"name\": \"AVS\",</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#275F8C\">\"website\": \"https.your-avs-site.xyz/\",</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#275F8C\">\"description\": \"A description about your AVS\",</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#275F8C\">\"logo\": \"http://github.com/logo.png\",</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#275F8C\">\"twitter\": \"https://twitter.com/your-avs\",</span><br/><span style=\"color:#275F8C\">}</span><br/><br/><span style=\"color:#211569\">function</span> <span style=\"color:#209254\">createOperatorDirectedAVSRewardsSubmission</span>(<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#5333B4\">address avs, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:#5333B4\">OperatorDirectedRewardsSubmission[] calldata operatorDirectedRewardsSubmissions</span><br/>)<br/>`
    }
  ];

  const cardData = [
    {
      title: 'Implement Onchain Components',
      desc: 'Implement core AVS functionality in the AVS contracts',
      code: codeBlocks[0].code,
      url: 'https://docs.eigenlayer.xyz/develop-avs'
    },
    {
      title: 'Implement Custom Slashing Logic',
      desc: 'Enable service providers to make commitments with slashing as enforcement mechanism.',
      code: codeBlocks[1].code,
      url: 'https://docs.eigenlayer.xyz/develop-avs'
    },
    {
      title: 'Distribute Rewards to Stakers and Operators',
      desc: 'Implement performance-based rewards and set variable fee splits.',
      code: codeBlocks[2].code,
      url: 'https://docs.eigenlayer.xyz/develop-avs'
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
