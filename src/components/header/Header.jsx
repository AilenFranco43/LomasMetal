"use client";
import React from 'react';
import NavBar from './navBar/NavBar';
import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.containerLogoHeader}>
        <Image 
          src="/img/logo/logoLomasMetal.png" 
          alt="Logo de Lomas Metal"
          width={65}
          height={65}
        />  
      </div>

      <div className={styles.containerNav}>
        <NavBar/>
      </div>
    </div>
  );
};

export default Header;
