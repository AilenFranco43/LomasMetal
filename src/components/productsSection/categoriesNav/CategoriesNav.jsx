
// "use client";
// import React from 'react';
// import styles from './CategoriesNav.module.css';

// const CategoriesNav = ({ onSelectCategory, selectedCategory  }) => {
//   const categories = [
//     { name: 'Todos los productos', value: 'all' },
//     { name: 'Productos de piscinas', value: 'piscinas' },
//     { name: 'Nylon de invernadero', value: 'nylon' },
//     { name: 'Mediasombras', value: 'mediasombras' },
//     { name: 'Telas no tejidas', value: 'no-tejidas' },
//     { name: 'Goma espuma', value: 'goma-espuma' },
//     { name: 'Artículos de ferretería', value: 'ferreteria' },
//     { name: 'Cubre cercos', value: 'cubre-cercos' },
//   ];

//   return (
//     <nav className={styles.categoriesNav}>
//       <ul className={styles.categoriesList}>
//         {categories.map(category => (
//           <li className={styles.categoryItem} key={category.value}>
//             <button
//               className={`${styles.categoryLink} ${selectedCategory === category.value ? styles.active : ''}`} // Aplicar clase si está seleccionada
//               onClick={() => onSelectCategory(category.value)}
//             >
//               {category.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default CategoriesNav;




"use client";
import React from 'react';
import styles from './CategoriesNav.module.css';

const CategoriesNav = ({ onSelectCategory, selectedCategory, categories }) => {
  return (
    <nav className={styles.categoriesNav}>
      <ul className={styles.categoriesList}>
        {categories.map(category => (
          <li className={styles.categoryItem} key={category.value}>
            <button
              className={`${styles.categoryLink} ${selectedCategory === category.value ? styles.active : ''}`}
              onClick={() => onSelectCategory(category.value)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoriesNav;


