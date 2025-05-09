import React from 'react';
import styles from './CommunityCard.module.css';

function CommunityCard({ icon, title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <img src={icon} alt={title} className={styles.iconImg} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </a>
  );
}

export default CommunityCard; 