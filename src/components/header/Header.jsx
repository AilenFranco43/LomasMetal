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

    Image{
        z-index: 1000;
    }


`;

const LogoContainer = styled.div`
    z-index: 1000;
`;

const ContainerNav = styled.div`

background-color: var(--secondary);
  position: relative;
  height: 100%;
  right: -10px;
  width: 100px;
  background-size: cover;
  /* clip-path: polygon(45% 0, 100% 0, 100% 100%, 0 100%); */
  display: flex;
  justify-content: end;

  @media (min-width: 768px) {
    width: 450px;
    clip-path: polygon(22% 0, 100% 0, 100% 100%, 0 100%);
  }






`