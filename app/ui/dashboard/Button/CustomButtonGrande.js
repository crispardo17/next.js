'use client'
import React from 'react';
import styles from './button.module.css';

const CustomButtonGrande = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={styles.btnGrande}
    >
      {children}
    </button>
  );
};

export default CustomButtonGrande;