"use client"
import React from 'react';
import styles from './CategoriesNav.module.css';


const CategoriesNav = () => {
  return (
<nav className={styles.categoriesNav}>
    <ul className={styles.categoriesList}>
        <li className={styles.categoryItem}>
            <button className={styles.categoryLink}>Todos los productos</button>
        </li>
        <li className={styles.categoryItem}>
            <button className={styles.categoryLink}>Productos de piscinas</button>
        </li>
        <li className={styles.categoryItem}>
            <button className={styles.categoryLink}>Nylon de invernadero</button>
        </li>
        <li className={styles.categoryItem}>
            <button className={styles.categoryLink}>Mediasombras</button>
        </li>
        <li className={styles.categoryItem}>
            <button className={styles.categoryLink}>Telas no tejidas</button>
        </li>
        <li className={styles.categoryItem}>
            <button className={styles.categoryLink}>Goma espuma</button>
        </li>
        <li className={styles.categoryItem}>
            <button className={styles.categoryLink}>Artículos de ferretería</button>
        </li>
        <li className={styles.categoryItem}>
            <button className={styles.categoryLink}>Cubre cercos</button>
        </li>
    </ul>
</nav>


  );
};

export default CategoriesNav;
