import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNav, StyledNavList } from "./styles";

function Nav() {
  return (
    <StyledNav>
      <StyledNavList>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? "nav-link--active" : 'nav-link')}>Все котики</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={({isActive}) => (isActive ? "nav-link--active" : 'nav-link')}>Любимые котики</NavLink>
        </li>
      </StyledNavList>
    </StyledNav>
  );
}

export default Nav;
