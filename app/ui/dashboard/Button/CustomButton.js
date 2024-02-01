'use client'
import React from 'react';
import styles from './button.module.css';

const CustomButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={styles.btn}
    >
      {children}
    </button>
  );
};

export default CustomButton;