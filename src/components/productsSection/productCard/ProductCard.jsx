
"use client"
// components/Card.js
import React from 'react';
import styles from './ProductCard.module.css';

const Card = ({ product }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={product.image} alt={product.name} />
      <h3 className={styles.title}>{product.name}</h3>
      <button className={styles.btnDetail}>Detalles
      </button>
    </div>
  );
};

export default Card;
