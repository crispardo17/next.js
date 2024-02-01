'use client'
import React from 'react';
import styles from './button.module.css';

const CustomButtonGra = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={styles.btnGra}
    >
      {children}
    </button>
  );
};

export default CustomButtonGra;