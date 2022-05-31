import React from "react";
import { StyledNav, StyledNavList, StyledNavLink } from "./styles";

function Nav() {
  return (
    <StyledNav>
      <StyledNavList>
        <li>
          <StyledNavLink href="/">Все котики</StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/favorites">Любимые котики</StyledNavLink>
        </li>
      </StyledNavList>
    </StyledNav>
  );
}

export default Nav;
