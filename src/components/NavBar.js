import React from "react";
import CartWidget from "./CartWidget";
import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to='/' className="navbar-brand" >
        DP Componentes
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact to='/' activeClassName="active" className="nav-item nav-link" >
            Home
          </NavLink>
          <NavLink to={`/category/motherboards`} activeClassName="active" className="nav-item nav-link" >
            Motherboards
          </NavLink>
          <NavLink to={`/category/procesadores`} activeClassName="active" className="nav-item nav-link" >
            Procesadores
          </NavLink>
          <NavLink to={`/category/rams`} activeClassName="active" className="nav-item nav-link" >
            RAMs
          </NavLink>
          <NavLink to={`/category/ssds`} activeClassName="active" className="nav-item nav-link" >
            SSDs
          </NavLink>
        </div>
      </div>
      <CartWidget />

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};