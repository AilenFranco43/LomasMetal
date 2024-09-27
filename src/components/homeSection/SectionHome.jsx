"use client";
import React from 'react';
import styled, { keyframes } from "styled-components";
import ImageLogo from 'next/image';

export const SectionHome = () => {
  return (
    <ContainerSectionHome id='inicio'>
      <div className="containerLogoHome">
        <ImageLogo
          src="/img/logo/logoLomasMetal.png"
          alt="Logo de Lomas Metal"
          width={300}
          height={300}
        />
      </div>

      <Marquee className='marquee'>
        <div className='marquee__content'>
          <h2 className='marquee__item'>TELAS PLÁSTICAS · NYLON INVERNADERO · NEGRO-CRISTAL · PILETAS · 
            FILTROS-BOMBAS · CLORO · MEDIA SOMBRA · FRISELINA · GOMA ESPUMA · TELAS PLÁSTICAS · NYLON INVERNADERO · NEGRO-CRISTAL · PILETAS · 
            FILTROS-BOMBAS · CLORO · MEDIA SOMBRA · FRISELINA · GOMA ESPUMA ·</h2>
          <h2 className='marquee__item'>TELAS PLÁSTICAS · NYLON INVERNADERO · NEGRO-CRISTAL · PILETAS · 
            FILTROS-BOMBAS · CLORO · MEDIA SOMBRA · FRISELINA · GOMA ESPUMA ·</h2>
        </div>
      </Marquee>
    </ContainerSectionHome>
  );
}

// Definir la animación
const scrolling = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const ContainerSectionHome = styled.section`
  height: 100vh;
  background-image: url('/img/backgrounds/bg-home.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .containerLogoHome {
    top: 85px;
    display: flex;
    justify-content: center;
    z-index: 1;
  }
`;

const Marquee = styled.div`
  width: 400%;
  height: 90px;
  margin-top: .5rem;
  
  overflow: hidden;
  .marquee__content {
    display: flex;
    animation: ${scrolling} 30s linear infinite;

    @media (min-width: 768px){
      animation: ${scrolling} 40s linear infinite;

    }

  }

  .marquee__item {
    color: var(--clear);
    font-size: 2.5rem;
    font-weight: 400;
    flex-shrink: 0; 
    white-space: nowrap; 
    padding-right: 100px;
    text-shadow: 
    -2.5px -2.5px 0 rgba(25, 33, 38, 0.5),  
     2.5px -2.5px 0 rgba(25, 33, 38, 0.5),
    -2.5px  2.5px 0 rgba(25, 33, 38, 0.5),
     2.5px  2.5px 0 rgba(25, 33, 38, 0.5); /* Sombra que actúa como borde */
  @media (min-width: 768px){
      font-size: 2.5rem;

    }
  }
  
  
`;
