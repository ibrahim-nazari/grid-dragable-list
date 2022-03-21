import React from 'react';
import styles from './GridContainer.module.css';
export function GridContainer({children}) {
  return (
    <ul
      className={styles.GridContainer}
    >
      {children}
    </ul>
  );
}