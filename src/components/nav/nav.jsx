import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? "navigation__link--active" : 'navigation__link')}>Все котики</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={({isActive}) => (isActive ? "navigation__link--active" : 'navigation__link')}>Любимые котики</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
