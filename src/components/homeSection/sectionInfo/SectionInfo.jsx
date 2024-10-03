import React from 'react';
import styles from './SectionInfo.module.css';
import Image from 'next/image';

const SectionInfo = () => {
  return (
    <section className={styles.sectionInfo}>
      <div className={styles.containerImg}>
        <Image
          src="/img/sectionInfo/envios.png"
          alt="Envíos a todo el país"
          width={100}
          height={100}
      
         
        />
        <p className={styles.imgDescription}>Envíos a todo el país</p>
      </div>
      <div className={styles.containerImg}>
        <Image
          src="/img/sectionInfo/antiguedad.png"
          alt="Más de 30 años construyendo confianza y soluciones"
          width={100}
          height={100}
         
          
        />
        <p className={styles.imgDescription}>Más de 30 años construyendo confianza y soluciones</p>
      </div>
      <div className={styles.containerImg}>
        <Image
          src="/img/sectionInfo/MLiderPlatinum.png"
          alt="Logo de Lomas Metal"
          width={80}
          height={80}

    
        />
        <p className={styles.imgDescription}>Mercado Libre PLATINUM: más de 10mil ventas en el último año</p>
      </div>
    </section>
  );
};

export default SectionInfo;
