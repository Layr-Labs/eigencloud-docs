import React from 'react';
import styles from './CommunityCard.module.css';

function CommunityCard({ icon, title, description, link }) {
  // Split title and arrow
  const arrowIndex = title.lastIndexOf('→');
  const hasArrow = arrowIndex !== -1;
  const mainTitle = hasArrow ? title.slice(0, arrowIndex).trim() : title;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <img src={icon} alt={title} className={styles.iconImg} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            {mainTitle}
            {hasArrow && <span className={styles.arrow}>&nbsp;→</span>}
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </a>
  );
}

export default CommunityCard;
