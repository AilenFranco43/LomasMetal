"use client"
import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import BurgerBtn from "../burgerBtn/BurgerBtn";

function NavBar() {
  const [clicked, setClicked] = useState(false); //estado para el menu movil
  
   // Lógica para alternar el estado del menú móvil
  const handleClick = () => {    setClicked(!clicked);
  };


  const [activeSection, setActiveSection] = useState(""); // Estado para la sección activa
  const [isClient, setIsClient] = useState(false); // Para asegurarnos de que estamos en el cliente

  // Verifica si el componente se está renderizando en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);


  // Lógica de IntersectionObserver para detectar la sección visible
  useEffect(() => {
    if (!isClient) return; // Solo ejecuta esto en el cliente

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Actualiza la sección activa
          }
        });
      },
      { threshold: 0.5 } // Cambia el umbral según la visibilidad que se necesite
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isClient]);


  return (
    <>
      <div className={styles.navcontainer}>
        <nav className={`${styles.links} ${clicked ? styles["--active"] : ""}`}>
        {isClient && ( // Solo renderiza los enlaces después de que el cliente esté disponible
              <>
              <a
                href="#inicio"
                className={activeSection === "inicio" ? styles.active : ""}
              >
                Inicio
              </a>
              <a
                href="#catalogo"
                className={activeSection === "catalogo" ? styles.active : ""}
              >
                Productos
              </a>
              <a
                href="#contacto"
                className={activeSection === "contacto" ? styles.active : ""}
              >
                Contacto
              </a>
              </>
        )}
        </nav>
        <div className={styles.burgerBtn}>
          <BurgerBtn clicked={clicked} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}
export default NavBar;