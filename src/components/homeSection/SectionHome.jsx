"use client";
import React from 'react';
import styles from './SectionHome.module.css'; // Importa el archivo CSS module
import ImageLogo from 'next/image';
import SectionInfo from './sectionInfo/SectionInfo';

const SectionHome = () => {
  return (
    <section className={styles.containerSectionHome} id='inicio'>
    <div className={styles.overlay}>
      <div className={styles.containerPresentation}>

      <div className={styles.containerLogoHome}>
        <ImageLogo
          src="/img/logo/logoLomasMetal.png"
          alt="Logo de Lomas Metal"
          width={300}
          height={300}
        />
      </div>

      <div className={styles.marquee}>
        <div className={styles.marquee__content}>
          <h2 className={styles.marquee__item}>
            TELAS PLÁSTICAS · NYLON INVERNADERO · NEGRO-CRISTAL · PILETAS · 
            FILTROS-BOMBAS · CLORO · MEDIA SOMBRA · FRISELINA · GOMA ESPUMA ·
            TELAS PLÁSTICAS · NYLON INVERNADERO · NEGRO-CRISTAL · PILETAS ·
            FILTROS-BOMBAS · CLORO · MEDIA SOMBRA · FRISELINA · GOMA ESPUMA ·
          </h2>
          <h2 className={styles.marquee__item}>
            TELAS PLÁSTICAS · NYLON INVERNADERO · NEGRO-CRISTAL · PILETAS ·
            FILTROS-BOMBAS · CLORO · MEDIA SOMBRA · FRISELINA · GOMA ESPUMA ·
          </h2>
        </div>
      </div>
        
      </div>


    <div className={styles.containerSectionInfo}>

      <SectionInfo/>
    </div>


      
    </div>
    </section>
  );
};


export default SectionHome;
