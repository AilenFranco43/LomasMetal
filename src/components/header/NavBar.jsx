"use client"
import React, { useState } from "react";
import styled from "styled-components";
import BurgerBtn from "./BurgerBtn";

function NavBar() {
  const [clicked, setClicked] = useState(false); //dos valores: uno para leer el estado y el otro para establecerlo
  const handleClick = () => {
    //cuando esta en true lo pasa a false y viseversa
    setClicked(!clicked);
  };


  return (
    <>
      <NavContainer>
        <nav className={`links ${clicked ? "--active" : ""}`}>
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Productos</a>
          <a href="#contacto">Contacto</a>
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


  .links {
    display: flex;
    flex-direction: column;
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

    a {
      color: var(--clear);
      font-size: 1.5em;
      padding: 15px;

      display: block;
      text-decoration: none;
      width: auto;
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
            font-size: 1.2rem;
            transition: 300ms;
        }
      }
    }
  }
  .links.--active {
    margin-left: auto;
    margin-right: auto;
    top: 80px;
    height: 210px;
    width: 100vw;
    background: var(--main);
    transition: 200ms;

    a {
        width: 100vw;
        text-align: center;
      font-size: 1.5rem;
      z-index: 200; 

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