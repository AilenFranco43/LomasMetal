// components/Modal.js
import React from 'react';
import styles from './ProductModal.module.css';

const ProductModal = ({ product, closeModal }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={closeModal}>X</button>
        <img className={styles.modalImage} src={product.image} alt={product.name} />
        <h3 className={styles.modalTitle}>{product.name}</h3>
        <p className={styles.modalDescription}>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
