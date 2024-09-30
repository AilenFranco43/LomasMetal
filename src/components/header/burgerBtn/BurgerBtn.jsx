"use client";
import React from "react";
import styles from "./BurgerBtn.module.css"; // Importa el CSS Module

function BurgerBtn(props) {
  return (
    <div
      onClick={props.handleClick}
      className={`${styles.burger} ${props.clicked ? styles.open : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurgerBtn;
