import React from 'react'
import CategoriesNav from './categoriesNav/CategoriesNav.jsx'
import styles from './SectionProducts.module.css'

export const SectionProducts = () => {
  return (
    <section id='productos' className={styles.containerSectionProducts}>
      <div className={styles.containerCategoriesNav}>

        <CategoriesNav/>
      </div>

      

    </section>
  )
}
