"use client"
import React from "react";
import styled from "styled-components";

function BurgerBtn(props) {
  return (
    <Burguer>
      <div
        onClick={props.handleClick}
        className={`icon nav-icon-4 ${props.clicked ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  );
}

export default BurgerBtn;

const Burguer = styled.div`

  .nav-icon-4 {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    z-index: 2000;


  }
  .nav-icon-4 span {
    background-color: var(--clear);
    position: absolute;
    border-radius: 2px;
    height: 2px;
    user-select: none;
  }
  .nav-icon-4 span:nth-child(1) {
    width: 100%;
    display: block;
    top: 0px;
    left: 0px;
  }
  .nav-icon-4 span:nth-child(2) {
    width: 100%;
    display: block;
    top: 14px;
    left: 0px;
  }
  .nav-icon-4 span:nth-child(3) {
    width: 100%;
    display: block;
    bottom: 0px;
    left: 0px;
  }
  .nav-icon-4:not(.open):hover span:nth-child(1) {
    width: 100%;
    height: 2px;
    display: block;
    top: -2px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-4:not(.open):hover span:nth-child(2) {
    width: 100%;
    height: 2px;
    display: block;
    top: 14px;
    left: 0px;
    transition: 0.4s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-4:not(.open):hover span:nth-child(3) {
    width: 100%;
    height: 2px;
    display: block;
    bottom: -2px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-4.open span:nth-child(1) {
    left: 0px;
    top: 13px;
    width: 40px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(45deg);
    transition-delay: 150ms;
  }
  .nav-icon-4.open span:nth-child(2) {
    transform: scale(0);
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);

  }
  .nav-icon-4.open span:nth-child(3) {
    left: 0px;
    bottom: 14px;
    width: 40px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(-45deg);
    transition-delay: 150ms;
  }
`;