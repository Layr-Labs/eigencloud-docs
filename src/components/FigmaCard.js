import React from 'react';
import styles from './FigmaCard.module.css';

function FigmaCard({ title, desc, link = '#', className = '' }) {
  return (
    <a href={link} className={`${styles.card} ${className}`}>
      <div className={styles.titleRow}>
        <div className={styles.title}>{title}</div>
        <img src="/img/chevron-icon.png" alt="Chevron" className={styles.chevron} aria-hidden="true" />
      </div>
      <div className={styles.desc}>{desc}</div>
    </a>
  );
}

export default FigmaCard;
