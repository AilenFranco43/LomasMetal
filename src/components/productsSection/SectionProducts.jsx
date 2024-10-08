"use client";
import React, { useState, useEffect } from 'react';
import CategoriesNav from './categoriesNav/CategoriesNav.jsx';
import ProductCard from './productCard/ProductCard.jsx';
import styles from './SectionProducts.module.css';

const SectionProducts = () => {
  const [products, setProducts] = useState([]); // Inicialmente vacío
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState('all'); 
  const [categories, setCategories] = useState([]); // Estado para las categorías

  // Función para obtener los productos desde el JSON
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/data/products.json');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); // Inicialmente mostrar todos los productos
    };

    fetchProducts();
  }, []);

  // Función para obtener las categorías desde el JSON
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('/data/categories.json');
      const data = await response.json();
      setCategories(data); // Guardar las categorías en el estado
    };

    fetchCategories();
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <section id='catalogo' className={styles.sectionProducts}>
      <h2 className={styles.sectionTitle}>Catálogo</h2>
      <div className={styles.containerSectionProducts}>
        <div className={styles.containerCategoriesNav}>
          <p>Filtrar por categoría:</p>
          <CategoriesNav
            categories={categories} // Pasar las categorías obtenidas al componente CategoriesNav
            onSelectCategory={handleSelectCategory}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className={styles.containerProducts}>
          <div className={styles.containerProductsTitle}>
            <h3 className={styles.productsTitle}>
              {categories.find(cat => cat.value === selectedCategory)?.name || "Productos"}
            </h3>
          </div>
          <div className={styles.containerCards}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No hay productos disponibles en esta categoría.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProducts;
