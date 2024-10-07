"use client"
import React, { useState, useEffect } from 'react';
import styles from './WhatsappBtn.module.css';
import { FaWhatsapp } from "react-icons/fa";

const WhatsappBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionInicio = document.getElementById('inicio');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(false); // Si la sección "inicio" está visible, ocultamos el botón
        } else {
          setIsVisible(true);
        }
      });
    }, {
      threshold: 0.9 // apenas el 10% de la sección "inicio" esté visible
    });

    if (sectionInicio) {
      observer.observe(sectionInicio);
    }

    // Cleanup al desmontar el componente
    return () => {
      if (sectionInicio) {
        observer.unobserve(sectionInicio);
      }
    };
  }, []);

  return (
    <button className={`${styles.whatsappBtn} ${isVisible ? styles.visible : ''}`}>
      <a href="https://api.whatsapp.com/send?phone=5491138187030&text=Hola,%20tengo%20una%20consulta%20sobre%20sus%20productos.%20¿Podrían%20ayudarme?" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </button>
  );
};

export default WhatsappBtn;
