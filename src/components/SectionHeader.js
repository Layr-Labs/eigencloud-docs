import React from 'react';
import styles from './SectionHeader.module.css';

function SectionHeader({ icon, iconBg, title, description }) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.iconWrapper} style={{ background: iconBg }}>
        <img src={icon} alt={`${title} Icon`} className={styles.iconImg} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

export default SectionHeader;
