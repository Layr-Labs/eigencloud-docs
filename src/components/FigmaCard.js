import React from 'react';
import styles from './FigmaCard.module.css';

function FigmaCard({ title, desc }) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
}

export default FigmaCard; 