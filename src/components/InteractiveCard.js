import React from 'react';
import styles from './InteractiveCard.module.css';

function InteractiveCard({ title, desc, isActive, onClick, onMouseEnter, onMouseLeave, to }) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (to) {
      window.location.href = to;
    }
  };

  return (
    <div
      className={styles.card + (isActive ? ' ' + styles.active : '')}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        {isActive && (
          <img src="/img/chevron-icon.png" alt=">" className={styles.chevron} />
        )}
      </div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
}

export default InteractiveCard;
