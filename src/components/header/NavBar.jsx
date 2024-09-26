"use client"
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BurgerBtn from "./BurgerBtn";

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
      <NavContainer>
        <nav className={`links ${clicked ? "--active" : ""}`}>
        {isClient && ( // Solo renderiza los enlaces después de que el cliente esté disponible
              <>
              <a
                href="#inicio"
                className={activeSection === "inicio" ? "active" : ""}
              >
                Inicio
              </a>
              <a
                href="#catalogo"
                className={activeSection === "catalogo" ? "active" : ""}
              >
                Productos
              </a>
              <a
                href="#contacto"
                className={activeSection === "contacto" ? "active" : ""}
              >
                Contacto
              </a>
              </>
        )}
        </nav>
        <div className="burgerBtn">
          <BurgerBtn clicked={clicked} handleClick={handleClick} />
        </div>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.div`
  position: relative;
  top: 4px;
  right: 0;
  color: var(--main);
  padding-right: 1rem;
  display: flex;
  align-items: center; 
  justify-content: space-between;
  z-index: 200; /* Asegura que esté encima del clip-path */

  .links {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: fixed;
    top: 2.7rem;
    left: 0;
    height: 100vh;
    width: 100vw;

    top: -1000px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 270px;
    background: transparent;
    z-index: 300; 
    transition: 300ms;

    a {
      color: var(--clear);
      font-size: 1.5em;
      padding: 15px;

      display: block;
      text-decoration: none;
      width: auto;
      &.active {
        font-weight: bold; 
      }
    }

    @media (min-width: 768px) {
      position: fixed;
      left: 0;
      top: 10px;
      padding-top: 0;
      flex-direction: row;

      height: 3.6rem;
      width: 100%;

      justify-content: flex-end;
      align-items: center;
    

      a {
        font-size: 1.2rem;

        color: var(--clear);
        display: inline;
        position: relative;
        padding: 15px 20px;
        &:hover{
          font-weight: bold;
          transition:300ms;
        }
      }
    }
  }
  .links.--active {
    margin-left: auto;
    margin-right: auto;
    top: 80px; //cambiar a 80
    height: 210px;
    width: 100vw;
    background: var(--main);
    transition: 200ms;
    z-index: 300;

    a {
        width: 100vw;
        text-align: center;
      font-size: 1.5rem;
      z-index: -100; 

      &:hover {
        background: var(--secondary);
      }
    }
  }

  .burgerBtn {
    @media (min-width: 768px) {
      display: none;
    }
  }

`;

export default NavBar;