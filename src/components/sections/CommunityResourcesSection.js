import React from 'react';
import CommunityCard from '../CommunityCard';
import styles from './CommunityResourcesSection.module.css';

function CommunityResourcesSection() {
  const resources = [
    {
      icon: '/img/community-avs.png',
      title: 'Book an AVS Intro Call →',
      description: 'Chat with the EigenLayer team about your AVS idea',
      link: 'https://www.eigencloud.xyz/contact'
    },
    {
      icon: '/img/community-twitter.png',
      title: 'Follow us on Twitter →',
      description: 'Stay up to date with the latest updates',
      link: 'https://x.com/BuildOnEigen'
    },
    {
      icon: '/img/community-groupchat.png',
      title: 'Join the Telegram group chat →',
      description: 'Meet and chat with other developers and builders',
      link: 'https://ein6l.share.hsforms.com/22TpUSMw-SZaba6q_gNp2hA'
    },
    {
      icon: '/img/community-discord.png',
      title: 'Join the EigenLayer Community Discord →',
      description: 'Join the Discord for discussions about EigenLayer',
      link: 'https://discord.com/invite/eigenlayer'
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>Community resources</div>
        <div className={styles.grid}>
          {resources.map((resource) => (
            <CommunityCard
              key={resource.title}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
              link={resource.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityResourcesSection;
