"use client"
import React, { useState } from 'react';
import styles from './ProductCard.module.css';
import ProductModal from './../productModal/ProductModal.jsx';

const Card = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <img className={styles.image} src={product.image} alt={product.name} />
        <h3 className={styles.title}>{product.name}</h3>
        <button className={styles.btnDetail} onClick={handleDetailsClick}>Detalles</button>
      </div>

      {isModalOpen && (
        <ProductModal product={product} closeModal={closeModal} />
      )}
    </>
  );
};

export default Card;
