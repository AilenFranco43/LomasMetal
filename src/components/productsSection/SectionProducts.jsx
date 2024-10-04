"use client";
import React, { useState, useEffect } from 'react';
import CategoriesNav from './categoriesNav/CategoriesNav.jsx';
import ProductCard from './productCard/ProductCard.jsx';
import styles from './SectionProducts.module.css';

const SectionProducts = () => {
  // Definir productos directamente en el componente
  const products = [
    { id: 1, name: 'Nylon agrario', category: 'nylon', image: '/img/products/producto1.jpeg' , description: 'Nylon agrario negro ,especial para obra, se usa para hormigón,tapar inmuebles , viene en 2 3 4 6 y 8 metros de ancho en 100’y 200 micrones'},
    { id: 2, name: 'Producto 2', category: 'nylon', price: 200 },
    { id: 3, name: 'Producto 3', category: 'mediasombras', price: 300 },
    { id: 4, name: 'Producto 4', category: 'ferreteria', price: 400 },
    { id: 5, name: 'Producto 5', category: 'goma-espuma', price: 500 },
    { id: 6, name: 'Producto 5', category: 'goma-espuma', price: 500 },
    { id: 7, name: 'Producto 7', category: 'mediasombras', price: 300 },
    { id: 8, name: 'Producto 8', category: 'ferreteria', price: 400 },
    { id: 9, name: 'Producto 9', category: 'goma-espuma', price: 500 },
    { id: 10, name: 'Producto 10', category: 'piscinas', price: 100 },
    { id: 20, name: 'Producto 11', category: 'nylon', price: 200 },
    { id: 30, name: 'Producto 12', category: 'mediasombras', price: 300 },
    { id: 40, name: 'Producto 13', category: 'ferreteria', price: 400 },
    { id: 50, name: 'Producto 14', category: 'goma-espuma', price: 500 },
    { id: 60, name: 'Producto 15', category: 'goma-espuma', price: 500 },
    { id: 70, name: 'Producto 16', category: 'mediasombras', price: 300 },
    { id: 80, name: 'Producto 17', category: 'ferreteria', price: 400 },
    { id: 90, name: 'Producto 18', category: 'goma-espuma', price: 500 },
  ];


    // Objeto que mapea valores de categorías a nombres legibles
  const categoryNames = {
    all: 'Todos los productos',
    piscinas: 'Productos de piscinas',
    nylon: 'Nylon de invernadero',
    mediasombras: 'Mediasombras',
    'no-tejidas': 'Telas no tejidas',
    'goma-espuma': 'Goma espuma',
    ferreteria: 'Artículos de ferretería',
    'cubre-cercos': 'Cubre cercos',
  };

  const [filteredProducts, setFilteredProducts] = useState(products); // Inicializar con todos los productos
  const [selectedCategory, setSelectedCategory] = useState("all"); // Categoria seleccionada por defecto


  const handleSelectCategory = (category) => {
    setSelectedCategory(category); // Actualizar la categoría seleccionada
    if (category === "all") {
      setFilteredProducts(products); // Mostrar todos los productos si se selecciona "Todos los productos"
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered); // Filtrar productos según la categoría seleccionada
    }
  };

  return (
    <section id='catalogo' className={styles.sectionProducts}>
      <h2 className={styles.sectionTitle}>Catálogo</h2>
      <div className={styles.containerSectionProducts}>


      <div className={styles.containerCategoriesNav}>
        <p>Filtrar por categoría:</p>
        <CategoriesNav
        onSelectCategory={handleSelectCategory} 
         selectedCategory={selectedCategory} // Pasar la categoría seleccionada
        />
      </div>
      <div className={styles.containerProducts}>

        <div className={styles.containerProductsTitle}>
          <h3 className={styles.productsTitle}>
          {categoryNames[selectedCategory]}
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
