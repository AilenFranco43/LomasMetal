"use client"
import React from 'react';
import NavBar from './NavBar';
import styled from "styled-components";
import Image from 'next/image';


const Header = () => {
  return (
    <HeaderContainer>
        <LogoContainer>
           <Image 
        src="/img/logo/logoLomasMetal.png" 
        alt="Logo de Lomas Metal"
        width={65}
        height={65}
      />  
        </LogoContainer>
      

        <ContainerNav>

        <NavBar/>

        </ContainerNav>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
    background-color: var(--main);
    background-repeat: no-repeat;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem 0 .5rem;
   

`;

const LogoContainer = styled.div`
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ContainerNav = styled.div`

background-color: var(--secondary);
  position: relative;
  height: 100%;
  right: -10px;
  width: 70px;
  background-size: cover;

  display: flex;
  justify-content: end;
  z-index: 400; 
  clip-path: none;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -30px; 
    width: 30px;
    height: 100%;
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%);

    background-color: var(--secondary);
 
    z-index: -1;
  }


  @media (min-width: 768px) {
    width: 410px;
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
    z-index: auto;
  }






`