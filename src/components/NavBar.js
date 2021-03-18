import React from 'react'
import { CartWidget } from './CartWidget.js';

export const NavBar = () => {
  return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h3 class="navbar-brand">DP Componentes</h3>
        <a class="nav-item nav-link" href="">Motherboards</a>
        <a class="nav-item nav-link" href="">Procesadores</a>
        <a class="nav-item nav-link" href="">RAMs</a>
        <a class="nav-item nav-link" href="">SSDs</a>
        <i class="collapse navbar-collapse justify-content-end"><CartWidget /></i>
  </nav>
  )
};